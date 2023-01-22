import {Module} from '../core/module';
import * as HelpUtils from '../utils';

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
        HelpUtils.check();

    const mainBlock = this.createNewElement('div', 'randomNumber');
    mainBlock.setAttribute('id', 'customBlock');
    mainBlock.style.textAlign  = 'center';
    mainBlock.style.display  = 'inline-block';
    mainBlock.style.marginTop  = '200px';
    mainBlock.style.marginLeft  = '300px';

    const titleFunction = document.createElement('h1');
    titleFunction.textContent = 'Рандомайзер целыx, положительных чисел';
    titleFunction.style.color = "#052f4d"
    const fromNumber = this.createNewElement('input', 'from');
    fromNumber.setAttribute('placeholder', 'от');
    const toNumber = this.createNewElement('input', 'to');
    toNumber.setAttribute('placeholder', 'до');
    
    fromNumber.style.padding = '15px 20px';
    fromNumber.style.margin = '15px 20px';
    toNumber.style.padding = '15px 20px';
    toNumber.style.margin = '15px 20px';
    fromNumber.style.width = '150px';

    const mainButton = this.createNewElement('button', 'mainButton');
    mainButton.style.borderRadius = "20px";

    mainButton.style.display = 'inline-block'
    mainButton.style.cursor = 'pointer'
    mainButton.style.fontSize = '14px'
    mainButton.style.padding = '15px 20px'
    fromNumber.style.margin = '15px 20px';

    mainButton.style.color = '#354251';
    mainButton.style.background = '#ffff0';
    mainButton.style.border = '1px solid #354251';


    const resultWindow = this.createNewElement('div', 'result');
    mainButton.textContent = 'сгенерировать';

    mainBlock.append(titleFunction, fromNumber, toNumber, mainButton, resultWindow);
    document.body.append(mainBlock);
    
    const button = document.querySelector('button');
    const resultRandomValue = document.querySelector('.result');

    HelpUtils.removeBlock(mainBlock);

    button.addEventListener('click', () =>{
    const minNumber = document.querySelector('.from');
    const maxNumber = document.querySelector('.to');

    const x = Number(minNumber.value);
    const y = Number(maxNumber.value);

        if(isNaN(x) || isNaN(y)){
            resultRandomValue.textContent = 'Введенные значения должны быть числами.';
        }else if(x < 0 || y < 0){
            resultRandomValue.textContent = 'Введенные значения должны быть положительными числами.';
        }else if(minNumber.value === "" || maxNumber.value === ""){
            resultRandomValue.textContent = 'Введенные значения не должны быть пустыми.';
        }else if(minNumber.value >= maxNumber.value){
            resultRandomValue.textContent = 'Первое введенное значение не должно быть больше и равно второго введенному значению.';
        }else{
            resultRandomValue.textContent = HelpUtils.random(x, y);
        }})
    }
}

