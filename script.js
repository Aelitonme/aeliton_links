document.addEventListener("DOMContentLoaded", () => {

    // ========================================
    // TEXTO DIGITADO
    // ========================================

    const typingElement =
        document.querySelector("#typing-text");

    const texts = [
        "Cybersecurity",
        "Redes de Computadores",
        "Python",
        "Linux",
        "Automação"
    ];

    let textIndex = 0;
    let characterIndex = 0;
    let deleting = false;

    function typeText() {

        if (!typingElement) {
            return;
        }

        const currentText = texts[textIndex];

        if (!deleting) {

            typingElement.textContent =
                currentText.substring(
                    0,
                    characterIndex + 1
                );

            characterIndex++;

            if (
                characterIndex ===
                currentText.length
            ) {

                deleting = true;

                setTimeout(
                    typeText,
                    1600
                );

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
                    (textIndex + 1) %
                    texts.length;
            }
        }

        const speed =
            deleting ? 45 : 90;

        setTimeout(
            typeText,
            speed
        );
    }

    typeText();


    // ========================================
    // ANIMAÇÃO AO ROLAR
    // ========================================

    const revealElements =
        document.querySelectorAll(".reveal");

    const observer =
        new IntersectionObserver(
            (entries) => {

                entries.forEach(
                    (entry) => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target
                                .classList
                                .add("active");

                            observer.unobserve(
                                entry.target
                            );
                        }

                    }
                );

            },
            {
                threshold: 0.15
            }
        );

    revealElements.forEach(
        (element) => {

            observer.observe(
                element
            );

        }
    );


    // ========================================
    // MOVIMENTO 3D DOS CARDS
    // ========================================

    const cards =
        document.querySelectorAll(
            ".project-card"
        );

    cards.forEach((card) => {

        card.addEventListener(
            "mousemove",
            (event) => {

                const rect =
                    card.getBoundingClientRect();

                const x =
                    event.clientX -
                    rect.left;

                const y =
                    event.clientY -
                    rect.top;

                const centerX =
                    rect.width / 2;

                const centerY =
                    rect.height / 2;

                const rotateX =
                    (y - centerY) / 20;

                const rotateY =
                    (centerX - x) / 20;

                card.style.transform =
                    `
                    perspective(800px)
                    rotateX(${rotateX}deg)
                    rotateY(${rotateY}deg)
                    translateY(-5px)
                    `;
            }
        );

        card.addEventListener(
            "mouseleave",
            () => {

                card.style.transform =
                    `
                    perspective(800px)
                    rotateX(0deg)
                    rotateY(0deg)
                    translateY(0)
                    `;
            }
        );

    });

});
