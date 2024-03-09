import { Scene } from 'phaser';
import 'phaser';
export class Game extends Phaser.Scene
{
    constructor ()
    {
        super('Game');
        let player;
        let cursors;
    }
    preload(){
        this.load.image('base', 'assets/tilesets/tuxmon-sample-32px-extruded.png');
        this.load.tilemapTiledJSON('tilemap', 'assets/tilemaps/tuxemon-town.json');
        this.load.atlas('atlas','assets/atlas/atlas.png','assets/atlas/atlas.json');

    }
    create ()
    {
        const map = this.make.tilemap({ key: 'tilemap' });
        const tileset = map.addTilesetImage('tuxmon-sample-32px-extruded','base');
        const belowLayer = map.createLayer('Below Player',tileset,0,0);
        const worldLayer = map.createLayer('World', tileset, 0,0);
        const aboveLayer = map.createLayer('Above Player', tileset,0,0);
        aboveLayer.setDepth(10);
        worldLayer.setCollisionByProperty({collides:true});
        const debugL = this.add.graphics().setAlpha(0.75);
        this.player = this.physics.add.sprite(400,350,"atlas",'misa-front');
        this.physics.add.collider(this.player,worldLayer);
        const anims = this.anims;
  anims.create({
    key: "misa-left-walk",
    frames: anims.generateFrameNames("atlas", {
      prefix: "misa-left-walk.",
      start: 0,
      end: 3,
      zeroPad: 3,
    }),
    frameRate: 10,
    repeat: -1,
  });
  anims.create({
    key: "misa-right-walk",
    frames: anims.generateFrameNames("atlas", {
      prefix: "misa-right-walk.",
      start: 0,
      end: 3,
      zeroPad: 3,
    }),
    frameRate: 10,
    repeat: -1,
  });
  anims.create({
    key: "misa-front-walk",
    frames: anims.generateFrameNames("atlas", {
      prefix: "misa-front-walk.",
      start: 0,
      end: 3,
      zeroPad: 3,
    }),
    frameRate: 10,
    repeat: -1,
  });
  anims.create({
    key: "misa-back-walk",
    frames: anims.generateFrameNames("atlas", {
      prefix: "misa-back-walk.",
      start: 0,
      end: 3,
      zeroPad: 3,
    }),
    frameRate: 20,
    repeat: -1,
  });
  const camera = this.cameras.main;
  camera.startFollow(this.player);
    camera.setBounds(0, 0, 800,600);
  this.cursors = this.input.keyboard.createCursorKeys();
        
    }
    update(time, delta){
        this.player.body.setVelocity(0);
        const prevVelocity = this.player.body.velocity.clone();
        if(this.cursors.left.isDown){
            this.player.setVelocityX(-100);
        }
        else if(this.cursors.right.isDown){
            this.player.setVelocityX(100);
        }

        if(this.cursors.up.isDown){
            this.player.setVelocityY(-100);
        }
        else if(this.cursors.down.isDown){
            this.player.setVelocityY(100);
        }

        this.player.body.velocity.normalize().scale(100);
        if (this.cursors.left.isDown) {
            this.player.anims.play("misa-left-walk", true);
          } else if (this.cursors.right.isDown) {
            this.player.anims.play("misa-right-walk", true);
          } else if (this.cursors.up.isDown) {
            this.player.anims.play("misa-back-walk", true);
          } else if (this.cursors.down.isDown) {
            this.player.anims.play("misa-front-walk", true);
          } else {
            this.player.anims.stop();
        
            // If we were moving, pick and idle frame to use
            if (prevVelocity.x < 0) player.setTexture("atlas", "misa-left");
            else if (prevVelocity.x > 0) player.setTexture("atlas", "misa-right");
            else if (prevVelocity.y < 0) player.setTexture("atlas", "misa-back");
            else if (prevVelocity.y > 0) player.setTexture("atlas", "misa-front");
          }
    }
}
