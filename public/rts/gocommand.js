function goCommand(gameinstance) {
    gameinstance.input.on('pointerdown', (pointer, gameobject) => {

        if (buildmode) {
            return;
        }

        if (gameobject.length) {
            return;
        }

        if (!buildmode) {
            players.children.iterate((player) => {

                if (!player.dead) {
                    console.log(player.dead);

                    if (pointer.rightButtonDown()) {
                        player.clicked = false;
                        player.tint = '0xffffff';
                        if (player.type == 'enemy') {
                            player.tint = '0xff0000';
                        }

                        document.querySelector('#budowaniemenu').style.opacity = 0;
                        gameinstance.messagetext.setText('');

                        gameinstance.dudestatstext.setVisible(false);


                    }
                    if (player.clicked) {

                        if (!(pointer.x > 700 && pointer.y > 530)) {
                            let target = vectors.find((el) => el.dudeid == player.dudeid).vector;
                            let cursor = cursors.find((el) => el.dudeid == player.dudeid).cursor;
                            target.x = pointer.worldX;
                            target.y = pointer.worldY;
                            cursor.x = pointer.worldX;
                            cursor.y = pointer.worldY;

                            // let vector = vectors.find((el) => el.dudeid == player.dudeid);
                            gameinstance.physics.moveToObject(player, target, player.speed);
                            player.clicked = false;
                            player.tint = '0xffffff';

                        }
                    }
                }
            })
        }

    });

}