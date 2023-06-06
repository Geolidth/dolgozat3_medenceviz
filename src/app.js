//Csajbók-Reményi László SZOFT-I-2-E 2023.06.06

const setvalue = document.querySelector('#value');
const calcbutton= document.querySelector('#calcbutton');
const height= document.querySelector('#height');
const weight= document.querySelector('#weight');
const lenght= document.querySelector('#lenght');

window.addEventListener('load', () => {
    init();
});

function init() {
    if (calcbutton) {
        calcbutton.addEventListener('click', () => {
            setvalue.value=calcValue(Number(height.value),weight.value,lenght.value);
            clearValues();
        });
    }
};


function calcValue(height,weight,lenght) {
    if(checkInput(height) && checkInput(weight) && checkInput(lenght)&&height>=10){
    let correctHeight = height - 10;
    let correctvalue = correctHeight * weight * lenght / 1000000;
    return correctvalue;
    }
}

function checkInput(input) {
    let inputStr = String(input);
    let inputNum = Number(input);
    if (inputStr.match(/^[0-9.]+$/)) {
        if (inputNum > 0) {
            return true;
        } else {
            return false;
        }
    }
    else {
        return false;
    }
}

function clearValues(){
    height.value='';
    weight.value='';
    lenght.value='';
}
