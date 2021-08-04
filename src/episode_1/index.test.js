const supertest = require('supertest')
const app = require('.')
const db = require('./db')

describe('Api#staffs', () => {
  const dbSave = jest.spyOn(db, 'save')
  const testStaff = {
    email: 'test@example.com',
    full_name: 'John Wick',
    address: '256 Notting Hill',
    phone_number: '0907007897'
  }

  it('should add staffs into database', async () => {
    await supertest(app).post("/api/staffs")
      .send(testStaff)
      .expect(200)

    expect(dbSave).toBeCalledWith(testStaff)
  })

  it('should require valid email', async () => {
    await supertest(app).post("/api/staffs")
      .send(Object.assign({}, testStaff, {
        email: null
      }))
      .expect(422)

    await supertest(app).post("/api/staffs")
      .send(Object.assign({}, testStaff, {
        email: ''
      }))
      .expect(422)

    await supertest(app).post("/api/staffs")
      .send(Object.assign({}, testStaff, {
        email: 'a@'
      }))
      .expect(422)

    await supertest(app).post("/api/staffs")
      .send(Object.assign({}, testStaff, {
        email: 'a@localhost'
      }))
      .expect(422)
  })

  it('should require valid full_name', async () => {
    await supertest(app).post("/api/staffs")
      .send(Object.assign({}, testStaff, {
        full_name: null
      }))
      .expect(422)

    await supertest(app).post("/api/staffs")
      .send(Object.assign({}, testStaff, {
        full_name: ''
      }))
      .expect(422)

    await supertest(app).post("/api/staffs")
      .send(Object.assign({}, testStaff, {
        full_name: ''.padEnd(500, '')
      }))
      .expect(422)
  })

  it('should require valid address', async () => {
    await supertest(app).post("/api/staffs")
      .send(Object.assign({}, testStaff, {
        address: null
      }))
      .expect(422)

    await supertest(app).post("/api/staffs")
      .send(Object.assign({}, testStaff, {
        address: ''
      }))
      .expect(422)
  })

  it('should require valid phone_number', async () => {
    await supertest(app).post("/api/staffs")
      .send(Object.assign({}, testStaff, {
        phone_number: null
      }))
      .expect(422)

    await supertest(app).post("/api/staffs")
      .send(Object.assign({}, testStaff, {
        phone_number: ''
      }))
      .expect(422)

    await supertest(app).post("/api/staffs")
      .send(Object.assign({}, testStaff, {
        phone_number: '+1906444222'
      }))
      .expect(422)

    await supertest(app).post("/api/staffs")
      .send(Object.assign({}, testStaff, {
        phone_number: '090622233454'
      }))
      .expect(422)

    await supertest(app).post("/api/staffs")
      .send(Object.assign({}, testStaff, {
        phone_number: '090622233'
      }))
      .expect(422)
  })

  afterAll(() => {
    dbSave.mockClear()
  })
})
