$(function () {
    $('.top-slider').slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: '<button type="button" class="slick-arrow slick-next"><img src="images/next-arrow.svg" alt="prev"></button>', //!добавляем стрелки
        prevArrow: '<button type="button" class="slick-arrow slick-prev"><img src="images/prev-arrow.svg" alt="next"></button>', //!добавляем стрелки
        responsive: [{
                breakpoint: 1024,
                settings: {

                }
            },
            {
                breakpoint: 640,
                settings: {
                    arrows: false //!выкл стрелочки при 640px
                }
            }
        ]
    });
});