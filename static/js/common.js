function go2page(pageName){
    let fullPath = pageName+'.html';
    window.location = fullPath;
}

function alertOn(msgCode, cssCode) {

    const innerTarget = document.querySelector('body');
    let alertType = {};

    alertType.elAlert = null;
    alertType.elBtn = null;
    alertType.elMsg = null;
    alertType.txt = '';

    switch(msgCode) {
        case 'fin-print':
            alertType.txt = '발행되었습니다.';
            break;
        case 'save-manager':
            alertType.txt = '저장되었습니다.';
            break;
        case 'save-manager-fail':
            alertType.txt = '변경된 값이 없습니다.';
            break;
        case 'not-fin':
            alertType.txt = '준비중인 기능입니다.';
            break;
    }

    alertType.show = function(){
        alertType.elAlert = document.createElement('div');
        alertType.elBtn = document.createElement('button');
        alertType.elMsg = document.createElement('div');

        alertType.elAlert.className = "alert animate__fadeIn "+cssCode;
        alertType.elBtn.className = "btn-close";
        alertType.elMsg.className = "alert__message";

        if (msgCode == 'not-fin') {
            alertType.elBtn.innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='#000'><path d='M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z'/></svg>";
        } else {
            alertType.elBtn.innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='#fff'><path d='M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z'/></svg>";
        }

        innerTarget.append(alertType.elAlert);
        alertType.elAlert.appendChild(alertType.elBtn);
        alertType.elAlert.appendChild(alertType.elMsg);
        alertType.elMsg.innerHTML = alertType.txt;

        alertType.elBtn.addEventListener('click', function() {
            alertType.off();
            setTimeout(alertType.del, 1000);
        });
    
    }
    alertType.off = function(){
        alertType.elAlert.classList.remove('animate__fadeIn');
        alertType.elAlert.classList.add('animate__fadeOutDown');
    }
    alertType.del = function(){
        alertType.elAlert.remove();
    }

    if(msgCode && cssCode){
        alertType.show();
        setTimeout(alertType.off, 2000);
        setTimeout(alertType.del, 3000);
        return true;
    }
    return false;

}

function maxLengthCheck(el, maxLength){
    let textareaVal = el.value;
    let textareaValLeng = el.value.length;

    if (textareaValLeng > maxLength) {
        alert("입력가능문자수를 초과하였습니다.");
        textareaVal = textareaVal.substring(0, maxLength);
        el.value = textareaVal;
        document.getElementById('printLength').textContent = byteCheck(el);
        return false;
    }
    document.getElementById('printLength').textContent = byteCheck(el);
    document.querySelector('.email__cont').textContent = textareaVal;
    return;
}


function byteCheck(el) {
    var codeByte = 0;
    for (var idx = 0; idx < el.value.length; idx++) {
        var oneChar = escape(el.value.charAt(idx));
        if (oneChar.length == 1) {
            codeByte++;
        } else if (oneChar.indexOf("%u") != -1) {
            codeByte += 2;
        } else if (oneChar.indexOf("%") != -1) {
            codeByte++;
        }
    }
    return codeByte;
}

function dupTxt (el, id) {
    let elVal = el.value;
    let objPath = document.getElementById(id);

    objPath.textContent = elVal;
}

