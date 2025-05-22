const alleVragen = [
            {
                type: "meerkeuze",
                vraag: "Wat is het doel van een routingtabel in een netwerk?   ",
                opties: [" Om de grootte van pakketten te controleren  ", "Om de route naar bestemmingen te bepalen","Om MAC-adressen te koppelen aan IP-adressen ",],
                correctAntwoord: "Om de route naar bestemmingen te bepalen"
            },
            {
                type: "meerkuze",
                vraag: "Wat doet het ARP-protocol?",
                opties: ["Het koppelt IP-adressen aan MAC-adressen", "Het beheert TCP-verbindingen", "Het beheert UDP-verbindingen",],
                correctAntwoord: "Het koppelt IP-adressen aan MAC-adressen"
            },
            {
                type: "meerkeuze",
                vraag: "Wat betekent MTU?",
                opties: ["Maximum Transmission Unit", "Maximum Transfer Unit ", "Maximum Time Utility", ],
                correctAntwoord: "Maximum Transmission Unit"
            },
            {
                type: "meerkeuze",
                vraag: "Wat is een IP-header?",
                 opties: ["Een deel van een IP-adres", "Metadata die informatie over een IP-pakket bevat", "Een veld dat MAC-adressen opslaat", ],
                correctAntwoord: "Metadata die informatie over een IP-pakket bevat"
            },
            {
                type: "meerkeuze",
                vraag: "Wat is het doel van ICMP in netwerken?",
                opties: ["Pakketten routeren", "Diagnostische en foutmeldingsfuncties uitvoeren","Verbindingen opzetten tussen apparaten ", ],
                correctAntwoord: "Diagnostische en foutmeldingsfuncties uitvoeren"
            },
            {
                type: "meerkeuze",
                vraag: "Wat is het verschil tussen TCP en UDP?",
                opties: ["TCP is verbindingsloos; UDP is verbindingsgericht ", "TCP biedt betrouwbaarheid; UDP is sneller maar niet betrouwbaar", "UDP biedt betrouwbaarheid; TCP is sneller maar niet betrouwbaar", ],
                correctAntwoord: "TCP biedt betrouwbaarheid; UDP is sneller maar niet betrouwbaar"
            },
            {
                type: "meerkeuze",
                vraag: "Wat doet SNAT in netwerken?",
                opties: ["Wijzigt het bron-IP-adres van een pakket", "Wijzigt het bestemming-IP-adres van een pakket", "Voegt nieuwe pakketten toe aan de router", ],
                correctAntwoord: "Wijzigt het bron-IP-adres van een pakket"
            },
            {
                type: "meerkeuze",
                vraag: " Wat doet DNAT?(geldt voor 2 punten) ",
                opties: ["Wijzigt het bron-IP-adres van een pakket", "Wijzigt het bestemming-IP-adres van een pakket", "Voegt nieuwe pakketten toe aan de router", ],
                correctAntwoord: "Wijzigt het bestemming-IP-adres van een pakket"
            },
            {
                type: "meerkeuze",
                vraag: "Wat is een basisfunctie van een firewall?    (Geldt voor 2 punten)",
                opties: ["Het opslaan van certificaten", "Het filteren van ongewenste netwerkverkeer","Het beheren van IP-adressen" ],
                correctAntwoord: "Het filteren van ongewenste netwerkverkeer"
            },
            {
                type: "meerkeuze",
                vraag: "Wat is een certificaat in netwerkbeveiliging? (Geldt voor 2 punten)",
                opties: ["Een sleutel om ARP-verzoeken te verzenden ", "Een digitaal document dat authenticiteit en encryptie waarborgt", "Een sleutel om ARP-verzoeken te accepteren",],
                correctAntwoord: "Een digitaal document dat authenticiteit en encryptie waarborgt"
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