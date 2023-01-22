import {Module} from '../core/module';
import * as HelpUtils from '../utils';

export class RandomNumber extends Module {
    constructor(type, text){
        super(type, text);
        this.type = type;
        this.text = text;
    }
    trigger() {    
    // проверка и удаление существующих элементов на странице
    HelpUtils.check(); 

    //создание html элементов: начало
    const mainBlock = HelpUtils.createNewElement('div', 'randomNumber');
    mainBlock.setAttribute('id', 'customBlock');
    mainBlock.style.textAlign  = 'center';
    mainBlock.style.display  = 'inline-block';
    mainBlock.style.marginTop  = '200px';
    mainBlock.style.marginLeft  = '300px';

    const titleFunction = document.createElement('h1');
    const fromNumber = HelpUtils.createNewElement('input', 'from');
    const toNumber = HelpUtils.createNewElement('input', 'to');

    titleFunction.textContent = 'PRNGs of integers, positive numbers';
    titleFunction.style.color = "#052f4d"
    
    fromNumber.setAttribute('placeholder', 'from');
    fromNumber.style.padding = '15px 20px';
    fromNumber.style.margin = '15px 20px';
    fromNumber.style.width = '150px';

    toNumber.setAttribute('placeholder', 'to');
    toNumber.style.padding = '15px 20px';
    toNumber.style.margin = '15px 20px';
    toNumber.style.width = '150px';

    const mainButton = HelpUtils.createNewElement('button', 'mainButton');
    mainButton.style.borderRadius = "20px";

    mainButton.style.display = 'inline-block'
    mainButton.style.cursor = 'pointer'
    mainButton.style.fontSize = '14px'
    mainButton.style.padding = '15px 20px'
    mainButton.style.margin = '15px 20px';
    mainButton.style.color = '#354251';
    mainButton.style.background = '#ffff0';
    mainButton.style.border = '1px solid #354251';

    const resultWindow = HelpUtils.createNewElement('div', 'result');
    resultWindow.style.fontSize = '20px';
    resultWindow.style.color = 'red';
    mainButton.textContent = 'Generate!';

    mainBlock.append(titleFunction, fromNumber, toNumber, mainButton, resultWindow);
    document.body.append(mainBlock);
    //создание html элементов: конец
    
    const button = document.querySelector('button');
    const resultRandomValue = document.querySelector('.result');
    //удаление элемента при клике на свободную область
    HelpUtils.removeBlock(mainBlock);
    
    //основной функционал: проверка введенного диапазона и генерация числа
    button.addEventListener('click', () =>{
    const minNumber = document.querySelector('.from');
    const maxNumber = document.querySelector('.to');

    const x = Number(minNumber.value);
    const y = Number(maxNumber.value);

        if(isNaN(x) || isNaN(y)){
            resultRandomValue.textContent = 'Enter a numbers.';
        }else if(x < 0 || y < 0){
            resultRandomValue.textContent = 'Enter positive numbers.';
        }else if(minNumber.value === "" || maxNumber.value === ""){
            resultRandomValue.textContent = 'The entered values should not be empty.';
        }else if(minNumber.value >= maxNumber.value){
            resultRandomValue.textContent = 'The first number must be less than the second number.';
        }else{
            resultRandomValue.textContent = HelpUtils.random(x, y);
        }})
    }
}

