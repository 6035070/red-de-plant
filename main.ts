// water bijgevult
input.onButtonPressed(Button.A, function () {
    basic.pause(1000)
    music.ringTone(3000)
    basic.pause(2000)
    music.stopAllSounds()
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            . # . # .
            # # # # #
            # # # # #
            . # # # .
            . . # . .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . # . # .
            . # # # .
            . . # . .
            . . . . .
            `)
    }
})
// water nodig
input.onButtonPressed(Button.B, function () {
    basic.pause(1000)
    music.ringTone(3000)
    basic.pause(2000)
    music.stopAllSounds()
    for (let index = 0; index < 10; index++) {
        basic.showLeds(`
            . . . . .
            # . . . #
            # . # . #
            . # . # .
            . . . . .
            `)
        basic.pause(500)
        basic.showLeds(`
            . . . . .
            . . . # .
            . # . # .
            # . # . .
            . . . . .
            `)
        basic.pause(500)
        basic.showLeds(`
            . . . . .
            . . # . #
            # . # . #
            . # . . #
            . . . . .
            `)
        basic.pause(500)
        basic.showLeds(`
            . . . . #
            . # . # .
            . # . # #
            # . . # .
            . . . . .
            `)
        basic.pause(500)
        basic.showLeds(`
            . . . # .
            # . # . #
            # . # # #
            . . # . #
            . . . . .
            `)
        basic.pause(500)
        basic.showLeds(`
            . . # . .
            . # . # .
            . # # # .
            . # . # .
            . . . . .
            `)
        basic.pause(500)
        basic.showLeds(`
            . # . . .
            # . # . #
            # # # . .
            # . # . .
            . . . . .
            `)
        basic.pause(500)
        basic.showLeds(`
            # . . . .
            . # . # #
            # # . . #
            . # . . #
            . . . . .
            `)
        basic.pause(500)
        basic.showLeds(`
            . . . . .
            # . # # #
            # . . # .
            # . . # .
            . . . . .
            `)
        basic.pause(500)
        basic.showLeds(`
            . . . . .
            . # # # .
            . . # . .
            . . # . .
            . . . . .
            `)
        basic.pause(500)
        basic.showLeds(`
            . . . . #
            # # # . #
            . # . . #
            . # . . #
            . . . . #
            `)
        basic.pause(500)
        basic.showLeds(`
            . . . # #
            # # . # .
            # . . # #
            # . . # .
            . . . # #
            `)
        basic.pause(500)
        basic.showLeds(`
            . . # # #
            # . # . .
            . . # # .
            . . # . .
            . . # # #
            `)
        basic.pause(500)
        basic.showLeds(`
            . # # # .
            . # . . .
            . # # . .
            . # . . .
            . # # # .
            `)
        basic.pause(500)
        basic.showLeds(`
            # # # . .
            # . . . #
            # # . . #
            # . . . #
            # # # . .
            `)
        basic.pause(500)
        basic.showLeds(`
            # # . . #
            . . . # .
            # . . # .
            . . . # .
            # # . . .
            `)
        basic.pause(500)
        basic.showLeds(`
            # . . # .
            . . # . #
            . . # . .
            . . # . .
            # . . . .
            `)
        basic.pause(500)
        basic.showLeds(`
            . . # . .
            . # . # .
            . # . . .
            . # . . .
            . . . . .
            `)
        basic.pause(500)
        basic.showLeds(`
            . # . . .
            # . # . #
            # . . . #
            # . . . .
            . . . . .
            `)
        basic.pause(500)
        basic.showLeds(`
            # . . . .
            . # . # .
            . . . # .
            . . . . #
            . . . . .
            `)
        basic.pause(500)
        basic.showLeds(`
            . . . . .
            # . # . .
            . . # . #
            . . . # .
            . . . . .
            `)
        basic.pause(500)
        basic.showLeds(`
            . . . . .
            . # . . .
            . # . # .
            . . # . #
            . . . . .
            `)
        basic.pause(500)
    }
})
