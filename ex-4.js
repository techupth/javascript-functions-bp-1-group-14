// Exercise #4 Grouping Function with Objects

// Start coding here
let add = ( a , b) => a + b;
let subtract = ( a , b ) => a - b;
let multiply = ( a , b ) => a * b;
let divide = ( a , b ) => a / b;

let calculator = { add: add,
                    subtract: subtract,
                    multiply: multiply,
                    divide: divide  };
                
let resaultAdd = calculator.add( 10 , 20 )
console.log(resaultAdd)

let resaultDivide = calculator.divide( 3000 , 10 )
console.log(resaultDivide)
