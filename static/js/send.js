const container = document.querySelector('#sendMsgTbl');
const container2 = document.querySelector('#sendEmailTbl');
const previewCard = document.querySelector('#couponPreview');
const previewCard2 = document.querySelector('#emailPreview');

let discApplyRadio = document.querySelectorAll('input[name="discountApply"]');
let discApplyInput = document.querySelector('input[name="discountApplyInput"]');

discApplyRadio.forEach(function(radio) {
    radio.addEventListener("change", function() {
        if (radio.value === "단건") {
            discApplyInput.disabled = !discApplyInput.disabled;
            document.querySelector('input[name="discountApplyInput"]').focus();
        } else {
            discApplyInput.disabled = true;
        }
    });
});

if (container){
    var data = [];
    for (var i = 0; i < 100; i++) {
      data.push(['', '', '', '']);
    }
    const hot = new Handsontable(container, {
        data:data,
        rowHeaders: true,
        autoColumnSize: false,
        height: 280,
        colHeaders: [
            "수신자 번호", "대치문자1","대치문자2","대치문자3"
        ],
        columns:[
            {width: 150, type: 'numeric'},
            {width: 150},
            {width: 150},
            {width: 150}
        ],
        stretchH: 'all',
        width: 'all',
        table: {margin: '0.5rem'},
        
        contextMenu: true,
        pasteMode: 'overwrite',
        licenseKey: 'non-commercial-and-evaluation',

        afterChange: function (changes, source) {
            // afterChange 이벤트 핸들러 추가
            if (source === 'edit') { // 값이 편집되었을 때만 실행
                updateCount();
            }
        }


    });

    function updateCount() {
        const rowCount = hot.countRows(); // 현재 행의 개수 가져오기
        const countElement = document.querySelector('.sendSummary__count__unit');
        
        let filledRowCount = 0;
    
        // 각 행의 첫 번째 열이 비어 있지 않으면 카운트
        for (let i = 0; i < rowCount; i++) {
            const cellValue = hot.getDataAtCell(i, 0);
            if (cellValue !== '') {
                filledRowCount++;
            }
        }
    
        // 카운트 업데이트
        countElement.textContent = filledRowCount;
    }
    
    // 임시 시안 데이터 입력
    let pageName = window.location.pathname;
    if(pageName == '/page/send_management_detail.html'){
        data[0].splice(0,4,'010-xxxx-xxxx','test','test','test');
        data[1].splice(0,4,'010-xxxx-xxxx','test','test','test');
        data[2].splice(0,4,'010-xxxx-xxxx','test','test','test');
        data[3].splice(0,4,'010-xxxx-xxxx','test','test','test');
        data[4].splice(0,4,'010-xxxx-xxxx','test','test','test');
    }
    
    hot.render();
}



if (document.getElementById('sendEmailTbl')){
    var data2 = [];
    for (var i2 = 0; i2 < 100; i2++) {
      data2.push(['', '', '', '']);
    }
    const hot2 = new Handsontable(container2, {
        data:data2,
        rowHeaders: true,
        autoColumnSize: false,
        height: 280,
        colHeaders: [
            "이메일 주소", "대치문자1","대치문자2","대치문자3"
        ],
        columns:[
            {width: 150, type: 'numeric'},
            {width: 150},
            {width: 150},
            {width: 150}
        ],
        stretchH: 'all',
        width: 'all',
        table: {margin: '0.5rem'},
        
        contextMenu: true,
        pasteMode: 'overwrite',
        licenseKey: 'non-commercial-and-evaluation'
    });
    
    hot2.render();
}



function snedFrameSet (el) {
    let sendStat = el.value;
    console.log("sendStat: ",sendStat);

    if(sendStat == "문자") {
        // table set
        container.classList.remove('d-none');
        container2.classList.add('d-none');

        // preview set
        previewCard.classList.remove('d-none');
        previewCard2.classList.add('d-none');

    } else if (sendStat == "이메일") {
        // table set
        container2.classList.remove('d-none');
        container.classList.add('d-none');

        // preview set
        previewCard2.classList.remove('d-none');
        previewCard.classList.add('d-none');

    } else if (sendStat == "알람톡") {
        console.log('알람톡');
    }
    return;
}


function replaceNumberWithComma() {

    function addCommaToNumber(number) {
        return number.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    }

    let totalPriceElements = document.querySelectorAll('.sendSummary__total__unit, .sendSummary__total__unit2, .sendSummary__total__unit3, .sendSummary__total__unit4');

    totalPriceElements.forEach(function(totalPriceElement) {
        let priceReplace = addCommaToNumber(totalPriceElement.textContent);
        totalPriceElement.innerText = priceReplace;
    });
}

document.addEventListener('DOMContentLoaded', function() {
    replaceNumberWithComma();
    updateCount();
});

/*
function popupSearch (el){
    if (el.classList.contains('click-obj')) {
        let inputElement = el.querySelector('input');

        switch (inputElement.name) {
            case "search-goods-new":
                var popup = window.open('../page/popup_search.html', 'goods-searching window', 'width=830px,height=560px,scrollbars=yes,top=100%, left=50, location=no');
                let dataToSend = {
                    message: "test from order_new.html",
                    value: "test value"
                };
                popup.postMessage(dataToSend, '*');
                break;
        }
    }
}

let searchingObj = document.querySelectorAll('.click-obj');
searchingObj.forEach(function(obj) {
    obj.addEventListener("click", function() {
        popupSearch(this);
    });
});
*/

// 상품찾기
let selectedGoodsInfo = Object;
selectedGoodsInfo = {
    brandName : "",
    bramdImg : "",
    goodsName : "",
    goodsImg : "",
    goodsSaleDate : "",
    goodsPrice : "",
    goodsTradePlace : ""
};







function directSend (){
    console.log("directSend: ", selectedGoodsInfo);
}
function requestSend (){
    console.log("requestSend: ", selectedGoodsInfo);
}