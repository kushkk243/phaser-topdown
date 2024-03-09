
import { Physics } from 'phaser';
import { Game } from './scenes/Game';



const config = {
    type: Phaser.AUTO,
    width: 1024,
    height: 768,
    parent: 'game-container',
    //backgroundColor: '#028af8',
    pixelArt:true,
    physics:{
        default:"arcade",
        arcade:{
        gravity:{ y:0},
        debug:false,
    }
    },
    scale: {
        mode: Phaser.Scale.RESIZE,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    scene: [
        Game,
    ]
};

export default new Phaser.Game(config);
