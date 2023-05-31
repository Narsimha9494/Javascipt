const prompt = require('prompt-sync')();

const gender = prompt('What is your gender? :');
console.log(" ");

const something = false;




// if(something) {

// }



if(gender == 'male') {
    const valtype = prompt('Please enter your sal :');
let sal = valtype
if (sal >= 6000 && sal < 12000){
console.log(' Good boy');
}
else if (sal >= 12000 && sal < 18000){
console.log('very good boy');
}
else
console.log('out of range');
}


else if(gender == 'female') {
    const valtype = prompt('Please enter your sal :');
let sal = valtype
if (sal >= 6000 && sal < 12000){
console.log(' Good girl');
}
else if (sal >= 12000 && sal < 18000){
console.log('very good girl');
}
else
console.log('out of range');
}

else
    console.log("Invalid Gender\n");


