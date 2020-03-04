var local = (function() {
    var setData = function(key, obj) {
      var values = JSON.stringify(obj);
      localStorage.setItem(key, values);
    };
  
    var getData = function(key) {
      if (localStorage.getItem(key) != null) {
        return JSON.parse(localStorage.getItem(key));
      }
    };
  
    var updateData = function(key, newData) {
      if (localStorage.getItem(key) != null) {
        var oldData = JSON.parse(localStorage.getItem(key));
        for (keyObj in newData) {
          oldData[keyObj] = newData[keyObj];
        }
        var values = JSON.stringify(oldData);
        localStorage.setItem(key, values);
      } else {
        return false;
      }
    };
  
    return { set: setData, get: getData, update: updateData };
  })();
  