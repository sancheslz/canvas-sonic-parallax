class Tree {
    constructor(context) {
        this.img = new Image()
        this.img.src = './assets/img/tree.png'
        this.img.onload = () => {this.draw()}
        this.context = context
        this.posX = 600 * (1+ Math.random())
        this.posY = context.canvas.height - 220 + (35 * Math.random())
        this.pattern = 1
        this.last = new Date().getTime()
        this.speed = 2
    }

    draw() {
        this.context.drawImage(
            this.img,
            this.posX, this.posY, 120, 150,
        )
    }

    move() {
        if (this.posX < -100 ) {
            this.posX = this.context.canvas.width + (300 * Math.random())
            this.posY = this.context.canvas.height - 220 + (35 * Math.random())
        }
        this.posX -= this.speed
        this.draw()
    }

}