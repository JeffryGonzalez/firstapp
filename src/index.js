const sumButton = document.getElementById('sum');
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const answer = document.getElementById('answer');
import { add, subtract } from './math';

sumButton.addEventListener('click', function () {
    const sum = add(num1.valueAsNumber, num2.valueAsNumber);
    answer.innerText = sum.toString();
})

console.log(add(20, 25));