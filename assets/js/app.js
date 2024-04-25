let pantalla = document.querySelector('.resultado');
let button = document.querySelectorAll('button');

button.forEach((e) => {
    e.onclick = () => {
        if(e.id == 'btn-c'){
            pantalla.innerText = ' ';
        }else if(e.id == 'btn-delete'){
            let string = pantalla.innerText.toString();
            pantalla.innerText = string.substr(0, string.length -1)
        }else if(pantalla.innerText != '' && e.id == 'btn-igual'){
            pantalla.innerText = eval(pantalla.innerText);
        }else if(pantalla.innerText == '' && e.id == 'btn-igual'){
            pantalla.innerText = 'Vacio!';
            setTimeout(() => {pantalla.innerText = "";}, 2000);
        }else{
            pantalla.innerText += e.id;
        }
    }
})