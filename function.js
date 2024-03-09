let turn = "X";
let count = 0;

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

function checkWin(){
    let player;
    for(let j=0;j<8;j++){
        let x = 0;
        let o = 0;
        for(let k = 0;k < 3; k++){
            let btn = document.querySelector(`.btn${WinProb[j][k]}`).innerHTML;
            if(btn === "X") x++;
            else if(btn === "O") o++;
        }
        if(x == 3)  {player = "X"; break;}
        else if(o == 3) {player = "O"; break;}
    }
    return player;
}

function play(btnNum){
    let btn = document.querySelector(`.btn${btnNum}`);
    btn.innerHTML = turn;
    btn.disabled = true;
    let playerWin = checkWin();
    if(playerWin === 'X' || playerWin === 'O'){
        document.querySelector(".status").innerHTML = `${playerWin} is the Winner`;
        for(let i=1;i<=9;i++){
            document.querySelector(`.btn${i}`).disabled = true;
        }
        exit(0);
    } else {
        turn = (turn === "X") ? "O" : "X";
    }
    count ++;
    if(count == 9){
        document.querySelector(".status").innerHTML = `The match is draw`;
    }
}
