let myexport = function goCommand(gameinstance) {
    //go command
    gameinstance.input.on('pointerdown', (pointer, gameobject) => {

        if (buildmode) {
            return;
        }

        if (gameobject.length) {
            return;
        }


        const inputManager = this.input.manager;

        if (!buildmode) {
            players.children.iterate((player) => {

                if (pointer.rightButtonDown()) {
                    player.clicked = false;
                    player.tint = '0xffffff';
                    if (player.type == 'enemy') {
                        player.tint = '0xff0000';
                    }
                    buildicon.setVisible(false);

                }
                if (player.clicked) {

                    if (!(pointer.x > 700 && pointer.y > 530)) {
                        let target = vectors.find((el) => el.dudeid == player.dudeid).vector;
                        let cursor = cursors.find((el) => el.dudeid == player.dudeid).cursor;
                        target.x = pointer.x;
                        target.y = pointer.y;
                        cursor.x = pointer.x;
                        cursor.y = pointer.y;

                        // let vector = vectors.find((el) => el.dudeid == player.dudeid);
                        gameinstance.physics.moveToObject(player, target, 150);
                    }
                }
            })
        }

    });

}

export default myexport;