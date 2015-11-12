(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
var rect; // used to reference frame bounds

// library properties:
lib.properties = {
	width: 750,
	height: 540,
	fps: 12,
	color: "#1C75BC",
	manifest: [
		{src:"images/ll_1.png", id:"ll_1"},
		{src:"images/ll_2.png", id:"ll_2"},
		{src:"images/ll_3.png", id:"ll_3"},
		{src:"images/o_1.png", id:"o_1"},
		{src:"images/o_2.png", id:"o_2"},
		{src:"images/o_3.png", id:"o_3"},
		{src:"images/o_4.png", id:"o_4"},
		{src:"images/o_5.png", id:"o_5"},
		{src:"images/o_6.png", id:"o_6"},
		{src:"images/o_7.png", id:"o_7"}
	]
};



// symbols:



(lib.ll_1 = function() {
	this.initialize(img.ll_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,540);


(lib.ll_2 = function() {
	this.initialize(img.ll_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,540);


(lib.ll_3 = function() {
	this.initialize(img.ll_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,540);


(lib.o_1 = function() {
	this.initialize(img.o_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,393,108);


(lib.o_2 = function() {
	this.initialize(img.o_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,393,108);


(lib.o_3 = function() {
	this.initialize(img.o_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,393,108);


(lib.o_4 = function() {
	this.initialize(img.o_4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,393,108);


(lib.o_5 = function() {
	this.initialize(img.o_5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,393,108);


(lib.o_6 = function() {
	this.initialize(img.o_6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,393,108);


(lib.o_7 = function() {
	this.initialize(img.o_7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,393,108);


(lib.optimus = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.o_1();

	this.instance_1 = new lib.o_2();

	this.instance_2 = new lib.o_3();

	this.instance_3 = new lib.o_4();

	this.instance_4 = new lib.o_5();

	this.instance_5 = new lib.o_6();

	this.instance_6 = new lib.o_7();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,393,108);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.lluvia = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ll_1();

	this.instance_1 = new lib.ll_2();

	this.instance_2 = new lib.ll_3();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,750,540);
p.frameBounds = [rect, rect, rect];


// stage content:
(lib._321 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// lluvia
	this.instance = new lib.lluvia("synched",0);
	this.instance.setTransform(375,270,1,1,0,0,0,375,270);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30));

	// auto
	this.instance_1 = new lib.optimus("synched",0);
	this.instance_1.setTransform(366.5,486,1,1,0,0,0,196.5,54);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(375,270,750,540);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;