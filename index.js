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