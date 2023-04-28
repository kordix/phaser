function goCommand(gameinstance, x, y) {

    gameinstance.players.children.iterate((player) => {
            let target = gameinstance.vectors.find((el) => el.dudeid == player.dudeid).vector;
            target.x = x;
            target.y = y;
            // let vector = vectors.find((el) => el.dudeid == player.dudeid);
            gameinstance.physics.moveToObject(player, target, 150);
    })


}

export default goCommand;