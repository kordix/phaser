function enterBuildMode(gameinstance, pointer) {

    if (!buildmode) {
        ghostbuilding = gameinstance.add.sprite(400, 800, buildingToBuild);
        ghostbuilding.setAlpha(0.3);
        ghostbuilding.setScale(0.8);
        // firstclick = true;
        buildmode = false;
        setTimeout(() => {
            buildmode = true;
        }, 200)

    }

    //anulacja buildmode na prawy klik

    gameinstance.input.on('pointerdown', (pointer) => {
        if (buildmode) {
            console.log('pointerdwon w buliding pointerdown');

            if (pointer.rightButtonDown()) {
                buildmode = false;
                ghostbuilding.destroy();
                return;
            }


        }
    })

    //stawianie budynku

    gameinstance.input.on('pointerdown', function (pointer, gameObjects) {
        console.log('buildmode', buildmode);
        if (buildmode) {

            if (buildingToBuild == 'building') {
                addBuilding(gameinstance, pointer.worldX, pointer.worldY);
            }
            if (buildingToBuild == 'forge') {
                addForge(gameinstance, pointer.worldX, pointer.worldY);
            }
            buildmode = false;
            ghostbuilding.destroy();

            gameinstance.time.addEvent({
                delay: 3000,
                loop: true,
                callback: function () {
                    console.log('BĘDIZE POSTWIENIE BYDN');
                    // building.ready = 1;
                    // building.setAlpha(1);


                }
            })
        }

    });

}