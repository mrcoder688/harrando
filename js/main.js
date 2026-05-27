// Inmobiliaria Harrando - Main JavaScript
// Premium Real Estate Experience

document.addEventListener('DOMContentLoaded', () => {
    // Custom Cursor
    const cursor = document.getElementById('cursor');
    const cursorDot = document.getElementById('cursorDot');
    
    if (cursor && cursorDot && window.matchMedia('(pointer: fine)').matches) {
        let mouseX = 0, mouseY = 0;
        let cursorX = 0, cursorY = 0;
        let dotX = 0, dotY = 0;
        
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });
        
        function animateCursor() {
            cursorX += (mouseX - cursorX) * 0.1;
            cursorY += (mouseY - cursorY) * 0.1;
            dotX += (mouseX - dotX) * 0.3;
            dotY += (mouseY - dotY) * 0.3;
            
            cursor.style.left = cursorX - 20 + 'px';
            cursor.style.top = cursorY - 20 + 'px';
            cursorDot.style.left = dotX - 3 + 'px';
            cursorDot.style.top = dotY - 3 + 'px';
            
            requestAnimationFrame(animateCursor);
        }
        animateCursor();
        
        const interactiveElements = document.querySelectorAll('a, button, .service-card, .property-card, .testimonial-card');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
            el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
        });
    }

    // Navigation scroll effect
    const nav = document.getElementById('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    const navToggle = document.getElementById('navToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (navToggle && mobileMenu) {
        navToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            const spans = navToggle.querySelectorAll('span');
            if (mobileMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translateY(7px)';
                spans[1].style.transform = 'rotate(-45deg) translateY(-7px)';
                spans[2].style.opacity = '0';
            } else {
                spans[0].style.transform = '';
                spans[1].style.transform = '';
                spans[2].style.opacity = '1';
            }
        });

        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                const spans = navToggle.querySelectorAll('span');
                spans[0].style.transform = '';
                spans[1].style.transform = '';
                spans[2].style.opacity = '1';
            });
        });
    }

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // GSAP Scroll Animations
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);

        // Service cards
        const serviceCards = document.querySelectorAll('.service-card');
        serviceCards.forEach((card, index) => {
            ScrollTrigger.create({
                trigger: card,
                start: 'top 90%',
                onEnter: () => {
                    card.classList.add('visible');
                    card.style.transitionDelay = `${index * 0.1}s`;
                },
                once: true
            });
        });

        // Property cards
        const propertyCards = document.querySelectorAll('.property-card');
        propertyCards.forEach((card, index) => {
            ScrollTrigger.create({
                trigger: card,
                start: 'top 90%',
                onEnter: () => {
                    card.classList.add('visible');
                    card.style.transitionDelay = `${index * 0.1}s`;
                },
                once: true
            });
        });

        // Testimonial cards
        const testimonialCards = document.querySelectorAll('.testimonial-card');
        testimonialCards.forEach((card, index) => {
            ScrollTrigger.create({
                trigger: card,
                start: 'top 90%',
                onEnter: () => {
                    card.classList.add('visible');
                    card.style.transitionDelay = `${index * 0.1}s`;
                },
                once: true
            });
        });

        // Section headers
        const sectionHeaders = document.querySelectorAll('.section-header');
        sectionHeaders.forEach(header => {
            gsap.from(header, {
                scrollTrigger: {
                    trigger: header,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                },
                opacity: 0,
                y: 40,
                duration: 1,
                ease: 'power3.out'
            });
        });
    }

    // Contact Form
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const submitBtn = contactForm.querySelector('.btn-submit');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = `
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M20 6L9 17l-5-5"/>
                </svg>
                ¡Mensaje enviado!
            `;
            submitBtn.style.background = '#25D366';
            
            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.style.background = '';
                contactForm.reset();
            }, 3000);
        });
    }

    // Parallax Hero
    const heroImage = document.querySelector('.hero-image');
    
    if (heroImage && !window.matchMedia('(pointer: coarse)').matches) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * 0.3;
            
            if (rate < window.innerHeight) {
                heroImage.style.transform = `translateY(${rate}px) scale(1.1)`;
            }
        });
    }

    // Lazy Loading
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            });
        }, { rootMargin: '50px 0px' });

        lazyImages.forEach(img => imageObserver.observe(img));
    }
});
