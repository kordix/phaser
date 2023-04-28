import declick from "./declick.js";


function addDude(gameinstance, x, y, type, klasa) {
    let cost = 20;
    let attackrange = 50;
    if (klasa == 'bowman') {
        cost = 50;
        attackrange = 120;
    }

    if (type == 'player') {
        if (gameinstance.gold < cost) {
            return;
        }
    }


    if (!x) {
        x = Math.random() * 500;
        y = Math.random() * 500
    }


    var player = gameinstance.players.create(x, y, 'dude');
    player.life = 50;
    player.cost = cost;
    player.klasa = klasa;
    player.attackrange = attackrange;
    player.dead = false;



    if (type == 'player') {
        gold -= player.cost;
    }
    player.attackready = true;


    player.body.setBounce(0);
    player.setBounce(0);
    if (type) {
        player.type = type;
    }

    if (player.type == 'enemy') {
        player.setTint('0xff0000');
    }

    player.setBounce(0);
    // player.setInteractive();

    player.setInteractive({
        cursor: 'url(Move.cur)'
    });
    player.setCollideWorldBounds(true);
    player.depth = 2;

    var vectorWithId = {
        vector: new Phaser.Math.Vector2(),
        dudeid: gameinstance.dudeid
    };

    gameinstance.vectors.push(vectorWithId);

    player.clicked = false;
    player.dudeid = gameinstance.dudeid;
    player.attacks = false;
    gameinstance.dudeid++;

    player.on('pointerdown', () => {
        console.log('plauerclicked', player.clicked);
        if (player.dead) {
            return;
        }
        if (!player.clicked) {
            player.tint = '0x00ff00';
            declick(gameinstance);
            player.clicked = true;

            if (typeof (buildicon) !== 'undefined') {
                if (player.type != 'enemy') {
                    gameinstance.buildicon.setVisible(true);
                }
            }
        } else {
            player.tint = '0xffffff';
            player.clicked = false;
            if (typeof (buildicon) !== 'undefined') {
                gameinstance.buildicon.setVisible(false);
            }
        }

    })



}

export default addDude;