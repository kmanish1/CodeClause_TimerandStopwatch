//stopwatch
let mins = 0;
let secs = 0;
let tens = 0;
let timer;

const stopwatch = document.querySelector('.digits');
const startBtn = document.querySelector('.sw-start');
const stopBtn = document.querySelector('.sw-stop');
const resetBtn = document.querySelector('.sw-reset');

startBtn.addEventListener('click', () => {
    timer = true;
    startStopwatch();
});

stopBtn.addEventListener('click', () => {
    timer=false;
});

resetBtn.addEventListener('click', () => {
    timer=false
    mins = 0;
    secs = 0;
    tens = 0;
    document.querySelector('.sw-min').innerHTML = `00`;
    document.querySelector('.sw-sec').innerHTML = `00`;
    document.querySelector('.sw-msec').innerHTML = `00`;
});

function startStopwatch(){
    if(timer){
        tens++
    }
    if(tens == 100){
        secs++;
        tens=0;
    }
    if(secs==60){
        mins++;
        secs=0;
    }
    
    let minString = mins.toString().padStart(2, '0');
    let secString = secs.toString().padStart(2, '0');
    let tenString = tens.toString().padStart(2, '0');

    
    document.querySelector('.sw-min').innerHTML = minString;
    
  
    document.querySelector('.sw-sec').innerHTML= secString;

   
    document.querySelector('.sw-msec').innerHTML= tenString;
    setTimeout(startStopwatch, 10)

}

//timer

// const stopwatch = document.querySelector('.digits');
let tmins = 0;
let tsecs = 0;
let ttens = 0;
let originalTimer;
const timerStartBtn = document.querySelector('.timer-start');
const timerStopBtn = document.querySelector('.timer-stop');
const timerResetBtn = document.querySelector('.timer-reset');
let timerMinutes = document.querySelector('.timer-minutes')
let timerSeconds = document.querySelector('.timer-seconds')
timerStartBtn.addEventListener('click', () => {
    originalTimer = true;
    tmins = timerMinutes.value;
    tsecs = timerSeconds.value;
    startTimer();
});

timerStopBtn.addEventListener('click', () => {
    originalTimer=false;
});

timerResetBtn.addEventListener('click', () => {
    originalTimer=false
    tmins = 0;
    tsecs = 0;
    ttens = 0;
    document.querySelector('.timer-min').innerHTML = `00`;
    document.querySelector('.timer-sec').innerHTML = `00`;
    document.querySelector('.timer-msec').innerHTML = `00`;
    timerMinutes.value = ""
    timerSeconds.value = ""
});
function startTimer(){
    if (tmins == 0 && tsecs == 0 && ttens == 0) {
        return; // Stop the timer
    }
    if(originalTimer){
        if(ttens!=0){
            ttens--;
        }
        else{
            if(tsecs!=0){
                tsecs--;
                ttens=99;
            }
            else{
                if(tmins!=0){
                    tmins--;
                    tsecs=60;
                }
            }
        }
    }
    // if(ttens===0){
    //     if(tsecs!=0){
    //         tsecs--;
    //         ttens=99;
    //     }
    //     else{
    //         if(tmins!=0){
    //             tmins--;
    //             tsecs=59;
    //         }
    //     }
        
    // }
    // if(tsecs===0){
    //     if(tmins!=0){
    //         tmins--;
    //         tsecs=59;
    //     }
        
    // }
    let swminString = tmins.toString().padStart(2, '0');
    let swsecString = tsecs.toString().padStart(2, '0');
    let swtenString = ttens.toString().padStart(2, '0');

    
    document.querySelector('.timer-min').innerHTML = swminString;
    
  
    document.querySelector('.timer-sec').innerHTML= swsecString;

   
    document.querySelector('.timer-msec').innerHTML= swtenString;
    setTimeout(startTimer, 10)
}




// let tmins = 0;
// let tsecs = 0;
// let ttens = 0;
// let originalTimer;
// const timerStartBtn = document.querySelector('.timer-start');
// const timerStopBtn = document.querySelector('.timer-stop');
// const timerResetBtn = document.querySelector('.timer-reset');
// let timerMinutes = document.querySelector('.timer-minutes')
// let timerSeconds = document.querySelector('.timer-seconds')
// timerStartBtn.addEventListener('click', () => {
//     originalTimer = true;
//     tmins = timerMinutes.value; // Set initial values from input fields
//     tsecs = timerSeconds.value; // Set initial values from input fields
//     ttens = 0; // Always start with zero milliseconds
//     startTimer();
// });

// timerStopBtn.addEventListener('click', () => {
//     originalTimer=false;
// });

// timerResetBtn.addEventListener('click', () => {
//     originalTimer=false
//     tmins = 0;
//     tsecs = 0;
//     ttens = 0;
//     document.querySelector('.timer-min').innerHTML = `00`;
//     document.querySelector('.timer-sec').innerHTML = `00`;
//     document.querySelector('.timer-msec').innerHTML = `00`;
//     timerMinutes.value = ""
//     timerSeconds.value = ""
// });
// function startTimer(){
//     if (tmins == 0 && tsecs == 0 && ttens == 0) {
//         return; // Stop the timer when time reaches zero
//     }
    
//     if(originalTimer){
//         if(ttens!=0){
//             ttens--;
//         }
//         else{
//             ttens=99;
//             if(tsecs!=0){
//                 tsecs--;
//             }
//             else{
//                 tsecs=59;
//                 tmins--;
//             }
//         }
//     }

//     let swminString = tmins.toString().padStart(2, '0');
//     let swsecString = tsecs.toString().padStart(2, '0');
//     let swtenString = ttens.toString().padStart(2, '0');

    
//     document.querySelector('.timer-min').innerHTML = swminString;

  
//     document.querySelector('.timer-sec').innerHTML= swsecString;


//     document.querySelector('.timer-msec').innerHTML= swtenString;
    
//     setTimeout(startTimer, 10)
// }