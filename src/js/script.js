$(document).ready(function () {
    $('.carousel__inner').slick(
        {
            speed: 1200,
            // adaptiveHeight: true,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        arrows: false,
                        dots: true   
                    }
                }
            ],
            prevArrow: '<button type="button" class="slick-prev"><img src="icons/left_arrow.svg"></button>',
            nextArrow: '<button type="button" class="slick-next"><img src="icons/right_arrow.svg"></button>'
        }
    );
});