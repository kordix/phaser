function recruit(type, time,cost) {
    if (foodused >= food) {
        alert('ZBUDUJ FARMY');
        return;
    }


    let thebuilding = buildings.getChildren().find(child => child.name == 'building');
    if (thebuilding.occupied) {
        alert('TRWA BUDOWA');
        return;
    }

    if (pay({ gold: cost }, gameinstance)) {
        foodused += 1;

    } else {
        return
    }



    thebuilding.occupied = true;
    thebuilding.alpha = 0.5;

    setTimeout(() => {
        addDude(gameinstance, 200, 600 - ((dudeid % 5) * 30), 'player', type);
        thebuilding.occupied = false;
        thebuilding.alpha = 1;
    }, time)


}


document.querySelector('#recruitdudebutton').addEventListener('click', function () {
    recruit('dude', 2000, 20);
});

document.querySelector('#recruitbowmanbutton').addEventListener('click', function () {
    recruit('bowman', 3000,50);

});

document.querySelector('#recruitshieldmanbutton').addEventListener('click', function () {
    recruit('tarczownik', 3000,50);

});


document.querySelector('#buildtownhallbutton').addEventListener('click', function () {
    buildingToBuild = 'building';
    enterBuildMode(gameinstance);
})

document.querySelector('#buildforgebutton').addEventListener('click', function () {
    buildingToBuild = 'forge';
    enterBuildMode(gameinstance);
})

document.querySelector('#buildfarmbutton').addEventListener('click', function () {
    buildingToBuild = 'farm';
    enterBuildMode(gameinstance);
})

document.querySelector('#upgradebownambuttonrange').addEventListener('click', function () {
    pay({ gold: 20, wood: 20 }, game);
    stats.rangebowman += 10;
})


document.querySelector('#upgradebownambuttonattack').addEventListener('click', function () {
    pay({ gold: 20, wood: 20 }, game);
    stats.attackbowman += 1;
})