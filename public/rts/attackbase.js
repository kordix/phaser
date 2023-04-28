function attackbase(dude, building) {

    if (dude.type == 'enemy') {
        dude.x += 20;


        building.life -= 20;
        if (building.life < 0) {
            building.x = 1000;



            gameovertext.setText('GAME OVER');



        }
    }

    if (dude.type == 'player') {
        if (building.life < 300) {
            building.life += 20;
            gold -= 10;
        }
    }

    building.setAlpha(building.life / 300);
}