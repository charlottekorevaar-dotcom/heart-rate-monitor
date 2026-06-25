input.onButtonPressed(Button.A, function () {
    Sprinting = true
})
input.onGesture(Gesture.Shake, function () {
    Resting = true
})
input.onGesture(Gesture.TiltRight, function () {
    Walking = true
})
let heartbeat = false
let Walking = false
let Resting = false
let Sprinting = false
let trace1 = images.createImage(`
    # . . . .
    # . . . .
    # . . . .
    # # . . .
    # # # # #
    `)
let trace2 = images.createImage(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    # # # # #
    `)
trace2.showImage(0)
basic.forever(function () {
    if (Resting) {
        heartbeat = true
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        trace1.scrollImage(1, 100)
        trace2.scrollImage(1, 100)
    }
})
basic.forever(function () {
    if (Sprinting) {
        heartbeat = true
        music.play(music.tonePlayable(988, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        trace1.scrollImage(1, 50)
        trace2.scrollImage(1, 50)
    }
})
basic.forever(function () {
    if (Walking) {
        heartbeat = true
        music.play(music.tonePlayable(349, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        trace1.scrollImage(1, 70)
        trace2.scrollImage(1, 70)
    }
})
