class Mountain {
    constructor(context, start, speed) {
        this.img = new Image()
        this.img.src = './assets/img/mountain.png'
        this.img.onload = () => {this.draw()}
        this.context = context
        this.posX = start
        this.posY = context.canvas.height - 170
        this.pattern = 1
        this.last = new Date().getTime()
        this.speed = speed
    }

    draw() {
        this.context.drawImage(
            this.img,
            this.posX, this.posY, this.context.canvas.width, 200,
        )

        this.context.drawImage(
            this.img,
            this.posX + this.context.canvas.width, this.posY, this.context.canvas.width, 200,
        )
    }

    move() {
        if (this.posX < -500 ) {
            this.posX = 0
        }
        this.posX -= this.speed
        this.draw()
    }

}