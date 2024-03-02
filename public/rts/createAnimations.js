function createAnimations(gameinstance) {
    gameinstance.anims.create({
        key: 'turn',
        frames: [{ key: 'dude', frame: 4 }],
        frameRate: 20
    });

    gameinstance.anims.create({
        key: 'turnshield',
        frames: [{ key: 'dude', frame: 19 }],
        frameRate: 20
    });

    gameinstance.anims.create({
        key: 'right',
        frames: gameinstance.anims.generateFrameNumbers('dude', { start:5  , end: 8 }),
        frameRate: 5,
        repeat: -1
    });

    gameinstance.anims.create({
        key: 'rightshield',
        frames: gameinstance.anims.generateFrameNumbers('dude', { start: 20, end: 23 }),
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
        key: 'leftshield',
        frames: gameinstance.anims.generateFrameNumbers('dude', { start: 15, end: 18 }),
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
        key: 'axeshield',
        frames: gameinstance.anims.generateFrameNumbers('dude', { start: 23, end: 25 }),
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