/* =========================================
   MOBILE MENU
========================================= */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.querySelector(".nav-menu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {

        navMenu.classList.toggle("active");

        const icon = menuToggle.querySelector("i");

        if (navMenu.classList.contains("active")) {

            icon.classList.remove("fa-bars");

            icon.classList.add("fa-xmark");

        } else {

            icon.classList.remove("fa-xmark");

            icon.classList.add("fa-bars");

        }

    });


    /* Close menu after clicking a link */

    const navLinks = navMenu.querySelectorAll("a");

    navLinks.forEach((link) => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("active");

            const icon = menuToggle.querySelector("i");

            icon.classList.remove("fa-xmark");

            icon.classList.add("fa-bars");

        });

    });

}


/* =========================================
   FOOTER YEAR
========================================= */

const yearElement = document.getElementById("year");

if (yearElement) {

    yearElement.textContent = new Date().getFullYear();

}


/* =========================================
   CONTACT FORM
========================================= */

const whatsappBtn = document.getElementById("whatsappBtn");
const gmailBtn = document.getElementById("gmailBtn");

const formStatus = document.getElementById("formStatus");


/*
   Replace these if your actual
   WhatsApp number or email changes.
*/

const whatsappNumber = "9779866309340";

const emailAddress = "ajaypokharel444@email.com";


/* =========================================
   GET FORM DATA
========================================= */

function getContactData() {

    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const message =
        document.getElementById("message").value.trim();


    if (!name || !email || !message) {

        showStatus(
            "Please fill in all fields.",
            true
        );

        return null;
    }


    const emailRegex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (!emailRegex.test(email)) {

        showStatus(
            "Please enter a valid email address.",
            true
        );

        return null;
    }


    return {
        name,
        email,
        message
    };

}


/* =========================================
   STATUS MESSAGE
========================================= */

function showStatus(message, error = false) {

    if (!formStatus) return;

    formStatus.textContent = message;

    formStatus.style.color =
        error
            ? "#ff7777"
            : "#c8f04a";

}


/* =========================================
   WHATSAPP
========================================= */

if (whatsappBtn) {

    whatsappBtn.addEventListener(
        "click",
        () => {

            const data = getContactData();

            if (!data) return;


            const text =
`Hello Ajay,

My name is ${data.name}.

Email: ${data.email}

Message:
${data.message}`;


            const whatsappURL =
                `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;


            window.open(
                whatsappURL,
                "_blank",
                "noopener,noreferrer"
            );


            showStatus(
                "Opening WhatsApp..."
            );

        }
    );

}


/* =========================================
   GMAIL
========================================= */

if (gmailBtn) {

    gmailBtn.addEventListener(
        "click",
        () => {

            const data = getContactData();

            if (!data) return;


            const subject =
                `Portfolio Contact from ${data.name}`;


            const body =
`Hello Ajay,

My name is ${data.name}.

My email is: ${data.email}

Message:
${data.message}

Regards,
${data.name}`;


            const gmailURL =
                "https://mail.google.com/mail/?view=cm&fs=1" +
                `&to=${encodeURIComponent(emailAddress)}` +
                `&su=${encodeURIComponent(subject)}` +
                `&body=${encodeURIComponent(body)}`;


            window.open(
                gmailURL,
                "_blank",
                "noopener,noreferrer"
            );


            showStatus(
                "Opening Gmail..."
            );

        }
    );

}


/* =========================================
   CONTACT FORM
========================================= */

const contactForm =
    document.getElementById("contactForm");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        (event) => {

            event.preventDefault();

        }
    );

}


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements = document.querySelectorAll(
    ".section-heading, .about-grid, .skill-card, .project-card, .contact-grid"
);


const revealObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.08
        }
    );


revealElements.forEach((element) => {

    element.classList.add("reveal");

    revealObserver.observe(element);

});