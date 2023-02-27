//generate a random name from the list of names

// Generate a random name from the list of names
export function generateName() {
    const randomColor = Math.floor(Math.random() * colors.length);
    const randomAnimal = Math.floor(Math.random() * animals.length);

    return `${colors[randomColor]}${animals[randomAnimal]}`;
}


const colors = [
    "Punainen",
    "Sininen",
    "Vihreä",
    "Keltainen",
    "Musta",
    "Valkoinen",
    "Oranssi",
    "Ruskea",
    "Violetti",
    "Pinkki",
    "Beige",
    "Kultainen",
    "Hopeinen",
    "Neon",
];

const animals = [
    "Kissa🐈",
    "Koira🐕",
    "Kana🐔",
    "Villisika🐗",
    "Koala🐨",
    "Lehmä🐄",
    "Kettu🦊",
    "Kotka🦅",
    "Leijona🦁",
    "Lammas🐑",
    "Laama🦙",
    "Tikka🦃",
    "Rotta🐀",
    "Norsu🐘",
    "Pingviini🐧",
    "Panda🐼",
    "Papukaija🦜",
    "Flamingo🦩",
    "Pöllö🦉",
    "Sorsa🦆",
    "Tiikeri🐅",
    "Siili🦔",
    "Laiskiainen🦥",
    "Hamsteri🐹",
    "Haisunäätä🦡",
    "Lisko🦎",
];
