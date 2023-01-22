import {Module} from '../core/module'
import {random} from '../utils';
import {check} from '../utils';

export class EmojiModule extends Module {
    constructor(type, text){
        super(type, text);
        this.type = type;
        this.text = text;
    }
    trigger() {
        check();
        createEmoji();

        function createEmoji(){
            const emojiBlock = document.createElement('div');
            emojiBlock.setAttribute('id', 'customBlock');
            emojiBlock.classList.add('emoji');
            emojiBlock.style.fontSize = '300px';
            emojiBlock.style.marginTop = '10vh';

            emojiBlock.style.textAlign = 'center';
            emojiBlock.innerHTML = `&#${random(128521, 128591)}`
            document.body.prepend(emojiBlock);

            document.addEventListener('click', (event) =>{
                if(event.target === document.body){
                    emojiBlock.remove()
                };
            })
        }
    }
}