console.log ("hij doet t");


//function declaration
function xxsquared1(number1, number2) {
    const number12 = number1 * number1;
    const number22 = number2 * number2;
    const numberadd = number12 + number22;
    return numberadd * numberadd;
  }

  //function expression
  const xxsquared2 = function (number1, number2) {
    const number12 = number1 * number1;
    const number22 = number2 * number2;
    const numberadd = number12 + number22;
    return numberadd * numberadd;
  };
  

//arrow function
  const xxsquared3 = (number1, number2) => {
    const number12 = number1 * number1;
    const number22 = number2 * number2;
    const numberadd = number12 + number22;
    return numberadd * numberadd;
  };


  const a = 5;
  const b = 3;

  const x2declaration = xxsquared1(a, b);
  const x2expression = xxsquared2(a, b);
  const x2arrow = xxsquared3(a, b);
  console.log (x2declaration);
  console.log (x2expression);
  console.log (x2arrow);
 

  