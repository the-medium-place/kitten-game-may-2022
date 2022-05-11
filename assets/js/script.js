// TODO: VARIABLES!
// CAPTURE ALL HTML NECESSARY HTML ELEMENTS
var kittenImg = $("#kitten-image")
var kittenDesc = $("#kitten-desc")
var timerEl = $("#game-timer")
var startBtn = $("#start-btn")
var gameBtn = $("#game-btn")
var scoresList = $("#highscores")
var timerText = $("#game-timer")

// ARRAY OF KITTEN IMAGES/TEXT
var kittenArr = [
    {
        url: 'http://placekitten.com/200/200',
        desc: "kitten time!"
    },
    {
        url: 'http://placekitten.com/210/200',
        desc: "❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️"
    },
    {
        url: 'http://placekitten.com/190/200',
        desc: "lookit those eyez!!!!"
    },
    {
        url: 'http://placekitten.com/215/200',
        desc: "whatta cuteeee"
    },
    {
        url: 'http://placekitten.com/236/200',
        desc: "wanna pet it"
    },
    {
        url: 'http://placekitten.com/148/200',
        desc: "claws for scratchin"
    },
    {
        url: 'http://placekitten.com/97/200',
        desc: "this one is kinda funny lookin'"
    },
    {
        url: 'http://placekitten.com/125/200',
        desc: "whoa, man. too cute."
    },
]
// GAME LOGIC VARIABLES (TIMER, INDEX #)
var timer = 5;
var currentIndex = 0;

init()
// TODO: INITIALIZE PAGE (HIDING/SHOWING BUTTONS, ETC)
function init() {
    // HIDE 'GAME' BUTTON
    gameBtn.hide()
    // SHOW 'START' BUTTON
    // RENDER HIGH SCORES
    renderScores();
    // RENDER FIRST KITTEN
    renderKitten();
}



// TODO: BUTTON CLICK EVENT LISTENERS (START BTN, GAME BTN)
// START BTN:
// RUN 'STARTGAME' FUNCTIONALITY
startBtn.on('click', startGame)

// GAME BTN:
gameBtn.on("click", function () {
    currentIndex++
    if (currentIndex === kittenArr.length) currentIndex = 0;
    score++
    renderKitten();
})
// LOOP THROUGH KITTEN ARRAY ON CLICK
// RENDERKITTEN ON CLICK
// COUNT CLICKS

// TODO: GAME FUNCTIONALITY
// STARTGAME:
function startGame() {

    // HIDE 'START' BUTTON
    startBtn.hide()
    // SHOW 'GAME' BUTTON
    gameBtn.show()
    // SET 'TIMER' AND 'SCORE' VALUES FOR TOP OF GAME
    timer = 5;
    score = 0;
    // START TIMER
    var gameTimer = setInterval(() => {
        timer--
        timerText.text("Time Remaining: " + timer)

        if (timer === 0) {

            clearInterval(gameTimer)
            endGame()
        }

    }, 1000);
    // RUN 'ENDGAME' WHEN TIMER IS UP
}
// ENDGAME:
function endGame() {
    console.log("game over")
    timerText.text("Time Remaining: 0")
    // HIDE 'GAME' BUTTON
    gameBtn.hide()
    // SHOW 'START' BUTTON'
    startBtn.show()
    // ALERT CURRENT SCORE

    // CAPTURE USER INITIALS
    var initials = prompt("Your score is: " + score + "\nPlese enter your Initials!")
    // SAVE SCORE AND INITIALS TO LOCALSTORAGE
    var currentScores = JSON.parse(localStorage.getItem('kittenscore')) || []
    var userObj = {
        initials,
        score
    }

    currentScores.push(userObj)
    localStorage.setItem('kittenscore', JSON.stringify(currentScores))
    // RE-RENDER HIGH SCORES
    renderScores()
}
// RENDER HIGHSCORES:
function renderScores() {
    // GET CURRENT LOCALSTORAGE DATA
    var currentScores = JSON.parse(localStorage.getItem('kittenscore')) || []
    // CLEAR OUT CURRENT HIGHSCORE FIELD
    scoresList.empty();
    // LOOP THROUGH ARRAY OF SCORE OBJECTS
    // if (scoresList.length === 0) {
    //     return scoresList.text("No Scores Yet!")
    // }
    for (var i = 0; i < currentScores.length; i++) {
        var scoreObj = currentScores[i];
        var newLi = $("<li>", {
            class: "list-group-item"
        })
        newLi.text(scoreObj.initials + '-----------' + scoreObj.score)

        scoresList.append(newLi)

    }
    // RENDER NEW LI FOR EACH SCORE OBJ
}
// RENDER KITTEN:
function renderKitten() {
    // UPDATE SRC OF IMAGE
    kittenImg.attr('src', kittenArr[currentIndex].url)
    // UPDATE DESC TEXT
    kittenDesc.text(kittenArr[currentIndex].desc)
}