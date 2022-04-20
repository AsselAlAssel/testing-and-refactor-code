"use strict";

import data from "./data";

// export function main(data) {
//   var data1 = [];
//   // iterate through the data
//   for (var i = 0; i < data.length; i++) {
//     var match = false; // initialize the flag
//     for (var j = 0; j < data1.length; j++) {
//       if (data1[j].toLowerCase() == data[i].toLowerCase()) {
//         match = true;
//         break;
//       }
//     }
//     if (match == false) {
//       data1[data1.length] = data[i];
//       var code = data[i].charCodeAt(0);
//       if (code >= 97 && code <= 122) {
//         code = code - 32;
//       }
//       data1[data1.length - 1] =
//         String.fromCharCode(code) + data[i].substr(1, data[i].length - 1);
//       var length = data1.length;
//       if (length > 1) {
//         for (var k = length - 1; k >= 1; k--) {
//           const x = data1[k];
//           if (data1[k - 1] > x) {
//             let c = data1[k - 1]; // remember temporary value
//             data1[k - 1] = x;
//             data1[k] = c;
//           }
//         }
//       }
//       var result = Array.prototype.filter.apply(data1, [
//         (value) => value.search(/ /i) != -1
//       ]); // important
//       var num = 1;
//       for (var line of result) {
//         result[num - 1] = (num <= 9 ? "0" + num : num) + ' "' + line + '"';
//         num++; // increase counter
//       }
//     }
//   }

//   return result;
// }


const convertFirstLetterToCapital = text => text[0].toUpperCase() + text.slice(1);

const changeTheStyleForOutput = result => {
  const outputResult = result.map((element, index) => (index >= 9 ? index : "0" + (index + 1) + ' "' + element + '"'));
  return outputResult;
}

const swap=(result,index)=>{
  let temp = result[index - 1];
  result[index - 1] = result[index];
  result[index] = temp;
}
const sortResult = result => {
  for (let index = result.length - 1; index >= 1; index--) {
    if (result[index - 1] > result[index]) {
     swap(result,index);
    } else {
      break;
    }
  }
}
export const main = data => {
  let result;
  if (data.length == 0) {
    return result;
  }
  result = [];
  let temp = [];
  data.forEach(statementOfData => {
    
    if (statementOfData.search(/ /i) != -1 && !temp.includes(statementOfData.toLowerCase())) {
      temp.push(statementOfData.toLowerCase());
      result.push(convertFirstLetterToCapital(statementOfData));
    }
    sortResult(result);
  });
  result = changeTheStyleForOutput(result);
  return result;
}

function render(list) {
  var mountPoint = document.createElement("div");
  mountPoint.setAttribute("id", "app");
  document.body.appendChild(mountPoint);
  var fragment = document.createDocumentFragment();
  var ul = document.createElement("ul");
  for (var i = 0; i < list.length; i++) {
    const li = document.createElement("li");
    li.innerText = list[i];
    ul.appendChild(li);
  }
  fragment.appendChild(ul);
  const div = document.getElementById("app");
  div.appendChild(fragment.cloneNode(true));
}

var result = main(data);
render(result);
