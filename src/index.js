"use strict";

import data from "./data";

const capitalizeFirstLetter = (text) => text[0].toUpperCase() + text.slice(1);

const prepareResultToPrinting = (result) => {
  return result.map((element, index) =>
    // (index >=9 ? index : "0" + (index + 1)) + ' "' + element + '"'
    `${index >=9 ? index+1 : "0" + (index + 1)} "${element}"`
  );
};

const hasMoreThanOneWord = (statement) => statement.split(" ").length > 1;

export const main = (data) => {
  if (data.length == 0) return undefined;

  const loweredCaseData = data.map((element) => element.toLowerCase());
  const uniqData = [...new Set(loweredCaseData)];

  const result = uniqData.map((statement) => {
    const correspondingData = data[loweredCaseData.indexOf(statement)];
    if (hasMoreThanOneWord(correspondingData))
      return capitalizeFirstLetter(correspondingData);
  });

  const filteredBoolean = result.filter(Boolean).sort();
  return prepareResultToPrinting(filteredBoolean);
};

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
