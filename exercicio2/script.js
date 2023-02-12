let red = document.querySelector('.red');
let blue = document.querySelector('.blue');
let purple = document.querySelector('.purple');
let orange = document.querySelector('.orange');
let button = document.querySelector('button');
let h2 = document.querySelector('h2');

let opcaoatual = '';

function func (){
    red.classList.remove('selected');
    blue.classList.remove('selected');
    purple.classList.remove('selected');
    orange.classList.remove('selected');
}

function reset(){

    setTimeout(()=>{

        h2.textContent = '';
        func();
        opcaoatual = '';

    },1000);

}

red.onclick = () =>{
    opcaoatual = 'red';
    func ();
    red.classList.add('selected');
}

blue.onclick = () =>{
    opcaoatual = 'blue';
    func ();
    blue.classList.add('selected');
}

purple.onclick = () =>{
    opcaoatual = 'purple';
    func ();
    purple.classList.add('selected');
}

orange.onclick = () =>{
    opcaoatual = 'orange';
    func ();
    orange.classList.add('selected');
}

button.onclick = () =>{

    //console.log(" UAHAHHAHAHAHAHAHAHAHHA");

    let coloroptions = ['red','blue','purple','orange'];

    if(opcaoatual === ''){
        h2.textContent = 'Selecione uma cor para sortear !!!';
        return;
    }

    const aleatoryPosition = Math.floor(Math.random() * 4);

    let randomcolor = coloroptions[aleatoryPosition];

    if(opcaoatual === randomcolor){
        h2.textContent = 'Parabens voces acertou !!!';
        return;
    }

    h2.textContent = 'Tente novamente';
   
}

