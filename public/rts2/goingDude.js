function goingDude(player,vectors) {

    let target = vectors.find((el) => el.dudeid == player.dudeid).vector;
    const tolerance = 4;
    const distance = Phaser.Math.Distance.Between(player.x, player.y, target.x, target.y);
    if (player.attacks) {
        if (player.klasa != 'bowman') {
            player.anims.play('axe', true);
        }

        if (player.klasa == 'bowman') {
            player.anims.play('bow', true);
        }
    } if (player.body.speed > 0) {
        if (target.x > player.x) {
            player.anims.play('right', true);
        }
        if (target.x < player.x) {
            player.anims.play('left', true);
        }
        if (distance < tolerance) {
            player.body.reset(target.x, target.y);
        }
    } else {
        if (player.klasa != 'bowman') {
            if (!player.attacks && !player.wood && !player.gold) {
                player.anims.play('turn', true);
            }
        }

        if (player.klasa == 'bowman') {
            if (!player.attacks && !player.wood && !player.gold) {
                player.anims.play('bow', true);
            }
        }

        if (player.wood) {
            player.anims.play('wood', true);
        }

        if (player.gold) {
            player.anims.play('gold', true);
        }


    }

}

export default goingDude;