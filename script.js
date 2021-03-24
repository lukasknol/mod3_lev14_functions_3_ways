// Function declarations
function totalDeclaration(number1, number2) {
   return number1 + number2;
}

totalDeclaration(5, 6); // 11


// Function expressions
const totalExpression = function (number1, number2) {
   return number1 + number2;
};

totalExpression(5, 6); // 11


// Arrow functions
const totalArrow = (number1, number2) => {
   return number1 + number2;
};

totalArrow(5, 6); // 11