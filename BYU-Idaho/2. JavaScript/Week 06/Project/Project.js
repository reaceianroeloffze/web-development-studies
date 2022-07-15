
// Subtract 2 numbers
const subtract = function (number1, number2) {
    return number1 - number2;
}
// Muklitply and divide 2 numbers
const multiply =  (number1, number2) => number1 * number2;
const divide = function(number1, number2) {
    return number1 / number2;
}

// Perform frequency calculation
const calculate = () => {
    let transmitFrequency = parseInt(document.querySelector("#transmit-frequency").value);
    let receiveFrequency = subtract(transmitFrequency, 7.05);
    let transmitDuplexor = multiply((multiply((divide(49.5 , transmitFrequency)) , 100)) , 2);
    let receiveDuplexor = multiply((multiply((divide(49.5 , receiveFrequency)) , 100)) , 2);
    roundReceiveFrequency = receiveFrequency.toFixed(4);
    roundTransmitDuplexor = transmitDuplexor.toFixed(2);
    roundReceiveDuplexor = receiveDuplexor.toFixed(2);

    document.querySelector("#receive-frequency").value = roundReceiveFrequency;
    document.querySelector("#transmit-duplexor").value = roundTransmitDuplexor;
    document.querySelector("#receive-duplexor").value = roundReceiveDuplexor;
}

document.querySelector("#calculate").addEventListener("click", calculate);

const currentDate = new Date();
let currentYear;
currentYear = currentDate.getFullYear();
document.querySelector('#year').textContent = currentYear;    

document.querySelector('#year').textContent = currentYear;    