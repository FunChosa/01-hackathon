import {Module} from '../core/module'
import {random} from '../utils';

export class EmojiModule extends Module {
    constructor(type, text){
        super(type, text);
        this.type = type;
        this.text = text;
    }
    trigger() {
       
        const curretnEmoji = document.querySelector('.emoji');
        //const curretnEmoji = document.querySelector('#customBlock');
        if (curretnEmoji){
            curretnEmoji.remove();
            createEmoji();
        } else {
            createEmoji();
        }

        function createEmoji(){
            const emojiBlock = document.createElement('div');
            emojiBlock.setAttribure('id', 'customBlock');
            emojiBlock.classList.add('emoji');
            emojiBlock.style.fontSize = '300px';
            emojiBlock.style.marginTop = '10vh';

            emojiBlock.style.textAlign = 'center';
            emojiBlock.innerHTML = `&#${random(128521, 128591)}`
            document.body.prepend(emojiBlock);

            setTimeout(() => {
                emojiBlock.remove();
            }, 5000);
        }
    }
     
    toHTML() {
       return `<li class="menu-item" data-type="${this.type}">${this.text}</li>`
    }
}