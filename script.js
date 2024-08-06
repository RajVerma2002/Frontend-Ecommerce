// Script for navigation bar
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if(bar) {
    bar.addEventListener('click',() =>  {
        nav.classList.add('active');
    })
}


if(bar) {
    close.addEventListener('click',() =>  {
        nav.classList.remove('active');
    })
}





    document.addEventListener('DOMContentLoaded', function () {
        // Initialize desktop and mobile carousels
        var carouselDesktop = document.getElementById('carouselDesktop');
        var carouselMobile = document.getElementById('carouselMobile');

        function initCarousels() {
            if (window.innerWidth < 768) { // Mobile view
                if (carouselDesktop) {
                    carouselDesktop.style.display = 'none';
                }
                if (carouselMobile) {
                    carouselMobile.style.display = 'block';
                    new bootstrap.Carousel(carouselMobile);
                }
            } else { // Desktop view
                if (carouselDesktop) {
                    carouselDesktop.style.display = 'block';
                    new bootstrap.Carousel(carouselDesktop);
                }
                if (carouselMobile) {
                    carouselMobile.style.display = 'none';
                }
            }
        }

        // Initialize carousels on page load
        initCarousels();

        // Reinitialize carousels on window resize
        window.addEventListener('resize', function () {
            initCarousels();
        });
    });


