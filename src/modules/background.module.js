import {Module} from '../core/module'
import {random} from '../utils'
export class BackgroundModule extends Module {
    constructor(type, text) {
        super(type,text)
        this.type = type
        this.text = text
    }
    trigger(){
        const body = document.querySelector('body')
        body.style.transition = 'all 2s ease-out'
        body.style.backgroundColor = `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`
        setTimeout(() => {
            body.style.backgroundColor = '#fff'
        }, 5000)
    }
}