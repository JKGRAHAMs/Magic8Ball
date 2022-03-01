let userName = "Joey";

if(userName === "") {
    console.log(`Hello!`);
} else {
    console.log(`Hello, ${userName}!`);
}

let userQuestion = "Will I understand all this below?";

if(userName != "" && userQuestion != "") {
    console.log(`${userName}'s question is: ${userQuestion}`);
} else if(userName === "" && userQuestion != "") {
    console.log(`Your question is: ${userQuestion}`);
} else {
    console.log("Ask a question");
}

let randomNumber = Math.floor(Math.random() * 8);

if(randomNumber === 1) {
    console.log("It is certain")
} else if(randomNumber === 2) {
    console.log("It is decidedly so")
} else if(randomNumber === 3) {
    console.log("Reply hazy try again")
} else if(randomNumber === 4) {
    console.log("Cannot predict now")
} else if(randomNumber === 5) {
    console.log("Do not count on it");
} else if(randomNumber === 6) {
    console.log("My sources say no")
} else if(randomNumber === 7) {
    console.log("Outlook not so good")
} else {
    console.log("Signs point to yes")
}
