document.addEventListener('DOMContentLoaded', () => {
    const DOMEls = {
        menuBtn: document.querySelector(".open-menu"),
        body: document.querySelector("body"),
        overlay: document.querySelector(".overlay")
    }
    DOMEls.menuBtn.addEventListener("click", () => {
        DOMEls.menuBtn.classList.toggle("menu-opened");
        DOMEls.body.classList.toggle("open");
    });
    DOMEls.overlay.addEventListener("click", () => {
        DOMEls.menuBtn.classList.remove("menu-opened");
        DOMEls.body.classList.remove("open");
    });
})


const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical',
    // loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    grabCursor: true,
    loop: true,


    scrollbar: {
        el: '.swiper-pagination',
        draggable: true,
        
    },

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,

    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });