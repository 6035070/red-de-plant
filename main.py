# water bijgevult

def on_button_pressed_a():
    basic.pause(1000)
    music.ring_tone(3000)
    basic.pause(200)
    music.stop_all_sounds()
input.on_button_pressed(Button.A, on_button_pressed_a)
