function addBuilding(gameinstance, x, y) {
    self = gameinstance;
    building = buildings.create(x, y, 'building');


    building.placed = true;
    building.ready = true;
    building.life = 300;
    building.occupied = false;

    building.setInteractive();
    building.setScale(0.8);
    building.body.setSize(building.width * 0.8, building.height * 0.8);
    building.setName('building')
    // building.bounce = 0;
    building.body.immovable = 1;

    let collider = self.physics.add.collider(players, buildings, attackbase, null, self);
    collider.bounce = 0;


    //funkcjonalność budynku
    building.on('pointerdown', function (pointer) {
        document.querySelector('#forgemenu').style.opacity = 0;
        document.querySelector('#rekrutacjamenu').style.opacity = 1;
        document.querySelector('#budowaniemenu').style.opacity = 0;

        // if (building.ready) {
        //     addDude(self, building.x + 100, building.y + 100 - (50 * (addeddudes % 4)), 'player');
        //     addeddudes += 1;
        // }
    })

}
