// individual btn pe alag alag add event listner lagane ki jarurat nahi 
// hai better ye hoga ki uske parent ko target karo 


const p_btns = document.querySelector(".p-btns");
const p_btn = document.querySelectorAll(".p-btn");
const p_img_elem = document.querySelectorAll(".img-overlay");

p_btns.addEventListener("click", (e) =>{
    const p_btn_clicked = e.target;
    p_btn.forEach((curELm) => {
        curELm.classList.remove("p-btn-active");
        p_btn_clicked.classList.add("p-btn-active");
        
    });
    const btn_num = p_btn_clicked.dataset.btnNum;
    console.log(btn_num);
    const img_active =document.querySelectorAll(`.p-btn--${btn_num}`);
    
    p_img_elem.forEach((curElm) => {
        curElm.classList.add("p-image-not-active");
    })
    img_active.forEach((curElm) =>{
        curElm.classList.remove("p-image-not-active");

    })

});

// swiper js 
      var swiper = new Swiper(".mySwiper", {
        slidesPerView: 2,
        spaceBetween: 30,
        autoplay :{
            delay:2500
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
   


