const alleVragen = [
            {
                type: "meerkeuze",
                vraag: "Welke van de volgende termen kan je direct integreren zonder extra technieken? ",
                opties: [" x2x^2x2 ", "1x\frac{1}{x}x1 ","exe^xex "," Alle bovenstaande ",],
                correctAntwoord: "Alle bovenstaande"
            },
            {
                type: "juist-fout",
                vraag: "Kun je elke rationale functie altijd splitsen in afzonderlijke breuken voordat je integreert? ",
                opties: ["Juist", "Fout"],
                correctAntwoord: "Juist"
            },
            {
                type: "meerkeuze",
                vraag: "De integraal van een snelheidsfunctie v(t) geeft de: ?",
                opties: ["Massa", "Tijd  ", "Afstand ", "Versnelling", ],
                correctAntwoord: "Afstand"
            },
            {
                type: "invul",
                vraag: "De functie (x + 2) / (x + 1) kan worden gesplitst door ____ deling toe te passen.",
                correctAntwoord: "polyominale "
            },
            {
                type: "juist-fout",
                vraag: "Kun je de functie (x² + 2x + 3) / (x + 1) altijd zonder deling opsplitsen in losse breuken?(geldt voor 2 punten)  ",
                opties: [" Juist", "Fout  ", ],
                correctAntwoord: " Fout"
            },
            {
                type: "juist-fout",
                vraag: "Kun je de substitutiemethode gebruiken als de afgeleide van de gekozen substitutie niet voorkomt in de integraal? ",
                opties: ["Juist", "Fout"],
                correctAntwoord: "Fout"
            },
            {
                type: "invul",
                vraag: "De integraal van een snelheidsfunctie v(t)v(t)v(t) geeft de ____ die een object heeft afgelegd.",
                correctAntwoord: "afstand"
            },
            {
                type: "juist-fout",
                vraag: " Is het altijd nodig om de LIATE-regel te volgen bij partieel integreren?(geldt voor 2 punten) ",
                opties: ["Juist", "Fout"],
                correctAntwoord: "fout"
            },
            {
                type: "juist-fout",
                vraag: "Is de functie x ln(x) een goede kandidaat voor partieel integreren?  (Geldt voor 2 punten)",
                opties: ["Juist", "Fout ", ],
                correctAntwoord: "Juist"
            },
            {
                type: "meerkeuze",
                vraag: "Welke substitutie maakt de integraal ∫ x / (x² + 9) dx eenvoudiger? (Geldt voor 2 punten)",
                opties: ["u = x² + 9", " u = x + 9  ", " u = √(x² + 9) ",],
                correctAntwoord: "u = x² + 9"
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