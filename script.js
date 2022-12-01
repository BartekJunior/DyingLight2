
// SWIPER
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
});


// Graphic carousel buttons
function changeDisplay1() {
    const myDiv1 = document.getElementById("carousel-graphics");
    const myDiv2 = document.getElementById("carousel-screenshots");
    const myDiv3 = document.getElementById("carousel-wallpapers");
    if (myDiv1.style.display = "none") {
        myDiv1.style.display = "block";
        myDiv2.style.display = "none";
        myDiv3.style.display = "none";
    }
}

function changeDisplay2() {
    const myDiv1 = document.getElementById("carousel-graphics");
    const myDiv2 = document.getElementById("carousel-screenshots");
    const myDiv3 = document.getElementById("carousel-wallpapers");
    if (myDiv2.style.display = "none") {
        myDiv2.style.display = "block";
        myDiv1.style.display = "none";
        myDiv3.style.display = "none";
    }
}

function changeDisplay3() {
    const myDiv1 = document.getElementById("carousel-graphics");
    const myDiv2 = document.getElementById("carousel-screenshots");
    const myDiv3 = document.getElementById("carousel-wallpapers");
    if (myDiv3.style.display = "none") {
        myDiv3.style.display = "block";
        myDiv1.style.display = "none";
        myDiv2.style.display = "none";
    }
}

// All buttons links to Zombie
function visitPage() {
    window.location = 'zombie.html';
}