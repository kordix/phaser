import addDude from "./addDude.js";
import createAnimations from "./createAnimations.js";
import goingDude from "./goingDude.js";
import goOnPointer from "./goOnPointer.js";
import goCommand from "./goCommand.js";




// import declick from "./declick.js";


let config = {
    parent: 'game-container',
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: false,
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

let game = new Phaser.Game(config);


function preload() {
    this.load.image('grass', '../assets/grass.png');
    this.load.spritesheet('dude', '../assets/dudeaxe.png', { frameWidth: 32, frameHeight: 48 });

}


function create() {
    let self = this;
    this.vectors = [];
    this.gold = 100;
    this.dudeid = 1;

    this.buildicon = null;
    this.players = this.physics.add.group();

    this.input.mouse.disableContextMenu();
    this.add.tileSprite(0, 0, game.config.width, game.config.height, 'grass').setOrigin(0);
    addDude(this,100,100);

    this.emmiter = new Phaser.Events.EventEmitter();

    this.emmiter.on('test', ()=>{
        goCommand(self, 500, 500);
    })

    // emmiter.emit('test');

    createAnimations(this);
    goOnPointer(this);

  


}


function update() {
    let self = this;
    this.players.children.each(function (player) {
        goingDude(player, self.vectors);
        if(player.x > 400){
            self.emmiter.emit('test');
        }
    });





}