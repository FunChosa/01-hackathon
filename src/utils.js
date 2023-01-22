export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1))
}

export function check(){
  const somethingExist = document.querySelector('#customBlock');
      if(somethingExist){
          somethingExist.remove();
      }
}
export function removeBlock(block){
document.addEventListener('click', (event) =>{
  if(event.target === document.body){
      block.remove()
  };
})
}