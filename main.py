strip = neopixel.create(DigitalPin.P0, 13, NeoPixelMode.RGB)
strip.set_brightness(50)
counter = 0

def on_forever():
    global counter
    for index in range(13):
        if (index - counter) % 3 == 0:
            strip.set_pixel_color(index, neopixel.colors(NeoPixelColors.VIOLET))
    basic.pause(200)
    strip.show()
    counter += 1
    strip.clear()
basic.forever(on_forever)
