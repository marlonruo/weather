(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
var rect; // used to reference frame bounds

// library properties:
lib.properties = {
	width: 750,
	height: 540,
	fps: 12,
	color: "#0099FF",
	manifest: [
		{src:"images/fondo.png", id:"fondo"},
		{src:"images/luigi.png", id:"luigi"},
		{src:"images/tubo.png", id:"tubo"}
	]
};



// symbols:



(lib.fondo = function() {
	this.initialize(img.fondo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,201,141);


(lib.luigi = function() {
	this.initialize(img.luigi);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,54,60);


(lib.tubo = function() {
	this.initialize(img.tubo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,84,93);


(lib.mario = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.luigi();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,54,60);
p.frameBounds = [rect];


(lib.fondo_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.fondo();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,201,141);
p.frameBounds = [rect];


// stage content:
(lib._800d = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// fondo
	this.instance = new lib.fondo_1("synched",0);
	this.instance.setTransform(533.5,469.5,1,1,0,0,0,100.5,70.5);
	this.instance.alpha = 0.5;

	this.instance_1 = new lib.tubo();
	this.instance_1.setTransform(203,447);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(72));

	// anima
	this.instance_2 = new lib.mario("synched",0);
	this.instance_2.setTransform(246,483,1,1,0,0,0,24,30);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:417},5).wait(5).to({regX:0,regY:54,skewY:180,x:269,y:441},0).wait(3).to({regX:24,regY:30,skewY:0,x:246,y:417},0).wait(12).to({startPosition:0},0).to({y:483},5).wait(42));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(578,669,431,141);
p.frameBounds = [rect, rect, rect, rect, rect, rect=new cjs.Rectangle(578,657,431,153), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(578,669,431,141), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;