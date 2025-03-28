
        const helpBtn = document.querySelector('.help-btn');
        const modal = document.getElementById('helpModal');
        const closeBtn = document.querySelector('.modal-close');
        helpBtn.addEventListener('click', function(e) {
            e.preventDefault();
            modal.style.display = 'flex';
        });
        closeBtn.addEventListener('click', function() {
            modal.style.display = 'none';
        });
        window.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
        function animateOnScroll() {
            const elements = document.querySelectorAll('.project-card, .hobby-card, .store-card, .support-section');
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                        observer.unobserve(entry.target);
                    }
                });
            }, {threshold: 0.1});
            elements.forEach(element => {
                element.style.opacity = '0';
                element.style.transform = 'translateY(20px)';
                element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                observer.observe(element);
            });
        }
        document.addEventListener('DOMContentLoaded', () => {
            animateOnScroll();
        });

