let slideIndex = 0;
showSlides(); // 立即開始幻燈片動畫

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

// 監聽所有 <div class="project"> 元素的可見性，當可見時啟動淡入效果
const projectElements = document.querySelectorAll('.project');

// 使用 Intersection Observer 來觀察每個專案元素的可見性
let observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // 當專案可見時，添加淡入效果
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target); // 取消監視，避免重複添加
        }
    });
});

// 開始觀察每個專案元素
projectElements.forEach(project => {
    observer.observe(project);
});
