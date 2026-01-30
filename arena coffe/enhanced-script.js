// ===== ULTIMATE ENHANCED JAVASCRIPT =====

// ===== PRELOADER =====
document.addEventListener('DOMContentLoaded', function() {
    const preloader = document.getElementById('preloader');
    
    // Hide preloader after page loads
    window.addEventListener('load', function() {
        setTimeout(() => {
            preloader.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }, 2000);
    });
});

// ===== CUSTOM CURSOR =====
document.addEventListener('DOMContentLoaded', function() {
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');
    
    if (cursorDot && cursorOutline) {
        document.addEventListener('mousemove', function(e) {
            const x = e.clientX;
            const y = e.clientY;
            
            cursorDot.style.left = x + 'px';
            cursorDot.style.top = y + 'px';
            
            // Smooth follow for outline
            setTimeout(() => {
                cursorOutline.style.left = x + 'px';
                cursorOutline.style.top = y + 'px';
            }, 50);
        });
        
        // Hover effects
        const hoverElements = document.querySelectorAll('a, button, .product-card, .feature-card');
        hoverElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                cursorDot.classList.add('hover');
                cursorOutline.classList.add('hover');
            });
            
            element.addEventListener('mouseleave', () => {
                cursorDot.classList.remove('hover');
                cursorOutline.classList.remove('hover');
            });
        });
    }
});

// ===== PARTICLES JS CONFIGURATION =====
document.addEventListener('DOMContentLoaded', function() {
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: { value: 80, density: { enable: true, value_area: 800 } },
                color: { value: "#8B4513" },
                shape: { type: "circle" },
                opacity: { value: 0.5, random: true },
                size: { value: 3, random: true },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#8B4513",
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: "none",
                    random: true,
                    straight: false,
                    out_mode: "out",
                    bounce: false
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: { enable: true, mode: "grab" },
                    onclick: { enable: true, mode: "push" },
                    resize: true
                },
                modes: {
                    grab: { distance: 140, line_linked: { opacity: 1 } },
                    push: { particles_nb: 4 }
                }
            },
            retina_detect: true
        });
    }
});

// ===== ADVANCED NAVIGATION =====
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.header');
    const navLinks = document.querySelectorAll('.nav-link');
    const navIndicator = document.querySelector('.nav-indicator');
    const sections = document.querySelectorAll('section');
    
    // Header scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Update active navigation
        updateActiveNav();
    });
    
    // Navigation indicator
    function updateActiveNav() {
        let currentSection = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
                
                // Update indicator position
                if (navIndicator) {
                    const rect = link.getBoundingClientRect();
                    const navRect = header.getBoundingClientRect();
                    navIndicator.style.width = rect.width + 'px';
                    navIndicator.style.left = (rect.left - navRect.left) + 'px';
                    navIndicator.classList.add('active');
                }
            }
        });
    }
    
    // Smooth scrolling with offset
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// ===== MOBILE MENU =====
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
        
        // Close menu when clicking links
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }
});

// ===== COUNTER ANIMATION =====
document.addEventListener('DOMContentLoaded', function() {
    const counters = document.querySelectorAll('.counter');
    
    const animateCounter = (counter) => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps
        let current = 0;
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.ceil(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };
        
        updateCounter();
    };
    
    // Intersection Observer for counters
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
});

// ===== ADVANCED ANIMATIONS =====
document.addEventListener('DOMContentLoaded', function() {
    // Animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0) translateX(0) scale(1)';
                
                // Add stagger delay for children
                const children = entry.target.querySelectorAll('*');
                children.forEach((child, index) => {
                    child.style.transitionDelay = `${index * 0.1}s`;
                });
            }
        });
    }, observerOptions);
    
    // Observe elements with animation classes
    document.querySelectorAll('.animate__animated').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(el);
    });
    
    // Product card animations
    document.querySelectorAll('.product-card, .feature-card, .gallery-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(50px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// ===== PARALLAX EFFECTS =====
document.addEventListener('DOMContentLoaded', function() {
    const parallaxElements = document.querySelectorAll('.parallax-element');
    
    window.addEventListener('scroll', function() {
        const scrollPosition = window.pageYOffset;
        
        parallaxElements.forEach(element => {
            const speed = element.dataset.speed || 0.5;
            const yPos = -(scrollPosition * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
        
        // Hero parallax background
        const hero = document.querySelector('.hero');
        if (hero) {
            const scrollY = window.scrollY;
            hero.style.backgroundPositionY = `${scrollY * 0.5}px`;
        }
    });
});

// ===== IMAGE HOVER EFFECTS =====
document.addEventListener('DOMContentLoaded', function() {
    const productImages = document.querySelectorAll('.product-image img, .gallery-item img');
    
    productImages.forEach(img => {
        img.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05) rotate(2deg)';
        });
        
        img.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    });
});

// ===== FORM ENHANCEMENTS =====
document.addEventListener('DOMContentLoaded', function() {
    const formInputs = document.querySelectorAll('input, textarea');
    
    formInputs.forEach(input => {
        // Add floating labels effect
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            if (this.value === '') {
                this.parentElement.classList.remove('focused');
            }
        });
        
        // Add validation styling
        input.addEventListener('input', function() {
            if (this.checkValidity()) {
                this.classList.remove('invalid');
                this.classList.add('valid');
            } else {
                this.classList.remove('valid');
                this.classList.add('invalid');
            }
        });
    });
});

