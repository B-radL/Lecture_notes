// CHALLENGE 1
// Who's name is longer?
​
/* BRONZE
Write two variables. One will store your name and another will store a friend's name. Find out what property you can use to check how long the names are. Console log how many letters are in each name.
*/

let firstname = "Brad";
let lastname = "Lacy";
console.log(firstname + ", " + lastname);
console.log(firstname.length);
console.log(lastname.length);


let firstnamebuddy = "Stan";
let lastnamebuddy = "Wojohowitch";
console.log(firstnamebuddy + ", " + lastnamebuddy);
console.log(firstnamebuddy.length);
console.log(lastnamebuddy.length);
console.log(lastname > lastnamebuddy);
console.log(lastname < lastnamebuddy);


//silver portion of string 
let brad = "brad";
let pauley = "pauley";
console.log(brad.length);
console.log(pauley.length);
let myNameLength = brad.length;
let myothername = pauley.length;

if (brad.length > pauley.length) {
    console.log(`${ brad } is longer than ${ pauley } by ${ myNameLength - myothername} characters`) //valid spot for java script code
} else if (brad.length === pauley.length){
    onmouseleave.log(`${brad} is equal in length to ${ pauley}`);
}

else {
    console.log(`${ pauley } is longer than ${ brad } by ${ myothername - myNameLength} characters`)
}


//challenge 2
// CHALLENGE 2
// Types Challenge
​
/* BRONZE
Create an Object that contains a string, number, boolean, and object.
Console.log the type of one of the values in the object.
*/
​
/* SILVER
Write a conditional that checks the type of one of the values stored in the object 
and console logs the data type. If the value is not a string, number, boolean, or object console log 'What are you?!'
*/

objectName.Boolean
objectName.Number
objectName.String
objectName.objectName

let myVariable = {
    firstvalue: "I am a string",
    secondValue: 9001,
    thirdValue: false,
    fourthValue: {}
} //object

let valueToCheck = myVariable.firstvalue;

//typeof -> tells you the typ of something
// if it is a which you read === string then console.log
// Check one at a time
if(typeof valueToCheck === "string") {
    console.log("it is a STRING!");
} else if (typeof valueToCheck === "number") {
    console.log("It is a NUmber");  
}  else if (typeof valueToCheck === "boolean") {
    console.log("It is a Bool")  
}  else if (typeof valueToCheck === "object") {
    console.log("It is a object");  
}  else {
    console.log("Who are you??");
}






