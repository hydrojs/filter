var Hydro = require('hydro');

test('filter tests', function(done) {
  var hydro = Hydro();
  var plugin = require('../');

  hydro.set({
    attach: global,
    plugins: [plugin],
    filter: [
      'foo',
      'bar',
    ],
    proxies: {
      'describe': 'addSuite',
      'it': 'addTest',
    },
    tests: [__dirname + '/fixtures']
  });

  hydro.on('post:all', function() {
    var tests = hydro.tests();
    assert(tests[0].status === 'passed');
    assert(tests[1].status === 'passed');
    assert(tests[2].status === 'skipped');
    assert(tests[3].status === 'skipped');
    assert(tests[4].status === 'skipped');
    done();
  });

  hydro.run();
});
