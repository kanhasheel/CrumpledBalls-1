class Paper {
  constructor(x, y,radius) {
    var options = {
        'restitution':0.15,
        'friction':1.1,
        'density':1.3,
        'isStatic' : false
    }
    this.radius = radius
    this.body = Bodies.circle(x, y, radius, options);
    World.add(world, this.body);
    World.add(world, this.body);
  }
  display(){
    fill("pink");
    ellipseMode(RADIUS);
    ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius);
   }
};


