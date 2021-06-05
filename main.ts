bluetooth.startUartService()
basic.forever(function () {
    bluetooth.uartWriteNumber(input.soundLevel())
    basic.pause(500)
    pins.servoWritePin(AnalogPin.P0, 100)
    basic.pause(1000)
    pins.servoWritePin(AnalogPin.P0, 30)
})
