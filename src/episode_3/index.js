const { Command } = require('commander')

class Program extends Command {
  constructor () {
    super('MapFetcher')
    this.version('0.0.1')
      .option('-i, --input <input>', 'Input file path')
      .option('-o, --output <output>', 'Output file path')
  }

  async run (args) {
    this.parse(args)
    const opts = this.opts()

    // TODO: Process options, get addresses from import file
    // and fetchAdress to find the most common suburb and city

    // Return city, suburb
    // return {
    //   city,
    //   suburb
    // }
  }

  async fetchAddress (address) {
    // TODO: Add Map API fetching here


    // Return these values
    // return {
    //   address,
    //   suburb,
    //   city
    // }
  }
}

exports.Program = Program
