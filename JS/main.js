import textGroup from "./item.js";

const accordionArea = document.getElementById('accordion-area');


// 大項目を取得するfor文の中で中項目のfor文をネスト

for (let i = 0; i < textGroup.length; i++) {
    const largeItem = document.createElement("div");
    largeItem.className = 'large-item';
    largeItem.id = 'large-item' + i;
    largeItem.textContent = textGroup[i][0][0][0];
    accordionArea.appendChild(largeItem);

    // 大項目をクリックで中項目を表示
    largeItem.addEventListener(
        'click',
        function () {
            for (let j = 0; j < textGroup[i].length; j++) {
                const middleItem = document.createElement("div");
                middleItem.className = 'middle-item';
                middleItem.id = 'middle-item' + i + j;
                middleItem.textContent = textGroup[i][j][0][1];
                largeItem.appendChild(middleItem);

                // 中項目をクリックで小項目を表示
                middleItem.addEventListener(
                    'click',
                    function () {
                        for (let k = 0; k < textGroup[i][j].length; k++) {
                            const item = document.createElement("div");
                            item.className = 'item';
                            item.id = 'item' + i + j + k;
                            middleItem.appendChild(item);

                            const itemLabel = document.createElement("label");
                            itemLabel.textContent = textGroup[i][j][k][2] + "　" + textGroup[i][j][k][3] + "分";
                            itemLabel.htmlFor = "itemCheckbox" + i + j + k;
                            item.appendChild(itemLabel);

                            const itemCheckbox = document.createElement("input")
                            itemCheckbox.type = "checkbox";
                            itemCheckbox.name = "itemCheckbox"
                            itemCheckbox.id = "itemCheckbox" + k;

                            // itemCheckbox.onchange = function () {
                            //     mins.push(textGroup[i][j][k][3]);
                            //     console.log('発火')
                            // };

                            itemLabel.appendChild(itemCheckbox);                            
                        };
                    },
                    { once: true }
                );

            };
        },
        { once: true }
    );
};



// 合計の所要時間を表示

// let mins = [];
// const sumMins = mins.reduce(function(sum, min){
//         return sum + min;
//     },0); 



let total = 0;

const minTotal = document.getElementById('min-total');
minTotal.textContent = total + '分';