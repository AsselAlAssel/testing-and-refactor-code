export function main(data) {
  var data1 = [];
  // iterate through the data
  for (var i = 0; i < data.length; i++) {
    var match = false; // initialize the flag
    for (var j = 0; j < data1.length; j++) {
      if (data1[j].toLowerCase() == data[i].toLowerCase()) {
        match = true;
        break;
      }
    }
    if (match == false) {
      data1[data1.length] = data[i];
      var code = data[i].charCodeAt(0);
      if (code >= 97 && code <= 122) {
        code = code - 32;
      }
      data1[data1.length - 1] =
        String.fromCharCode(code) + data[i].substr(1, data[i].length - 1);
      var length = data1.length;
      if (length > 1) {
        for (var k = length - 1; k >= 1; k--) {
          const x = data1[k];
          if (data1[k - 1] > x) {
            let c = data1[k - 1]; // remember temporary value
            data1[k - 1] = x;
            data1[k] = c;
          }
        }
      }
      var result = Array.prototype.filter.apply(data1, [
        (value) => value.search(/ /i) != -1,
      ]); // important
      var num = 1;
      for (var line of result) {
        result[num - 1] = (num <= 9 ? "0" + num : num) + ' "' + line + '"';
        num++; // increase counter
      }
    }
  }

  return result;
}
