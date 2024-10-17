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

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const equipmentItems = document.querySelectorAll('.equipment-item');

    // Intersection Observer 設定
    const observerOptions = {
        root: null, // 使用視口作為根元素
        rootMargin: '0px',
        threshold: 0.1 // 當 10% 的元素可見時觸發
    };

    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // 添加 visible 類別
                observer.unobserve(entry.target); // 取消監視
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    equipmentItems.forEach(item => {
        observer.observe(item); // 監視每個卡片
    });

    // 滾動到頂部按鈕
    const scrollTopButton = document.querySelector('.scroll-top-btn');
    scrollTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});


