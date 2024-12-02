// Typewriter effect logic
const typewriterText = ["Web Developer", "Designer", "E-commerce Specialist"];
const typewriterElement = document.getElementById("typewriter");

let currentWord = 0;
let currentChar = 0;

function typeWriter() {
    if (currentChar < typewriterText[currentWord].length) {
        typewriterElement.textContent += typewriterText[currentWord][currentChar];
        currentChar++;
        setTimeout(typeWriter, 100); // Speed of typing
    } else {
        if (currentWord < typewriterText.length - 1) {
            currentWord++;
            currentChar = 0;
            setTimeout(() => {
                typewriterElement.textContent += " | "; // Add separator
                typeWriter();
            }, 500); // Pause between words
        } else {
            typewriterElement.style.border = "none"; // Remove cursor after final word
        }
    }
}
document.addEventListener("DOMContentLoaded", () => {
    const typewriterEffect = (elementId, text, typingSpeed = 50, pauseDuration = 2000) => {
        const element = document.getElementById(elementId);
        let charIndex = 0;

        const type = () => {
            if (charIndex < text.length) {
                element.textContent += text[charIndex];
                charIndex++;
                setTimeout(type, typingSpeed);
            } else {
                setTimeout(() => {
                    element.style.borderRight = "none"; // Remove cursor after typing
                }, pauseDuration);
            }
        };

        element.textContent = ""; // Clear initial text
        element.style.borderRight = "2px solid black"; // Add blinking cursor
        type();
    };

    // Add typewriter effect to the subtitle
    typewriterEffect("page-subtitle", "Explore my personal and professional aspirations for the future.", 100, 2000);
});

document.addEventListener("DOMContentLoaded", typeWriter);

// Hamburger menu toggle logic
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("mobile-menu");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });
    } else {
        console.error("Menu elements not found!");
    }
});

// Bubbles animation logic (if applicable)
const bubblesContainer = document.querySelector(".bubbles-container");

function createBubble() {
    const bubble = document.createElement("div");
    bubble.classList.add("bubble");

    const size = Math.random() * 20 + 10;
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;

    const leftPosition = Math.random() * 100;
    bubble.style.left = `${leftPosition}%`;

    bubblesContainer.appendChild(bubble);

    setTimeout(() => {
        bubble.remove();
    }, 4000);
}

function generateBubbles() {
    setInterval(createBubble, 300);
}

document.addEventListener("DOMContentLoaded", generateBubbles);
