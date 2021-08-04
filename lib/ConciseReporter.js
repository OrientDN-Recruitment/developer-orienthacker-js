const { DefaultReporter } = require('@jest/reporters')
const { bold, dim, red, greenBright } = require('chalk')
const { dirname, basename } = require('path')
const jestUtils = require('jest-util')
const { groupBy, map, each } = require('lodash')

class ConciseReporter extends DefaultReporter {
  onRunStart() {
    if (jestUtils.isInteractive) {
      jestUtils.clearLine(process.stderr)
    }
  }

	onTestResult(test, result) {
    const path = result.testFilePath.replace(test.context.config.rootDir, '').replace('.test.', '.')
    let status

    if (result.skipped) {
      status = bold.bgGrey` SKIP `
    } else if (Boolean(result.failureMessage)) {
      status = bold.bgRed` FAIL `
    } else {
      status = bold.bgGreen` PASS `
    }

    const ancestorSeparator = ' › '
    const testCases = groupBy(map(result.testResults, ({ ancestorTitles, title, status }) => {
      return {
        ancestors: ancestorTitles.join(ancestorSeparator),
        status,
        title
      }
    }), 'ancestors')

    const basePath = dirname(path).replace(/^\//, '')
    const fileName = basename(path)
    this.log(`${status} ${dim(basePath + '/')}${bold(fileName)}`)
    each(testCases, (cases, ancestors) => {
      this.log(bold`  ${ancestors}`)
      each(cases, ({ status, title }) => {
        this.log(status === 'failed'
          ? `    ${red('✕')} ${title}`
          : greenBright`    √ ${title}`
        )
      })
    })

    if (result.testExecError) {
      const error = result.testExecError

      this.log(red(`  ${error.stack ? error.stack : error.message || error}`))
    }
  }
}

module.exports = ConciseReporter
