if (isDown) {
    speed = 2;

    const centerX = 100;
    const centerY = 100;

    const clickX = xsaved;
    const clickY = ysaved;

    const dx = clickX - centerX;
    const dy = clickY - centerY;

    const angle = Math.atan2(dy, dx); // tu masz kąt w radianach

    console.log(angle);

    moveX = Math.cos(angle);
    moveY = Math.sin(angle);

    console.log(moveX, ' ', moveY);

    x2 += speed * moveX;
    y2 += speed * moveY;








} else {
    speed = 0;
}