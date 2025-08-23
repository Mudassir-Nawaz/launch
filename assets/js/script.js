document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    const offcanvasElement = document.getElementById("mainMenu");
    const offcanvas = new bootstrap.Offcanvas(offcanvasElement);

    window.addEventListener('scroll', () => {
        if (window.scrollY <= 15) {
            header.classList.remove('scrolled-header');
        } else {
            header.classList.add('scrolled-header');
        };
        }
    );

    document.querySelector('.scrollToTop').addEventListener('click', () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth' // smooth scroll effect
        });
    });

    offcanvasElement.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        offcanvas.hide();
      });
    });

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