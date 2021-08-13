## Why

Most other testing frameworks I've used will hide the stdout from successful tests and only print those from failures. 
It makes the test output alot more readable. This gives jest the same behaviour. Checkout this [issue for more context](https://github.com/facebook/jest/issues/4156).


## Usage:

```bash
npm i --dev jest-log-failure-reporter
```

```json
...
	// Use this configuration option to add custom reporters to Jest
	reporters: [
	   'jest-log-failure-reporter',
	],
...
```
