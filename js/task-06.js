const validationInput = document.querySelector ( "#validation-input");

validationInput.addEventListener ("blur", () => {
    const nameLength = parseInt (validationInput.getAttribute("data-length"), 7);
    if (validationInput.value.length === nameLength) {
        validationInput.classList.add("valid");
        validationInput.classList.remove("invalid");
    }
    else {
        validationInput.classList.add("invalid");
        validationInput.classList.remove("valid");
    }
});