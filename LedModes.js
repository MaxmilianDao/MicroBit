let state = 1

input.onButtonPressed(Button.A, function () {
    state -= 1
    basic.clearScreen()
})

input.onButtonPressed(Button.B, function () {
    state += 1
    basic.clearScreen()
})

// all the possible LED states
function leds_off() {
    state = 1
    }


function leds_on() {
        basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
}

function leds_flash() {
        basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # # 
        `)
        basic.pause(200)
        basic.clearScreen()
        basic.pause(200)
}

function leds_alternate() {
        basic.showLeds(`
        # # . . .
        # # . . .
        # # . . .
        # # . . .
        # # . . .
        `)
        basic.pause(150)
        basic.clearScreen()
        basic.pause(50)
        basic.showLeds(`
        . . . # #
        . . . # #
        . . . # #
        . . . # #
        . . . # #
        `)
        basic.pause(150)
        basic.clearScreen()
        basic.pause(50)
}

// checks for and displays the desired LED mode, use buttons to pick
basic.forever(function () {
    if (state > 4) {
        state = 1
    }

    if (state < 1) {
        state = 4
    }

    if (state == 1) {
        leds_off()
    }
    else if (state == 2) {
        leds_on()
    }
    else if (state == 3) {
        leds_flash()
    }
    else if (state == 4) {
        leds_alternate()
    }
})

