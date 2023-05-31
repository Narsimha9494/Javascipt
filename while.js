// var myArray = [];

// var i = 0;
// while(i < 5) 
// {
//   myArray.push(i);
//   i++;
// }
// console.log(myArray);



// Based on Date Of Birth year return age 

const prompt = require('prompt-sync')();
console.log(" ");

const dobYear = prompt('Please enter dob Year :');
const dobYearabc = prompt('Please enter dob Year abb :');
console.log(" ");

console.log(getAge(dobYearabc))
console.log(" ");

function getAge(dob) {
  return new Date().getFullYear() + dob;
}




