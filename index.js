/**
 * Mark all tests after the first failure as skipped.
 *
 * @param {Object} hydro
 * @param {Object} util
 * @api public
 */

module.exports = function(hydro, util) {
  var filter = hydro.get('filter');
  if (!filter) return;
  filter = util.toArray(filter);

  hydro.on('pre:test', function(test) {
    for (var i = 0, len = filter.length; i < len; i++) {
      if (test.title.indexOf(filter[i]) != -1) return;
    }

    test.skip();
  });
};

/**
 * CLI flags.
 */

module.exports.flags = {
  '--filter': 'specify test filter'
};
