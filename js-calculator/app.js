"use strict";
//Vahagn Calculator
const screenDisplay = document.querySelector('.screen')
const buttons = document.querySelectorAll('button')

let calculation = []
let accumulativeCalculation

function calculate(button) {
 // console.log(button)
  const value = button.textContent
  if(value === "CLEAR"){
      calculation=[]
      screenDisplay.textContent="."
  } else if(value ==="="){
      console.log(accumulativeCalculation);
      screenDisplay.textContent = eval(accumulativeCalculation)
  } else {
    calculation.push(value)
    accumulativeCalculation=calculation.join('')
    screenDisplay.textContent=accumulativeCalculation
    console.log(calculation);
  }
}

buttons.forEach(button=> button.addEventListener('click', () => calculate(button)))
/// 2023/2