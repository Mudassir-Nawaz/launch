document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    const offcanvasElement = document.getElementById("mainMenu");
    const offcanvas = new bootstrap.Offcanvas(offcanvasElement);
    const menuItems = document.querySelectorAll(".menu-entry a");

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

    // Smooth scroll on click
    menuItems.forEach(item => {
        item.addEventListener("click", e => {
            const href = item.getAttribute("href");

            if (href.startsWith("#")) {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

                waitForScrollEnd(() => {
                    setActiveMenu(href); 
                });

            } else if (href === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });

                waitForScrollEnd(() => {
                    setActiveMenu("/"); 
                });
            }
        });
    });

    // Utility: detect when scrolling ends
    function waitForScrollEnd(callback) {
        let isScrolling;
        window.addEventListener("scroll", () => {
            clearTimeout(isScrolling);
            isScrolling = setTimeout(() => {
                callback();
            }, 120);
        }, { once: true });
    }

    // Function to insert the <div class="active">
    function setActiveMenu(activeId) {
        menuItems.forEach(item => {
            const parent = item.closest(".menu-entry");
            const href = item.getAttribute("href");

            // remove existing .active div
            const existing = parent.querySelector(".active");
            if (existing) existing.remove();

            // insert .active only on the clicked one
            if (href === activeId) {
                const activeDiv = document.createElement("div");
                activeDiv.classList.add("active");
                parent.prepend(activeDiv);
            }
        });
    }

    // Default to "Home" on page load
    setActiveMenu("/");

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