import textGroup from "./item.js";

const accordionArea = document.getElementById('accordion-area');

for (let i = 0; i < textGroup.length ; i++){
    const listItem = document.createElement("div")
    listItem.textContent = textGroup[i][0][0][0];
    accordionArea.appendChild(listItem);
  }

  

// console.log(textGroup[0][0][0][0],textGroup[1][0][0][0],textGroup[2][0][0][0])