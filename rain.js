class rain{
    constructor(x,y){
        var options = {
            friction:0.001,
            restitution:0.1,

        }
        this.rain1 = Bodies.circle(x,y,5,options)
        this.radius = 5
        World.add(world,this.rain1)
    }
    showRain(){
        fill("blue")
        ellipseMode(CENTER)
        ellipse(this.rain1.position.x,this.rain1.position.y,this.radius,this.radius)
    }
    updateY(){
        if (this.rain1.position.y > height){
            Matter.Body.setPosition(this.rain1,{x:random(0,400),y:(0,800)})
        }
    }
}