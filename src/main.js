
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
        debug:true,
    }
    },
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    scene: [
        Game,
    ]
};

export default new Phaser.Game(config);
