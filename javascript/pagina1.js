const alleVragen = [
            {
                type: "meerkeuze",
                vraag: "wat betekent  HTML? ",
                opties: ["HyperText Markup Language", "High-Tech Modern Language ","Hyperlink Transfer Mode Logic "],
                correctAntwoord: "HyperText Markup Language"
            },
            {
                type: "juist-fout",
                vraag: "Amsterdam is de hoofdstad van Nederland.",
                opties: ["Juist", "Fout"],
                correctAntwoord: "Juist"
            },
            {
                type: "meerkeuze",
                vraag: "Welke van de volgende is geen planeet in ons zonnestelsel?",
                opties: ["Mars", "Venus", "Pluto", "Saturnus"],
                correctAntwoord: "Pluto"
            },
            {
                type: "invul",
                vraag: "Hoeveel dagen heeft een schrikkeljaar?",
                correctAntwoord: "366"
            },
            {
                type: "meerkeuze",
                vraag: "Welke taal wordt het meest gesproken in Brazilië?",
                opties: ["Engels", "Spaans", "Portugees", "Frans"],
                correctAntwoord: "Portugees"
            },
            {
                type: "ja-nee",
                vraag: "Is goud een chemisch element?",
                opties: ["Ja", "Nee"],
                correctAntwoord: "Ja"
            },
            {
                type: "invul",
                vraag: "In welk jaar begon de Tweede Wereldoorlog?",
                correctAntwoord: "1939"
            },
            {
                type: "juist-fout",
                vraag: "De zon is een planeet.",
                opties: ["Juist", "Fout"],
                correctAntwoord: "Fout"
            },
            {
                type: "meerkeuze",
                vraag: "Welke van deze dieren legt eieren?",
                opties: ["Walvis", "Vleermuis", "Pinguin", "Leeuw"],
                correctAntwoord: "Pinguin"
            },
            {
                type: "invul",
                vraag: "Wat is de hoofdstad van Italië?",
                correctAntwoord: "Rome"
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
                feedback.textContent = "Correct! Het juiste antwoord is " + huidigeVraag.correctAntwoord + ".";
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