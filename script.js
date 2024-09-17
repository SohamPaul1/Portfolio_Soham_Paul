 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Project filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const projects = document.querySelectorAll('.project');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
        
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        projects.forEach(project => {
            if (filter === 'all' || project.getAttribute('data-category') === filter) {
                project.style.display = 'block';
            } else {
                project.style.display = 'none';
            }
        });
    });
});

// Form submission
const form = document.getElementById('contact-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const formObject = Object.fromEntries(formData);
    
    // Simulate form submission
    console.log('Form submitted:', formObject);
    alert('Thank you for your message! I\'ll get back to you soon.');
    form.reset();
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Scroll animations
const animateOnScroll = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
};

const observer = new IntersectionObserver(animateOnScroll, {
    root: null,
    threshold: 0.1
});

document.querySelectorAll('#about, .project, .timeline-item').forEach(el => {
    observer.observe(el);
});

// Pulse animation for CTA button
const ctaButton = document.querySelector('.btn');
setInterval(() => {
    ctaButton.style.animation = 'pulse 2s';
    setTimeout(() => {
        ctaButton.style.animation = '';
    }, 2000);
}, 5000);