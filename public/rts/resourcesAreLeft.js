function resourcesAreLeft(player, buildings, gameinstance) {
    if (player.wood || player.gold) {
        buildings.children.each((building) => {
            if (building.name == 'building') {
                if (Math.abs(player.x - building.x) < 150 && Math.abs(player.y - building.y) < 150) {

                    let vector = vectors.find((el) => el.dudeid == player.dudeid).vector;
                    if (player.wood) {
                        wood += 10;
                        setTimeout(() => {
                            player.setVisible(true);
                             vector.x = findNearestTree(player).x;
                             vector.y = findNearestTree(player).y;
                            gameinstance.physics.moveToObject(player, vector, player.speed);
                        }, 500);
                        player.wood = 0;

                        console.log();

                    }

                    if (player.gold) {
                        gold += 10;
                        setTimeout(() => {
                            player.setVisible(true);
                            vector.x = 420;
                            vector.y = 500;
                            gameinstance.physics.moveToObject(player, vector, player.speed);
                        }, 500);
                        player.gold = 0;
                    }









                }
            }

        })
    }
}


function findNearestTree(player) {

    let distance = 9999;
    let targetx = 0;
    let targety = 0;



    trees.children.each((tree) => {
        let differencex = Math.abs(tree.x - player.x);
        let differencey = Math.abs(tree.y - player.y);


        if ((differencex + differencey) < distance) {
            distance = differencex + differencey;
            targetx = tree.x;
            targety = tree.y + 50;

        }
    })

    return { x: targetx, y: targety }



    // trees.getChildren().each((tree)=>{
    //     console.log(tree);
    // })
}