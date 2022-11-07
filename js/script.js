var swiper = new Swiper(".mySwiper", {
    draggable: true,
    slidesPerView: 1.25,
    initialSlide: 1,
    loop:true,
    breakpoints: {
        // when window width is >= 320px
        320: {
            initialSlide: 0,
            slidesPerView: 1.25,
            spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
            initialSlide: 0,
            slidesPerView: 1.25,
            spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
            initialSlide: 0,
            slidesPerView: 2,
            spaceBetween: 40
        },
        1200: {
            slidesPerView: 2,
            spaceBetween: 40
        },
        1400: {
            slidesPerView: 3.5,
            spaceBetween: 40
        }
    },
    centeredSlides: true,
    spaceBetween: 30,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});


$('#poster1').click(swiper, function () {

    swiper.slideTo(0);
})
$('#poster2').click(swiper, function () {
    swiper.slideTo(1);
})
$('#poster3').click(swiper, function () {
    swiper.slideTo(2);
})

$('#poster4').click(swiper, function () {
    swiper.slideTo(3);
})

$('#poster5').click(swiper, function () {
    swiper.slideTo(4);
})

swiper.on('slideChange', function (index) {
    switch (index.realIndex) {
        case 0:
            document.getElementById("youtube-iframe").src =
                "https://www.youtube.com/embed/RDPGtbPiovU?autoplay=1"
            break;
        case 1:
            document.getElementById("youtube-iframe").src =
                "https://www.youtube.com/embed/nhpgTZn7Dx4?autoplay=1"
            break;
        case 2:
            document.getElementById("youtube-iframe").src =
                "https://www.youtube.com/embed/CNn7wvrMc2g?autoplay=1"
            break;
        case 3:
            document.getElementById("youtube-iframe").src =
                "https://www.youtube.com/embed/jCXT4jb_4zQ?autoplay=1"
            break;
        case 4:
            document.getElementById("youtube-iframe").src =
                "https://www.youtube.com/embed/uv5q6DDTjP4?autoplay=1"
            break;
        default:
            break;
    }

});