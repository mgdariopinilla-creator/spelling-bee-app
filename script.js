const words = [
    { word: "Classroom", spelling: "C - L - A - S - S - R - O - O - M" },
    { word: "Healthy", spelling: "H - E - A - L - T - H - Y" },
    { word: "Sink", spelling: "S - I - N - K" },
    { word: "Pencil case", spelling: "P - E - N - C - I - L / C - A - S - E" },
    { word: "Napkin", spelling: "N - A - P - K - I - N" },
    { word: "Octopus", spelling: "O - C - T - O - P - U - S" },
    { word: "Thursday", spelling: "T - H - U - R - S - D - A - Y" },
    { word: "Behind", spelling: "B - E - H - I - N - D" },
    { word: "Butterfly", spelling: "B - U - T - T - E - R - F - L - Y" },
    { word: "Windy", spelling: "W - I - N - D - Y" },
    { word: "Map", spelling: "M - A - P" },
    { word: "Adult", spelling: "A - D - U - L - T" },
    { word: "June", spelling: "J - U - N - E" },
    { word: "Doctor", spelling: "D - O - C - T - O - R" },
    { word: "Seeds", spelling: "S - E - E - D - S" },
    { word: "Hat", spelling: "H - A - T" },
    { word: "Teamwork", spelling: "T - E - A - M - W - O - R - K" },
    { word: "Jellyfish", spelling: "J - E - L - L - Y - F - I - S - H" },
    { word: "Blond", spelling: "B - L - O - N - D" },
    { word: "River", spelling: "R - I - V - E - R" },
    { word: "Vest", spelling: "V - E - S - T" },
    { word: "Umbrella", spelling: "U - M - B - R - E - L - L - A" },
    { word: "Food", spelling: "F - O - O - D" },
    { word: "Sheep", spelling: "S - H - E - E - P" },
    { word: "Elephant", spelling: "E - L - E - P - H - A - N - T" },
    { word: "Space", spelling: "S - P - A - C - E" },
    { word: "Caterpillar", spelling: "C - A - T - E - R - P - I - L - L - A - R" },
    { word: "Queen", spelling: "Q - U - E - E - N" },
    { word: "Flexible", spelling: "F - L - E - X - I - B - L - E" },
    { word: "Hospital", spelling: "H - O - S - P - I - T - A - L" },
    { word: "Monkey", spelling: "M - O - N - K - E - Y" },
    { word: "Evaporation", spelling: "E - V - A - P - O - R - A - T - I - O - N" },
    { word: "Teacher", spelling: "T - E - A - C - H - E - R" },
    { word: "Greeners", spelling: "G - R - E - E - N - E - R - S" },
    { word: "Preschool", spelling: "P - R - E - S - C - H - O - O - L" }
];

const container = document.getElementById("flashcards-container");

words.forEach(({ word, spelling }) => {
    const card = document.createElement("div");
    card.className = "flashcard";

    const wordElem = document.createElement("div");
    wordElem.className = "word";
    wordElem.textContent = word;

    const spellingElem = document.createElement("div");
    spellingElem.className = "spelling";
    spellingElem.textContent = spelling;

    const textarea = document.createElement("textarea");
    textarea.placeholder = "Write or draw here...";

    const button = document.createElement("button");
    button.textContent = "🔊 Pronounce";
    button.onclick = () => {
        const utterance = new SpeechSynthesisUtterance(word);
        speechSynthesis.speak(utterance);
    };

    card.appendChild(wordElem);
    card.appendChild(spellingElem);
    card.appendChild(textarea);
    card.appendChild(button);
    container.appendChild(card);
});
