let board;
let stepNumber = 0;

let levelRank;

let clickSound = new Audio("shared/clickSound.mp3");

function createBoard(){
    $('#steps').html(stepNumber)
    for(let y = 0; y < board.length; y++){
        for(let x = 0; x < board.length; x++){
            if(board[y][x] == true){
                $('<div>').css({
                    'background-image':" url('shared/sky.jpg')",
                    position: 'absolute',
                    top: (70+y*100+10) + 'px',
                    left: (50+x*100+10) + 'px',
                    'border-radius': '100px',
                    width: '80px',
                    height: '80px',
                    'cursor': 'pointer',
                }).appendTo('#gameArea').attr('datax', x).attr('datay', y);
            } else{
                $('<div>').css({
                    background: '#130831',
                    position: 'absolute',
                    top: (70+y*100+10) + 'px',
                    left: (50+x*100+10) + 'px',
                    width: '80px',
                    height: '80px',
                    'border-radius': '100px',
                    'cursor': 'pointer',
                }).appendTo('#gameArea').attr('datax', x).attr('datay', y);
            }

        }
    }

    $('#gameArea div').on('click', function(){
        if(isTimer == true){
            clickSound.play();
            stepNumber += 1;
            let y = $(this).attr('datay');
            let x = $(this).attr('datax');

            let neighbours = getNeighbours(x, y);
            setNeighbours(neighbours);
            createBoard();
            drawAnimation(neighbours);
            if (gameEnd()) {
                stopTimer();

            }
        }
    });
}
function getNeighbours(x,y){
    let neighbours = [[Number(y),Number (x), board[y][Number(x)]]];
    if(x>0){
        neighbours.push([Number(y),Number(x)-1, board[y][Number(x)-1]]);
    }
    if(x<4){
        neighbours.push([Number(y),Number(x)+1, board[y][Number(x)+1]]);
    }
    if(y>0){
        neighbours.push([Number(y)-1,Number(x), board[Number(y)-1][Number(x)]]);
    }
    if(y<4){
        neighbours.push([Number(y)+1,Number(x), board[Number(y)+1][Number(x)]]);
    }
    console.log(neighbours);
    return neighbours;
}
function setNeighbours(neighbours){
    for(let i in neighbours){
        board[neighbours[i][0]][neighbours[i][1]] = !board[neighbours[i][0]][neighbours[i][1]];
    }
}
function drawAnimation(neighbours){
    let div =  $('<div>').css({
        background:"#130831",
        position: 'absolute',
        'border-radius': '100px',
        width: '80px',
        height: '80px',
        'cursor': 'pointer',
    });
    for(let i in neighbours){
        if(neighbours[i][2] == true){
            div.css({
                'background-image':" url('shared/sky.jpg')",
            })
        } else {
            div.css({
                background:"#130831",
            })
        }
       div.clone().css({
           top: (70+neighbours[i][0]*100+10) + 'px',
           left: (50+ neighbours[i][1]*100+10) + 'px',
       }).animate({
            top: (70+neighbours[i][0]*100+50) + 'px',
            left: (50+neighbours[i][1]*100+50) + 'px',
            width: '0px',
            height: '0px',
            border: 'solid black 1px',
        },1000).appendTo('#gameArea');
    }
}

function gameEnd(){
    for(let y = 0; y < board.length; y++){
        for(let x = 0; x < board[y].length; x++){
            if(board[y][x] == false){
                return false;
            }
        }
    }
    return true;
}

function addGamerToRankList(){
    if(gameEnd()){
        addPlayer(levelRank, document.getElementById("nev").value, stepNumber, getTime());
    }
}
function startGame(){
    startTimer();
}
function restartGame(){
    setLevel();
}
$(function (){
    setLevel();
    createBoard();
});


