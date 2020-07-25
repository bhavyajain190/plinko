class Ball {
    constructor(x,y,r) {
        var options = {
            isStatic : false

        }
      
      this.body = Bodies.rectangle(x,y,r,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      
      rect(pos.x, pos.y, this.width, this.height);
    }
  };
  
    