let body = document.querySelector('body');
let img = document.querySelector('img');

let position = 0 ;
let imageIndex = 1 ;

let interval = setInterval(()=>{

    if(position <= body.offsetWidth - 490){

        img.style.left = `${position}px`

        if(imageIndex > 8){
            imageIndex = 1 ;
        }

        img.src = `./assets/${imageIndex}.png`

        position += 45 ;
        imageIndex++;
        return ;

    }

    clearInterval(interval);

},100);