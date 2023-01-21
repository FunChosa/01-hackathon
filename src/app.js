import './styles.css'
import {ContextMenu} from './menu';
import {BackgroundModule} from './modules/background.module';
import {ClicksModule} from './modules/clicks.module';
import {ShapeModule} from './modules/shape.module';


const body = document.querySelector('body');
const mainMenu = new ContextMenu('ul'); 


mainMenu.add(BackgroundModule, {
    type: 'background-module',
    text: 'Поменять цвет',
});

mainMenu.add(ClicksModule, {
    type: 'clicks-module',
    text: 'Считать клики (за 3 секунд)',
});

mainMenu.add(ShapeModule, {
    type: 'shape-module',
    text: 'Создать фигуру',
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



