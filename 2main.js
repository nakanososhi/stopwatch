const timer = document.getElementById("timer") ;
const start = document.getElementById("start") ;
const stop = document.getElementById("stop") ;
const reset = document.getElementById("reset") ;

let h = 0 ;
let m = 0 ;
let s = 0 ;
let ms = 0 ;

let interval ;

function stopWatch(){
  ms++ ;
  if(ms / 10 == 1){
    s++ ;
    ms = 0 ;
    if(s / 60 == 1){
      m++ ;
      s = 0 ;
      ms = 0 ;
      if(m / 60 == 1){
        h++ ;
        m = 0 ;
        s = 0 ;
        ms = 0 ;
      }
    }
  }
  
  
  timer.innerHTML = h + ":" + m + ":" + s + ":" + ms ;
}

function setButtonStateInitial(){
  start.disabled = false;
  stop.disabled = true;
  reset.disabled = true;
}

function setButtonStateRunning(){
  start.disabled = true;
  stop.disabled = false;
  reset.disabled = false;
}

function setButtonStateStopped(){
  start.disabled = false;
  stop.disabled = true;
  reset.disabled = false;
}

setButtonStateInitial();

// function starttimer(){
  // timerlog  = setInterval(stopWatch,100) ;
  // } ; 
  
  // function hyouzi(){
    // alert('unko')
  // };
  

// start.addEventListener("click",starttimer);
start.addEventListener("click",function (){
  interval = setInterval(stopWatch,100) ;
  setButtonStateRunning() ;
}) ;

stop.addEventListener("click",function(){
  clearInterval(interval) ;
  setButtonStateStopped() ;
}) ;

reset.addEventListener("click",function(){
  clearInterval(interval) ;
  setButtonStateInitial() ;
  ms = 0 ;
  s = 0 ;
  m = 0 ;
  h = 0 ;
   timer.innerHTML = h + ":" + m + ":" + s + ":" + ms ;
}); 

