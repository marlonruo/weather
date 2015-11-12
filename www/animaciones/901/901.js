(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
var rect; // used to reference frame bounds

// library properties:
lib.properties = {
	width: 750,
	height: 540,
	fps: 12,
	color: "#333333",
	manifest: [
		{src:"images/barco.png", id:"barco"},
		{src:"images/ll1.png", id:"ll1"},
		{src:"images/ll2.png", id:"ll2"},
		{src:"images/ll3.png", id:"ll3"},
		{src:"images/pi1.png", id:"pi1"},
		{src:"images/pi2.png", id:"pi2"}
	]
};



// symbols:



(lib.barco = function() {
	this.initialize(img.barco);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,219,63);


(lib.ll1 = function() {
	this.initialize(img.ll1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,540);


(lib.ll2 = function() {
	this.initialize(img.ll2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,540);


(lib.ll3 = function() {
	this.initialize(img.ll3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,540);


(lib.pi1 = function() {
	this.initialize(img.pi1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,60,87);


(lib.pi2 = function() {
	this.initialize(img.pi2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,60,87);


(lib.Tween1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.barco();
	this.instance.setTransform(-109.5,-31.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-109.5,-31.5,219,63);
p.frameBounds = [rect];


(lib.pi = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pi1();

	this.instance_1 = new lib.pi2();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,60,87);
p.frameBounds = [rect, rect, rect, rect];


(lib.lluvia = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ll1();

	this.instance_1 = new lib.ll2();

	this.instance_2 = new lib.ll3();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,750,540);
p.frameBounds = [rect, rect, rect];


// stage content:
(lib._901 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.lluvia();
	this.instance.setTransform(375,270,1,1,0,0,0,375,270);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12));

	// fondo
	this.instance_1 = new lib.Tween1("synched",0);
	this.instance_1.setTransform(546.5,508.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:511.5},5).to({y:508.5},6).wait(1));

	// Layer 2
	this.instance_2 = new lib.pi();
	this.instance_2.setTransform(474,476.5,1,1,0,0,0,30,43.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:479.5},5).to({y:476.5},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(375,270,750,540);
p.frameBounds = [rect, new cjs.Rectangle(375,270,750,540.6), new cjs.Rectangle(375,270,750,541.2), new cjs.Rectangle(375,270,750,541.8), new cjs.Rectangle(375,270,750,542.4), new cjs.Rectangle(375,270,750,543), new cjs.Rectangle(375,270,750,542.5), new cjs.Rectangle(375,270,750,542), new cjs.Rectangle(375,270,750,541.5), new cjs.Rectangle(375,270,750,541), new cjs.Rectangle(375,270,750,540.5), new cjs.Rectangle(375,270,750,540)];

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;