import './styles.css'
import {ContextMenu} from './menu';
import {EmojiModule} from './modules/emoji.module';
import {RandomNumber} from './modules/randomnumber.module';
import {RandomUser} from './modules/randomuser.module';

const body = document.querySelector('body');
const mainMenu = new ContextMenu('ul'); 


mainMenu.add(EmojiModule, {
    type: 'emoji-module',
    text: 'Emoji',
});

mainMenu.add(RandomNumber, {
    type: 'randomnumber-module',
    text: 'Get number',
});

mainMenu.add(RandomUser, {
    type: 'randomuser-module',
    text: 'Get user',
});



body.addEventListener('contextmenu', (event) =>  {
    event.preventDefault();
    mainMenu.el.style.top = `${event.clientY}px`;
    mainMenu.el.style.left = `${event.clientX}px`;
    mainMenu.open();
})

mainMenu.el.addEventListener('click', (event) =>{
    const index = mainMenu.moduleList.findIndex(element =>
        element.type == event.target.dataset.type
    );
    mainMenu.moduleList[index].trigger();
    mainMenu.close();
})



