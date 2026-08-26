const skills = document.querySelector(".skills");

skills.innerHTML += skills.innerHTML;

const projectCards = document.querySelectorAll(".project-card");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }

        });
    },
    {
        threshold: 0.15
    }
);

projectCards.forEach((card) => {
    observer.observe(card);
});

const contactForm = document.querySelector(".footer-form form");

contactForm.addEventListener("submit", function () {
    const sendButton = contactForm.querySelector(".send-button");

    sendButton.innerHTML = "Sending...";

    sendButton.disabled = true;
});

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", function () {
    navMenu.classList.toggle("active");
});

const navLinks = document.querySelectorAll("#nav-menu a");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navMenu.classList.remove("active");
    });
});