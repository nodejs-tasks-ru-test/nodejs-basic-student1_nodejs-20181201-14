const run_tests = require('./run_tests');

const moduleName = process.argv[2];
const taskName = process.argv[3];

run_tests(moduleName, taskName, {
  reporter: 'spec',
  useColors: true,
});