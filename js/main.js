$(document).ready(function () {
    const mv = new Swiper('.mv', {

        autoplay: {
            delay: 3000, //슬라이드 대기시간 2500 -> 2.5초
            disableOnInteraction: false, //마우스로 제어한 후 자동여부(false=자동)
        },

        loop: true, //반복여부
        speed: 2000,
        pagination: {
            el: ".swiper-pagination",
            type: "bullets", //버튼 종류 설정
            clickable: true //
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        }
    });

    const best_list = new Swiper('.best_list', {
        autoplay: {
            delay: 3000, //슬라이드 대기시간 2500 -> 2.5초
            disableOnInteraction: false, //마우스로 제어한 후 자동여부(false=자동)
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        loop: true,
        centeredSlides: true,
        speed: 1000,
        slidesPerView: 3,
        spaceBetween: 50,
    });

    const instagram_list = new Swiper('.instagram_list', {
        slidesPerView: 6, // 한줄에 보이는 갯수
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay: {
            delay: 3000, //슬라이드 대기시간 2500 -> 2.5초
            disableOnInteraction: false, //마우스로 제어한 후 자동여부(false=자동)
        },
        speed: 1000, // 넘어가는속도
    });

    // depth2
    $(".depth2,.depth2_bg").hide();

    $(".gnb > li").hover(function () {
        $(".depth2,.depth2_bg").stop().slideToggle();
    });

    // search
    $(".search").hide();
    $(".btn_search").click(function () {
        $(".search").fadeIn();
    });
    $(".search_close").click(function () {
        $(".search").fadeOut();
    });
});