function enemiesAttackBuilding(player) {

    if (player) {
        if (!player.attacks && player.stop) {
            player.stop = false;
        }
   
        if (player.type == 'enemy' && !player.stop) {
         
            let building = self.children.getByName('building');

            if (self.children.getByName('building')) {
                if (player.type == 'enemy') {
                    if (building.placed) {
                        if (player) {
                            self.physics.moveToObject(player, building, 50);
                        }
                    }
                }
            }
        }
    }

}