let compass = 0
let BRIGHT = 0
input.onButtonPressed(Button.A, function () {
    compass = input.compassHeading()
    if (compass < 45 || compass > 315) {
        basic.showString("N")
    } else if (compass < 135) {
        basic.showString("E")
    } else if (compass < 255) {
        basic.showString("S")
    } else if (compass < 315) {
        basic.showString("W")
    }
})
input.onButtonPressed(Button.B, function () {
    BRIGHT = input.lightLevel()
    if (BRIGHT < 100) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
