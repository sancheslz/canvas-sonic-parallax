

class Sonic {
    constructor(context) {
        this.img = new Image()
        this.img.src = './assets/img/sonic.png'
        this.img.onload = () => { this.draw() }
        this.context = context
        this.posX = 50
        this.posY = context.canvas.height - 120
        this.pattern = 1
        this.last = new Date().getTime()
    }

    draw() {
        this.context.drawImage(
            this.img, 102 * this.pattern, 122, 100, 100,
            this.posX, this.posY, 70, 70
        )
    }

    move(x, y) {
        this.posX += x
        this.posY += y
        if (new Date().getTime() - this.last > 60) {
            this.pattern == 3 ? this.pattern = 1 : this.pattern += 1
            this.last = new Date().getTime()
        }

        if (this.posX > this.context.canvas.width) {
            this.posX = -100
        }
        this.draw()
    }
}