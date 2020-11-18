/*
create a variable named FB that takes numbers
write an else/if conditional that:
prints out "Fizz" if the number is divisble by 3
prints out "Buzz"  if the number is divisable by 5
prints out "Fizz Buzz" if number is divisible by both 3 and 5
convert this to switch statement then to ternary
*/
let x = 3;
if (x/3, % x ===0){
    console.log('Fizz');
} else if (x/5, % x ===0) {
    console.log('Buzz');
} else if (x/3, x/5, x === 0) {
    console.log('Fizz Buzz');
}
// 3, 5, 15
let FB = 3;
/*  basically what we are solving for */
if (FB % 3 === 0 && FB % 5 === 0) {
    console.log("Fizz Buzz");
}else if (FB % 5 === 0) {
    console.log("Buzz");
} if (FB % 3 === 0){
    console.log('Fizz');
}

// couldnt get this one from adam
switch (true) {
    case (FB % 3 === 0 && FB 5 === 0):
        console.log('Fizz Buzz');
        break;
    case FB % 5 === 0:
        console.log('Buzz')
        break;
        case FB % 3 === 0:
            console.log('Fizz');
            break;
}



// Ternary

(FB) % 15 === 0)
? console.log('Fizz Buzz')
: (FB % 5 === 0)
    ? console.log('Buzz')
    : console.log('Fizz')
    : console.log(FB);




let Fizz = 6
let Buzz = 10
let FizzBuzz = 15

if (Fizz > 6){
    console.log('Nope');
} else {
    console.log('Fizz');
}

if (Buzz < 10){
    console.log('Nope');
} else {
    console.log('Buzz');
}








switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }

//IF ELSE
let weather = 75;

if (weather < 70){
    console.log('wear a jacket');
} else {
    console.log("no jacket necessary!");
}

// you can blend complex conditionals and if-else statements based upon yopur need:
if (weather > 70 && typeof weather === 'number'){
    console.log('this weather is amazing');
} else {
    console.log('either the temperature is cool, the variable is not a string, or both');
}

//ELSE IF

//IF elseif statements can be chained

let age = 30;

if (age >= 25){
    console.log('yay! you can rent a car!');
} else if (age > 21){
    console.log('yay! you can drink');
}else if (age > 21){
    console.log('yay! you can vote!');
} else if (age > 18){
    console.log('Sorry, you are too young to do anything fun');
}