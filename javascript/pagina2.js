const alleVragen = [
            {
                type: "meerkeuze",
                vraag: "Wat is de output van het volgende C#-programma? (let x = 5; let y = x; y++ console.WriteLine(x);)",
                opties: ["5", "6 ","foutmelding ","0",],
                correctAntwoord: "5"
            },
            {
                type: "juist-fout",
                vraag: "Kun je een string direct optellen met een int zonder expliciete conversie.",
                opties: ["Juist", "Fout"],
                correctAntwoord: "Fout"
            },
            {
                type: "meerkeuze",
                vraag: "Wat doet de Console.WriteLine() methode in C#?",
                opties: ["Het schrijft een tekst naar de console en voegt een nieuwe regel toe ", "Het schrijft een tekst naar een bestand ", "Het leest een tekst in van de console ", ],
                correctAntwoord: "Het schrijft een tekst naar de console en voegt een nieuwe regel toe"
            },
            {
                type: "invul",
                vraag: "Hoe kan je een waarde van een bool variable controleren ?  ",
                correctAntwoord: "true of false"
            },
            {
                type: "meerkeuze",
                vraag: "Wat gebeurt er wanneer je een null waarde probeert toe te wijzen aan een niet-nullable waarde type in C# (bijvoorbeeld een int)?  ",
                opties: [" De waarde wordt automatisch omgezet naar 0  ", "Het programma zal crashen bij runtime  ", "Er wordt een compilatiefout gegenereerd", ],
                correctAntwoord: "Er wordt een compilatiefout gegenereerd"
            },
            {
                type: "juist-fout",
                vraag: "In C#, een foreach loop kan niet worden gebruikt met een array van primitieve types zoals int of char",
                opties: ["Juist", "Fout"],
                correctAntwoord: "Fout"
            },
            {
                type: "invul",
                vraag: "Welke type kan niet null zijn omdat het een waarde-type is, en dus altijd een waarde bevat.(Geldt voor 2 punten)",
                correctAntwoord: "struct"
            },
            {
                type: "juist-fout",
                vraag: "In C# kan een static methode toegang krijgen tot de niet-static velden van een klasse zonder een instantie van de klasse te maken.(Geldt voor 2 punten)",
                opties: ["Juist", "Fout"],
                correctAntwoord: "fout"
            },
            {
                type: "meerkeuze",
                vraag: "Wat is het gevolg van het gebruik van de ref keyword bij het doorgeven van een parameter in een C# methode? (Geldt voor 2 punten)",
                opties: ["De parameter wordt alleen-leesbaar binnen de methode. ", "De waarde van de parameter kan worden gewijzigd binnen de methode, en de wijziging wordt buiten de methode weerspiegeld. ", "De parameter wordt automatisch geconverteerd naar nullable ",],
                correctAntwoord: "De waarde van de parameter kan worden gewijzigd binnen de methode, en de wijziging wordt buiten de methode weerspiegeld."
            },
            {
                type: "meerkeuze",
                vraag: "Wat gebeurt er wanneer je probeert een struct te doorgeven naar een methode zonder gebruik te maken van ref of out, en de methode de waarde wijzigt? (Geldt voor 2 punten)",
                opties: ["De waarde van de struct wordt automatisch aangepast in de methode, en de wijziging is zichtbaar buiten de methode. ", "De wijziging is alleen zichtbaar binnen de methode, de originele struct wordt niet gewijzigd buiten de methode. ", "De methode genereert een fout omdat struct alleen via ref of out kan worden doorgegeven. ",],
                correctAntwoord: "De wijziging is alleen zichtbaar binnen de methode, de originele struct wordt niet gewijzigd buiten de methode. "
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