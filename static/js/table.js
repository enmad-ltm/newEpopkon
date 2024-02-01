document.addEventListener('DOMContentLoaded', function() {
    var orderGeneralTableRows = document.querySelectorAll('.order-general table tbody tr');
    var sendManagementTableRows = document.querySelectorAll('.send-management table tbody tr');
    let listDownloadBtn = document.querySelector('.list-download-btn');
    let selectedVal = '';

    orderGeneralTableRows.forEach(function(row) {
        row.addEventListener('click', function(e) {

            if(e.target.classList.contains('print-statement') || e.target.classList.contains('print-report')){
                // 일반쿠폰주문 > 발송완료리포트/거래명세서 컬럼 발행 버튼 클릭 동작
                alertOn('fin-print', 'suc');
            } else {
                // 그 외 table tr 클릭할때 체크박스 토글함
                var checkbox = row.querySelector('td:first-child input');
                checkbox.checked?checkbox.checked=false:checkbox.checked=true;
            }
        });
    });

    sendManagementTableRows.forEach(function(row) {
        row.addEventListener('click', function(e) {

            if(e.target.classList.contains('save-manager')) {
                // 발송관리 > 테이블 운영담당자 컬럼 저장 버튼 클릭 동작
                console.log("선택값: ", selectedVal);
                if (selectedVal) {
                    alertOn('save-manager', 'suc');
                } else {
                    alertOn('save-manager-fail', 'fail');
                }
                
            } else if (e.target.classList.contains('select-manager')) {
                selectedVal = e.target.value;
            } else {
                window.location = './send_management_detail.html';
            }
        });
    });

    if (listDownloadBtn){
        listDownloadBtn.addEventListener('click', function(){
            alertOn('not-fin', 'ready');
        })
    }
});



// 게시판 검색
function serchBtn(el) {



    let searchOption = {};

    let sendStatus = document.querySelector('#sendStatus');
    let customerIp = document.querySelector('#customerIp');
    let snedTitle = document.querySelector('#snedTitle');
    let startDateIp = new Date(document.querySelector('#startDateIp').value);
    let endDateIp = new Date(document.querySelector('#endDateIp').value);

    if(typeof(startDateIp) == "object" && typeof(endDateIp) == "object" && (startDateIp > endDateIp)){
        alert('마감일이 더 앞시간으로 설정됐습니다!');
        document.querySelector('#endDateIp').value = "";
        return false;
    }

    const formatDate = (dateString) => {
        const dateObject = new Date(dateString);
        if (isNaN(dateObject.getTime())) {
            return null;
        }
        return dateObject.toISOString().split('T')[0];
    };
    
    searchOption.sendStatus = sendStatus.value;
    searchOption.customerIp = customerIp.value;
    searchOption.snedTitle = snedTitle.value;
    searchOption.startDateIp = startDateIp?formatDate(startDateIp):startDateIp;
    searchOption.endDateIp = endDateIp?formatDate(endDateIp):endDateIp;
    
    switch (el){

        case 'order_general' :

            console.log("searchOption: ", searchOption);
            
       
        break;
       
    }
       
    return;
    // searchDB();
}