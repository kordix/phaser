function playersAttackEachOther(players,player,gameinstance) {

    players.children.each((another) => {

        if (another.dead) {
            return;
        }

        if (player.type != another.type) {

            if (Math.abs(another.x - player.x) < player.attackrange && Math.abs(another.y - player.y) < player.attackrange) {
                player.attacks = true;

                if (another.type == 'enemy') {
                    another.body.stop();
                    another.body.stop();
                    another.stop = true;

                }

                if (player.attackready) {

                    if (player.body.velocity.x == 0 && player.body.velocity.y == 0) {
                        if (player.klasa != 'bowman') {
                            player.anims.play('axe', true);
                        }

                        if (player.klasa == 'bowman') {
                            player.anims.play('bow', true);
                            shootArrow(self, player, another);


                        }

                        player.attacks = true;
                        another.life -= player.attack;

                        gameinstance.dudestatstext.setText(`Attack:${player.attack}\nRange:${player.attackrange}\nLife:${player.life}`);

                        if (another.life <= 0) {

                            another.dead = true;
                            another.setVisible(false);

                            if (another.type == 'enemy') {
                                score += 10;
                                another.x = 0;
                                another.y = 0;
                                another.setVisible(false);
                            }


                            if (another.type == 'player') {
                                another.x = 1000;
                                another.y = 600;
                            }
                        }






                        player.attackready = false;

                        setTimeout(() => {
                            player.attackready = true;
                        }, 1000)
                    }
                }

            }
        }
    })

}