document.addEventListener('DOMContentLoaded', () => {
    const DOMEls = {
        menuBtn: document.querySelector(".open-menu"),
        body: document.querySelector("body"),
        overlay: document.querySelector(".overlay"),
        links: document.querySelectorAll(".link"),
        // openText: document.querySelector(".openText"),
        // span: document.querySelector(".span2")
    }
    // DOMEls.openText.addEventListener("click", () => {
    //     DOMEls.span.classList.toggle("span3");
    // });

    

    // DOMEls.openText.addEventListener('click', function () {
	// // this.classList.toggle('openTxt');
    
	//     if (DOMEls.span.style.maxHeight) {
	// 	    DOMEls.span.style.maxHeight = null
    //         this.innerHTML='More info'
	//     } else {
	// 	    DOMEls.span.style.maxHeight = DOMEls.span.scrollHeight + 'px';
    //         this.innerHTML='Less info'
	//     }
    // });


    DOMEls.menuBtn.addEventListener("click", () => {
        DOMEls.menuBtn.classList.toggle("menu-opened");
        DOMEls.body.classList.toggle("open");
        DOMEls.body.style = "overflow-y: hidden";
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

