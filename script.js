// Smooth reveal animation

const reveals = document.querySelectorAll(
    '.section, .project-card, .skill-card, .cert-card, .education-card'
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }

    });

}, {
    threshold: 0.15
});

reveals.forEach(item => {
    observer.observe(item);
});


// Current year in footer

const year = document.getElementById('year');

if (year) {
    year.textContent = new Date().getFullYear();
}