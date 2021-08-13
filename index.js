// This is a custom reporter which hides console.log output on successful tests
// and displays it for failed ones.
// https://github.com/facebook/jest/issues/4156
const { DefaultReporter } = require('@jest/reporters')

class Reporter extends DefaultReporter
{
	constructor()
	{
		super(...arguments)
	}

	printTestFileHeader(_testPath, config, result)
	{
		const console = result.console

		if(result.numFailingTests === 0 && !result.testExecError)
		{
			result.console = null
		}

		super.printTestFileHeader(...arguments)

		result.console = console
	}
}

module.exports = Reporter
