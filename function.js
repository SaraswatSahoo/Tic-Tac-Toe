let turn = "X";

let WinProb = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
];

let win = false;

function checkWin(){
    for(let j=0;j<8;j++){
        let x = 0;
        let o = 0;
        for(let k = 0;k < 3; k++){
            let btn = document.querySelector(`.btn${WinProb[j][k]}`).innerHTML;
            console.log(btn);
            if(btn === "X") x++;
            else if(btn === "O") o++;
        }
        if(x == 3) return 'X';
        else if(o == 3) return 'O';
    }
    return 0;
}

function play(btnNum){
    for(let i = 1;i<=9;i++){

        document.querySelector(`.btn${btnNum}`).innerHTML = turn;
        if(turn === "X"){
            turn = "O";
        }
        else{
            turn = "X";
        }
        document.querySelector(`.btn${btnNum}`).disabled = true;
        
        let playerWin = checkWin();
        if(playerWin === 'X'){
            document.querySelector(".status").innerHTML = `${playerWin} is the Winner`;
        }
        else if(playerWin === 'O'){
            document.querySelector(".status").innerHTML = `${playerWin} is the Winner`;
        }
        else{
            continue;
        }
    }
}



