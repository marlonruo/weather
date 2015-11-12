(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
var rect; // used to reference frame bounds

// library properties:
lib.properties = {
	width: 750,
	height: 540,
	fps: 12,
	color: "#02253C",
	manifest: [
		{src:"images/girl_1.png", id:"girl_1"},
		{src:"images/girl_2.png", id:"girl_2"},
		{src:"images/n.png", id:"n"}
	]
};



// symbols:



(lib.girl_1 = function() {
	this.initialize(img.girl_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,72,144);


(lib.girl_2 = function() {
	this.initialize(img.girl_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,72,144);


(lib.n = function() {
	this.initialize(img.n);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,540);


(lib.girl = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.girl_1();

	this.instance_1 = new lib.girl_2();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,72,144);
p.frameBounds = [rect, rect];


// stage content:
(lib._804n = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// fondo
	this.instance = new lib.girl("synched",0);
	this.instance.setTransform(402,284,1,1,0,0,0,36,72);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:264},24).to({y:284,startPosition:1},25).wait(1));

	// fondo
	this.instance_1 = new lib.n();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(375,270,750,540);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;