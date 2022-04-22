class Player extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        
        // add object to existing scene
        scene.add.existing(this);

        this.moveSpeed = 2; // side to side movement
        this.jumpSpeed = 4;
        this.onPlatform = false; // update this when player lands on platform
    }

    update () {
        // jumping
        if (Phaser.Input.Keyboard.JustDown(this.keyUP) && this.onPlatform) {
            // makes the player go up on canvas,
            // but would we want the canvas to move as well?
            // or would the player just be waiting at the 
            // top of the level (on a platform) for the canvas to go down?
            this.y += this.jumpSpeed;
            this.onPlatform = false;
        }
        // left and right movement
        if (keyLEFT.isDown && this.x >= borderUISize + this.width) {
            this.x -= this.moveSpeed;
        } else if (keyRIGHT.isDown && this.x <= game.config.width - borderUISize - this.width) {
            this.x += this.moveSpeed;
        }
    }
}