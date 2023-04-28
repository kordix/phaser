function shootArrow(gameinstance, player, another) {
    let arrow = gameinstance.physics.add.sprite(player.x, player.y, 'arrow');
    let angleradians = Phaser.Math.Angle.Between(player.x, player.y, another.x, another.y);
    let angle = Phaser.Math.RadToDeg(angleradians + 90);
    arrow.angle = angle;
    gameinstance.physics.moveToObject(arrow, another, 300);
    let delay = ((player.attackrange) / 120) * 350
    gameinstance.time.addEvent({
        delay: delay,
        callback: function () {
            arrow.destroy();
        }
    })
}