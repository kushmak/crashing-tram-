class Coach{
    constructor(x,y,width,height){
      var options ={ isStatic: false}
      
      this.body =  Bodies.rectangle(x,y,width,height,options);
      World.add(myWorld,this.body);
      this.width = width;
      this.height = height;
      this.coachimage=loadImage("images/coach.png");
    }
    show()
    {
        imageMode(CENTER);
        image(this.coachimage,this.body.position.x, this.body.position.y,this.width, this.height);
    }
  
  
  }
  