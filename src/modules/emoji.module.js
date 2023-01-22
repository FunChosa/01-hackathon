import {Module} from '../core/module'
import * as HelpUtils from '../utils';

export class EmojiModule extends Module {
    constructor(type, text){
        super(type, text);
        this.type = type;
        this.text = text;
    }
    trigger() {
        // проверка и удаление существующих элементов на странице
        HelpUtils.check();
        // создание html элементов
        const emojiBlock = HelpUtils.createNewElement('div','emoji');
        emojiBlock.setAttribute('id', 'customBlock');
        emojiBlock.style.fontSize = '300px';
        emojiBlock.style.marginTop = '10vh';
        emojiBlock.style.textAlign = 'center';
        // генерирование случайного эмодзи
        emojiBlock.innerHTML = `&#${HelpUtils.random(128521, 128591)}`;
        document.body.prepend(emojiBlock);
        //удаление элемента при клике на свободную область
        HelpUtils.removeBlock(emojiBlock);  
    }
}