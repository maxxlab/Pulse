// $(document).ready(function () {
//     $('.carousel__inner').slick(
//         {
//             speed: 1200,
//             // adaptiveHeight: true,
//             responsive: [
//                 {
//                     breakpoint: 992,
//                     settings: {
//                         arrows: false,
//                         dots: true   
//                     }
//                 }
//             ],
//             prevArrow: '<button type="button" class="slick-prev"><img src="icons/left_arrow.svg"></button>',
//             nextArrow: '<button type="button" class="slick-next"><img src="icons/right_arrow.svg"></button>'
//         }
//     );
// });

const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    speed: 1000,
    nav: false,
    controls: false,
    responsive: {
        640: {
            edgePadding: 20,
            gutter: 20,
            items: 2
        },
        700: {
            gutter: 30
        },
        900: {
            items: 1
        }
    }
});

document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
})
document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
}) 
