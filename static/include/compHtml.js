let pageName = window.location.pathname.split('/').slice(-1)[0];

let sideNavHtmls = ``;

// 서브페이지 상단 네비 HTML
let navBarHtmls = `
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
                    <a href="./order_send-coupon.html" class="dropdown-menu__canvas__item">배송쿠폰주문</a>
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
            <span>최고관리자</span><span class="text-dark"> 님 반갑습니다.</span>
        </a>
        <div class="dropdown-menu dropdown-menu-end">
            <a class="dropdown-item" href="javascript:void(0)"><i class="align-middle me-1" data-feather="user"></i> 마이페이지</a>
            <a class="dropdown-item" href="javascript:void(0)"><i class="align-middle me-1" data-feather="settings"></i> 관리자 설정</a>
            <a class="dropdown-item" href="javascript:void(0)"><i class="align-middle me-1" data-feather="info"></i> 발송 잔액</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="../index.html"><i class="align-middle me-1" data-feather="log-out"></i> 로그 아웃</a>
        </div>
    </li>
</ul>
</div>
`;
document.querySelector('#navBar').insertAdjacentHTML('afterbegin', navBarHtmls);
let activeApplyLists = document.querySelectorAll('.navbar__menu__ul__li');

switch(pageName){

    // navBar 대주제별 sideNav HTML

    // 주문관리
    case 'order_general.html':
    case 'order_new.html':
    case 'order_ssg.html':
    case 'order_custom.html':
    case 'order_real.html':
    case 'order_estimate.html':
    case 'order_new_multiselect.html':
    case 'order_send-coupon.html':
        sideNavHtmls = `
<div class="sidebar-content js-simplebar">
    <a class="sidebar-brand" href="./main.html">
        <span class="align-middle logo-fff d-ani"><img src="../img/logo-white.png" alt=""></span>
        <!-- <span class="align-middle logo-fff d-ani d-none-ani"><img src="../img/logo-white.png" alt=""></span> -->
    </a>

    <ul class="sidebar-nav">
        <li class="sidebar-header">
            주문관리
        </li>

        <li class="sidebar-item">
            <a class="sidebar-link" href="./order_general.html">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-bag align-middle me-2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
                <span class="align-middle">일반쿠폰주문</span>
            </a>
        </li>

        <li class="sidebar-item">
            <a class="sidebar-link" href="./order_ssg.html">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-credit-card align-middle me-2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>
                <span class="align-middle">신세계주문</span>
            </a>
        </li>

        <li class="sidebar-item">
            <a class="sidebar-link" href="./order_send-coupon.html">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-truck align-middle me-2"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
                <span class="align-middle">배송쿠폰주문</span>
            </a>
        </li>

        <li class="sidebar-item">
            <a class="sidebar-link" href="./order_custom.html">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sliders align-middle me-2"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg>
                <span class="align-middle">맞춤형쿠폰주문</span>
            </a>
        </li>

        <li class="sidebar-item">
            <a class="sidebar-link" href="./order_real.html">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-cart align-middle me-2"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                <span class="align-middle">실물상품주문</span>
            </a>
        </li>
<!--
        <li class="sidebar-item">
            <a class="sidebar-link" href="./send_management.html">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-truck align-middle me-2"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
                <span class="align-middle">발송관리</span>
            </a>
        </li>
        <li class="sidebar-item">
            <a class="sidebar-link" href="./order_estimate.html">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file-text align-middle me-2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                <span class="align-middle">견적서발행</span>
            </a>
        </li>
-->
    </ul>
</div>
        `;
        activeApplyLists[0].classList.add('active');

        break;

    // 발송관리
    case 'send_management.html':
    case 'send_management_detail.html':
    case 'ssg_management.html':
    case 'send-coupon_management.html':
    case 'real_management.html':
        sideNavHtmls = `
        <div class="sidebar-content js-simplebar">
            <a class="sidebar-brand" href="./main.html">
                <span class="align-middle logo-fff d-ani"><img src="../img/logo-white.png" alt=""></span>
                <!-- <span class="align-middle logo-fff d-ani d-none-ani"><img src="../img/logo-white.png" alt=""></span> -->
            </a>
        
            <ul class="sidebar-nav">
                <li class="sidebar-header">
                    발송관리
                </li>
        
                <li class="sidebar-item">
                    <a class="sidebar-link" href="./send_management.html">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-bag align-middle me-2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
                        <span class="align-middle">일반발송</span>
                        <div class="adminIcon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-settings align-middle"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg></div>
                    </a>
                </li>
        
                <li class="sidebar-item">
                    <a class="sidebar-link" href="./ssg_management.html">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-credit-card align-middle me-2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>
                        <span class="align-middle">신세계발송</span>
                        <div class="adminIcon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-settings align-middle"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg></div>
                    </a>
                </li>
        
                <li class="sidebar-item">
                    <a class="sidebar-link" href="./send-coupon_management.html">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-truck align-middle me-2"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
                        <span class="align-middle">배송쿠폰발송</span>
                        <div class="adminIcon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-settings align-middle"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg></div>
                    </a>
                </li>
                <li class="sidebar-item">
                    <a class="sidebar-link" href="./real_management.html">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-cart align-middle me-2"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                        <span class="align-middle">실물상품발송</span>
                        <div class="adminIcon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-settings align-middle"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg></div>
                    </a>
                </li>
            </ul>
        </div>
        `;
        activeApplyLists[1].classList.add('active');
    break;


    // 상품관리
    case 'goods_view.html':
    case 'register_linkage.html':
    case 'register_group.html':
    case 'ad_management.html':
    case 'c-coupon_management.html':
        sideNavHtmls = `
<div class="sidebar-content js-simplebar">
    <a class="sidebar-brand" href="./main.html">
        <span class="align-middle logo-fff d-ani"><img src="../img/logo-white.png" alt=""></span>
    </a>

    <ul class="sidebar-nav">
        <li class="sidebar-header">상품관리</li>

        <li class="sidebar-item">
            <a class="sidebar-link" href="./goods_view.html">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search align-middle"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                <span class="align-middle">상품조회</span>
            </a>
        </li>

        <li class="sidebar-item">
            <a class="sidebar-link" href="./register_linkage.html">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shuffle align-middle"><polyline points="16 3 21 3 21 8"></polyline><line x1="4" y1="20" x2="21" y2="3"></line><polyline points="21 16 21 21 16 21"></polyline><line x1="15" y1="15" x2="21" y2="21"></line><line x1="4" y1="4" x2="9" y2="9"></line></svg>
                <span class="align-middle">연동상품등록</span>
            </a>
        </li>

        <li class="sidebar-item">
            <a class="sidebar-link" href="./register_group.html">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-filter align-middle"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>
                <span class="align-middle">상품분류등록</span>
            </a>
        </li>

        <li class="sidebar-item">
            <a class="sidebar-link" href="./ad_management.html">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-tag align-middle"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
                <span class="align-middle">꼬리광고관리</span>
            </a>
        </li>
        
        <li class="sidebar-item">
            <a class="sidebar-link" href="./c-coupon_management.html">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-crosshair align-middle"><circle cx="12" cy="12" r="10"></circle><line x1="22" y1="12" x2="18" y2="12"></line><line x1="6" y1="12" x2="2" y2="12"></line><line x1="12" y1="6" x2="12" y2="2"></line><line x1="12" y1="22" x2="12" y2="18"></line></svg>
                <span class="align-middle">초이스쿠폰관리</span>
            </a>
        </li>
        
    </ul>
</div>
        `;
        activeApplyLists[2].classList.add('active');
        break;

    // 고객관리
    case 'add_staff.html':
    case 'partner_mng.html':
    case 'customer_mng.html':
    case 'decide_valuation.html':
    case 'account_mng.html':
        sideNavHtmls = `
<div class="sidebar-content js-simplebar">
    <a class="sidebar-brand" href="./main.html">
        <span class="align-middle logo-fff d-ani"><img src="../img/logo-white.png" alt=""></span>
    </a>

    <ul class="sidebar-nav">
        <li class="sidebar-header">고객관리</li>

        <li class="sidebar-item">
            <a class="sidebar-link" href="./customer_mng.html">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user-check align-middle"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline></svg>
                <span class="align-middle">고객사관리</span>
            </a>
        </li>

        <li class="sidebar-item">
            <a class="sidebar-link" href="./partner_mng.html">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-users align-middle"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                <span class="align-middle">협력사관리</span>
            </a>
        </li>

        <li class="sidebar-item">
            <a class="sidebar-link" href="./decide_valuation.html">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-dollar-sign align-middle"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                <span class="align-middle">견적가격결정</span>
            </a>
        </li>

        <li class="sidebar-item">
            <a class="sidebar-link" href="./account_mng.html">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-at-sign align-middle"><circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path></svg>
                <span class="align-middle">계정관리</span>
            </a>
        </li>

    </ul>
</div>
        `;
        activeApplyLists[3].classList.add('active');
        break;

    // 정산관리
    case 'sales_mng.html':
    case 'sales_view.html':
    case 'view_dividendrate.html':
    case 'partner_calc.html':
    case 'cust_calc.html':
        sideNavHtmls = `
<div class="sidebar-content js-simplebar">
    <a class="sidebar-brand" href="./main.html">
        <span class="align-middle logo-fff d-ani"><img src="../img/logo-white.png" alt=""></span>
    </a>

    <ul class="sidebar-nav">
        <li class="sidebar-header">정산관리</li>

        <li class="sidebar-item">
            <a class="sidebar-link" href="./sales_mng.html">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-package align-middle"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                <span class="align-middle">서비스판매관리</span>
            </a>
        </li>

        <li class="sidebar-item">
            <a class="sidebar-link" href="./sales_view.html">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trending-up align-middle"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
                <span class="align-middle">매출조회</span>
            </a>
        </li>

        <li class="sidebar-item">
            <a class="sidebar-link" href="./view_dividendrate.html">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-percent align-middle"><line x1="19" y1="5" x2="5" y2="19"></line><circle cx="6.5" cy="6.5" r="2.5"></circle><circle cx="17.5" cy="17.5" r="2.5"></circle></svg>
                <span class="align-middle">수익률조회</span>
            </a>
        </li>

        <li class="sidebar-item">
            <a class="sidebar-link" href="./partner_calc.html">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file-text align-middle"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                <span class="align-middle">협력사정산</span>
            </a>
        </li>

        <li class="sidebar-item">
            <a class="sidebar-link" href="./cust_calc.html">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-clipboard align-middle"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>
                <span class="align-middle">고객사정산</span>
            </a>
        </li>
        
    </ul>
</div>
        `;
        activeApplyLists[4].classList.add('active');
        break;
    
    // 고객센터
    case 'inquiry.html':
    case 'notice_register.html':
    case 'admin_answer.html':
    case 'customer_service.html':
        sideNavHtmls = `
<div class="sidebar-content js-simplebar">
    <a class="sidebar-brand" href="./main.html">
        <span class="align-middle logo-fff d-ani"><img src="../img/logo-white.png" alt=""></span>
    </a>

    <ul class="sidebar-nav">
        <li class="sidebar-header">고객센터</li>

        <li class="sidebar-item">
            <a class="sidebar-link" href="./inquiry.html">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-send align-middle"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                <span class="align-middle">1:1문의</span>
            </a>
        </li>

        <li class="sidebar-item">
            <a class="sidebar-link" href="./notice_register.html">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit-3 align-middle"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
                <span class="align-middle">공지사항등록</span>
            </a>
        </li>

        <li class="sidebar-item">
            <a class="sidebar-link" href="./admin_answer.html">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-message-square align-middle"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                <span class="align-middle">관리자답변</span>
            </a>
        </li>

        <li class="sidebar-item">
            <a class="sidebar-link" href="./customer_service.html">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-phone-call align-middle"><path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                <span class="align-middle">CS처리</span>
            </a>
        </li>

    </ul>
</div>
        `;
        activeApplyLists[5].classList.add('active');
        break;

    // 기타
    case 'ims_plan.html':
    case 'cust_consul_hist.html':
        sideNavHtmls = `
<div class="sidebar-content js-simplebar">
    <a class="sidebar-brand" href="./main.html">
        <span class="align-middle logo-fff d-ani"><img src="../img/logo-white.png" alt=""></span>
    </a>

    <ul class="sidebar-nav">
        <li class="sidebar-header">기타</li>

        <li class="sidebar-item">
            <a class="sidebar-link" href="./ims_plan.html">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-calendar align-middle"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                <span class="align-middle">IMS추진일정</span>
            </a>
        </li>

        <li class="sidebar-item">
            <a class="sidebar-link" href="./cust_consul_hist.html">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-database align-middle"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
                <span class="align-middle">고객상담내역</span>
            </a>
        </li>

    </ul>
</div>
        `;
        activeApplyLists[6].classList.add('active');
        break;
}

