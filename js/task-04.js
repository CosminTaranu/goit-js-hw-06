let counterValue = 0 ;

const valueFromSpan = document.querySelector (`#value`);
const decrement = document.querySelector (`button[data-action="decrement"]`);
const increment = document.querySelector(`button[data-action="increment"]`);

function updateValue () {
    valueFromSpan.textContent = counterValue;
}

decrement.addEventListener (`click`, () =>{
    counterValue -= 1;
    updateValue();
})


increment.addEventListener (`click`, () =>{
    counterValue += 1;
    updateValue();
})