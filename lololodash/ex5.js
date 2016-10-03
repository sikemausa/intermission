var _ = require("lodash");

   var appendWords = function (words) {
     return _.chain(words).map(function (item) {
       return item + 'CHAINED';
     })
     .map(function (item) {
       return item.toUpperCase();
     })
     .sortBy()
     .value();
   };

   module.exports = appendWords;
