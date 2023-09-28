// 1 exercise
function factorialRecursive(n) {
    if (n === 0){
        return 1;
    }else{
        return n * factorialRecursive(n - 1);
    }
}

const number = 5;
const factorial = factorialRecursive(number);
console.log(`Факториал ${number} равен ${factorial}`);

// 2 exercise

const regEx = /[^\d\+]/g;
const test = 'My name 457 is Alex'

console.log(test.replace(regEx, ''));

// 3 exercise

const text = "Hello\tWorld\nTest";
const whitespaceMatches = text.match(/\s/g);

if (whitespaceMatches) {
  console.log("Пробельные символы в строке:", whitespaceMatches);
} else {
  console.log("Пробельных символов в строке нет.");
}

// dop 

function countChar(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === char) {
        count++;
      }
    }
    return count;
  }
  
  const inputString = "loremipsumdolor";
  const targetChar = "o";
  const result = countChar(inputString, targetChar);
  console.log(result); 