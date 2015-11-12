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
		{src:"images/ll_1.png", id:"ll_1"},
		{src:"images/ll_2.png", id:"ll_2"},
		{src:"images/ll_3.png", id:"ll_3"},
		{src:"images/ll_4.png", id:"ll_4"},
		{src:"images/s_1.png", id:"s_1"},
		{src:"images/s_10.png", id:"s_10"},
		{src:"images/s_2.png", id:"s_2"},
		{src:"images/s_3.png", id:"s_3"},
		{src:"images/s_4.png", id:"s_4"},
		{src:"images/s_5.png", id:"s_5"},
		{src:"images/s_6.png", id:"s_6"},
		{src:"images/s_7.png", id:"s_7"},
		{src:"images/s_8.png", id:"s_8"},
		{src:"images/s_9.png", id:"s_9"},
		{src:"images/smiths.png", id:"smiths"}
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


(lib.ll_4 = function() {
	this.initialize(img.ll_4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,540);


(lib.s_1 = function() {
	this.initialize(img.s_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,33,96);


(lib.s_10 = function() {
	this.initialize(img.s_10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,33,96);


(lib.s_2 = function() {
	this.initialize(img.s_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,33,96);


(lib.s_3 = function() {
	this.initialize(img.s_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,33,96);


(lib.s_4 = function() {
	this.initialize(img.s_4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,33,96);


(lib.s_5 = function() {
	this.initialize(img.s_5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,33,96);


(lib.s_6 = function() {
	this.initialize(img.s_6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,33,96);


(lib.s_7 = function() {
	this.initialize(img.s_7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,33,96);


(lib.s_8 = function() {
	this.initialize(img.s_8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,33,96);


(lib.s_9 = function() {
	this.initialize(img.s_9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,33,96);


(lib.smiths = function() {
	this.initialize(img.smiths);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,540);


(lib.smiith = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.s_1();

	this.instance_1 = new lib.s_2();

	this.instance_2 = new lib.s_3();

	this.instance_3 = new lib.s_4();

	this.instance_4 = new lib.s_5();

	this.instance_5 = new lib.s_6();

	this.instance_6 = new lib.s_7();

	this.instance_7 = new lib.s_8();

	this.instance_8 = new lib.s_9();

	this.instance_9 = new lib.s_10();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},31).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,33,96);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.lluvia = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ll_1();

	this.instance_1 = new lib.ll_2();

	this.instance_2 = new lib.ll_3();

	this.instance_3 = new lib.ll_4();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,750,540);
p.frameBounds = [rect, rect, rect, rect];


// stage content:
(lib._503 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// lluvia
	this.instance = new lib.lluvia("synched",0);
	this.instance.setTransform(375,270,1,1,0,0,0,375,270);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40));

	// smith
	this.instance_1 = new lib.smiith("synched",0);
	this.instance_1.setTransform(376.5,492,1,1,0,0,0,16.5,48);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(40));

	// smiths
	this.instance_2 = new lib.smiths();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(375,270,750,540);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;