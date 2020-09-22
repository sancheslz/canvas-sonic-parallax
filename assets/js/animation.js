window.addEventListener('load', () => {

    let context = document.getElementById('game').getContext('2d')

    // Objects Construction
    sonic = new Sonic(context)
    cloud = new Cloud(context)
    cloud2 = new Cloud(context)
    cloud3 = new Cloud(context)
    cloud4 = new Cloud(context)
    tree1 = new Tree(context)
    tree2 = new Tree(context)
    tree3 = new Tree(context)
    mountain = new Mountain(context, 0, 0.05)
    mountain2 = new Mountain(context, -200, 0.05)
    mountain3 = new Mountain(context, 100, 0.005)
    mountain4 = new Mountain(context, -300, 0.005)

    
    // Render the Screen Objects
    requestAnimationFrame(render)

    function render() {
        context.clearRect(0, 0, context.canvas.width, context.canvas.height)
        context.fillStyle = 'lightblue'
        context.fillRect(0, 0, 500, 420);
        mountain3.move()
        mountain4.move()
        mountain2.move()
        mountain.move()
        context.save()
        cloud.move()
        cloud2.move()
        cloud3.move()
        tree1.move()
        tree2.move()
        tree3.move()
        context.fillStyle = 'gray';
        context.fillRect(0, 430, 500, 100);
        context.restore()
        sonic.move(0,0)
        cloud4.move()
        
        requestAnimationFrame(render)
    }
})