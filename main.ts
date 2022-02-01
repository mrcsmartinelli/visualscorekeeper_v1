input.onButtonPressed(Button.A, function () {
    score_a += -1
    if (score_a >= 1) {
        led.plot(set_a, score_a)
    } else {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
        basic.clearScreen()
        set_a = set_a + 1
        winner_check()
        reset_score()
    }
})
function reset_score () {
    score_a = 5
    score_b = 5
}
input.onButtonPressed(Button.B, function () {
    score_b += -1
    if (score_b >= 1) {
        led.plot(set_b, score_b)
    } else {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
        basic.clearScreen()
        set_b = set_b - 1
        winner_check()
        reset_score()
    }
})
function winner_check () {
    if (set_a == 3) {
        basic.showString("WINNER A")
    } else if (set_b == 1) {
        basic.showString("WINNER A")
    }
    control.reset()
}
let score_b = 0
let score_a = 0
let set_b = 0
let set_a = 0
reset_score()
set_a = 0
set_b = 4
