const texts = [
    "Cybersecurity",
    "Redes de Computadores",
    "Python",
    "Linux",
    "Automação"
];

const typingElement = document.querySelector("#typing-text");

let textIndex = 0;
let characterIndex = 0;
let deleting = false;

function typeText() {

    const currentText = texts[textIndex];

    if (!deleting) {

        typingElement.textContent =
            currentText.substring(
                0,
                characterIndex + 1
            );

        characterIndex++;

        if (characterIndex === currentText.length) {

            deleting = true;

            setTimeout(typeText, 1400);

            return;
        }

    } else {

        typingElement.textContent =
            currentText.substring(
                0,
                characterIndex - 1
            );

        characterIndex--;

        if (characterIndex === 0) {

            deleting = false;

            textIndex =
                (textIndex + 1) % texts.length;
        }

    }

    const speed = deleting ? 45 : 85;

    setTimeout(typeText, speed);
}

typeText();


const revealElements =
    document.querySelectorAll(".reveal");

const observer =
    new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target
                        .classList
                        .add("active");

                    observer.unobserve(
                        entry.target
                    );
                }

            });

        },
        {
            threshold: 0.12
        }
    );

revealElements.forEach((element) => {
    observer.observe(element);
});
