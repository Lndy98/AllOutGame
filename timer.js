let sec = 0;
let isTimer = false;
function pad(val) {
    return val > 9 ? val : "0" + val;
};
let myInterval ;
function stopTimer() {
    clearInterval(myInterval);
    isTimer = false;
}// update about every second
function startTimer() {
    if(isTimer == false && !gameEnd()){
        myInterval = setInterval( function(){
            $("#seconds").html(pad(++sec%60));
            $("#minutes").html(pad(parseInt(sec/60,10)));
        }, 1000);
        console.log(myInterval);
        isTimer = true;
    }
}

function getTime(){
    return pad(parseInt(sec/60,10)) +":"+pad(sec%60);
}
function restartTimer(){
    sec = 0;
    isTimer = false;
    $("#seconds").html(pad(0));
    $("#minutes").html(pad(0));
    stopTimer();
}