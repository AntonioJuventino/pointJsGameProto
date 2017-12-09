var player = game.newCircleObject( {
  x : 100,
  y : 100,
  radius: 20,	
  fillColor : "#FBFE6F",
});


var enemy = game.newCircleObject({
	x: 300,
	y: 100,
	radius: 20,
	fillColor : 'black',
});


player.setUserData({
	name: 'name'
});



var spear = game.newRectObject( {
  x : 0,
  y : 0,
  w : 60,
  h : 4,	
  fillColor : "red",
});


var tip = game.newRectObject( {
  x : 0,
  y : 0,
  w : 4,
  h : 4,	
  fillColor : "gray",
});





var shield = game.newRectObject( {
  x : 200,
  y : 200,
  w : 40,
  h : 8,
  radius: 20,		
  fillColor : "red",
});

function playerUpdates(player,spear,shield) {
	var plCenter = player.getPositionC();

	//spear
	spear.minSize = 60;
	spear.maxSize = 80;
	spear.x = plCenter.x;
	spear.y = plCenter.y + (player.radius / 2);
	spear.center.x = -spear.w /2;
	spear.center.y = -player.radius /2;
	spear.angle = player.angle;


	tip.center.x = (-spear.w - tip.w);
	tip.center.y = -player.radius /2;
	tip.x = spear.x + spear.w;
	tip.y = spear.y;
	tip.angle = spear.angle;
	




	if(pjs.mouseControl.isDown('LEFT') && spear.w != spear.maxSize){
		spear.w+=1;
		console.log(tip.x,tip.y);
		}
	else if (pjs.mouseControl.isUp('LEFT') || spear.w != spear.minSize) {
		spear.w-=1;
		};	




	//shield
	shield.x = plCenter.x - player.radius;
	shield.y = plCenter.y - (player.radius);
	shield.center.x = (-shield.w /2) + player.radius;
	shield.center.y = +player.radius /2;



	player.rotateForPoint(mouse.getPosition(), 1)
	spear.draw();
	tip.draw();
	shield.draw();


};




