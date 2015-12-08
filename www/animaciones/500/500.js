(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
var rect; // used to reference frame bounds

// library properties:
lib.properties = {
	width: 750,
	height: 540,
	fps: 12,
	color: "#2088BD",
	manifest: [
		{src:"images/g1.png", id:"g1"},
		{src:"images/g2.png", id:"g2"},
		{src:"images/g3.png", id:"g3"},
		{src:"images/ll1.png", id:"ll1"},
		{src:"images/ll2.png", id:"ll2"},
		{src:"images/ll3.png", id:"ll3"},
		{src:"images/ll4.png", id:"ll4"},
		{src:"images/xwing.png", id:"xwing"}
	]
};



// symbols:



(lib.g1 = function() {
	this.initialize(img.g1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,258,126);


(lib.g2 = function() {
	this.initialize(img.g2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,258,126);


(lib.g3 = function() {
	this.initialize(img.g3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,258,126);


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


(lib.ll4 = function() {
	this.initialize(img.ll4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,540);


(lib.xwing = function() {
	this.initialize(img.xwing);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,231,78);


(lib.xwing_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xwing();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,231,78);
p.frameBounds = [rect];


(lib.lluvia = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ll1();

	this.instance_1 = new lib.ll2();

	this.instance_2 = new lib.ll3();

	this.instance_3 = new lib.ll4();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,750,540);
p.frameBounds = [rect, rect, rect, rect];


(lib.gotas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.g1();

	this.instance_1 = new lib.g2();

	this.instance_2 = new lib.g3();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,258,126);
p.frameBounds = [rect, rect, rect];


(lib.nave = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.gotas("synched",0);
	this.instance.setTransform(129,63,1,1,0,0,0,129,63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1));

	// Layer 1
	this.instance_1 = new lib.xwing_1("synched",0);
	this.instance_1.setTransform(142.5,76.1,1,1,0,0,0,115.5,39);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:139.5},0).wait(1).to({x:142.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,258,126);
p.frameBounds = [rect, rect, rect];


// stage content:



(lib._500 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.nave();
	this.instance.setTransform(270,366,1,1,0,0,0,129,63);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:289.4,y:336},14).to({x:270,y:366},16).wait(1));

	// Layer 1
	this.instance_1 = new lib.lluvia("synched",0);
	this.instance_1.setTransform(375,270,1,1,0,0,0,375,270);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(375,270,750,540);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;