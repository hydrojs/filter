/**
 * toString.
 */

var toString = Object.prototype.toString;

/**
 * Check if `arr` is array.
 *
 * @param {Mixed} arr
 * @returns {Boolean}
 * @api private
 */

var isArray = Array.isArray || function(arr) {
  return toString.call(arr) === '[object Array]';
};

/**
 * Mark all tests after the first failure as skipped.
 *
 * @param {Object} hydro
 * @api public
 */

module.exports = function(hydro) {
  var filter = hydro.get('filter');
  if (!filter) return;
  filter = isArray(filter) ? filter : [filter];

  hydro.on('pre:test', function(test) {
    for (var i = 0, len = filter.length; i < len; i++) {
      if (test.title.indexOf(filter[i]) != -1) {
        return;
      }
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
