// التحكم في النافبار عند التمرير
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    } else {
        navbar.style.backgroundColor = 'white';
    }
});

// التمرير السلس للروابط مع تحديد الباقة
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        // إذا كان الرابط يحتوي على معلومات الباقة
        if (this.classList.contains('book-button')) {
            const packageName = this.getAttribute('data-package');
            const packageSelect = document.getElementById('package-select');
            if (packageSelect) {
                packageSelect.value = packageName;
            }
        }
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// معالجة نموذج الاتصال
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // هنا يمكن إضافة كود لمعالجة النموذج وإرساله إلى الخادم
    alert('شكراً لك! سنتواصل معك قريباً.');
    this.reset();
});

// تحريك بطاقات المرافق عند ظهورها
const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// تطبيق التأثير على كل من facility-card و course-card
document.querySelectorAll('.facility-card, .course-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.5s ease-out';
    observer.observe(card);
});
