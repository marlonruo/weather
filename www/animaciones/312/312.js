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
		{src:"images/ll1.png", id:"ll1"},
		{src:"images/ll2.png", id:"ll2"},
		{src:"images/ll3.png", id:"ll3"},
		{src:"images/z1.png", id:"z1"},
		{src:"images/z2.png", id:"z2"},
		{src:"images/z3.png", id:"z3"}
	]
};



// symbols:



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


(lib.z1 = function() {
	this.initialize(img.z1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,111,138);


(lib.z2 = function() {
	this.initialize(img.z2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,111,138);


(lib.z3 = function() {
	this.initialize(img.z3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,111,138);


(lib.zombie = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.z1();

	this.instance_1 = new lib.z2();

	this.instance_2 = new lib.z3();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance_2}]},3).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,111,138);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


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
(lib._312 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// lluvia
	this.instance = new lib.lluvia("synched",0);
	this.instance.setTransform(375,270,1,1,0,0,0,375,270);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30));

	// zombie
	this.instance_1 = new lib.zombie("synched",0);
	this.instance_1.setTransform(470.5,471,1,1,0,0,0,55.5,69);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(375,270,750,540);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;