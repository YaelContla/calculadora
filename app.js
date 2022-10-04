
// ************************************************
// Calculadora
// Sumar
let valor = 0;
let input1 = document.getElementById('num1');
let input2 = document.getElementById('num2');
let resultado = document.getElementById('result');
const btnAdd = document.getElementById('add');
const btnSub = document.getElementById('subtraction');
const btnDiv = document.getElementById('division');
const btnMulti = document.getElementById('multiply');
// function add(a,b){
//     return a+b;
// }
// Funciones
const add = (a,b) => a + b;
const subtraction = (a,b) => a - b;
const division = (a,b) => a / b;
const multiply = (a,b) => a * b;

const reset = () => {
    input1.value = '';
    input2.value = '';
}

// Event Listener Reset SUMA
btnAdd.addEventListener('click', function(){
    if (input1.value !== '' && input2.value !== '') {
        valor = add(parseInt(input1.value), parseInt(input2.value));
        reset();  
        resultado.innerText = valor;
    }
});

// Event Listener Reset RESTA
btnSub.addEventListener('click', function(){
    if (input1.value !== '' && input2.value !== '') {
        valor = subtraction(parseInt(input1.value), parseInt(input2.value));
        reset(); 
        resultado.innerText = valor;
    }
})

// Event Listener Reset DIVISION
btnDiv.addEventListener('click', function(){
    if (input1.value !== '' && input2.value !== '') {
        if (input2.value > 0) {
            valor = division(parseInt(input1.value), parseInt(input2.value)); 
            reset(); 
            resultado.innerText = valor;
        }
    } 
})

btnMulti.addEventListener('click', function(){
    if (input1.value !== '' && input2.value !== '') {
        valor = multiply(parseInt(input1.value), parseInt(input2.value)); 
        reset(); 
        resultado.innerText = valor;
    }
})
