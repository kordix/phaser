function cameraMoves(gameinstance) {
    let cursors = gameinstance.input.keyboard.createCursorKeys();

    if (cursors.up.isDown) {
        console.log('góa');
        gameinstance.cameras.main.scrollY -= 20;
        // player.setVelocityY(-300);
    } else if (cursors.down.isDown) {
        gameinstance.cameras.main.scrollY += 20;
    } else if (cursors.left.isDown) {
        gameinstance.cameras.main.scrollX -= 20;

    } else if (cursors.right.isDown) {
        gameinstance.cameras.main.scrollX += 20;

    }

}