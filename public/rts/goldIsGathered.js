function goldIsGathered(player,goldmine,gameinstance){
    if (player.type == 'player' && player.klasa == 'dude') {
        if (Math.abs(player.x - goldmine.x) < 120 && Math.abs(player.y - goldmine.y) < 120) {
            if (player.body.velocity.x == 0) {
                if (!player.gold) {
                    goldmine.setTexture('goldmine2');
                    player.gold = true;
                    player.setVelocityX(0);
                    player.setVelocityY(0);

                    player.setVisible(false);
                    
                    let vector = vectors.find((el) => el.dudeid == player.dudeid).vector;
    

                    setTimeout(() => {
                        player.setVisible(true);
                        goldmine.setTexture('goldmine');
                        console.log('MOVE TO OBJECT');
                        vector.x = 200;
                        vector.y = 500;
                        gameinstance.physics.moveToObject(player, vector, player.speed);
                    }, 3500)
                }
            }
        }
    }
}