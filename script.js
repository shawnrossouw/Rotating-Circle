const start = document.querySelector('.circle-btn');
const active = document.querySelector('.spinner-active')
const spin = document.querySelector('.circle');
let deg = 0;
let rotate = false;
let rotating;


function circleReady(){
    rotate = true;
    rotating = setInterval(function(){
        deg++;
        spin.style.transform = "rotate(" + deg + "deg)";
    },50);
};

function pause(){
    rotate = false;
    clearInterval(rotating);
};

start.addEventListener('click', function(){
    active.classList.toggle('warning');
    if(!rotate){
        rotate = true;
        start.innerHTML = "pause";
        circleReady();
    }else{
        rotate = false;
        start.innerHTML = "start";
        pause();
    }
});