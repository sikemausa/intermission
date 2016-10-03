    var _ = require("lodash");

    let sort = function (item) {
      let result = {
        hot: [],
        warm: []
      };

    function checkTemp (item) {
      return item > 19;
    }

    _.forEach(item, function(city, cityName){
      if (_.every(city, checkTemp)) result.hot.push(cityName);
      else if (_.some(city, checkTemp)) result.warm.push(cityName);
    });

    return result;

  };

    module.exports = sort;
