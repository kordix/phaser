function addGoldMine(gameinstance) {
    goldmine = gameinstance.physics.add.sprite(500, 500, 'goldmine').setScale(0.5);
    goldmine.setInteractive();
    goldmine.on('pointerdown', function () {

    })
}
