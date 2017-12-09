var pjs = new PointJS(640, 480, {
	backgroundColor : '#4b4843' // optional
});
// pjs.system.initFullPage(); // for Full Page mode
// pjs.system.initFullScreen(); // for Full Screen mode (only Desctop)

var log    = pjs.system.log;     // log = console.log;
var game   = pjs.game;           // Game Manager
var point  = pjs.vector.point;   // Constructor for Point
var camera = pjs.camera;         // Camera Manager
var brush  = pjs.brush;          // Brush, used for simple drawing
var OOP    = pjs.OOP;            // Objects manager
var math   = pjs.math;           // More Math-methods

var key   = pjs.keyControl.initKeyControl();
var mouse = pjs.mouseControl.initMouseControl();
// var touch = pjs.touchControl.initTouchControl();
// var act   = pjs.actionControl.initActionControl();

var width  = game.getWH().w; // width of scene viewport
var height = game.getWH().h; // height of scene viewport

pjs.system.setTitle('PointJS Game'); // Set Title for Tab or Window

// Game Loop
game.newLoopFromConstructor('myGame', function () {
	// Constructor Game Loop


	this.update = function () {
		// Update function

		game.clear(); // clear screen

		player.draw();
		enemy.draw();
		playerUpdates(player,spear,shield);
		playerUpdates(enemy,spear,shield);


		if(key.isDown('W')){
			player.moveTo(mouse.getPosition(), 2 )
		};

		if(tip.isIntersect(enemy)){
			alert('done');
		};
		
		
	};

	this.entry = function () { // optional
		log('myGame is started');
	};

	this.exit = function () { // optional
		log('myGame is stopped');
	};

});

game.startLoop('myGame');