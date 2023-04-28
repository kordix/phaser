function declick() {

    const playerSprite = Phaser.Actions.GetFirst(players.getChildren(), { clicked: true });

    if (playerSprite) {
        playerSprite.clicked = false;
        playerSprite.tint = '0xffffff';
    }
}