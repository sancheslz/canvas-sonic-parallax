class Cloud {
    constructor(context) {
        this.img = new Image()
        this.img.src = './assets/img/cloud.png'
        this.img.onload = () => {this.draw()}
        this.context = context
        this.posX = 500 + (300 * Math.random())
        this.posY = context.canvas.height - (200 + (250 * Math.random()))
        this.pattern = 1
        this.last = new Date().getTime()
        this.speed = (1 + Math.random()) * 0.5
    }

    draw() {
        this.context.drawImage(
            this.img,
            this.posX, this.posY, 100, 90,
        )
    }

    move() {
        if (this.posX < -100 ) {
            this.posX = this.context.canvas.width + (300 * Math.random())
            this.posY = (this.context.canvas.height - 200) * Math.random()
        }
        this.posX -= this.speed
        this.draw()
    }

}