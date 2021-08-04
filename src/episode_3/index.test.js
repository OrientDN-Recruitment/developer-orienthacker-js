const { map, compact, get } = require('lodash')
const { join } = require('path')
const fs = require('fs-extra')
const { Program } = require('.')

describe('MapFetcher', () => {
  const fetchAddress = jest.spyOn(Program.prototype, 'fetchAddress')
  const run = jest.spyOn(Program.prototype, 'run')

  const program = new Program()
  const inputPath = join(__dirname, '../../storage/addresses.json')
  const outputPath = join(__dirname, '../../storage/addresses_out.csv')
  const expectedSuburb = 'Brooklyn'
  const testParams = [
    ,,
    '-i',
    inputPath,
    '-o',
    outputPath
  ]

  it('should raise errors if no input or output file paths provided', async () => {
    await expect(program.run([])).toReject()
    run.mockClear()
  })

  it('should raise errors if input file doesn\'t exist', async () => {
    await expect(program.run([,,'-i', '/test/path/dev'])).toReject()
    run.mockClear()
  })

  it('should fetch addresses from provided path', async () => {
    await expect(program.run(testParams)).toResolve()

    // Pick 2 random addresses
    expect(fetchAddress.mock.calls).toContainEqual(
      expect.arrayContaining([
        '9925 Studebaker Rd.Panorama City, CA'
      ])
    )
    expect(fetchAddress.mock.calls).toContainEqual(
      expect.arrayContaining([
        '8 W. Country Club StreetFolsom, CA'
      ])
    )
  })

  it('should fetch address for suburb and city', async () => {
    const fetchAddressResults = map(fetchAddress.mock.results, 'value')

    await Promise.allSettled(fetchAddressResults)
      .then(resolves => {
        const values = compact(map(resolves, 'value'))

        expect(values.length).toBeGreaterThan(0)
        expect(values[0]).toMatchObject(
          expect.objectContaining({
            suburb: expect.any(String),
            city: expect.any(String),
          })
        )
      })
  })

  it('should save fetched address details into desired location', async () => {
    expect(await fs.pathExists(outputPath)).toBe(true)
    expect(await fs.readFile(outputPath, 'utf8')).toInclude(expectedSuburb)
  })

  it('should resolves the right suburb - city from addresses', async () => {
    expect(run).toBeCalledTimes(1)
    expect(get(run.mock.results, '0.value')).resolves.toMatchObject(
      expect.objectContaining({
        suburb: expectedSuburb
      })
    )
  })

  afterAll(() => {
    fetchAddress.mockClear()
  })
})
