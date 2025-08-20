document.addEventListener('DOMContentLoaded', () => {
    AOS.init();

    const pricingSwiper = new Swiper('.pricingSwiper', {
        slidesPerView: 1,
        spaceBetween: 23,
        breakpoints: {
            576: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3
            }
        },
        pagination: {
            el: '.swiper-pagination',
        },
    });

    const testimSwiper = new Swiper('.testimSwiper', {
        slidesPerView: 1,
        spaceBetween: 23,
        breakpoints: {
            576: {
                slidesPerView: 2,
            },
        },
        pagination: {
            el: '.swiper-pagination',
        },
    });
});