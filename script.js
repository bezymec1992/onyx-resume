document.addEventListener('DOMContentLoaded', () => {
    const DOMEls = {
        menuBtn: document.querySelector(".open-menu"),
        body: document.querySelector("body"),
        overlay: document.querySelector(".overlay"),
        links: document.querySelectorAll(".link"),
    }

    DOMEls.menuBtn.addEventListener("click", () => {
        DOMEls.menuBtn.classList.toggle("menu-opened");
        DOMEls.body.classList.toggle("open");
        // DOMEls.body.style = "overflow-y: hidden";
        if(DOMEls.body.style.overflowY === "visible") {
            DOMEls.body.style = "overflow-y: hidden";
        }
    });

    DOMEls.overlay.addEventListener("click", () => {
        DOMEls.menuBtn.classList.remove("menu-opened");
        DOMEls.body.classList.remove("open");
        DOMEls.body.style = "overflow-y: visible";
    });

    for (link of DOMEls.links) {
        link.addEventListener("click",()=> {
            DOMEls.menuBtn.classList.remove("menu-opened");
            DOMEls.body.classList.remove("open");
            DOMEls.body.style = "overflow-y: visible";
        })
    }
})

function more () {
    const dots = document.getElementById("dots"),
    moreText = document.getElementById("more"),
    btnText = document.getElementById("myBtn");
    if(dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none"; 
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline"; 
    }
}

const swiper = new Swiper('.swiper', {
    speed: 500,
    slidesPerView: 1,
    spaceBetween: 30,
    grabCursor: true,
    loop: true,
    autoplay: {
        delay: 3000,
    },

    scrollbar: {
        el: '.swiper-pagination',
        draggable: true,
        
    },

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,

    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});