let range = 0
forever(function () {
    pixel.setColor(0x7f00ff)
    while (range < 1023) {
        pins.LED.analogWrite(range)
        pins.LED.analogSetPeriod(300)
        range += 1
    }
    while (range > 0) {
        pins.LED.analogWrite(range)
        pins.LED.analogSetPeriod(300)
        range += -1
    }
})
