var complimentsArray = [
    "You have cool hair",
    "You are nice to be around",
    "You make the world shine",
    "You make everything better",
    "Your smile makes others feel happy",
    "I like you",
    "You have cool shoes",
    "You have a great smile",
    "You have great style",
    "You are patient",
    "You are kind",
    "You are a sexy parallel parker",
    "The food you make is DELICIOUS",
    "You are smart",
    "You are a good listener",
    "You are intentional",
    "You are fun to be around",
    "You have many positive characteristics",
    "It is magical to be with you",
    "You light up the room. Literally",
    "You are the best part of someones day",
    "You make cool things",
    "You are an excellent listener",
    "You are a non-judgemental person",
    "You are productive",
    "You are an encouraging person",
    "You are an approachable individual",
    "You turn strangers to friends with ease"
];

var randomIndex = Math.floor(Math.random() * textArray.length);
var randomElement = textArray[randomIndex];

document.getElementById("compliment-element").innerHTML = randomElement;
