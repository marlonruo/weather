(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
var rect; // used to reference frame bounds

// library properties:
lib.properties = {
	width: 750,
	height: 540,
	fps: 12,
	color: "#064B86",
	manifest: [
		{src:"images/g_1.png", id:"g_1"},
		{src:"images/g_2.png", id:"g_2"},
		{src:"images/g_3.png", id:"g_3"},
		{src:"images/ll_1.png", id:"ll_1"},
		{src:"images/ll_2.png", id:"ll_2"},
		{src:"images/ll_3.png", id:"ll_3"},
		{src:"images/t2.png", id:"t2"}
	]
};



// symbols:



(lib.g_1 = function() {
	this.initialize(img.g_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,540);


(lib.g_2 = function() {
	this.initialize(img.g_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,540);


(lib.g_3 = function() {
	this.initialize(img.g_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,540);


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


(lib.t2 = function() {
	this.initialize(img.t2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,297,81);


(lib.t2_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.t2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,297,81);
p.frameBounds = [rect];


(lib.ll_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ll_3();
	this.instance.setTransform(0,-70);

	this.instance_1 = new lib.ll_1();

	this.instance_2 = new lib.ll_2();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{y:0}},{t:this.instance,p:{y:-70}}]}).to({state:[{t:this.instance_2,p:{y:0}},{t:this.instance_1,p:{y:80}}]},1).to({state:[{t:this.instance,p:{y:0}},{t:this.instance_2,p:{y:-90}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,-70,750,610);
p.frameBounds = [rect, new cjs.Rectangle(0,0,750,620), new cjs.Rectangle(0,-90,750,630)];


(lib.gotas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.g_1();

	this.instance_1 = new lib.g_2();

	this.instance_2 = new lib.g_3();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,750,540);
p.frameBounds = [rect, rect, rect];


// stage content:
(lib._504 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// lluvia
	this.instance = new lib.ll_1_1("synched",0);
	this.instance.setTransform(375,270,1,1,0,0,0,375,270);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(50));

	// Layer 1
	this.instance_1 = new lib.gotas("synched",0);
	this.instance_1.setTransform(375,265,1,1,0,0,0,375,270);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:284},24).to({y:265},25).wait(1));

	// nave
	this.instance_2 = new lib.t2_1("synched",0);
	this.instance_2.setTransform(378.5,285.5,1,1,0,0,0,148.5,40.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:300.5},24).to({y:285.5},25).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(375,200,750,610);
p.frameBounds = [rect, new cjs.Rectangle(375,265.8,750,624.2), new cjs.Rectangle(375,180,750,630), new cjs.Rectangle(375,200,750,610), new cjs.Rectangle(375,268.2,750,621.9), new cjs.Rectangle(375,180,750,630), new cjs.Rectangle(375,200,750,610), new cjs.Rectangle(375,270,750,620), new cjs.Rectangle(375,180,750,631.4), new cjs.Rectangle(375,200,750,612.2), new cjs.Rectangle(375,270,750,620), new cjs.Rectangle(375,180,750,633.7), new cjs.Rectangle(375,200,750,614.5), new cjs.Rectangle(375,270,750,620), new cjs.Rectangle(375,180,750,636.1), new cjs.Rectangle(375,200,750,616.9), new cjs.Rectangle(375,270,750,620), new cjs.Rectangle(375,180,750,638.5), new cjs.Rectangle(375,200,750,619.3), new cjs.Rectangle(375,270,750,620), new cjs.Rectangle(375,180,750,640.9), new cjs.Rectangle(375,200,750,621.7), new cjs.Rectangle(375,270,750,620), new cjs.Rectangle(375,180,750,643.2), new cjs.Rectangle(375,200,750,624), new cjs.Rectangle(375,270,750,620), new cjs.Rectangle(375,180,750,642.5), new cjs.Rectangle(375,200,750,621.7), new cjs.Rectangle(375,270,750,620), new cjs.Rectangle(375,180,750,640.2), new cjs.Rectangle(375,200,750,619.5), new cjs.Rectangle(375,270,750,620), new cjs.Rectangle(375,180,750,637.9), new cjs.Rectangle(375,200,750,617.2), new cjs.Rectangle(375,270,750,620), new cjs.Rectangle(375,180,750,635.7), new cjs.Rectangle(375,200,750,614.9), new cjs.Rectangle(375,270,750,620), new cjs.Rectangle(375,180,750,633.4), new cjs.Rectangle(375,200,750,612.6), new cjs.Rectangle(375,270,750,620), new cjs.Rectangle(375,180,750,631.1), new cjs.Rectangle(375,200,750,610.3), new cjs.Rectangle(375,269.6,750,620.5), new cjs.Rectangle(375,180,750,630), new cjs.Rectangle(375,200,750,610), new cjs.Rectangle(375,267.3,750,622.7), new cjs.Rectangle(375,180,750,630), new cjs.Rectangle(375,200,750,610), new cjs.Rectangle(375,265,750,625)];

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;