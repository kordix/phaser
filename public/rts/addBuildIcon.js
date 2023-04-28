function addBuildIcon(gameinstance) {
    buildicon = gameinstance.add.image(760, 570, 'hammer').setScale(0.5);
    buildicon.setVisible(false);
    buildicon.setInteractive();

    buildicon.on('pointerover', (pointer) => {
        self.pointertext.setText(pointer.x);
        buildicon.setTint(0xffffff);
        buildicon.setAlpha(0.8);
    })

    buildicon.on('pointerout', (pointer) => {
        buildicon.setTint(0xffffff);
        buildicon.setAlpha(1);
    })

    //tryb budowy
    buildicon.on('pointerdown', (pointer) => {
        // enterBuildMode(gameinstance,pointer);

        document.querySelector('#budowaniemenu').style.opacity = 1;
        document.querySelector('#rekrutacjamenu').style.opacity = 0
    })
}