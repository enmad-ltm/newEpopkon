let pageName = window.location.pathname.split('/').slice(-1)[0];
let navHtmls = ``;
let footerHtml = `
<div class="container-fluid">
    <div class="row text-muted">
        <div class="col-6 text-start">
            <p class="mb-0"><a class="text-muted" href="" target="_blank"><strong>ePOPKON</strong></a> - Enjoy your coupon like a popcorn&nbsp;&copy;SYSCUSS</p>
        </div>
        <div class="col-6 text-end">
            <ul class="list-inline">
                <li class="list-inline-item">
                    <a class="text-muted" href="" target="_blank">문자발송</a>
                </li>
                <li class="list-inline-item">
                    <a class="text-muted" href="" target="_blank">모바일설문</a>
                </li>
                <li class="list-inline-item">
                    <a class="text-muted" href="" target="_blank">문자수신</a>
                </li>
                <li class="list-inline-item">
                    <a class="text-muted" href="" target="_blank">제세공과금</a>
                </li>
            </ul>
        </div>
    </div>
</div>
`;

switch(pageName){
// 최고관리자
case "main.html":
navHtmls = `
<a href="./main.html">
<img class="logo-top d-ani" src="../img/logo-origin.png" alt="">
</a>
<div class="navbar-collapse collapse">
<div class="navbar__menu">
    <ul class="navbar__menu__ul">
        <li class="navbar__menu__ul__li">
            <a href="" class="navbar__menu__ul__li__a dropdown-toggle">주문관리</a>
            <div class="dropdown-menu">
                <div class="dropdown-menu__canvas">
                    <a href="./order_general.html" class="dropdown-menu__canvas__item">일반쿠폰주문</a>
                    <a href="./order_ssg.html" class="dropdown-menu__canvas__item">신세계주문</a>
                    <a href="./order_send-coupon.html" class="dropdown-menu__canvas__item">발송쿠폰주문</a>
                    <a href="./order_custom.html" class="dropdown-menu__canvas__item">맞춤형쿠폰주문</a>
                    <a href="./order_real.html" class="dropdown-menu__canvas__item">실물상품주문</a>
                    <!--<a href="./send_management.html" class="dropdown-menu__canvas__item">발송관리</a>-->
                    <!--<a href="./order_estimate.html" class="dropdown-menu__canvas__item">견적서발행</a>-->
                </div>
            </div>
        </li>
        <li class="navbar__menu__ul__li">
            <a href="" class="navbar__menu__ul__li__a dropdown-toggle">발송관리</a>
            <div class="dropdown-menu">
                <div class="dropdown-menu__canvas">
                    <a href="./send_management.html" class="dropdown-menu__canvas__item">일반발송</a>
                    <a href="./ssg_management.html" class="dropdown-menu__canvas__item">신세계발송</a>
                    <a href="./send-coupon_management.html" class="dropdown-menu__canvas__item">배송쿠폰발송</a>
                    <a href="./real_management.html" class="dropdown-menu__canvas__item">실물상품발송</a>
                </div>
            </div>
        </li>
        <li class="navbar__menu__ul__li">
            <a href="" class="navbar__menu__ul__li__a dropdown-toggle">상품관리</a>
            <div class="dropdown-menu">
                <div class="dropdown-menu__canvas">
                    <a href="./goods_view.html" class="dropdown-menu__canvas__item">상품조회</a>
                    <a href="./register_linkage.html" class="dropdown-menu__canvas__item">연동상품등록</a>
                    <a href="./register_group.html" class="dropdown-menu__canvas__item">상품분류등록</a>
                    <a href="./ad_management.html" class="dropdown-menu__canvas__item">꼬리광고관리</a>
                    <a href="./c-coupon_management.html" class="dropdown-menu__canvas__item">초이스쿠폰관리</a>
                </div>
            </div>
        </li>
        <li class="navbar__menu__ul__li">
            <a href="" class="navbar__menu__ul__li__a dropdown-toggle">고객관리</a>
            <div class="dropdown-menu">
                <div class="dropdown-menu__canvas">
                    <a href="./customer_mng.html" class="dropdown-menu__canvas__item">고객사관리</a>
                    <a href="./partner_mng.html" class="dropdown-menu__canvas__item">협력사관리</a>
                    <a href="./decide_valuation.html" class="dropdown-menu__canvas__item">견적가격결정</a>
                    <a href="./account_mng.html" class="dropdown-menu__canvas__item">계정관리</a>
                </div>
            </div>
        </li>
        <li class="navbar__menu__ul__li">
            <a href="" class="navbar__menu__ul__li__a dropdown-toggle">정산관리</a>
            <div class="dropdown-menu">
                <div class="dropdown-menu__canvas">
                    <a href="./sales_mng.html" class="dropdown-menu__canvas__item">서비스판매관리</a>
                    <a href="./sales_view.html" class="dropdown-menu__canvas__item">매출조회</a>
                    <a href="./view_dividendrate.html" class="dropdown-menu__canvas__item">수익률조회</a>
                    <a href="./partner_calc.html" class="dropdown-menu__canvas__item">협력사정산</a>
                    <a href="./cust_calc.html" class="dropdown-menu__canvas__item">고객사정산</a>
                </div>
            </div>
        </li>
        <li class="navbar__menu__ul__li">
            <a href="" class="navbar__menu__ul__li__a dropdown-toggle">고객센터</a>
            <div class="dropdown-menu">
                <div class="dropdown-menu__canvas">
                    <a href="./inquiry.html" class="dropdown-menu__canvas__item">1:1문의</a>
                    <a href="./notice_register.html" class="dropdown-menu__canvas__item">공지사항등록</a>
                    <a href="./admin_answer.html" class="dropdown-menu__canvas__item">관리자답변</a>
                    <a href="./customer_service.html" class="dropdown-menu__canvas__item">CS처리</a>
                </div>
            </div>
        </li>
        <li class="navbar__menu__ul__li">
            <a href="" class="navbar__menu__ul__li__a dropdown-toggle">기타</a>
            <div class="dropdown-menu">
                <div class="dropdown-menu__canvas">
                    <a href="./ims_plan.html" class="dropdown-menu__canvas__item">IMS추진일정</a>
                    <a href="./cust_consul_hist.html" class="dropdown-menu__canvas__item">고객상담내역</a>
                </div>
            </div>
        </li>
    </ul>
</div>
<ul class="navbar-nav navbar-align">
    <li class="nav-item dropdown">
        <a class="nav-icon dropdown-toggle d-inline-block d-sm-none" href="#" data-bs-toggle="dropdown">
            <i class="align-middle" data-feather="settings"></i>
        </a>
        <a class="nav-link dropdown-toggle d-none d-sm-inline-block" href="#" data-bs-toggle="dropdown">
            <span>기업관리자</span><span class="text-dark"> 님 반갑습니다.</span>
        </a>
        <div class="dropdown-menu dropdown-menu-end">
            <a class="dropdown-item" href="javascript:void(0)"><i class="align-middle me-1" data-feather="user"></i> 마이페이지</a>
            <a class="dropdown-item" href="javascript:void(0)"><i class="align-middle me-1" data-feather="info"></i> 발송 잔액</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="../index.html"><i class="align-middle me-1" data-feather="log-out"></i> 로그 아웃</a>
        </div>
    </li>
</ul>
</div>
`;

break;

// 기업관리자
case "main_enterprise.html":

navHtmls = `
<a href="./main.html">
<img class="logo-top d-ani" src="../img/logo-origin.png" alt="">
</a>
<div class="navbar-collapse collapse">
<div class="navbar__menu">
    <ul class="navbar__menu__ul">
        <li class="navbar__menu__ul__li">
            <a href="" class="navbar__menu__ul__li__a dropdown-toggle">주문관리</a>
            <div class="dropdown-menu">
                <div class="dropdown-menu__canvas">
                    <a href="./order_general.html" class="dropdown-menu__canvas__item">일반쿠폰주문</a>
                    <a href="./order_ssg.html" class="dropdown-menu__canvas__item">신세계주문</a>
                    <a href="" class="dropdown-menu__canvas__item">배송쿠폰주문</a>
                    <a href="./order_custom.html" class="dropdown-menu__canvas__item">맞춤형쿠폰주문</a>
                    <a href="./order_real.html" class="dropdown-menu__canvas__item">실물상품주문</a>
                    <!--<a href="./order_estimate.html" class="dropdown-menu__canvas__item">견적서발행</a>-->
                </div>
            </div>
        </li>
        <li class="navbar__menu__ul__li">
            <a href="" class="navbar__menu__ul__li__a dropdown-toggle">발송관리</a>
            <div class="dropdown-menu">
                <div class="dropdown-menu__canvas">
                    <a href="./send_management.html" class="dropdown-menu__canvas__item">일반발송</a>
                    <a href="./send_management.html" class="dropdown-menu__canvas__item">신세계발송</a>
                    <a href="./send_management.html" class="dropdown-menu__canvas__item">배송쿠폰발송</a>
                    <a href="./send_management.html" class="dropdown-menu__canvas__item">실물상품발송</a>
                </div>
            </div>
        </li>
        <li class="navbar__menu__ul__li">
            <a href="" class="navbar__menu__ul__li__a dropdown-toggle">상품관리</a>
            <div class="dropdown-menu">
                <div class="dropdown-menu__canvas">
                    <a href="./goods_view.html" class="dropdown-menu__canvas__item">상품조회</a>
                    <a href="./register_linkage.html" class="dropdown-menu__canvas__item">연동상품등록</a>
                    <a href="./register_group.html" class="dropdown-menu__canvas__item">상품분류등록</a>
                    <a href="./ad_management.html" class="dropdown-menu__canvas__item">꼬리광고관리</a>
                    <a href="./c-coupon_management.html" class="dropdown-menu__canvas__item">초이스쿠폰관리</a>
                </div>
            </div>
        </li>
        <li class="navbar__menu__ul__li">
            <a href="" class="navbar__menu__ul__li__a dropdown-toggle">고객관리</a>
            <div class="dropdown-menu">
                <div class="dropdown-menu__canvas">
                    <a href="./customer_mng.html" class="dropdown-menu__canvas__item">고객사관리</a>
                    <a href="./partner_mng.html" class="dropdown-menu__canvas__item">협력사관리</a>
                    <a href="./decide_valuation.html" class="dropdown-menu__canvas__item">견적가격결정</a>
                    <a href="./account_mng.html" class="dropdown-menu__canvas__item">견적가격결정</a>
                </div>
            </div>
        </li>
        <li class="navbar__menu__ul__li">
            <a href="" class="navbar__menu__ul__li__a dropdown-toggle">정산관리</a>
            <div class="dropdown-menu">
                <div class="dropdown-menu__canvas">
                    <a href="cust_calc.html" class="dropdown-menu__canvas__item">고객사정산</a>
                </div>
            </div>
        </li>
        <li class="navbar__menu__ul__li">
            <a href="" class="navbar__menu__ul__li__a dropdown-toggle">고객센터</a>
            <div class="dropdown-menu">
                <div class="dropdown-menu__canvas">
                    <a href="inquiry.html" class="dropdown-menu__canvas__item">1:1문의</a>
                </div>
            </div>
        </li>
    </ul>
</div>
<ul class="navbar-nav navbar-align">
    <li class="nav-item dropdown">
        <a class="nav-icon dropdown-toggle d-inline-block d-sm-none" href="#" data-bs-toggle="dropdown">
            <i class="align-middle" data-feather="settings"></i>
        </a>
        <a class="nav-link dropdown-toggle d-none d-sm-inline-block" href="#" data-bs-toggle="dropdown">
            <span>기업관리자</span><span class="text-dark"> 님 반갑습니다.</span>
        </a>
        <div class="dropdown-menu dropdown-menu-end">
            <a class="dropdown-item" href="javascript:void(0)"><i class="align-middle me-1" data-feather="user"></i> 마이페이지</a>
            <a class="dropdown-item" href="javascript:void(0)"><i class="align-middle me-1" data-feather="info"></i> 발송 잔액</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="../index.html"><i class="align-middle me-1" data-feather="log-out"></i> 로그 아웃</a>
        </div>
    </li>
</ul>
</div>
`;


break;


// 운영관리자
case "main_operate.html":
    navHtmls = `
<a class="sidebar-toggle js-sidebar-toggle">
<i class="hamburger align-self-center"></i>
</a>
<a href="main.html">
<img class="logo-top d-ani d-none" src="../img/logo-origin.png" alt="">
</a>
<div class="navbar-collapse collapse">
<div class="navbar__menu">
    <ul class="navbar__menu__ul">
        <li class="navbar__menu__ul__li">
            <a href="" class="navbar__menu__ul__li__a dropdown-toggle">주문관리</a>
            <div class="dropdown-menu">
                <div class="dropdown-menu__canvas">
                    <a href="./order_general.html" class="dropdown-menu__canvas__item">일반쿠폰주문</a>
                    <a href="./order_ssg.html" class="dropdown-menu__canvas__item">신세계주문</a>
                    <a href="./order_custom.html" class="dropdown-menu__canvas__item">맞춤형쿠폰주문</a>
                    <a href="./send_management.html" class="dropdown-menu__canvas__item">발송관리</a>
                    <a href="./order_estimate.html" class="dropdown-menu__canvas__item">견적서발행</a>
                </div>
            </div>
        </li>
        <li class="navbar__menu__ul__li">
            <a href="" class="navbar__menu__ul__li__a dropdown-toggle">상품관리</a>
            <div class="dropdown-menu">
                <div class="dropdown-menu__canvas">
                    <a href="./goods_view.html" class="dropdown-menu__canvas__item">상품조회</a>
                </div>
            </div>
        </li>
        <li class="navbar__menu__ul__li">
            <a href="" class="navbar__menu__ul__li__a dropdown-toggle">고객관리</a>
            <div class="dropdown-menu">
                <div class="dropdown-menu__canvas">
                    <a href="./customer_mng.html" class="dropdown-menu__canvas__item">담당자등록</a>
                    <a href="./customer_mng.html" class="dropdown-menu__canvas__item">고객사관리</a>
                </div>
            </div>
        </li>
        <li class="navbar__menu__ul__li">
            <a href="" class="navbar__menu__ul__li__a dropdown-toggle">정산관리</a>
            <div class="dropdown-menu">
                <div class="dropdown-menu__canvas">
                    <a href="./sales_mng.html" class="dropdown-menu__canvas__item">서비스판매관리</a>
                    <a href="./sales_view.html" class="dropdown-menu__canvas__item">매출조회</a>
                    <a href="./view_dividendrate.html" class="dropdown-menu__canvas__item">수익률조회</a>
                    <a href="./partner_calc.html" class="dropdown-menu__canvas__item">협력사정산</a>
                    <a href="./cust_calc.html" class="dropdown-menu__canvas__item">고객사정산</a>
                </div>
            </div>
        </li>
        <li class="navbar__menu__ul__li">
            <a href="" class="navbar__menu__ul__li__a dropdown-toggle">고객센터</a>
            <div class="dropdown-menu">
                <div class="dropdown-menu__canvas">
                    <a href="./inquiry.html" class="dropdown-menu__canvas__item">1:1문의</a>
                </div>
            </div>
        </li>
        <li class="navbar__menu__ul__li">
            <a href="" class="navbar__menu__ul__li__a dropdown-toggle">기타</a>
            <div class="dropdown-menu">
                <div class="dropdown-menu__canvas">
                    <a href="./ims_plan.html" class="dropdown-menu__canvas__item">IMS추진일정</a>
                    <a href="./cust_consul_hist.html" class="dropdown-menu__canvas__item">고객상담내역</a>
                </div>
            </div>
        </li>
    </ul>
</div>
<ul class="navbar-nav navbar-align">
    <li class="nav-item dropdown">
        <a class="nav-icon dropdown-toggle d-inline-block d-sm-none" href="#" data-bs-toggle="dropdown">
            <i class="align-middle" data-feather="settings"></i>
        </a>
        <a class="nav-link dropdown-toggle d-none d-sm-inline-block" href="#" data-bs-toggle="dropdown">
            <span>운영관리자</span><span class="text-dark"> 님 반갑습니다.</span>
        </a>
        <div class="dropdown-menu dropdown-menu-end">
            <a class="dropdown-item" href="javascript:void(0)"><i class="align-middle me-1" data-feather="user"></i> 마이페이지</a>
            <a class="dropdown-item" href="javascript:void(0)"><i class="align-middle me-1" data-feather="info"></i> 발송 잔액</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="../index.html"><i class="align-middle me-1" data-feather="log-out"></i> 로그 아웃</a>
        </div>
    </li>
</ul>
</div>
`;
break;
}

document.querySelector('#navBar').insertAdjacentHTML('afterbegin', navHtmls);
document.querySelector('.footer').insertAdjacentHTML('afterbegin', footerHtml);