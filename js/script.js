/* ==========================================
   TYPING ANIMATION
========================================== */

const typed = new Typed(".typing", {

    strings: [
        "AIML Student",
        "Web Developer",
        "Python Programmer",
        "Future Software Engineer"
    ],

    typeSpeed: 80,
    backSpeed: 50,
    backDelay: 1200,
    loop: true

});


/* ==========================================
   PARTICLES BACKGROUND
========================================== */

particlesJS("particles-js", {

    particles: {

        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },

        color: {
            value: "#06b6d4"
        },

        shape: {
            type: "circle"
        },

        opacity: {
            value: 0.4,
            random: true
        },

        size: {
            value: 3,
            random: true
        },

        line_linked: {
            enable: true,
            distance: 150,
            color: "#06b6d4",
            opacity: 0.3,
            width: 1
        },

        move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out"
        }

    },

    interactivity: {

        detect_on: "canvas",

        events: {

            onhover: {
                enable: true,
                mode: "grab"
            },

            onclick: {
                enable: true,
                mode: "push"
            },

            resize: true
        },

        modes: {

            grab: {
                distance: 180,
                line_linked: {
                    opacity: 1
                }
            },

            push: {
                particles_nb: 4
            }

        }
    },

    retina_detect: true
});


/* ==========================================
   REVEAL ON SCROLL
========================================== */

function revealSections() {

    const reveals =
        document.querySelectorAll(".reveal");

    reveals.forEach(section => {

        const windowHeight =
            window.innerHeight;

        const revealTop =
            section.getBoundingClientRect().top;

        const revealPoint = 120;

        if (revealTop < windowHeight - revealPoint) {

            section.classList.add("active");
        }

    });
}

window.addEventListener(
    "scroll",
    revealSections
);

revealSections();


/* ==========================================
   COUNTER ANIMATION
========================================== */

const counters =
    document.querySelectorAll(".counter");

let counterStarted = false;

function runCounters() {

    const statsSection =
        document.querySelector("#stats");

    if (!statsSection) return;

    const sectionTop =
        statsSection.getBoundingClientRect().top;

    if (
        sectionTop < window.innerHeight &&
        !counterStarted
    ) {

        counterStarted = true;

        counters.forEach(counter => {

            const target =
                Number(counter.dataset.target);

            let current = 0;

            const increment =
                target / 100;

            const updateCounter = () => {

                if (current < target) {

                    current += increment;

                    counter.innerText =
                        Math.ceil(current);

                    requestAnimationFrame(
                        updateCounter
                    );

                } else {

                    counter.innerText =
                        target + "+";
                }
            };

            updateCounter();

        });
    }
}

window.addEventListener(
    "scroll",
    runCounters
);

runCounters();


/* ==========================================
   BACK TO TOP BUTTON
========================================== */

const topBtn =
    document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.style.display = "flex";

    } else {

        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});


/* ==========================================
   CONTACT FORM
========================================== */

const contactForm =
    document.querySelector(".contact-form");

if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (e) {

            e.preventDefault();

            const button =
                this.querySelector("button");

            button.innerText =
                "Sending...";

            setTimeout(() => {

                button.innerText =
                    "Message Sent ✓";

                alert(
                    "Thank you! Your message has been sent successfully."
                );

                contactForm.reset();

            }, 1000);

        }
    );
}


/* ==========================================
   ACTIVE NAV LINK
========================================== */

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll(
        ".nav-links a"
    );

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;

        if (
            pageYOffset >= sectionTop &&
            pageYOffset <
            sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href")
            === "#" + currentSection
        ) {

            link.classList.add("active");
        }

    });

});


/* ==========================================
   PAGE LOAD ANIMATION
========================================== */

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});


/* ==========================================
   PROJECT CARD HOVER EFFECT
========================================== */

const projectCards =
    document.querySelectorAll(
        ".project-card"
    );

projectCards.forEach(card => {

    card.addEventListener(
        "mouseenter",
        () => {

            card.style.transform =
                "translateY(-10px)";
        }
    );

    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform =
                "translateY(0)";
        }
    );

});


/* ==========================================
   SMOOTH NAVIGATION
========================================== */

document.querySelectorAll(
    'a[href^="#"]'
).forEach(anchor => {

    anchor.addEventListener(
        "click",
        function (e) {

            e.preventDefault();

            document
                .querySelector(
                    this.getAttribute("href")
                )
                .scrollIntoView({

                    behavior: "smooth"
                });

        }
    );

});