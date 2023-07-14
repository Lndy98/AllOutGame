function levelOne(){
    return[ [false, false, true, true, true],
        [false, true, true, true, true],
        [true, true, true, true, true],
        [true, true, true, true, false],
        [true, true, true, false, false]];
}

function levelTwo(){
    return[ [true, true, true, true, true],
        [true, true, true, true, true],
        [true, true, true, true, true],
        [true, true, false, false, false],
        [true, false, true, false, true]];
}

function levelThree(){
    return[ [true, true, true, true, true],
        [true, true, true, true, true],
        [false, true, false, true, false],
        [true, true, true, true, true],
        [true, true, true, true, true]];
}

function setLevel(){
    let level = document.getElementById("level").value;
    restartTimer();
    stepNumber = 0;
    if(level == "level1"){
        board = levelOne();
        levelRank = 1;
    }
    if(level == "level2"){
        board = levelTwo();
        levelRank = 2;
    }
    if(level == "level3"){
        board = levelThree();
        levelRank = 3;
    }
    createBoard();
    getRankList(levelRank);
}