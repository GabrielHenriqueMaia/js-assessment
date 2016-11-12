exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item);
  },

  sum: function(arr) {
    var sum = 0;
    arr.forEach(function (item) {
      sum += item;
    });
    return sum;
  },

  remove: function(arr, item) {

    for (var i = 0; i <= arr.length; i++){
      if (arr[i] == item) {
        if (arr[i] == arr[i + 1]){
          arr.slice(arr[i], 2);
        }else{
          arr.slice(arr[i], 1);
        }
      }
    }

    // arr.forEach(function (forItem) {
    //   if (item === forItem){
    //     var index = arr.indexOf(item);
    //     if (index > -1) arr.splice(index, 1);
    //   }
    // });
    return arr;
  },
  removeWithoutCopy: function(arr, item) {

  },

  append: function(arr, item) {

  },

  truncate: function(arr) {

  },

  prepend: function(arr, item) {

  },

  curtail: function(arr) {

  },

  concat: function(arr1, arr2) {

  },

  insert: function(arr, item, index) {

  },

  count: function(arr, item) {

  },

  duplicates: function(arr) {

  },

  square: function(arr) {

  },

  findAllOccurrences: function(arr, target) {

  }
};
