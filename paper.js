class Paper {
	constructor(x,y) {

		var options = {
			isStatic:false,
			restitution:0.3,
			friction:0.9	,
			density:1.2
			}

	    this.image = loadImage("paper.png");	
		this.body = Bodies.circle(x,y,20,options);
		this.radius = 25;
		World.add(world,this.body);
		
	}	
	display() {	
		    
			imageMode(CENTER);
		    image(this.image,this.body.position.x,this.body.position.y,this.radius+35,this.radius+35);
			
				
	}

}