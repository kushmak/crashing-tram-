class Rock{
    constructor(x,y,width,height){
      var options ={ isStatic: false}
      
      this.body =  Bodies.rectangle(x,y,width,height,options);
      World.add(myWorld,this.body);
      this.width = width;
      this.height = height;
this.rockImage=loadImage("images/rock1.png");



    }
    show()
    {

        imageMode(CENTER);
        image(this.rockImage,this.body.position.x, this.body.position.y,this.width, this.height);
    }
  
  
  }
  