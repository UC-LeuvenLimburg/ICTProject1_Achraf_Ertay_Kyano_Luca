const dice = document.getElementById('dice');
const rollButton = document.getElementById('rollButton');
const result = document.getElementById('result');

const rotations = [
    { x: 0, y: 0 },     // 1
    { x: 0, y: -90 },   // 2
    { x: 0, y: -180 },  // 3
    { x: 0, y: -270 },  // 4
    { x: -90, y: 0 },   // 5
    { x: 90, y: 0 }     // 6
];

const pageDestinations = {
    1: "/html/pagina1.html",
    2: "/html/pagina2.html",
    3: "/html/pagina3.html",
    4: "/html/pagina4.html",
    5: "/html/pagina5.html",
    6: "/html/pagina6.html"
};

function rollDice() {
    if (dice.classList.contains('rolling')) return;
    dice.classList.add('rolling');
    result.textContent = "Rollen...";

    const randomValue = Math.floor(Math.random() * 6) + 1;

    setTimeout(() => {
        dice.classList.remove('rolling');
        const rotation = rotations[randomValue - 1];
        dice.style.transform = `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`;
        result.textContent = `Je hebt ${randomValue} gegooid!`;

        // Automatisch navigeren na 2 seconden
        setTimeout(() => {
            window.location.href = pageDestinations[randomValue];
        }, 1000);
    }, 1000);
}

rollButton.addEventListener('click', rollDice);
dice.addEventListener('click', rollDice);