var _ = require("lodash");

var filterActive = function(list) {
  return _.filter(list, {'active': true});
};

module.exports = filterActive;
