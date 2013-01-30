var input =  {
    heartup: false,
    heartdown: false,
    restart: false,
}

var KEY = {
    A: 65,
    D: 68,
    Q: 81
}

/*
 * release event called on onpress from the body.
 */
function press (evt) {
    var code = evt.keyCode;
    switch(code) {
        case KEY.A:
            input.heartup = true;
        break;

        case KEY.D:
            input.heartdown = true;
        break;

        case KEY.Q:
            input.restart = true;
        break;
    }
}

/*
 * release event called on onrelease from the body.
 */
function release(evt) {
    var code = evt.keyCode;
    switch(code) {
        case KEY.A:
            input.heartup = false;
        break;

        case KEY.D:
            input.heartdown = false;
        break;

        case KEY.Q:
            input.restart = false;
        break;
    }
}

