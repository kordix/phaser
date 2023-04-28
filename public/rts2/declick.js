function declick(gameinstance) {

    console.log(gameinstance);

    const playerSprite = Phaser.Actions.GetFirst(gameinstance.players.getChildren(), { clicked: true });

    if (playerSprite) {
        playerSprite.clicked = false;
        playerSprite.tint = '0xffffff';
    }
}

export default declick;