// ===== PROGRESSIVE WEB APP FEATURES =====
document.addEventListener('DOMContentLoaded', function() {
    // Add to home screen prompt
    let deferredPrompt;
    
    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;
        
        // Show install button
        const installBtn = document.createElement('button');
        installBtn.className = 'btn btn-primary';
        installBtn.innerHTML = '<i class="fas fa-download"></i> Install App';
        installBtn.style.position = 'fixed';
        installBtn.style.bottom = '20px';
        installBtn.style.left = '20px';
        installBtn.style.zIndex = '1000';
        
        installBtn.addEventListener('click', async () => {
            deferredPrompt.prompt();
            const { outcome } = await deferredPrompt.userChoice;
            deferredPrompt = null;
            installBtn.remove();
        });
        
        document.body.appendChild(installBtn);
    });
});

// ===== PERFORMANCE OPTIMIZATIONS =====
document.addEventListener('DOMContentLoaded', function() {
    // Lazy loading for images
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
    
    // Debounce scroll events
    let ticking = false;
    const updateScrollEffects = () => {
        // Your scroll-dependent code here
        ticking = false;
    };
    
    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(updateScrollEffects);
            ticking = true;
        }
    });
});

// ===== ACCESSIBILITY ENHANCEMENTS =====
document.addEventListener('DOMContentLoaded', function() {
    // Keyboard navigation improvements
    document.addEventListener('keydown', function(e) {
        // Skip to content
        if (e.altKey && e.key === 'S') {
            const mainContent = document.querySelector('main') || document.querySelector('.hero');
            if (mainContent) {
                mainContent.focus();
                mainContent.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
    
    // Focus visible enhancement
    const focusableElements = document.querySelectorAll('a, button, input, textarea, select');
    focusableElements.forEach(element => {
        element.addEventListener('focus', function() {
            this.style.outline = '3px solid #8B4513';
            this.style.outlineOffset = '2px';
        });
        
        element.addEventListener('blur', function() {
            this.style.outline = '';
        });
    });
});

// ===== ANALYTICS AND TRACKING =====
document.addEventListener('DOMContentLoaded', function() {
    // Track user interactions
    const trackEvent = (category, action, label) => {
        if (typeof gtag !== 'undefined') {
            gtag('event', action, {
                event_category: category,
                event_label: label
            });
        }
    };
    
    // Track button clicks
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', function() {
            trackEvent('Button', 'Click', this.textContent.trim());
        });
    });
    
    // Track language changes
    document.querySelectorAll('.lang-option').forEach(option => {
        option.addEventListener('click', function() {
            trackEvent('Language', 'Change', this.dataset.lang);
        });
    });
});

// ===== WELCOME POPUP AND ZOOM FIX =====
document.addEventListener('DOMContentLoaded', function() {
    // Show welcome popup
    setTimeout(showWelcomePopup, 1000);
    
    // Prevent zoom gestures
    document.addEventListener('gesturestart', function(e) {
        e.preventDefault();
    });
    
    document.addEventListener('gesturechange', function(e) {
        e.preventDefault();
    });
    
    document.addEventListener('gestureend', function(e) {
        e.preventDefault();
    });
});

function showWelcomePopup() {
    const popup = document.createElement('div');
    popup.className = 'welcome-popup animate__animated animate__zoomIn';
    popup.innerHTML = `
        <h2>🌟 Ahlan Wa Sahlan!</h2>
        <p>Welcome to Arena Coffee</p>
        <p>مرحبا بكم في أرينا كوفي</p>
        <p>Bienvenue chez Arena Coffee</p>
        <button class="close-welcome btn btn-primary">Enter Site | دخل للموقع</button>
    `;
    
    document.body.appendChild(popup);
    
    const closeBtn = popup.querySelector('.close-welcome');
    closeBtn.addEventListener('click', () => {
        popup.style.animation = 'zoomOut 0.3s ease-out forwards';
        setTimeout(() => {
            document.body.removeChild(popup);
        }, 300);
    });
    
    // Auto close
    setTimeout(() => {
        if (document.body.contains(popup)) {
            popup.style.animation = 'zoomOut 0.3s ease-out forwards';
            setTimeout(() => {
                document.body.removeChild(popup);
            }, 300);
        }
    }, 5000);
}

// Add zoomOut animation
const zoomStyle = document.createElement('style');
zoomStyle.innerHTML = `
    @keyframes zoomOut {
        0% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
        100% { transform: translate(-50%, -50%) scale(0.5); opacity: 0; }
    }
`;
document.head.appendChild(zoomStyle);

console.log('%c✨ Arena Coffee - Zoom Fixed & Fun Elements Added!', 'color: #8B4513; font-size: 16px; font-weight: bold;');
console.log('%c✨ Arena Coffee Ultimate Website Loaded!', 'color: #8B4513; font-size: 20px; font-weight: bold;');
console.log('%c☕ Built with advanced animations and premium features', 'color: #795548; font-size: 14px;');