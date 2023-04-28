function addTree(x, y) {
    trees.setHitArea(new Phaser.Geom.Rectangle(0, 0, 5, 5));
    let tree = trees.create(x, y, 'tree');
    tree.body.setSize(10,20);
    tree.body.immovable = true;
    tree.life = 50;


    tree.setInteractive();

}