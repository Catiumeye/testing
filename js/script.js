let img = document.querySelector('.slider_img');
let lb = document.querySelector('.left');
let rb = document.querySelector('.right');

let sl = 0;

lb.addEventListener('click', levo);

function levo(){
    if(sl > -400 ){
        sl = -4000;
    }
    sl += 400;
    img.style.left = sl + 'px';
}

rb.addEventListener('click', pravo);

function pravo(){
    if(sl < -3200){
        sl = 400;
    }
    sl -= 400;
    img.style.left = sl + 'px'; 
}