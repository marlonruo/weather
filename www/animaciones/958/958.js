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
		{src:"images/l1.png", id:"l1"},
		{src:"images/l2.png", id:"l2"},
		{src:"images/v1.png", id:"v1"},
		{src:"images/v2.png", id:"v2"},
		{src:"images/v3.png", id:"v3"},
		{src:"images/v4.png", id:"v4"},
		{src:"images/v5.png", id:"v5"}
	]
};



// symbols:



(lib.l1 = function() {
	this.initialize(img.l1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,228,144);


(lib.l2 = function() {
	this.initialize(img.l2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,228,144);


(lib.v1 = function() {
	this.initialize(img.v1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,540);


(lib.v2 = function() {
	this.initialize(img.v2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,540);


(lib.v3 = function() {
	this.initialize(img.v3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,540);


(lib.v4 = function() {
	this.initialize(img.v4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,540);


(lib.v5 = function() {
	this.initialize(img.v5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,540);


(lib.vieto = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.v1();

	this.instance_1 = new lib.v2();

	this.instance_2 = new lib.v3();

	this.instance_3 = new lib.v4();

	this.instance_4 = new lib.v5();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,750,540);
p.frameBounds = [rect, rect, rect, rect, rect];


(lib.lobo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.l1();

	this.instance_1 = new lib.l2();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,228,144);
p.frameBounds = [rect, rect, rect, rect];


// stage content:
(lib._958 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// viento
	this.instance = new lib.vieto("synched",0);
	this.instance.setTransform(375,270,1,1,0,0,0,375,270);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20));

	// lobo
	this.instance_1 = new lib.lobo("synched",0);
	this.instance_1.setTransform(155,468,1,1,0,0,0,114,72);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:150},4).to({x:155,startPosition:1},5).to({x:150,startPosition:0},5).to({x:155,startPosition:3},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(375,270,750,540);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;