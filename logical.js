let start = document.querySelector("#startBtn");
let stop = document.querySelector("#stopBtn");
let reset = document.querySelector("#resetBtn");
let miliSecs = document.querySelector("#box-3")
let zero = 0;
let sec = 0;
let mins = 0;
let interval;

start.addEventListener("click",()=>{
    clearInterval(interval);
    interval = setInterval(mainFcn , 10);
})
reset.addEventListener("click",()=>{
    window.location.reload()
})
stop.addEventListener("click",()=>{
    clearInterval(interval);
})

const mainFcn = function miliSec (){
    zero++;
    if(zero<=9){
        miliSecs.innerHTML = "0" + zero;
    }
    if(zero>9) {
        miliSecs.innerHTML = zero;
    }
    if(zero>99){
        sec++;
        document.querySelector("#box-2").innerHTML =  "0" + sec;
        zero = 0;
        miliSecs.innerHTML = "0" + 0;
    }    
    if(sec>9){
        document.querySelector("#box-2").innerHTML =  sec;  
        }
    if(sec>59){
        mins++;
        document.querySelector("#box-1").innerHTML =  "0" + mins;
        sec = 0;
        document.querySelector("#box-2").innerHTML = "0" + 0;
    }   
}    
    

