class Joystick {
    constructor(canvasId, options = {}) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');

        this.size = options.size || 200;
        this.knobRadius = options.knobRadius || 30;
        this.backgroundColor = options.backgroundColor || "white";
        this.knobColor = options.knobColor || "gray";
        this.onMove = options.onMove || function () { };

        this.canvas.width = this.size;
        this.canvas.height = this.size;

        this.x = this.size / 2;
        this.y = this.size / 2;
        this.isDown = false;
        this.activePointerId = null;

        // Disable touch gestures on the joystick surface so the active finger
        // keeps control even while other touches happen elsewhere.
        this.canvas.style.touchAction = "none";

        this.draw(this.x, this.y);
        this.addEvents();
    }

    addEvents() {
        this.canvas.addEventListener("pointerdown", e => {
            if (this.activePointerId !== null) {
                return;
            }

            this.activePointerId = e.pointerId;
            this.isDown = true;
            this.canvas.setPointerCapture(e.pointerId);
            this.move(e);
        });

        this.canvas.addEventListener("pointermove", e => {
            if (this.isDown && e.pointerId === this.activePointerId) {
                this.move(e);
            }
        });

        this.canvas.addEventListener("pointerup", e => {
            this.releasePointer(e);
        });

        this.canvas.addEventListener("pointercancel", e => {
            this.releasePointer(e);
        });
    }

    releasePointer(e) {
        if (e.pointerId !== this.activePointerId) {
            return;
        }

        if (this.canvas.hasPointerCapture(e.pointerId)) {
            this.canvas.releasePointerCapture(e.pointerId);
        }

        this.activePointerId = null;

        if (this.isDown) {
            this.isDown = false;
            this.reset();
        }
    }

    move(e) {
        let x = e.offsetX;
        let y = e.offsetY;

        const min = this.knobRadius;
        const max = this.size - this.knobRadius;
        x = Math.max(min, Math.min(max, x));
        y = Math.max(min, Math.min(max, y));

        this.draw(x, y);

        const dx = (x - this.size / 2) / (this.size / 2 - this.knobRadius);
        const dy = (y - this.size / 2) / (this.size / 2 - this.knobRadius);

        const len = Math.sqrt(dx * dx + dy * dy);
        let nx = dx;
        let ny = dy;

        const angle = Math.atan2(dy, dx);

        let moveX = Math.cos(angle);
        let moveY = Math.sin(angle);



        if (len > 1) {
            nx /= len;
            ny /= len;
        }

        this.onMove(moveX, moveY);
    }

    draw(x, y) {
        // alert('rysuje')
        this.x = x;
        this.y = y;
        this.ctx.clearRect(0, 0, this.size, this.size);

        this.ctx.fillStyle = this.backgroundColor;
        this.ctx.fillRect(0, 0, this.size, this.size);

        this.ctx.beginPath();
        this.ctx.arc(x, y, this.knobRadius, 0, Math.PI * 2);
        this.ctx.fillStyle = this.knobColor;
        this.ctx.fill();
    }

    reset() {
        this.draw(this.size / 2, this.size / 2);
        this.onMove(0, 0);
    }
}
