function treesAreGathered(player, trees) {
    if (player.type == 'player') {
        trees.children.each((tree) => {
            if (Math.abs(player.x - tree.x) < 80 && Math.abs(player.y - tree.y) < 80) {
                tree.setTint(0xFF0000);
                player.attacks = true;
                if (player.attackready) {

                    if (player.body.velocity.x == 0 && player.body.velocity.y == 0) {



                        player.attacks = true;
                        player.attackready = false;

                        tree.life -= 10;

                        if (tree.life <= 0) {
                            let vector = vectors.find((el) => el.dudeid == player.dudeid).vector;
                            tree.x = 1000;
                            tree.dead = true;
                            player.wood = true;

                            setTimeout(() => {
                                player.setVisible(true);
                                goldmine.setTexture('goldmine');
                                console.log('MOVE TO OBJECT');
                                vector.x = 100;
                                vector.y = 400;
                                gameinstance.physics.moveToObject(player, vector, player.speed);
                            }, 300)

                        }

                        setTimeout(() => {
                            player.attackready = true;
                        }, 1000)
                    }
                }

            }
        })
    }

}