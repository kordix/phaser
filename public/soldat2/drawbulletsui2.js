function drawbulletsui2() {


    bullet2dupa.visible = 1;
    bullet2dupa2.visible = 1;
    bullet2dupa3.visible = 1;
    bullet2dupa4.visible = 1;
    bullet2dupa5.visible = 1;
    bullet2dupa6.visible = 1;

    if (bulletsile2 == 0) {
        bullet2dupa.visible = 0;
        bullet2dupa2.visible = 0;
        bullet2dupa3.visible = 0;
        bullet2dupa4.visible = 0;
        bullet2dupa5.visible = 0;
        bullet2dupa6.visible = 0;
    }

    if (bulletsile2 == 0 && currentweapon != 'knife') {
        reloadtext2.visible = true;
    } else {
        reloadtext2.visible = false;

    }

    if (bulletsile2 == 1) {
        bullet2dupa.visible = 1;
        bullet2dupa2.visible = 0;
        bullet2dupa3.visible = 0;
        bullet2dupa4.visible = 0;
        bullet2dupa5.visible = 0;
        bullet2dupa6.visible = 0;
    }

    if (bulletsile2 == 2) {
        bullet2dupa.visible = 1;
        bullet2dupa2.visible = 1;
        bullet2dupa3.visible = 0;
        bullet2dupa4.visible = 0;
        bullet2dupa5.visible = 0;
        bullet2dupa6.visible = 0;
    }
    if (bulletsile2 == 3) {
        bullet2dupa.visible = 1;
        bullet2dupa2.visible = 1;
        bullet2dupa3.visible = 1;
        bullet2dupa4.visible = 0;
        bullet2dupa5.visible = 0;
        bullet2dupa6.visible = 0;
    }

    if (bulletsile2 == 4) {
        bullet2dupa.visible = 1;
        bullet2dupa2.visible = 1;
        bullet2dupa3.visible = 1;
        bullet2dupa4.visible = 1;
        bullet2dupa5.visible = 0;
        bullet2dupa6.visible = 0;
    }

    if (bulletsile2 == 5) {
        bullet2dupa.visible = 1;
        bullet2dupa2.visible = 1;
        bullet2dupa3.visible = 1;
        bullet2dupa4.visible = 1;
        bullet2dupa5.visible = 1;
        bullet2dupa6.visible = 0;
    }

}
