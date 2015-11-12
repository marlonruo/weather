(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
var rect; // used to reference frame bounds

// library properties:
lib.properties = {
	width: 750,
	height: 540,
	fps: 12,
	color: "#033451",
	manifest: [
		{src:"images/bar.png", id:"bar"},
		{src:"images/letrero_1.png", id:"letrero_1"},
		{src:"images/letrero_2.png", id:"letrero_2"},
		{src:"images/nubes.png", id:"nubes"}
	]
};



// symbols:



(lib.bar = function() {
	this.initialize(img.bar);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,204,132);


(lib.letrero_1 = function() {
	this.initialize(img.letrero_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,60,30);


(lib.letrero_2 = function() {
	this.initialize(img.letrero_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,60,30);


(lib.nubes = function() {
	this.initialize(img.nubes);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,627,249);


(lib.vidrios = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.067)").s().p("AGkCHIAAkNIGGAAIAAENgAspCHIAAkNIGGAAIAAENg");
	this.shape.setTransform(81,13.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,162,27);
p.frameBounds = [rect, null];


(lib.letrero = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.letrero_2();

	this.instance_1 = new lib.letrero_1();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},8).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,60,30);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


// stage content:



(lib._802n = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.letrero("synched",0);
	this.instance.setTransform(381,449,1,1,0,0,0,30,15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(50));

	// nubes
	this.instance_1 = new lib.nubes();
	this.instance_1.setTransform(70,93);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(50));

	// ventana
	this.instance_2 = new lib.vidrios("synched",0);
	this.instance_2.setTransform(379,493.5,1,1,0,0,0,81,13.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(50));

	// fondo
	this.instance_3 = new lib.bar();
	this.instance_3.setTransform(277,408);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(445,363,627,447);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;