    var _ = require("lodash");

    var addSize = function(cities) {
      return _.forEach(
        cities, function(item){
          if(item.population >= 1) item.size = 'big';
          if(item.population < 1 && item.population >= .5) item.size = 'med';
          if(item.population < .5) item.size = 'small';
        }
      );
    };

    module.exports = addSize;
