/* ==========================================
   SHAHZAMAN PORTFOLIO
   VERSION 2.0
========================================== */

/* ===============================
        LOADER
=============================== */

window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    loader.style.opacity = "0";

    loader.style.visibility = "hidden";

    loader.style.transition = "0.8s";

});


/* ===============================
      TYPING ANIMATION
=============================== */

const words = [

    "Full Stack Web Developer",

    "Frontend Developer",

    "Backend Developer",

    "Python Developer",

    "UI / UX Designer"

];

let wordIndex = 0;

let charIndex = 0;

let deleting = false;

const typing = document.getElementById("typing");

function typeEffect() {

    if (!typing) return;

    let currentWord = words[wordIndex];

    if (!deleting) {

        typing.textContent = currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;

        }

    }

    else {

        typing.textContent = currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, deleting ? 60 : 120);

}

typeEffect();


/* ===============================
      STICKY NAVBAR
=============================== */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {

        navbar.style.background = "#07101d";

        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,.4)";

    }

    else {

        navbar.style.background = "rgba(0,0,0,.25)";

        navbar.style.boxShadow = "none";

    }

});


/* ===============================
      ACTIVE MENU
=============================== */

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") == "#" + current) {

            link.classList.add("active");

        }

    });

});
/* ===============================
      SCROLL REVEAL
=============================== */

const revealElements = document.querySelectorAll(

".skill-card,.service-card,.project-card,.exp-card,.contact-box,.about-image"

);

function revealOnScroll() {

    revealElements.forEach(element => {

        const windowHeight = window.innerHeight;

        const revealTop = element.getBoundingClientRect().top;

        const revealPoint = 120;

        if (revealTop < windowHeight - revealPoint) {

            element.classList.add("fade-up");

            element.classList.add("show");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


/* ===============================
      BACK TO TOP BUTTON
=============================== */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.opacity = "1";

        topBtn.style.pointerEvents = "auto";

        topBtn.style.transform = "translateY(0)";

    }

    else {

        topBtn.style.opacity = "0";

        topBtn.style.pointerEvents = "none";

        topBtn.style.transform = "translateY(40px)";

    }

});


/* ===============================
      SMOOTH SCROLL
=============================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))

        .scrollIntoView({

            behavior:"smooth"

        });

    });

});


/* ===============================
      EXPERIENCE COUNTER
=============================== */

const counters = document.querySelectorAll(".exp-card h2");

let counterStarted = false;

function startCounter(){

    if(counterStarted) return;

    const about = document.querySelector("#about");

    const aboutTop = about.getBoundingClientRect().top;

    if(aboutTop < window.innerHeight-150){

        counterStarted = true;

        counters.forEach(counter=>{

            const target = parseInt(counter.innerText);

            let count = 0;

            const speed = target / 80;

            const update = ()=>{

                count += speed;

                if(count < target){

                    counter.innerText = Math.ceil(count)+"+";

                    requestAnimationFrame(update);

                }else{

                    counter.innerText = target+"+";

                }

            }

            update();

        });

    }

}

window.addEventListener("scroll",startCounter);

startCounter();


/* ===============================
      HERO BUTTON EFFECT
=============================== */

const heroButtons = document.querySelectorAll(".hero-buttons .btn");

heroButtons.forEach(button=>{

button.addEventListener("mouseenter",()=>{

button.style.transform="translateY(-8px) scale(1.05)";

});

button.addEventListener("mouseleave",()=>{

button.style.transform="translateY(0) scale(1)";

});

});


/* ===============================
      IMAGE PARALLAX
=============================== */

const heroImage = document.querySelector(".hero-image");

window.addEventListener("mousemove",(e)=>{

if(heroImage){

let x = (window.innerWidth/2 - e.pageX)/40;

let y = (window.innerHeight/2 - e.pageY)/40;

heroImage.style.transform =

`translate(${x}px,${y}px)`;

}

});
/* ==========================================
        EMAILJS CONTACT FORM
========================================== */

emailjs.init({
    publicKey: "Vy_AnTYqIlsq4GTXZ"
});

const contactForm = document.getElementById("contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        emailjs.sendForm(
            "portfolio_service",
            "template_h2247m6",
            this
        )

        .then(function () {

            alert("✅ Thank you! Your message has been sent successfully.");

            contactForm.reset();

        })

        .catch(function (error) {

            console.log(error);

            alert("❌ Failed to send message. Please try again.");

        });

    });

}

/* ==========================================
        RIPPLE BUTTON EFFECT
========================================== */

document.querySelectorAll(".btn").forEach(button => {

    button.addEventListener("click", function (e) {

        const circle = document.createElement("span");

        const diameter = Math.max(this.clientWidth, this.clientHeight);

        const radius = diameter / 2;

        circle.style.width = circle.style.height = `${diameter}px`;

        circle.style.left = `${e.offsetX - radius}px`;

        circle.style.top = `${e.offsetY - radius}px`;

        circle.classList.add("ripple");

        const ripple = this.getElementsByClassName("ripple")[0];

        if (ripple) {

            ripple.remove();

        }

        this.appendChild(circle);

    });

});

/* ==========================================
        NAVBAR LINK HOVER ANIMATION
========================================== */

document.querySelectorAll(".nav-link").forEach(link => {

    link.addEventListener("mouseenter", () => {

        link.style.transform = "translateY(-2px)";

    });

    link.addEventListener("mouseleave", () => {

        link.style.transform = "translateY(0px)";

    });

});

/* ==========================================
        PAGE FADE IN
========================================== */

document.body.style.opacity = "0";

window.addEventListener("load", () => {

    setTimeout(() => {

        document.body.style.transition = "opacity .8s ease";

        document.body.style.opacity = "1";

    }, 200);

});

/* ==========================================
        CONSOLE MESSAGE
========================================== */

console.log("%cShahzaman Portfolio",
"color:#00bfff;font-size:22px;font-weight:bold;");

console.log("%cDesigned with HTML • CSS • JavaScript",
"color:white;font-size:14px;");

/* ==========================================
        FUTURE READY
========================================== */

// Future Features:
//
// Three.js Background
// GSAP Animations
// EmailJS Contact Form
// Dark / Light Mode
// Admin Dashboard API
// Flask Backend Integration
// Blog System
// Authentication
// CMS Panel

/* ==========================================
        END OF FILE
========================================== */

