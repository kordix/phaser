document.querySelector('#recruitdudebutton').addEventListener('click', function () {
    addDude(gameinstance, 200, 600 - ((dudeid % 5) * 30), 'player', 'dude');
});

document.querySelector('#recruitbowmanbutton').addEventListener('click', function () {
    addDude(gameinstance, 200, 600 - ((dudeid % 5) * 30), 'player', 'bowman');
});

document.querySelector('#recruitshieldmanbutton').addEventListener('click', function () {
    addDude(gameinstance, 200, 600 - ((dudeid % 5) * 30), 'player', 'tarczownik');
});


document.querySelector('#buildtownhallbutton').addEventListener('click', function () {
    buildingToBuild = 'building';
    enterBuildMode(gameinstance);
})

document.querySelector('#buildforgebutton').addEventListener('click', function () {
    buildingToBuild = 'forge';
    enterBuildMode(gameinstance);
})

document.querySelector('#upgradebownambuttonrange').addEventListener('click', function () {
    pay({ gold: 20, wood: 20 }, game);
    stats.rangebowman += 10;
})


document.querySelector('#upgradebownambuttonattack').addEventListener('click', function () {
    pay({ gold: 20, wood: 20 },game);
    stats.attackbowman += 1;
})