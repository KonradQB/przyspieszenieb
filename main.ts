radio.onReceivedNumber(function (receivedNumber) {
    przyspieszenie = receivedNumber
    if (przyspieszenie > najszybszy) {
        najszybszy = przyspieszenie
    }
})
function wyswietl () {
    if (najszybszy >= 200 && najszybszy <= 400) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # # . . .
            `)
    } else if (najszybszy >= 400 && najszybszy <= 600) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            `)
    } else if (najszybszy >= 600 && najszybszy <= 800) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # # # . .
            # # # # #
            `)
    } else if (najszybszy >= 800 && najszybszy <= 1000) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            # # # # #
            `)
    } else if (najszybszy >= 1000 && najszybszy <= 1200) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # . .
            # # # # #
            # # # # #
            `)
    } else if (najszybszy >= 1200 && najszybszy <= 1400) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # . .
            # # # # #
            # # # # #
            `)
    } else if (najszybszy >= 1400 && najszybszy <= 1600) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            # # # # #
            # # # # #
            `)
    } else if (najszybszy >= 1600 && najszybszy <= 1800) {
        basic.showLeds(`
            . . . . .
            # # # . .
            # # # # #
            # # # # #
            # # # # #
            `)
    } else if (najszybszy >= 1800 && najszybszy <= 1900) {
        basic.showLeds(`
            # # . . .
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else if (przyspieszenie >= 1900 && przyspieszenie <= 2200) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else {
        basic.showIcon(IconNames.Rollerskate)
    }
}
input.onButtonPressed(Button.A, function () {
    najszybszy = 0
})
let przyspieszenie = 0
let najszybszy = 0
najszybszy += 0
radio.setGroup(1)
basic.forever(function () {
    serial.writeLine("" + (przyspieszenie))
})
