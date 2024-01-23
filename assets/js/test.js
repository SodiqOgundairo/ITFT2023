let matrix = [
  [1, 2, 3], //0
  [4, 5, 6, 23], //1
  [7, 8, 9], //2
];

console.log(matrix[2][0]); //7

console.log(matrix[1][2]); //6

console.log(matrix[0][1]); //2

matrix[0][0] = 2 ** 2;
// matrix[0][0] = 5%2

console.log(matrix[0][0]); //1

if (1 == 2) {
  console.log("Correct");
} else {
  console.log("Incorrect");
}

let myTestList = document.getElementById("lists");

myTestList.style.color = "red";
myTestList.style.fontSize = "50px";

myTestList.textContent = "WE HAVE SUCCESFULLY MANIPULATED THIS";
console.log(myTestList);

let testing = document.getElementById("testing");

testing.style.color = "yellow";
testing.style.backgroundColor = "black";
testing.style.padding = "20px";
testing.innerHTML = "WOAH!!!";

for (k = 0; k <= 10; k++) {
  console.log(k);
}

let hikima = [
  "AY",
  100,
  "Travon",
  "Yemi",
  "Jalen",
  null,
  true,
  "Anthony",
  "Tylar",
  "Giovanni",
  "Emmanuel",
  "Christopher",
  "Marquis",
];

// console.log(hikima.length)

// alert('Hey Yemi')

// confirm('Are you alright?')

// prompt('Type Enter to continue')

// setTimeout(function () {
//   alert("it's 5 seconds already");
// }, 5000);

function testAlert() {
  alert("My first custom alert message");
}

// testAlert();

function countHikima() {
  for (i = 0; i <= hikima.length; i++) {
    console.log(hikima[i]);
  }
}

// countHikima()

let random_name = "Yemi";

function checkName() {
  if (random_name == "Yemi") {
    alert("Yes! the instructor is Yemi");
  } else {
    alert("No! it is someone else");
  }
}

// checkName()
let foo = "bye";
let a = 5;
let b = 8;
let c = 1;
let d = 20;

function addNumber(ay, yemi) {
  alert(ay + yemi);
}

// addNumber()

// addNumber(a, b)

// addNumber(c, d)

// addNumber(foo, foo)

// addNumber(c, b)

// addNumber(a, d)

let testNumbers = [1, 2, 3, 4, 5, 6, 7, 8];

function testNumberarrar(e) {
  alert(e.length);
}

// testNumberarrar(testNumbers)

// testNumberarrar(hikima)

// testNumberarrar(matrix[1])

// let enteredNumber = prompt("Enter your number here");
// let isEven = isEvenFunction(enteredNumber);

// function isEvenFunction(n) {
//     //your code here
//     return n % 2 === 0;
// }

// if (isEven) {
//   alert("The number is even!");
// } else {
//   alert("The number is odd");
// }

// function windowClick () {
//     alert('Somewhere as been clicked')
// }

// window.onclick = windowClick


// function Clicked () {
//     alert ('I have been clicked')
// }



// let buttons = document.getElementById('buttons')

buttons.addEventListener(onmouseover, mouseIsActive())

// let change = document.getElementById('iii')

function mouseIsActive(){
    alert('Mouse is here')
    buttons.textContent = 'Change is active'
}


// Get button element
const button = document.getElementById("buttons");

// Add event listener for "mouseover" 
button.addEventListener('mouseover', handleHover);

// Callback function 
function handleHover() {
  // Change color on hover
  this.style.backgroundColor = "lightblue";
}

// Add event listener for "mouseout" 
button.addEventListener('mouseout', handleMouseOut);

// Mouse out callback
function handleMouseOut() {
  // Reset color 
  this.style.backgroundColor = "";  
}