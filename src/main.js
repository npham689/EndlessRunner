// global game options
let gameOptions = {
    platformStartSpeed: 50,
    spawnRange: [100, 350],
    platformSizeRange: [50, 250],
    playerGravity: 900,
    jumpForce: 400,
    playerStartPosition: 200,
    jumps: 2
}

    let config = {
        type: Phaser.CANVAS,
        width: 640,
        height: 480,
        scene: [ Menu, Play ],
        backgroundColor: 0x4FFFFE0,
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 0},
                debug: true
            }
        },
    }
    let game = new Phaser.Game(config);
    let borderUISize = game.config.height / 15;
    let borderPadding = borderUISize / 3;

// reserve keyboard variables
let keyUP, keyDOWN, keyLEFT, keyRIGHT;
