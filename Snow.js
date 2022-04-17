class createSnow {
    constructor(x,y){
        var options={
         resitution:0.8,
         friction: 1.0,
         density:1.0,
         isStatic:false
        }
        
       this.snow = Bodies.circle(x,y,5,options)
       this.radius = 5;
       var rand=Math.round(random(1,2));
       var img; 
       if(rand===1){
           img="snow4.webp";
       }
       else{
           img="snow5.webp";
       }
       this.image=loadImage(img);
       World.add(world,this.snow);
    }

    updateY(){
        if(this.snow.position.y > height){
            Matter.Body.setPosition(this.snow,{x:random(0,800),y:random(0,800)})
        }
    }
     
    showDrop(){
        fill("pink")
        imageMode(CENTER)
        image(this.image,this.snow.position.x,this.snow.position.y,13,13)
    }
}