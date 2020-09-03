class Plinko
{
    constructor(x,y,radius)
    {
        var options = 
        {
            isStatic:true,
            friction:0,
            density:0,
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        World.add(world,this.body);
    }

    display()
    {
        fill(255)
        ellipseMode(RADIUS)
        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);   
    }
}