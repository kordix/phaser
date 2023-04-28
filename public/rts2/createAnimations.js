function createAnimations(gameinstance) {
    gameinstance.anims.create({
        key: 'turn',
        frames: [{ key: 'dude', frame: 4 }],
        frameRate: 20
    });

    gameinstance.anims.create({
        key: 'right',
        frames: gameinstance.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
        frameRate: 5,
        repeat: -1
    });

    gameinstance.anims.create({
        key: 'left',
        frames: gameinstance.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
        frameRate: 5,
        repeat: -1
    });

    gameinstance.anims.create({
        key: 'axe',
        frames: gameinstance.anims.generateFrameNumbers('dude', { start: 9, end: 11 }),
        frameRate: 5,
        repeat: -1
    });

    gameinstance.anims.create({
        key: 'wood',
        frames: [{ key: 'dude', frame: 12 }],
        repeat: -1
    });

    gameinstance.anims.create({
        key: 'gold',
        frames: [{ key: 'dude', frame: 13 }],
        repeat: -1
    });

    gameinstance.anims.create({
        key: 'gold',
        frames: [{ key: 'dude', frame: 13 }],
        repeat: -1
    });

    gameinstance.anims.create({
        key: 'bow',
        frames: [{ key: 'dude', frame: 14 }],
        repeat: -1
    });


}

export default createAnimations;