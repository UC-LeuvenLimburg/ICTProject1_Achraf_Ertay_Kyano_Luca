const alleVragen = [
            {
                type: "meerkeuze",
                vraag: "Wat is een microcontroller? ",
                opties: ["Een externe opslagmodule ", "Een kleine computer op een enkele chip","Een soort batterij voor elektronica"," Een grafische processor",],
                correctAntwoord: "Een kleine computer op een enkele chip"
            },
            {
                type: "juist-fout",
                vraag: "Een microcontroller heeft altijd een extern geheugen nodig om programma's uit te voeren. ",
                opties: ["Juist", "Fout"],
                correctAntwoord: "Fout"
            },
            {
                type: "meerkeuze",
                vraag: "Wat is de taak van een GPIO-pin op een microcontroller? ",
                opties: ["Alleen gegevens verzenden ", "Alleen gegevens ontvangen", "Zowel gegevens verzenden als ontvangen", ],
                correctAntwoord: "Zowel gegevens verzenden als ontvangen "
            },
            {
                type: "invul",
                vraag: "Een microcontroller wordt vaak geprogrammeerd met de taal_________  ",
                correctAntwoord: "C of C++"
            },
            {
                type: "meerkeuze",
                vraag: "Welk protocol wordt gebruikt voor communicatie tussen microcontrollers en sensoren met slechts twee draden?",
                opties: [" SPI ", "I2C", " UART", "CAN", ],
                correctAntwoord: "I2C"
            },
            {
                type: "juist-fout",
                vraag: "Een microcontroller kan meerdere taken tegelijkertijd uitvoeren door middel van interrupt-afhandeling. ",
                opties: ["Juist", "Fout"],
                correctAntwoord: "Juist"
            },
            {
                type: "invul",
                vraag: "Een ______ wordt gebruikt om digitale signalen om te zetten naar analoge signalen. ",
                correctAntwoord: "DAC"
            },
            {
                type: "juist-fout",
                vraag: "Kan een microcontroller communiceren met een extern apparaat via een UART (Universal Asynchronous Receiver-Transmitter) zonder een kloksignaal? (Geldt voor 2 punten)",
                opties: ["Juist", "Fout"],
                correctAntwoord: "Juist"
            },
            {
                type: "meerkeuze",
                vraag: "Welke van de volgende technieken zorgt ervoor dat een microcontroller efficiënt meerdere taken kan uitvoeren zonder gebruik te maken van multithreading?(Geldt voor 2 punten)",
                opties: ["Direct Memory Access (DMA) ", "Interrupts ", "pulse width modulation (PWM) ", "I2C ",],
                correctAntwoord: "Interrupts"
            },
            {
                type: "invul",
                vraag: "De communicatie tussen een microcontroller en een extern apparaat kan plaatsvinden via het ______-protocol, dat vier draden gebruikt. (Geldt voor 2 punten)",
                correctAntwoord: "SPI"
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