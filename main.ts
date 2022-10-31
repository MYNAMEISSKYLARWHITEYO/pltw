input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.SmallHeart)
    basic.showLeds(`
        . . . . .
        . # . # .
        . # # # .
        . . # . .
        . . . . .
        `)
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Heart)
    basic.showLeds(`
        . # . # .
        # . # . #
        # . . . #
        . # . # .
        . . # . .
        `)
})
basic.forever(function () {
	
})
