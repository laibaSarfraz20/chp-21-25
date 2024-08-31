// 1
let A = [24, 53, 78, 91, 12];
let largest = A[0]; 
for (let i = 1; i < A.length; i++) {
  if (A[i] > largest) {
    largest = A[i];
  }
}
document.write("The largest number in the array is:", largest); 

//  2

const largestNumber = Math.max(...A);
document.write("The largest number using Math.max():", largestNumber); 

// 3

let word = "Pakistani";
let letter = "n";

let index = word.indexOf(letter);

if (index !== -1) {
    document.write(`The letter "${letter}" is found at index ${index} in "${word}".`);
} else {
    document.write(`The letter "${letter}" is not found in "${word}".`);
}
// 4
let words = "Hello World";
let letters = "l";

const indexs = word.lastIndexOf(letters);

if (indexs !== -1) {
    document.write(`The last occurrence of the letter "${letters}" is found at index ${indexs} in "${words}".`);
} else {
    document.write(`The letter "${letters}" is not found in "${words}".`);
}
// 5
let nationality = "Pakistani";
let targetIndex = 3;

if (targetIndex >= 0 && targetIndex < nationality.length) {
  let character = nationality[targetIndex];
  document.write(`The character at index ${targetIndex} is "${character}".`);
} else {
    document.write(`Index ${targetIndex} is out of range for the word "${nationality}".`);
}

// 6
let  nationalOf = "Pakistani";
let  targetsIndex = 3;

if (targetsIndex  >= 0 && targetsIndex < nationalOf.length) {
    let  character = nationalOf[targetIndex]; 
  document.write(`The character at index ${targetsIndex} is "${character}".`);
} else {
    document.write(`Index ${targetsIndex} is out of range for the word "${nationalOf}".`);
}
