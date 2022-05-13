controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Raton,
    [img`
        . . . . . . . . . . . d d d . . 
        d . . . . . . . . . . d d d . . 
        d d . . . . b 3 b . d d d d . . 
        . d d . . b f b f b d d . . . . 
        . d d d b b 1 b 1 d d d . . . . 
        . . . d d b b b b b b . . . . . 
        . . . . d b b b b b b . . . . . 
        . . . . b b b b b b b . . . . . 
        . . . . b b b b b b b . . . . . 
        . . . . b b b c b b b . . . . . 
        . . . . d b c c c b b . . . . . 
        . . . d d b c c b b d . . . . . 
        . . d d d c c . . d d d . . . . 
        . d d d . c c c c . d d . . . . 
        . . . . . c c . c . . d d . . . 
        . . . . . . c c c . . d d . . . 
        `],
    500,
    true
    )
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Raton.sayText("Hi!", 500, false)
    Gato.sayText("GET AWAY FROM ME!", 500, false)
    animation.runImageAnimation(
    Raton,
    [img`
        ....................
        ....................
        .5.5................
        ..5.....ff..........
        .5.5...f33f.........
        .......f33f....ff...
        ..ff.ffffffffff33f..
        ..f3f3fbbbbbbbb33f..
        ...f33fbbbbbbbbff...
        ..fff3fb1fb1fbf.....
        .f33fffbffbffbf.....
        .f3f33fbbbbbbbf.....
        .ffff3fbfffffbf.....
        .f3333fbb111bbf.....
        .....ffbbbbbbbf.....
        ......fbbbbbbbf.....
        ......fbbbbbbbf33...
        .....fffbbbbbfff33..
        .....f333fff333f.33.
        ......fff...fff...33
        `],
    500,
    false
    )
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Raton,
    [img`
        . . d d . . . . . . d d . . . . 
        . . . d d . . . . d d d . . . . 
        . . . d d d . . . d d d . . . . 
        . . . . d d . . d d d d . c . . 
        . . . b d d b b d d d b c c c . 
        . . b b b b b b b b b b c . c . 
        . b b 1 f b b b b b c c c c c . 
        . 3 b b b b b b b b c c c c . . 
        . b b 1 f b b b b b b c c . . . 
        . . b b d d b b b b b b . . . . 
        . . . b d d b b d d d b . . . . 
        . . . d d d . . . d d d . . . . 
        . . d d d . . . . . d d . . . . 
        . . d d d . . . . . d d . . . . 
        . . . . . . . . . . . d . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        d d d d d d . . . . . . . d . . 
        . . d d d d . . . . . . d d . . 
        . . . d d d d . . . . d d d . . 
        . . . . b d d b b b d d d c c . 
        . . . b b b b b b b b b c c c c 
        . . b b b b b b b b b b c . . c 
        . b b 1 f b b b b b b c c c c c 
        . 3 b b b b b b b b b c c c c . 
        . b b 1 f b b b b b b b c . . . 
        . . b b b b b b b d b b . . . . 
        . . . b b b b b d d d b . . . . 
        . . . . b d b b d d d b . . . . 
        d d d d d d . . . d d . . . . . 
        . d d d d d . . . d d d . . . . 
        . . . . . . . . . . d d d . . . 
        . . . . . . . . . . . . . . . . 
        `],
    500,
    true
    )
})
info.onCountdownEnd(function () {
    game.over(false)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Raton,
    [img`
        . . . d . . . . . . . . . . . . 
        . . . d d . . . . . . . . . . . 
        . . . d d d . . . . . . d d d d 
        . . . . d d d . . . . d d d d d 
        . . . . d d d b b b b d d d . . 
        . . . . b b b b b b b b b . . . 
        . . c c c c b b b b f 1 b b . . 
        . . c . c c b b b b b b b 3 . . 
        . . c c b b b b b b f 1 b b . . 
        . . . . b b b b b b b b b . . . 
        . . . . d d d d b d d b . . . . 
        . . . . d d d . . d d . . . . . 
        . . . d d . . . . . d d . . . . 
        . . d d d . . . . . d d d . . . 
        . . d d . . . . . . . d d d . . 
        . . . . . . . . . . . d d d . . 
        `,img`
        . . . . . d . . . . . d d . . . 
        . . . . d d . . . . . d d . . . 
        . . . . d d . . . . d d d . . . 
        . . . d d . . . . . d d . . . . 
        . . . d d b b b b b b b . . . . 
        . c c c b b b b b b b b b . . . 
        1 c . c c b b b b b 1 f b b . . 
        . c c b c b b b b b b b b 3 . . 
        . . . b c b b b b b 1 f b b . . 
        . . . b b b b b b b b b b . . . 
        . . d d d b b b b d d b . . . . 
        . d d d . . . . d d . . . . . . 
        d d d . . . . . d d . . . . . . 
        d d . . . . . . d d . . . . . . 
        d d . . . . . . d d . . . . . . 
        . . . . . . . . d . . . . . . . 
        `],
    500,
    true
    )
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Raton,
    [img`
        . . . . . . . . . . . . . . . . 
        . . d d . . . . c c . . . . . . 
        . . d d d . . c . c c . . . d d 
        . . . d d d . . c . c . d d d d 
        . . . . d d b b c c c b d d d . 
        . . . . . b b b c b b b d d . . 
        . . . . . b b b b b b b . . . . 
        . . . . . b b b b b b b . . . . 
        . . . . . b b b b b b b . . . . 
        . . . . . b b b b b b b d d d d 
        . . . . d d b f b f b d d d . . 
        . . d d d d b 1 b 1 b b . . . . 
        . d d d . . b b b b b . . . . . 
        . d d . . . . b 3 b . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . c c . . . . . . 
        . . . . . . . . c c c . . . . . 
        d d . . . . . . c . c . . . . . 
        . d d d . b b b c c c b . . . . 
        . . d d d b b b c b b d d d d d 
        . . . d d d b b b b b d d d d . 
        . . . . . b b b b b b b . . . . 
        . . . . . b b b b b b b . . . . 
        . . . . . b b b b b b b . . . . 
        d d d d d d b b b b b b . . . . 
        . . d d d d b 1 b 1 b d . . . . 
        . . . . . b b f b f b d d . . . 
        . . . . . . b b b b b d d d . . 
        . . . . . . . b 3 b . . d d . . 
        . . . . . . . . . . . . d d d . 
        . . . . . . . . . . . . . d d . 
        `],
    500,
    true
    )
})
info.onLifeZero(function () {
    game.over(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.startCountdown(20)
    music.zapped.play()
    Gato.setPosition(randint(10, 240), randint(10, 200))
    Gato.sayText("ouch!", 500, false)
    info.changeLifeBy(-1)
    animation.runImageAnimation(
    Gato,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 2 2 . 2 2 . . . . . . . 
        . . . 2 2 2 2 4 4 2 2 2 2 . . . 
        . . 2 4 2 4 4 4 4 4 2 4 4 2 . . 
        . . 2 4 4 4 5 5 5 4 4 4 4 2 . . 
        . 2 2 2 4 5 5 5 5 5 4 4 2 . . . 
        2 2 2 4 4 5 5 5 5 5 5 4 2 . . . 
        2 2 4 4 5 5 5 5 5 5 5 5 4 2 . . 
        . 2 4 4 5 5 5 5 5 5 5 5 4 2 . . 
        . . 2 4 4 5 5 5 5 5 5 4 4 2 . . 
        . . 2 2 4 4 4 4 5 4 4 4 2 . . . 
        . . . 2 2 2 4 4 4 4 2 2 . . . . 
        . . . 2 . . 2 2 2 2 . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . f . . . . . . . . . . . . . . 
        . f f . . . f 3 f . . . . . . . 
        . f f f . f f f f f . . . . f f 
        . . f f f f 1 f 1 f . . f f f f 
        . . f f f f 5 f 5 f . f f f f . 
        . . . . f f f f f f f f f . . . 
        . . . . f f f f f f f f . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . f f f f f f f f f . . . 
        . . . f f f f c f f f f f f f . 
        . . f f f f c c . . . f f f f f 
        . f f f f f c . c c . . f f f f 
        . . . . . . c c c c . . . . . . 
        `],
    500,
    false
    )
})
let Gato: Sprite = null
let Raton: Sprite = null
info.setLife(10)
info.startCountdown(10)
tiles.setCurrentTilemap(tilemap`level2`)
Raton = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . b . . . . . . . . 
    . . . . . . b 3 b . . . . . . . 
    . . . . . b b b b b . . . . . . 
    . f . . . b 7 b 7 b . . . . d f 
    . d d . . b f b f b b . d d d . 
    . d d . b b b b b b d d d d d . 
    . d d d b b b b b b d d d d . . 
    . d d d d d b b b b d d d d . . 
    . d d d d d b b b c d d d . . . 
    . . . . b b b b b d b . . . . . 
    . . d d d b b b c d d d . . . . 
    . d d d d b b c b d d d . . . . 
    f d d d d c c c b b d d d . . . 
    . . . . . c b c c . . . d d f . 
    . . . . . . c c . . . . . . . . 
    `, SpriteKind.Player)
scene.cameraFollowSprite(Raton)
controller.moveSprite(Raton)
Gato = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . f . . . . . . . . . . . . . . 
    . f f . . . f 3 f . . . . . . . 
    . f f f . f f f f f . . . . f f 
    . . f f f f 1 f 1 f . . f f f f 
    . . f f f f 5 f 5 f . f f f f . 
    . . . . f f f f f f f f f . . . 
    . . . . f f f f f f f f . . . . 
    . . . . f f f f f f f . . . . . 
    . . . . f f f f f f f . . . . . 
    . . . . f f f f f f f . . . . . 
    . . . . f f f f f f f f f . . . 
    . . . f f f f c f f f f f f f . 
    . . f f f f c c . . . f f f f f 
    . f f f f f c . c c . . f f f f 
    . . . . . . c c c c . . . . . . 
    `, SpriteKind.Food)
