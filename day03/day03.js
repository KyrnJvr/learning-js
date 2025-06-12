
let num1 = parseFloat(prompt("Enter first number: "));
let operator= prompt("Enter operator (+, -, *, /):");
let num2 = parseFloat(prompt("Enter second number: "));
let result;

if (isNaN(num1) || isNaN(num2)){
    alert("Invalid number input.")
} else {
    switch (operator){
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if (num2 == 0) {
                alert("Cannot divide by zero.")
                break;
            }
            result = num1 / num2;
            break;
        default:
            result = "Invalid Operator";
    }
    alert(`Result: ${result}`);
}