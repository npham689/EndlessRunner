<<<<<<< HEAD
// Testing git push - Ernani
let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
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
=======
let config = {
    type: Phaser.WEBGL,
    width: 640,
    height: 480,
    scene: [ Menu, LevelOne,LevelTwo ],
    render: {
      pixelArt: true
    },
    physics:{
      default:'arcade',
      arcade: {
        debug: false,
        debugShowBody: true,
        gravity:{
          x: 0,
          y: 0,
        }
      }
    },
    
  }
  let game = new Phaser.Game(config);
  // set UI sizes
  let borderUISize = game.config.height / 15;
  let borderPadding = borderUISize / 3;
  // reserve keyboard vars
  let keyF, keyR, keyLEFT, keyRIGHT;
>>>>>>> 2101a919a1832f07a47ff3b3e2b6d8a474108bf9
