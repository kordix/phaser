function resourcesAreLeft(player, buildings,gameinstance) {
    if (player.wood || player.gold) {
        buildings.children.each((building) => {
            if (building.name == 'building') {
                if (Math.abs(player.x - building.x) < 150 && Math.abs(player.y - building.y) < 150) {


                    if (player.wood) {
                        wood += 10;
                    }

                    if (player.gold) {
                        gold += 10;
                    }

                    player.wood = 0;
                    player.gold = 0;

                    let vector = vectors.find((el) => el.dudeid == player.dudeid).vector;

                    setTimeout(() => {
                        player.setVisible(true);
                        goldmine.setTexture('goldmine');
                        console.log('MOVE TO OBJECT');
                        vector.x = 420;
                        vector.y = 500;
                        gameinstance.physics.moveToObject(player, vector, player.speed);
                    }, 500)


                }
            }

        })
    }
}