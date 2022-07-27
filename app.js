import { getRandomColor } from "./util";

export default function initApp(){
    console.log('Hello world');
    const btn = document.createElement('Button');
    btn.className = 'button';
    btn.innerText = 'Изменить цвет страницы'
    document.body.append(btn);
    // Событие сlick на кнопку 
    btn.addEventListener("click", (event) => {
    document.body.style.backgroundColor = getRandomColor();
    
  });
};

