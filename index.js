const currentUser = "Grace Hopper";
const welcomeMessage = "Welcome to Flatbook, " + currentUser + "!";
const excitedWelcomeMessage = welcomeMessage.toUpperCase();
const shortGreeting = `Welcome, ${currentUser.slice(0,5)}!`;

console.log(welcomeMessage);
console.log(excitedWelcomeMessage);
console.log(shortGreeting);