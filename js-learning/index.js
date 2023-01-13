// This is my first Javascript Code
// console.log('Hello World');
let myname = "Enaijite";
console.log(myname);

// variable can't be a reserved keyword e.g. if
// should be meaningful
// can't start with a number
// can't contain space or hyphen
// Are Case-sensitive

const interestRate = 0.3;
console.log(interestRate);
// make constant if the variable will not need to change

//class
let person ={
  Name: 'Jite',
  age: 18
};

//dot notation
person.Name = "Chris";

//bracket notation
person['Name'] = 'Bruce';

console.log(person.Name);

//Array
//Can store diffferent types in an array
let selectedColours = ['red','blue'];
selectedColours[2] = 'green';
selectedColours[3]= 7;
console.log(selectedColours);

//functions
function greet(name, lastName) {
  console.log('Hello ' + name + ' ' + lastName);
}
greet('Arthur','Boyle');

//calculating a value
function square(number) {
  return number * number;
}

console.log(square(4))





































