input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == receivedString) {
        basic.showArrow(ArrowNames.North)
    }
    if (receivedString == "SOUTH") {
        basic.showArrow(ArrowNames.South)
        if (receivedString == "EAST") {
            basic.showArrow(ArrowNames.East)
        }
        if (receivedString == "WEST") {
            basic.showArrow(ArrowNames.West)
        }
    }
})
input.onButtonPressed(Button.B, function () {
	
})
