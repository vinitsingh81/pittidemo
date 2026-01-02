const splash = document.querySelector('.splash');

document.addEventListener('DOMContentLoaded', (e) => {
    setTimeout(() => {
        splash.classList.add('display-none');
        const fixed = document.querySelector('.fixedlinks');
        if (fixed) {
            setTimeout(() => fixed.classList.add('visible'), 100);
        }
    }, 2900);
});










// --------------------------scrollup to hide navbar
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbarup").style.top = "0";
    } else {
        document.getElementById("navbarup").style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
}



// var prevScrollpos = window.pageYOffset;
// window.onscroll = function () {
//     var currentScrollPos = window.pageYOffset;
//     if (prevScrollpos > currentScrollPos) {
//         document.getElementById("mobileMenu").style.top = "0";
//     } else {
//         document.getElementById("mobileMenu").style.top = "-100px";
//     }
//     prevScrollpos = currentScrollPos;
// }













// mobile menu slider toggle
const hamburgerBtn = document.getElementById('hamburgerBtn');
const mobileMenu = document.getElementById('mobileMenu');

hamburgerBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    hamburgerBtn.classList.toggle('active');
});

// close menu when link clicked
document.querySelectorAll('.mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        hamburgerBtn.classList.remove('active');
    });
});

// close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.navBar') && !e.target.closest('.mobile-menu')) {
        mobileMenu.classList.remove('active');
        hamburgerBtn.classList.remove('active');
    }
});





// swiper card
const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 10,

    // Pagination bullets
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // Responsive breakpoints
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        // 320: {
        //   slidesPerView: 2
        // },
        768: {
            slidesPerView: 3
        },
        1024: {
            slidesPerView: 4
        }

    }
});