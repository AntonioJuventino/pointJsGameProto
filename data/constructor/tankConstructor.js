class Tank {

  constructor (x,y,model) {
  	this.tank = [model.frame,model.track[0],model.track[1],model.tower];
    
    this.frame = model.frame;
    this.frame.x = x;
    this.frame.y = y;
	this.frame.children = [model.track[0],model.track[1],model.tower];



    this.tower = model.tower;
    this.track = model.track;


    //set track rotate center
    this.track[0].center.y = +this.frame.h / 2 - this.track[0].h /2;
    this.track[1].center.y = -this.frame.h / 2 + this.track[1].h /2;



    this.whizzBangs = [];
    this.ammo = 30;


    this.speed = model.speed;
    this.maxSpeed = model.maxSpeed;
    this.step = model.step;
   
 }

};


Tank.prototype.draw = function(){
	OOP.drawArr(this.tank);
	OOP.forArr(this.whizzBangs, function(whizzBang){
		whizzBang.moveAngle(5);
		whizzBang.draw();
	});
};


Tank.prototype.drive = function(){
	if(key.isDown("W")){
		this.speed += this.speed < this.maxSpeed ? this.step : 0;
		

	}else if(key.isDown("S")){
		this.speed -= this.speed > -this.maxSpeed /2  ? this.step : 0;
		
	} else {
		if(this.speed != 0){
			if(this.speed > 0){
			this.speed -= this.step*3;
			}
			if (this.speed < 0) {
				this.speed += this.step*3;
			}
		}
	}

	if(this.speed != 0){
		this.frame.moveAngle(this.speed);
	};



	if(key.isDown("A")){
		this.frame.turn( -0.5 );
	}
	if(key.isDown("D")){
		this.frame.turn( 0.5 );
	}
};


Tank.prototype.rotateTower = function(){
	this.tower.rotateForPoint(mouse.getPosition(), 1);
	
};


Tank.prototype.update = function(){

	//track position
	this.track[0].x = this.frame.x;
    this.track[0].y = this.frame.y;
    this.track[1].x = this.frame.x;
    this.track[1].y = this.frame.y + (this.frame.h -this.track[1].h);


    //track angle
	this.track[0].angle = this.frame.angle;
	this.track[1].angle = this.frame.angle;


	//tower position
	this.tower.setPositionC(this.frame.getPositionC()); 





	


	this.draw();
	this.rotateTower();
	this.drive();
	this.shot();
	
};



Tank.prototype.shot = function(){
	var p = this.tower.getPositionC()
	if(mouse.isPress('LEFT')){
		
		var whizzBang = game.newCircleObject({
			x: p.x,
			y: p.y,
			radius: 3,
			fillColor: 'red', 
		});

		whizzBang.angle = this.tower.angle;
		this.whizzBangs.push(whizzBang);
	}

	
};








var t34 = {

	frame : game.newRectObject( {
		x : 0,
  		y : 0,
  		w : 240,
  		h : 120,
  		fillColor : "green",
	}),


	tower : game.newImageObject( {
		file: "assets/tower.png",
		x: 0,
		y : 0,
		angle: 0,
		center : point(-30, 0 ),
	}),

	track: [
		game.newRectObject( {
		x : 0,
  		y : 0,
  		w : 240,
  		h : 20,
  		fillColor : "red",
	}),
		game.newRectObject( {
		x : 0,
  		y : 0,
  		w : 240,
  		h : 20,
  		fillColor : "red",
	}),
	],


	speed: 0,
	maxSpeed: 2,
	step: 0.01,
};


 var t = new Tank(0,0,t34);

 console.log(t);




