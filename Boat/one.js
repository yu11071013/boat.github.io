let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slides");
    
    // 隱藏所有圖片
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // 選擇當前圖片
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    
    slides[slideIndex - 1].style.display = "block";

    // 每3秒自動切換
    setTimeout(showSlides, 3000);
}

// 置頂功能
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
