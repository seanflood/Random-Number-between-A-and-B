
//Welcome user and explain rules
alert('Welcome to the Random Number Generator! Follow the instructions to get your random number!');

// Collect input from a user
// Convert the input to a number
var userSelectionOne = prompt("Choose the low number!");
var userSelectionTwo = prompt("Choose the high number!")

//To confirm data type of user input
console.log(typeof userSelectionOne, typeof userSelectionTwo);

userSelectionOne = parseInt(userSelectionOne);
userSelectionTwo = parseInt(userSelectionTwo);
console.log(typeof userSelectionOne, typeof userSelectionTwo);




if(userSelectionOne < userSelectionTwo || userSelectionTwo > userSelectionOne){
    if (userSelectionOne && userSelectionTwo) {
    // Math.floor and random to round down and choose a number between 1 and the users selection 

var randoTotal = Math.floor(Math.random() * (userSelectionTwo - userSelectionOne + 1)) + userSelectionOne;



// Insert final string into html to display user input and random number 

document.querySelector('main').innerHTML = (`<h1>A random number between ${userSelectionOne} and ${userSelectionTwo} is ${randoTotal}!!</h1>`);

}else{
    alert('Oops! Please reload page and be sure to enter a real number!');
}
}else {
    alert('Oops! Please make sure the first number is lower then the second!'); 
}; 













