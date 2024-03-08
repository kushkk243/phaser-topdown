import { Scene } from 'phaser';
import 'phaser';
export class Game extends Phaser.Scene
{
    constructor ()
    {
        super('Game');
    }
    preload(){
        this.load.image('base', 'assets/tiles.png');
        this.load.tilemapTiledJSON('tilemap', 'assets/map.json');

    }
    create ()
    {
        const map = this.make.tilemap({ key: 'tilemap'});
        const tileset = map.addTilesetImage('tilesetpok', 'base');
        const debugG = this.add.graphics().setAlpha(0.75);
        var worldlayer = map.createLayer('Ground', tileset).setCollisionByProperty({collides:true});
        var layerR = map.createLayer('Road', tileset).setCollisionByProperty({collides:true});
        var layerG = map.createLayer('Grass', tileset).setCollisionByProperty({collides:true});
        var layerT = map.createLayer('Trees', tileset).setCollisionByProperty({collides:true});
        var layerTt = map.createLayer('TTrees', tileset).setCollisionByProperty({collides:true});
        
        
        
    }
    update(){

    }
}
