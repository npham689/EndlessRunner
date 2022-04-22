
// global game options
let gameOptions = {
    platformStartSpeed: 350,
    spawnRange: [100, 350],
    platformSizeRange: [50, 250],
    playerGravity: 900,
    jumpForce: 400,
    playerStartPosition: 200,
    jumps: 2
}
window.onload = function() {
    let config = {
        type: Phaser.AUTO,
        width: 1334,
        height: 750,
        scene: playGame,
        backgroundColor: 0x444444,
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 200},
                debug: true
            }
        },
        scene: [ Menu, Play ]
    }
    let game = new Phaser.Game(config);

    // set UI sizes
    let borderUISize = game.config.height / 15;
    let borderPadding = borderUISize / 3;

    // reserve keyboard variables
    let keyUP, keyDOWN, keyLEFT, keyRIGHT;
    //test
    window.focus();
    resize();
    window.addEventListener("resize", resize, false);
}
 
