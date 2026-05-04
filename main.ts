function createAsteroids () {
    info.startCountdown(15)
    asteroidList = [
    assets.image`asteroid0`,
    assets.image`asteroid1`,
    assets.image`asteroid2`,
    assets.image`spaceDebris1`,
    assets.image`spaceDebris0`,
    img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        c . . . . . . . . . . . . c . . 
        c . . . . . . . . . . . . c . . 
        c c c . . c c . c . . c . c c c 
        c . c c . c . . c . . c . c . c 
        c . c c . c . . c . . c . c . c 
        c c c . . c . . c c c . . c . c 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,
    img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 4 4 . . . . . . . 
        . . . . . . 4 5 5 4 . . . . . . 
        . . . . . . 2 5 5 2 . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,
    img`
        . . . . . . . . . b b b b . . . 
        . . . . . . b b b d d d d b . . 
        . . . . . . b d d d d d d b . . 
        . . . . b b d d d d d b b d . . 
        . . . . b d d d d d d b b d b . 
        . . . . c d d d d d b b d b c . 
        . . . b c c b b b b d d b c c . 
        . . b b c c c b d d b c c c c . 
        . b b d d d b b b b b b c c c c 
        . c d d d d d d b d b c c c b c 
        . c b d d d b b d b c c c b b c 
        c b c c c c b d d b b b b b c c 
        c c b b b d d b c c b b b b c c 
        c c c c c c c c c b b b b c c . 
        . c c c c b b b b b b b c c . . 
        . . . . c c c c c c c c . . . . 
        `,
    img`
        .............ccfff..............
        ...........ccddbcf..............
        ..........ccddbbf...............
        ..........fccbbcf...............
        .....fffffccccccff.........ccc..
        ...ff99bbbbbcbbbbcfff....ccbbc..
        ..fbb999bbbcbcbbbbcccff.cdbbc...
        ffbbbb9999bbcbcbbbcccccfcdbbf...
        fbcbbb11991bcbbbbbcccccffbbf....
        fbbb11111111bbbbbcccccccbbcf....
        .fb11133cc11bbbbcccccccccccf....
        ..fccc31c111bbbcccccbdbffbbcf...
        ...fc13c111cbbbfcddddcc..fbbf...
        ....fccc111fbdbbccdcc.....fbbf..
        ........ccccfcdbbcc........fff..
        .............fffff..............
        `,
    img`
        .............ccfff..............
        ...........ccddbcf..............
        ..........ccddbbf...............
        ..........fccbbcf...............
        .....fffffccccccff.........ccc..
        ...ff99bbbbbcbbbbcfff....ccbbc..
        ..fbb999bbbcbcbbbbcccff.cdbbc...
        ffbbbb9999bbcbcbbbcccccfcdbbf...
        fbcbbb11991bcbbbbbcccccffbbf....
        fbbb11111111bbbbbcccccccbbcf....
        .fb11133cc11bbbbcccccccccccf....
        ..fccc31c111bbbcccccbdbffbbcf...
        ...fc13c111cbbbfcddddcc..fbbf...
        ....fccc111fbdbbccdcc.....fbbf..
        ........ccccfcdbbcc........fff..
        .............fffff..............
        `,
    img`
        .............ccfff..............
        ...........ccddbcf..............
        ..........ccddbbf...............
        ..........fccbbcf...............
        .....fffffccccccff.........ccc..
        ...ff99bbbbbcbbbbcfff....ccbbc..
        ..fbb999bbbcbcbbbbcccff.cdbbc...
        ffbbbb9999bbcbcbbbcccccfcdbbf...
        fbcbbb11991bcbbbbbcccccffbbf....
        fbbb11111111bbbbbcccccccbbcf....
        .fb11133cc11bbbbcccccccccccf....
        ..fccc31c111bbbcccccbdbffbbcf...
        ...fc13c111cbbbfcddddcc..fbbf...
        ....fccc111fbdbbccdcc.....fbbf..
        ........ccccfcdbbcc........fff..
        .............fffff..............
        `
    ]
    while (info.countdown() > 0) {
        projectile = sprites.createProjectileFromSide(asteroidList._pickRandom(), randint(-75, -25), randint(-25, 25))
        projectile.setPosition(160, randint(5, 115))
        pause(randint(250, 1000))
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    game.reset()
})
function startGame () {
    info.setLife(3)
    scene.setBackgroundImage(assets.image`spaceBackground`)
    discovery = sprites.create(assets.image`discoveryShuttle`, SpriteKind.Player)
    discovery.setPosition(30, 60)
    discovery.z = 10
    controller.moveSprite(discovery, 75, 75)
    scroller.scrollBackgroundWithSpeed(-50, 0)
}
info.onCountdownEnd(function () {
    hubble = sprites.create(assets.image`hubbleTelescope`, SpriteKind.Player)
    hubble.setPosition(140, 55)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    music.play(music.melodyPlayable(music.knock), music.PlaybackMode.InBackground)
    sprites.destroy(otherSprite)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.InBackground)
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
    scene.setBackgroundImage(assets.image`splashScreen`)
    game.showLongText("Houston we found the Hubble telescope", DialogLayout.Bottom)
    game.showLongText("press a to play again", DialogLayout.Bottom)
})
let hubble: Sprite = null
let discovery: Sprite = null
let projectile: Sprite = null
let asteroidList: Image[] = []
scene.setBackgroundImage(assets.image`kellyScreen`)
game.showLongText("my name is astronaut Scott Kelly", DialogLayout.Bottom)
game.showLongText("I need your help finding the Hubble telescope", DialogLayout.Bottom)
game.showLongText("use the arrow keys/ or WASD", DialogLayout.Bottom)
game.showLongText("oh yeah watch out for BRUHS and space-sharks", DialogLayout.Bottom)
startGame()
createAsteroids()
