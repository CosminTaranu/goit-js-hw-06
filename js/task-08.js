

const loginForm = document.querySelector (".login-form");
loginForm.addEventListener ("submit", function(e) {
    e.preventDefault();


const email = loginForm.elements['email'].value;
const password = loginForm.elements['password'].value;

if ( email === '' || password === '') {
    alert ('Trebuie sa completezi toate campurile');
    return;
}
const formData = {
    email: email,
    password: password
};
console.log(formData);
loginForm.reset();
});