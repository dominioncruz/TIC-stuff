const options = document.querySelector("#rules")
const cancel = document.querySelector("#cancel")
const start = document.querySelector("button")
const time = document.querySelector(".time")
var round = document.querySelector('.round')
var playWin = document.querySelector('.playWin')
var oppWin = document.querySelector('.oppWin')
var playIcon = document.querySelector('.player i')
const oppIcon = document.querySelector('.opp i')
const optionIcon = document.querySelectorAll('.options i')
var score = document.querySelector('.score');
var playVal;
var player = 0;
var opp = 0;
var state = false;
var timer;
timeVal = 3;
var roundVal = 1;
var winAllocator = (param1, param2) => {
    playWin.innerHTML = param1;
    oppWin.innerHTML = param2
}
cancel.addEventListener('click', () => {
    cancel.parentElement.classList.add('hide');
})
optionIcon.forEach(icon => {
    icon.addEventListener('mouseover', () => {
        state == true ? playIcon.classList = icon.classList : console.log('pass')
    })
    icon.addEventListener('click', () => {
        state == true ? playIcon.classList = icon.classList : console.log('pass');
        state = false;
    })
});
var nextPart = () => {
    var playerVal = playIcon.classList[2];
    var oppOp = ((optionIcon[Math.floor(Math.random() * 3)]).classList);
    oppIcon.classList = oppOp;
    oppVal = oppOp[2];
    if (playerVal == 'fist') {
        if (oppVal == 'fist') {
            winAllocator('DRAW', 'DRAW');
        } else if (oppVal == 'hand') {
            winAllocator('LOSE', 'WIN');
            opp++;
        } else {
            winAllocator('WIN', 'LOSE');
            player++;
        }
    } else if (playerVal == 'hand') {
        if (oppVal == 'hand') {
            winAllocator('DRAW', 'DRAW');
        } else if (oppVal == 'scissors') {
            winAllocator('LOSE', 'WIN');
            opp++;
        } else {
            winAllocator('WIN', 'LOSE');
            player++;
        }
    } else {
        if (oppVal == 'scissors') {
            winAllocator('DRAW', 'DRAW');
        } else if (oppVal == 'fist') {
            winAllocator('LOSE', 'WIN');
            opp++;
        } else {
            winAllocator('WIN', 'LOSE');
            player++;
        }
    }
    playWin.classList.remove('hide')
    oppWin.classList.remove('hide')
    score.innerHTML = `${player} - ${opp}`;
    setTimeout(() => {
        round.classList.remove('hide')
    }, 1000);
    if (player == 3 || opp == 3) {
        if (player > opp) {
            round.innerHTML = 'YOU WIN'
        } else {
            round.innerHTML = 'YOU LOSE'
        }
        start.innerHTML = 'RESTART'
        start.classList.remove('hide');
    } else {
        state = false;
        roundVal++;
        round.innerHTML = `Round ${roundVal}`;
        setTimeout(() => {
            oppIcon.classList = optionIcon[1].classList
            gamePlay()
        }, 1000);
    }
    setTimeout(() => {
        playWin.classList.add('hide')
        oppWin.classList.add('hide')
    }, 1000);
}
var gamePlay = () => {
    time.innerHTML = 3;
    state = true;
    start.classList.add('hide');
    round.classList.remove('hide');
    time.classList.remove('hide');
    timer = setInterval(() => {
        if (timeVal == 1) {
            clearInterval(timer);
            timeVal = 3;
            time.classList.add('hide');
            state = false;
            nextPart();
        } else {
            timeVal--;
            time.innerHTML = timeVal
        }
    }, 1000);
}
start.addEventListener('click', () => {
    player = 0;
    opp = 0;
    score.innerHTML = `${player} - ${opp}`;
    roundVal = 1;
    round.innerHTML = `Round ${roundVal}`
    gamePlay();
})
