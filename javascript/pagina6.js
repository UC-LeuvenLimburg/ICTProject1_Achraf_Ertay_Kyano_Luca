const alleVragen = [
            {
                type: "meerkeuze",
                vraag: " Wat betekent compile in technische termen?",
                opties: ["Het proces van het uitvoeren van een programma", "Het proces van het omzetten van broncode naar machinecode of een uitvoerbaar bestand","Het proces van het debuggen van code",],
                correctAntwoord: "Het proces van het omzetten van broncode naar machinecode of een uitvoerbaar bestand"
            },
            {
                type: "meerkeuze",
                vraag: "Wat is de betekenis van refactoring in softwareontwikkeling?",
                opties: ["Het toevoegen van nieuwe functionaliteit aan een programma", "Het verbeteren van de prestaties van een programma zonder de functionaliteit te veranderen", "Het herschrijven van de code om het gemakkelijker te begrijpen en te onderhouden",],
                correctAntwoord: "Het herschrijven van de code om het gemakkelijker te begrijpen en te onderhouden"
            },
            {
                type: "meerkeuze",
                vraag: "Wat betekent de afkorting API in technische documentatie?",
                opties: ["Application Processing Interface", "Application Programming Interface", "Application Programming Information",  ],
                correctAntwoord: "Application Programming Interface"
            },
            {
                type: "meerkeuze",
                vraag: " Wat betekent debugging in softwareontwikkeling? ",
                 opties: ["Het testen van een programma op functionaliteit", "Het verwijderen van fouten en problemen in de code van een programma", "Het testen van een programma op prestaties", ],
                correctAntwoord: "Het verwijderen van fouten en problemen in de code van een programma"
            },
            {
                type: "meerkeuze",
                vraag: "Wat betekent de term cloud computing?",
                opties: ["Het opslaan van gegevens op een externe server die via het internet toegankelijk is", "Het gebruik van lokale servers voor het verwerken van gegevens","Het ontwikkelen van software voor mobiele apparaten. ", ],
                correctAntwoord: "Het gebruik van lokale servers voor het verwerken van gegevens"
            },
            {
                type: "meerkeuze",
                vraag: "Wat is de betekenis van open source software?",
                opties: ["Software die gratis te gebruiken is, maar niet kan worden gewijzigd", "Software die openbaar beschikbaar is en waarvan de broncode door iedereen kan worden bekeken, gebruikt en gewijzigd", "Software die alleen toegankelijk is voor betaalde gebruikers", ],
                correctAntwoord: "Software die openbaar beschikbaar is en waarvan de broncode door iedereen kan worden bekeken, gebruikt en gewijzigd"
            },
            {
                type: "meerkeuze",
                vraag: "Wat is de betekenis van de term version control?",
                opties: ["Het proces van het bijhouden van wijzigingen in de broncode van software over tijd", "Het proces van het testen van verschillende versies van een programma", "Het beheren van de hardwareversies van servers", ],
                correctAntwoord: "Het proces van het bijhouden van wijzigingen in de broncode van software over tijd"
            },
            {
                type: "meerkeuze",
                vraag: "Wat betekent load balancing in de context van netwerkbeheer?(geldt voor 2 punten) ",
                opties: ["Het verdelen van werkbelasting over meerdere servers om de efficiëntie te verbeteren", "Het balanceren van de snelheden van internetverbindingen", "Het verdelen van opslagruimte op verschillende servers", ],
                correctAntwoord: "Het verdelen van werkbelasting over meerdere servers om de efficiëntie te verbeteren"
            },
            {
                type: "meerkeuze",
                vraag: "Wat is de betekenis van de term machine learning?(Geldt voor 2 punten)",
                opties: ["Het proces waarbij machines worden geprogrammeerd om handmatige taken uit te voeren", "Het proces waarbij machines de capaciteit ontwikkelen om zelfstandig nieuwe kennis te verwerven door ervaring","Het proces van het verbeteren van hardwarecomponenten" ],
                correctAntwoord: "Het proces waarbij machines de capaciteit ontwikkelen om zelfstandig nieuwe kennis te verwerven door ervaring"
            },
            {
                type: "meerkeuze",
                vraag: "Wat betekent scalability in de context van software? (Geldt voor 2 punten)",
                opties: ["Het vermogen van software om eenvoudig uit te breiden zonder verlies van prestaties of functionaliteit", "Het proces van het testen van software met verschillende gebruikersaantallen", "Het verbeteren van de snelheid van software",],
                correctAntwoord: "Het vermogen van software om eenvoudig uit te breiden zonder verlies van prestaties of functionaliteit"
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