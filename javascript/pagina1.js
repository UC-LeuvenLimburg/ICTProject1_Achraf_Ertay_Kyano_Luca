const alleVragen = [
            {
                type: "meerkeuze",
                vraag: "wat betekent  HTML? ",
                opties: ["HyperText Markup Language", "High-Tech Modern Language ","Hyperlink Transfer Mode Logic "],
                correctAntwoord: "HyperText Markup Language"
            },
            {
                type: "juist-fout",
                vraag: "In CSS gebruik je de eigenschap color om de tekstkleur te veranderen.",
                opties: ["Juist", "Fout"],
                correctAntwoord: "Juist"
            },
            {
                type: "meerkeuze",
                vraag: "Welke van de volgende HTML-elementen wordt het meest gebruikt om de hoofdinhoud van een webpagina te structureren?",
                opties: ["<footer>", "<header>", "<main>", "aside", ],
                correctAntwoord: "<main>"
            },
            {
                type: "invul",
                vraag: "Wat is de hoofdtaak van CSS in web development? ",
                correctAntwoord: "De stijl en opmaak van een website bepalen"
            },
            {
                type: "meerkeuze",
                vraag: "Wat is het resultaat van het gebruik van de transform eigenschap in CSS op een element? ",
                opties: [" Het verandert de positie van het element in de lay-out, waardoor andere elementen worden verplaatst. ", "Het beïnvloedt de visuele weergave van het element zonder de lay-out van de pagina te beïnvloeden. ", "Het verhoogt de laadsnelheid van de pagina door elementen te comprimeren. ", ],
                correctAntwoord: " Het beïnvloedt de visuele weergave van het element zonder de lay-out van de pagina te beïnvloeden. "
            },
            {
                type: "juist-fout",
                vraag: "Een responsive webdesign betekent dat een website alleen werkt op desktops en niet op mobiele apparaten. ",
                opties: ["Juist", "Fout"],
                correctAntwoord: "Fout"
            },
            {
                type: "invul",
                vraag: "Welke CSS-eigenschap bepaalt de ruimte tussen de inhoud van een element en de rand ervan? ",
                correctAntwoord: "padding"
            },
            {
                type: "juist-fout",
                vraag: "In JavaScript is het mogelijk om een functie zonder parameters te definiëren en deze toch aan te roepen met argumenten. .",
                opties: ["Juist", "Fout"],
                correctAntwoord: "Juist"
            },
            {
                type: "meerkeuze",
                vraag: "Wat doet de z-index in CSS?  ",
                opties: ["Verwijdert een element van de pagina ", "Bepaalt de grootte van een element", "Bepaalt de positie van een element op de Z-as (voor of achter andere elementen) ",],
                correctAntwoord: "Bepaalt de positie van een element op de Z-as (voor of achter andere elementen) "
            },
            {
                type: "invul",
                vraag: "Wat wordt er In CSS gebruikt om ervoor te zorgen dat een element zichzelf automatisch aanpast aan de grootte van zijn inhoud, zonder dat de afmetingen expliciet hoeven te worden gedefinieerd. ",
                correctAntwoord: "inline-block"
            }
        ];

        // Kies willekeurige vraag
        let huidigeVraag = alleVragen[Math.floor(Math.random() * alleVragen.length)];

        document.addEventListener("DOMContentLoaded", function() {
            toonVraag();
        });

        function toonVraag() {
            const vraagText = document.getElementById("vraag-text");
            const antwoordContainer = document.getElementById("antwoord-container");
            vraagText.textContent = huidigeVraag.vraag;
            antwoordContainer.innerHTML = "";

            switch (huidigeVraag.type) {
                case "ja-nee":
                case "juist-fout":
                case "meerkeuze":
                    huidigeVraag.opties.forEach(optie => {
                        const button = document.createElement("button");
                        button.textContent = optie;
                        button.onclick = function () {
                            controleerAntwoord(optie);
                        };
                        antwoordContainer.appendChild(button);
                    });
                    break;

                case "invul":
                    const input = document.createElement("input");
                    const submitButton = document.createElement("button");
                    submitButton.textContent = "Bevestig";
                    submitButton.onclick = function () {
                        controleerAntwoord(input.value);
                    };
                    antwoordContainer.appendChild(input);
                    antwoordContainer.appendChild(submitButton);
                    break;
            }

            // Toon popup
            document.getElementById("popup-container").style.display = "block";
        }

        function controleerAntwoord(antwoord) {
            const feedback = document.getElementById("feedback");
            const correct = (antwoord.toLowerCase().trim() === huidigeVraag.correctAntwoord.toLowerCase());

            if (correct) {
                feedback.textContent = "Correct! Het juiste antwoord is " + huidigeVraag.correctAntwoord + " 1punt(2punten)verdient.";
                feedback.style.color = "green";
            } else {
                feedback.textContent = "Helaas! Het juiste antwoord was " + huidigeVraag.correctAntwoord + ".";
                feedback.style.color = "red";
            }

            // Ga na 2 seconden terug naar dobbelsteenpagina
            setTimeout(() => {
                window.location.href = "/html/dobbelsteen.html";
            }, 2000);
        }