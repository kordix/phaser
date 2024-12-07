function addDude(gameinstance, x, y, type, klasa) {

    console.log(players);

    let cost = 20;
    let attackrange = 50;
    let attack = 10;

    if (klasa == 'bowman') {
        cost = 50;
        attackrange = stats.rangebowman;
        attack = stats.attackbowman;

    }

    if (klasa == 'tarczownik') {
        cost = 50;
    }

   



    if (type == 'player') {

        if (foodused >= food) {
            return;
        }


        if (pay({ gold: cost }, gameinstance)) {
            foodused += 1;

        } else {
            return
        }
    }





    if (!x) {
        x = Math.random() * 500;
        y = Math.random() * 500
    }


    var player = players.create(x, y, 'dude');
    player.life = 50;
    player.cost = cost;
    player.klasa = klasa;
    player.attackrange = attackrange;
    player.attack = attack;
    player.speed = 130;



    if (player.klasa == 'bowman') {
        player.attackrange = stats.rangebowman;
        player.speed = 90;
    }

    if (player.klasa == 'tarczownik') {
        player.speed = 100;
        player.life = 120;
    }


    player.dead = false;




    player.attackready = true;


    player.body.setBounce(0);
    player.setBounce(0);
    if (type) {
        player.type = type;
    }

    if (player.type == 'enemy') {
        player.setTint('0xff0000');
    }

    gameinstance.physics.add.existing(player);
    player.setBounce(0);
    // player.setInteractive();

    player.setInteractive({
        cursor: 'url(Move.cur)'
    });
    player.setCollideWorldBounds(true);
    player.depth = 2;

    var vectorWithId = {
        vector: new Phaser.Math.Vector2(),
        dudeid: dudeid
    };

    var cursorWithId = {
        cursor: gameinstance.add.image(player.x, player.y, 'cursor'),
        dudeid: dudeid
    }

    cursorWithId.cursor.depth = 1;

    vectors.push(vectorWithId);
    cursors.push(cursorWithId);

    player.clicked = false;
    player.dudeid = dudeid;
    player.attacks = false;
    dudeid++;

    player.on('pointerdown', () => {
        document.querySelector('#rekrutacjamenu').style.opacity = 0;
        if (player.klasa == 'dude') {
            document.querySelector('#budowaniemenu').style.opacity = 1;
        } else {
            document.querySelector('#budowaniemenu').style.opacity = 0;
        }
        document.querySelector('#forgemenu').style.opacity = 0;
        gameinstance.dudestatstext.setVisible(true);
        gameinstance.dudestatstext.setText(`Attack:${player.attack}\nRange:${player.attackrange}\nLife:${player.life}`)


        if (player.dead) {
            return;
        }
        if (!player.clicked) {
            if (player.type !== 'enemy') {
                player.tint = '0x00ff00';
                declick();
                player.clicked = true;

                if (player.klasa == 'dude') {
                    // buildicon.setVisible(true);
                }
            }
        } else {
            player.tint = '0xffffff';
            player.clicked = false;
            // buildicon.setVisible(false);
        }

    })



}