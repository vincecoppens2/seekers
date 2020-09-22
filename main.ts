radio.onReceivedNumber(function (receivedNumber) {
    signal = radio.receivedPacket(RadioPacketProperty.SignalStrength)
    if (signal < -60) {
        basic.showLeds(`
            . # # # .
            . # # # .
            . . # . .
            . # # # .
            . . . . .
            `)
    } else {
        basic.showLeds(`
            . # # # .
            . # # # .
            . . # . .
            . . # . .
            # # # # #
            `)
    }
})
let signal = 0
radio.setGroup(1)
