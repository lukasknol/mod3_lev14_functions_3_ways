// Function declarations
function totalDeclaration(number1, number2) {
   const number1Squared = number1 * number1;
   const number2Squared = number2 * number2;
   const sum = number1Squared + number2Squared;
   const sumSquared = sum * sum;
   return sumSquared;
}

console.log(totalDeclaration(5, 6)); 


// Function expressions
const totalExpression = function (number1, number2) {
   const number1Squared = number1 * number1;
   const number2Squared = number2 * number2;
   const sum = number1Squared + number2Squared;
   const sumSquared = sum * sum;
   return sumSquared;
};

console.log(totalExpression(5, 6)); 


// Arrow functions
const totalArrow = (number1, number2) => {
   const number1Squared = number1 * number1;
   const number2Squared = number2 * number2;
   const sum = number1Squared + number2Squared;
   const sumSquared = sum * sum;
   return sumSquared;
};

console.log(totalArrow(5, 6));
