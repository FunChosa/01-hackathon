//функия для генерации случайного целого числа с заданном диапазоне
export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1))
}
//функция для проверки и удаления элемента
export function check(){
  const somethingExist = document.querySelector('#customBlock');
  if(somethingExist){
      somethingExist.remove();
    }
}
//функция для удаления блока при клике на свободную область
export function removeBlock(block){
  document.addEventListener('click', (event) =>{
      if(event.target === document.body){
          block.remove()
      };
})}
//функция для создания html элементов
export function createNewElement(type, className){ 
    const element = document.createElement(type);
    element.className = className;
    return element;
}