import textGroup from "./item.js";

const accordionArea = document.getElementById('accordion-area');


// 大項目を取得するfor文の中で中項目のfor文でネスト

for (let i = 0; i < textGroup.length; i++) {
    const largeItem = document.createElement("div")
    largeItem.id = 'largeItem' + i;
    largeItem.textContent = textGroup[i][0][0][0];
    accordionArea.appendChild(largeItem);

    for (let j = 0; j < textGroup[i].length; j++) {
        const middleItem = document.createElement("div")
        middleItem.id = 'middleItem' + i;
        middleItem.textContent = textGroup[i][j][0][1];
        largeItem.appendChild(middleItem);

        

    };
}

//   function openMiddleItem() {

//   };


