document.addEventListener('DOMContentLoaded', () => {
    // 1. Sticky Header effect on scroll
    const header = document.querySelector('header');
    
    // Use passive event listener for better scroll performance
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }, { passive: true });

    // 2. Modern Reveal elements on scroll using IntersectionObserver
    // This completely eliminates "forced reflow" and layout thrashing
    const reveals = document.querySelectorAll('.reveal');
    
    if (reveals.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    // Optional: unobserve if you only want it to animate once
                    // observer.unobserve(entry.target);
                }
            });
        }, {
            root: null,
            rootMargin: '0px',
            threshold: 0.15 // Triggers when 15% of the element is visible
        });

        reveals.forEach(reveal => observer.observe(reveal));
    }
});
