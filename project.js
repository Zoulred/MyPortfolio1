
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".project-link").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            document.querySelector(".portfolio").scrollIntoView({ behavior: "smooth" });
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".tool-link").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            document.querySelector(".tools").scrollIntoView({ behavior: "smooth" });
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".contact-link").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            document.querySelector(".contact-info").scrollIntoView({ behavior: "smooth" });
        });
    });
});


const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight * 0.6) { 
            element.classList.add('active');
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll); 
