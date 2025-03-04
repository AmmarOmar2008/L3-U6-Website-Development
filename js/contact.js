document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // احفظ بيانات النموذج في localStorage
        const formData = {
            name: contactForm.querySelector('input[type="text"]').value,
            email: contactForm.querySelector('input[type="email"]').value,
            phone: contactForm.querySelector('input[type="tel"]').value,
            package: contactForm.querySelector('select').value,
            message: contactForm.querySelector('textarea').value
        };
        
        localStorage.setItem('bookingData', JSON.stringify(formData));
        
        // انتقل إلى صفحة الدفع
        window.location.href = 'payment.html';
    });
});
