function enemyWave(gameinstance) {

    gameinstance.time.addEvent({
        delay: 15000,
        loop: true,
        callback: function () {

            for (let i = 0; i < wave; i++) {
                addDude(self, 500 + Math.random() * 200, Math.random() * 200, 'enemy');
            }

            addTree(Math.random() * 400, Math.random() * 300 );

            wave = Math.ceil(wave * 1.15);

        }
    })


}