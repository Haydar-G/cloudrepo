// //Conditions:-

// //if
// //if else
// //if else if else
// //switch for menus
// //ternary operator

// // Check and do
// if (condition) {
//     //this part of the code runs if it is truthy (not true, meaning no red flags attached)
// }

// //if else (do this or that)
// if (condition) {
//     //this part of the code runs if it is truthy (not true, meaning no red flags attached)
// } else {
//     //this part of the code runs if falsy
// }

// //if else if else (alot of choices)
// if (condition) {
//     //this part of the code runs if it is truthy (not true, meaning no red flags attached)
// } else if (condition2) {
//     //this part of the code runs if condition2 is truthy

// } else { }

// //switch
// //for menus like gears of a car
// switch (expression) {
//     case value1:
//         //drive
//         break;
//     case value2:
//         //park
//         break;
//     default:
//     //L2
// }

// //ternary operator
// //shorter if else
// condition ? expressionIfTrue : expressionIfFalse;
// //only use if mastered

//if examples
// let number = 10;
// if(number=>0){
// console.log(number + " " + "is a positive number")
// };

// let isRaining = true;
// if(isRaining){
// console.log(isRaining + " " + "remember to take your raincoat")
// };
// let age = 20
// if(age>=20 && age<=30){
//     console.log("Eligible for chick request")
// };

// if (age>=18){
//     console.log("Your are an adult")
// };

// //comparisons

// let number2 = prompt("enter number:");
// if (number2>0){
//     alert(`${number2} is a positive`);
//     console.log(`${number2} is a positive`);
// } else if(number2 < 0){
//     alert(`${number2} is a negative`);
//     console.log(`${number2} is a negative`);
// } else{
//     alert(`the number is zero`);
// }

//farmer example

// let quantity = prompt("enter quantity:");
// if (quantity >= 100 && quantity <= 500) {
//     alert("request accepted");
// } else {
//     alert("invalid quantities");
// }

//switch example 1
// let number = prompt(`enter number:`)
// switch (true) {
//     case number > 0:
//         alert(`${number} is positive`);
//         console.log(`${number} is positive`);
//         break;
//     case number == 0:
//         alert(`${number} is 0`);
//         console.log(`${number} is a 0`);
//         break;
//     case number < 0:
//         alert(`${number} is negative`);
//         console.log(`${number} is negative`);
//         break;
//     default:
//         alert(`${number} is invalid`);
//         console.log(`${number} is invalid`);
// }

//switch example 2
// let dayInput = prompt(`what day is it today?:`)
// let day = dayInput.toLocaleLowerCase();
// switch (day) {
//     case "monday":
//         alert(`today is monday`);
  
//         break;
//     case "tuesday":
//         alert(`today is tuesday`);
      
//         break;
//     case "wednesday":
//         alert(`today is wednesday`);
     
//         break;
//     default:
//         alert(`office is closed`);
// }