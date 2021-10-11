class Rope{
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX = offsetX
        this.offsetY = offsetY
        var options = {
            bodyA : body1,
            bodyB : body2,
            pointA : {x:this.offsetX, y:this.offsetY},
            //pointB : {x:0,y:body1.radius},
            length : 400,
            stiffness : 1
        }
        this.rope = Matter.Constraint.create(options)
        World.add(world,this.rope)
    }

    display(){
        var posA = this.rope.bodyA.position
        var posB = this.rope.bodyB.position
        stroke(255)
        line(posA.x+this.offsetX,posA.y+this.offsetY,posB.x,posB.y);
    }
}