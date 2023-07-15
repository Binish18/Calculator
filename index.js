let screen = document.getElementById('screen');  //id select ki
buttons = document.querySelectorAll('button');   // all buttons
let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == 'X') {   //kyunky x ni mathimatical operation
            buttonText = '*';
            screenValue += buttonText;     // is andr dalo
            screen.value = screenValue;    // scren mn show ho
        }
        else if (buttonText == 'C') {
            screenValue = "";    // clear krdo
            screen.value = screenValue;
        }
        
        else if (buttonText == '=') {
            screen.value = eval(screenValue);   // evalute krny ky lye
        }
        else {
            screenValue += buttonText;       // khaali sab
            screen.value = screenValue; 
        }

    })
}

