import {Menu} from './core/menu';

export class ContextMenu extends Menu {
    constructor(selector) {
        super(selector);
        this.moduleList = [];
      }
      
    open() {
        this.el.classList.add('open');
    }
    close() {
        this.el.classList.remove('open');
    }
    add(module, options) {
        const contextModule = new module(options.type, options.text);
        this.el.innerHTML += contextModule.toHTML();
        this.moduleList.push(contextModule);
    }
}