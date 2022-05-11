// TODO: VARIABLES!
// CAPTURE ALL HTML NECESSARY HTML ELEMENTS

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


// TODO: INITIALIZE PAGE (HIDING/SHOWING BUTTONS, ETC)
    // HIDE 'GAME' BUTTON
    // HIDE IMAGE FIELD
    // SHOW 'START' BUTTON
    // RENDER HIGH SCORES


// TODO: BUTTON CLICK EVENT LISTENERS (START BTN, GAME BTN)
    // START BTN:
        // RUN 'STARTGAME' FUNCTIONALITY

    // GAME BTN:
        // LOOP THROUGH KITTEN ARRAY ON CLICK
        // RENDERKITTEN ON CLICK
        // COUNT CLICKS

// TODO: GAME FUNCTIONALITY
    // STARTGAME:
        // HIDE 'START' BUTTON
        // SHOW 'GAME' BUTTON
        // START TIMER
        // RUN 'ENDGAME' WHEN TIMER IS UP
    // ENDGAME:
        // HIDE 'GAME' BUTTON
        // SHOW 'START' BUTTON'
        // ALERT CURRENT SCORE
        // SAVE CAPTURE USER INITIALS
        // SAVE SCORE AND INITIALS TO LOCALSTORAGE
        // RE-RENDER HIGH SCORES
    // RENDER HIGHSCORES:
        // GET CURRENT LOCALSTORAGE DATA
        // CLEAR OUT CURRENT HIGHSCORE FIELD
        // LOOP THROUGH ARRAY OF SCORE OBJECTS
        // RENDER NEW LI FOR EACH SCORE OBJ
    // RENDER KITTEN:
        // UPDATE SRC OF IMAGE
        // UPDATE DESC TEXT