const { Program } = require('.')

// Implementation go to index.js (Program)
// Nothing to do here
function main (args) {
  const program = new Program()

  program.run(args)
    .catch(err => {
      console.error(err.message || err)
    })
}

main(process.argv)


