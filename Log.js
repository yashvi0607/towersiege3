class Log extends BaseClass{
  constructor(x,y,height,angle){
    super(x,y,20,height,angle);
    //this.image = loadImage("sprites/wood2.png");
    Matter.Body.setAngle(this.body, angle);
    this.visibility = 255;
  }
  score(){
    if(this.visibility<0 && this.visibility>-105){
score++;
    }
  }
  display(){
  fill("lightgreen");
   if (this.body.speed<5) {
 super.display();   
  }
  else{
    World.remove(world,this.body);
    push();
    this.visibility = this.visibility-5;
    pop();
  }
}
}