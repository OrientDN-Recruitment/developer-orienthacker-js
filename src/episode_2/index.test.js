const supertest = require('supertest')
const { get, map, groupBy, find, each, some, concat, includes } = require('lodash')
const kindOf = require('kind-of')
const app = require('.')
const services = require('./services')

describe('Api#shifts', () => {
  const saveShifts = jest.spyOn(services, 'saveShifts')
  const notifyEmployee = jest.spyOn(services, 'notifyEmployee')
  let shifts

  beforeAll(async () => {
    await supertest(app).post("/api/shifts")
      .expect(200)

    shifts = get(saveShifts.mock.calls, '0.0')
  })

  it('should generate enough shifts for 5 days', () => {
    expect(saveShifts).toBeCalledTimes(1)
    expect(kindOf(shifts)).toBe('array')
    expect(shifts).toHaveLength(10)

    // 2 shifts each day
    const dayShifts = groupBy(shifts, 'day')
    expect(Object.keys(dayShifts)).toHaveLength(5)
    each(dayShifts, shiftsPerDay => {
      expect(shiftsPerDay).toHaveLength(2)
    })
  })

  it('should generate shifts with required fields (schema)', () => {
    expect(get(shifts, 'length')).toBeGreaterThan(0)
    each(shifts, shift => {
      const employees = get(shift, 'employees')
      const day = get(shift, 'day')

      expect(kindOf(employees)).toBe('array')
      expect(employees).toHaveLength(2)
      expect(day).toBeGreaterThanOrEqual(1)
      expect(day).toBeLessThanOrEqual(5)
      expect(['day', 'night']).toContain(get(shift, 'shift_type'))
    })
  })

  it('should generate equal shifts for all employees', () => {
    const employeeShiftCounts = {}
    each(shifts, shift => {
      each(get(shift, 'employees'), employeeId => {
        employeeShiftCounts[employeeId] = get(employeeShiftCounts, employeeId, 0) + 1
      })
    })
    expect(Object.keys(employeeShiftCounts)).toHaveLength(5)
    // All employees should have same number of shifts
    expect(some(employeeShiftCounts, (shiftCount, _) => shiftCount !== employeeShiftCounts['A']))
      .toBe(false)
  })

  it('should avoid 2 day streak same shift types for every employees', () => {
    const employeeShiftDays = {}
    const employeeShiftNights = {}
    each(shifts, shift => {
      const shift_type = get(shift, 'shift_type')
      const employees = get(shift, 'employees')
      const day = get(shift, 'day')

      each(employees, employeeId => {
        if (shift_type === 'day') {
          employeeShiftDays[employeeId] = employeeShiftDays[employeeId]
            ? employeeShiftDays[employeeId].concat(day)
            : [day]
        } else {
          employeeShiftNights[employeeId] = employeeShiftNights[employeeId]
            ? employeeShiftNights[employeeId].concat(day)
            : [day]
        }
      })
    })

    expect(Object.keys(employeeShiftDays)).toHaveLength(5)
    expect(Object.keys(employeeShiftNights)).toHaveLength(5)
    expect(some(employeeShiftDays, dayShifts => {
      return some(dayShifts, shiftDay => includes(dayShifts, shiftDay + 1))
    })).toBe(false)
    expect(some(employeeShiftNights, dayShifts => {
      return some(dayShifts, shiftDay => includes(dayShifts, shiftDay + 1))
    })).toBe(false)
  })

  it('should notify employees with their own shifts', () => {
    const employeeShifts = {}
    each(shifts, shift => {
      const employees = get(shift, 'employees')
      each(employees, employeeId => {
        employeeShifts[employeeId] = employeeShifts[employeeId]
          ? employeeShifts[employeeId].concat(shift)
          : [shift]
      })
    })

    expect(Object.keys(employeeShifts)).toHaveLength(5)
    each(employeeShifts, (shifts, employeeId) => {
      expect(get(shifts, 'length')).toBeGreaterThan(0)
      each(shifts, shift => {
        expect(true).toEqual(some(notifyEmployee.mock.calls, args => {
          return get(args, 0) === employeeId &&
            get(args, 1) === shift
        }))
      })
    })
  })

  afterAll(() => {
    saveShifts.mockClear()
    notifyEmployee.mockClear()
  })
})
