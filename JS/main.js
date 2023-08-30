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

                // 中項目をクリックで小項目と所要時間を表示
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
                            itemCheckbox.name = "itemCheckbox";
                            itemCheckbox.id = "itemCheckbox" + i + j + k;
                            itemCheckbox.onchange = totalCalc.bind(null, itemCheckbox.id, textGroup[i][j][k][3]);
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




// 合計の所要時間（total）を計算する

let total = 0;


// 合計所要時間を表示。初期値は0
const minTotal = document.getElementById('min-total');
minTotal.textContent = total + '分';



// チェックボックスのイベントハンドラで関数totalCalcをコール
// idにはチェックボックスのid、minには所要時間が渡ってくる

function totalCalc(id, min) {
    const itemCheckbox = document.getElementById(id)
        if (itemCheckbox.checked) {
            total = total + min;
        } else {
            total = total - min;
        }

    // totalの値が更新されたタイミングで合計所要時間の表示も更新
    minTotal.textContent = total + '分';
}
