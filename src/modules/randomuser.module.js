import {Module} from '../core/module';
import {random} from '../utils';

export class RandomUser extends Module {
    constructor(type, text){
        super(type, text);
        this.type = type;
        this.text = text;
    }
    
	trigger(){
            
        const somethingExist = document.querySelector('#customBlock');
            if (somethingExist){
                somethingExist.remove();
                fetchUser(random(1,10));
            } else {
                fetchUser(random(1,10));
            }

                async function fetchUser(userNumber) {
                const USERS_URL = 'https://jsonplaceholder.typicode.com/users';
                const user = await fetch (`${USERS_URL}/${userNumber}`);
                const userData = await user.json();

                const randomUserBlock = document.createElement('div');
                randomUserBlock.classList.add('random-user');
                randomUserBlock.setAttribute('id', 'customBlock');
                randomUserBlock.style.fontSize = '30px';
                randomUserBlock.style.display = 'inline-block';
                randomUserBlock.style.marginLeft = '400px';
                randomUserBlock.style.marginTop = '40px';

                randomUserBlock.style.padding = '20px';
                
                randomUserBlock.style.border = "3px solid black";

                // randomUserBlock.style.marginLeft = '420px';
                document.body.prepend(randomUserBlock)

                randomUserBlock.innerHTML = `
                Name: ${userData.email} <br> <br>
                Username: ${userData.username} <br> <br>
                Email: ${userData.email} <br> <br>
                City: ${userData.address.city} <br> <br>
                Website: ${userData.website} <br> <br>
                `
                document.addEventListener('click', (event) =>{
                    if(event.target === document.body){
                        randomUserBlock.remove()
                    };
                })
            } 
        }
}