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
		{src:"images/_01.png", id:"_01"},
		{src:"images/_02.png", id:"_02"},
		{src:"images/_03.png", id:"_03"},
		{src:"images/hp1.png", id:"hp1"},
		{src:"images/hp2.png", id:"hp2"},
		{src:"images/lv1.png", id:"lv1"},
		{src:"images/lv2.png", id:"lv2"}
	]
};



// symbols:



(lib._01 = function() {
	this.initialize(img._01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,540);


(lib._02 = function() {
	this.initialize(img._02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,540);


(lib._03 = function() {
	this.initialize(img._03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,540);


(lib.hp1 = function() {
	this.initialize(img.hp1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,117,153);


(lib.hp2 = function() {
	this.initialize(img.hp2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,117,153);


(lib.lv1 = function() {
	this.initialize(img.lv1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,174,162);


(lib.lv2 = function() {
	this.initialize(img.lv2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,174,162);


(lib.rayos = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._01();

	this.instance_1 = new lib._02();

	this.instance_2 = new lib._03();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,750,540);
p.frameBounds = [rect, rect, rect];


(lib.lv = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.lv1();

	this.instance_1 = new lib.lv2();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,174,162);
p.frameBounds = [rect, rect];


(lib.hp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.hp1();

	this.instance_1 = new lib.hp2();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,117,153);
p.frameBounds = [rect, rect];


// stage content:
(lib._221 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// rayos
	this.instance = new lib.rayos("synched",0);
	this.instance.setTransform(375,270,1,1,0,0,0,375,270);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6));

	// personajes
	this.instance_1 = new lib.lv("synched",0);
	this.instance_1.setTransform(144,459,1,1,0,0,0,87,81);

	this.instance_2 = new lib.hp("synched",0);
	this.instance_2.setTransform(633.5,463.5,1,1,0,0,0,58.5,76.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(375,270,750,540);
p.frameBounds = [rect, rect, rect, rect, rect, rect];

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;