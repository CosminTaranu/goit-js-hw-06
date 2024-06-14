const fontSizeControl = document.getElementById ('font-size-control');
const spanText = document.getElementById ('text');

fontSizeControl.addEventListener ("input", function () {

   spanText.style.fontSize = fontSizeControl.value + 'px';

});

spanText.style.fontSize = fontSizeControl.value + 'px';
