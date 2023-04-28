import goCommand from './goCommand.js';

function goOnPointer(gameinstance,x,y) {

    let vectors = gameinstance.vectors;
    gameinstance.input.on('pointerdown', (pointer, gameobject) => {

        if (gameobject.length) {
            return;
        }


        gameinstance.players.children.iterate((player) => {

            if (pointer.rightButtonDown()) {
                player.clicked = false;
                player.tint = '0xffffff';
                if (player.type == 'enemy') {
                    player.tint = '0xff0000';
                }
                if (typeof (buildicon) !== 'undefined') {
                    buildicon.setVisible(false);
                }

            }
            if (player.clicked) {

                if (!(pointer.x > 700 && pointer.y > 530)) {
                    let target = vectors.find((el) => el.dudeid == player.dudeid).vector;
                    target.x = pointer.x;
                    target.y = pointer.y;
                    // let vector = vectors.find((el) => el.dudeid == player.dudeid);
                    gameinstance.physics.moveToObject(player, target, 150);
                }
            }
        })


    });

}

export default goOnPointer;