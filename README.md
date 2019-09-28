# webpack nodev12 repro repo

Running `npm run buildFlags` will succeed.

Running `npm run build` will not, as we need to have `process.execArgv` with the ` --experimental-modules` flag polyfilled.

