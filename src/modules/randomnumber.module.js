import {Module} from '../core/module';
import {random} from '../utils';

export class RandomNumber extends Module {
    constructor(type, text){
        super(type, text);
        this.type = type;
        this.text = text;
    }
    createNewElement(type, className){
        const element = document.createElement(type);
        element.className = className;
        return element;
    }

    trigger() {    
    const check = document.querySelector('.randomNumber');
    if(!check){
    const mainBlock = this.createNewElement('div', 'randomNumber');
    mainBlock.style.textAlign  = 'center';

    const titleFunction = document.createElement('h1');
    titleFunction.textContent = 'Рандомайзер целыx, положительных чисел';
    titleFunction.style.color = "#ff1493"
    const fromNumber = this.createNewElement('input', 'from');
    fromNumber.setAttribute('placeholder', 'от');
    const toNumber = this.createNewElement('input', 'to');
    toNumber.setAttribute('placeholder', 'до');
    const mainButton = this.createNewElement('button', 'mainButton');
    const resultWindow = this.createNewElement('div', 'result');
    mainButton.textContent = 'сгенерировать случайное целое число';

    mainBlock.append(titleFunction, fromNumber, toNumber, mainButton, resultWindow);
    document.body.append(mainBlock);
    
    const button = document.querySelector('button');
    const resultRandomValue = document.querySelector('.result');

    document.addEventListener('click', (event) =>{
        if(event.target === document.body){
            mainBlock.remove()
        };
    })

    button.addEventListener('click', () =>{
    const minNumber = document.querySelector('.from');
    const maxNumber = document.querySelector('.to');

    const x = Number(minNumber.value);
    const y = Number(maxNumber.value);

        if(isNaN(x) || isNaN(y)){
            resultRandomValue.textContent = 'Дурак введи число';
        }else if(x < 0 || y < 0){
            resultRandomValue.textContent = 'Введите положительные числа';
        }else if(minNumber.value === "" || maxNumber.value === ""){
            resultRandomValue.textContent = 'Значени не должны быть пустыми!';
        }else if(minNumber.value >= maxNumber.value){
            resultRandomValue.textContent = 'Подумай еще чуть-чуть';
        }else{
            resultRandomValue.textContent = random(x, y);
        }})
        }
    }
}