let subFooter = `
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

// Insert #sidebar, 
document.querySelector('#sidebar').insertAdjacentHTML('afterbegin', sideNavHtmls);
document.querySelector('footer.footer').insertAdjacentHTML('afterbegin', subFooter);


// #sidebar li.active
window.onload = function (){
/* 
    메뉴별 active
    - 주문관리
        [0]: 일반쿠폰주문, 일반쿠폰주문>신규등록
        [1]: 신세계주문
        [2]: 맞춤형쿠폰주문
        [3]: 실물상품주문
        [4]: 발송관리
        [5]: 견적서발행
    - 상품관리
    - 고객관리
    - 정산관리
        [0]: 서비스판매관리
        [1]: 매출조회
        [2]: 수익률조회
        [3]: 협력사정산
        [4]: 고객사정산
    - 고객센터
    - 기타
*/

    let activeApplyList = document.querySelectorAll('ul.sidebar-nav li.sidebar-item');
    console.log("pageName:", pageName);

    // sidebar active
    switch (pageName) {
        // 주문관리
        case 'order_general.html':
        case 'order_new.html':
        case 'order_new_multiselect.html':
            activeApplyList[0].classList.add('active');
            break;
        case 'order_ssg.html':
            activeApplyList[1].classList.add('active');
            break;
        case 'order_send-coupon.html':
            activeApplyList[2].classList.add('active');
            break;
        case 'order_custom.html':
            activeApplyList[3].classList.add('active');
            break;
        case 'order_real.html':
            activeApplyList[4].classList.add('active');
            break;
        case 'order_estimate.html':
            activeApplyList[5].classList.add('active');
            break;

        // 발송관리
        case 'send_management.html':
        case 'send_management_detail.html':
            activeApplyList[0].classList.add('active');
            break;
        case 'ssg_management.html':
            activeApplyList[1].classList.add('active');
            break;
        case 'send-coupon_management.html':
            activeApplyList[2].classList.add('active');
            break;
        case 'real_management.html':
            activeApplyList[3].classList.add('active');
            break;

        // 상품관리
        case 'goods_view.html':
            activeApplyList[0].classList.add('active');
            break;
        case 'register_linkage.html':
            activeApplyList[1].classList.add('active');
            break;
        case 'register_group.html':
            activeApplyList[2].classList.add('active');
            break;
        case 'ad_management.html':
            activeApplyList[3].classList.add('active');
            break;
        case 'c-coupon_management.html':
            activeApplyList[4].classList.add('active');
            break;

        // 고객관리
        case 'customer_mng.html':
            activeApplyList[0].classList.add('active');
            break;
        case 'partner_mng.html':
            activeApplyList[1].classList.add('active');
            break;
        case 'decide_valuation.html':
            activeApplyList[2].classList.add('active');
            break;
        case 'account_mng.html':
            activeApplyList[3].classList.add('active');
            break;

        // 정산관리
        case 'sales_mng.html':
            activeApplyList[0].classList.add('active');
            break;
        case 'sales_view.html':
            activeApplyList[1].classList.add('active');
            break;
        case 'view_dividendrate.html':
            activeApplyList[2].classList.add('active');
            break;
        case 'partner_calc.html':
            activeApplyList[3].classList.add('active');
            break;
        case 'cust_calc.html':
            activeApplyList[4].classList.add('active');
            break;

        // 고객센터
        case 'inquiry.html':
            activeApplyList[0].classList.add('active');
            break;
        case 'notice_register.html':
            activeApplyList[1].classList.add('active');
            break;
        case 'admin_answer.html':
            activeApplyList[2].classList.add('active');
            break;
        case 'customer_service.html':
            activeApplyList[3].classList.add('active');
            break;
        // 기타
        case 'ims_plan.html':
            activeApplyList[0].classList.add('active');
            break;
        case 'cust_consul_hist.html':
            activeApplyList[1].classList.add('active');
            break;
    }
    
}