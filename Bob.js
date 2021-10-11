class Bob{
    constructor(x,y,radius){
        this.radius = radius;
        var options = {
            restitution : 1,
            density : 0.5,
            friction : 1,
            frictionAir: 0
        }
        this.body = Bodies.circle(x,y,radius,options)
        World.add(world,this.body)
        this.fill = "red"
    }

    display(){
        stroke(255)
        var pos = this.body.position
        circle(pos.x,pos.y,2*this.radius)
    }
}
