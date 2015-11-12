(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
var rect; // used to reference frame bounds

// library properties:
lib.properties = {
	width: 750,
	height: 540,
	fps: 12,
	color: "#02304B",
	manifest: [
		{src:"images/k_1.png", id:"k_1"},
		{src:"images/k_2.png", id:"k_2"},
		{src:"images/lluvia_1.png", id:"lluvia_1"},
		{src:"images/lluvia_2.png", id:"lluvia_2"},
		{src:"images/lluvia_3.png", id:"lluvia_3"},
		{src:"images/r_1.png", id:"r_1"},
		{src:"images/r_2.png", id:"r_2"}
	]
};



// symbols:



(lib.k_1 = function() {
	this.initialize(img.k_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,78,129);


(lib.k_2 = function() {
	this.initialize(img.k_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,78,129);


(lib.lluvia_1 = function() {
	this.initialize(img.lluvia_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,540);


(lib.lluvia_2 = function() {
	this.initialize(img.lluvia_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,540);


(lib.lluvia_3 = function() {
	this.initialize(img.lluvia_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,540);


(lib.r_1 = function() {
	this.initialize(img.r_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,69,123);


(lib.r_2 = function() {
	this.initialize(img.r_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,69,123);


(lib.ryu = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.r_2();

	this.instance_1 = new lib.r_1();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,69,123);
p.frameBounds = [rect, rect, rect, rect];


(lib.lluvia = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.lluvia_1();

	this.instance_1 = new lib.lluvia_3();

	this.instance_2 = new lib.lluvia_2();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,750,540);
p.frameBounds = [rect, rect, rect];


(lib.ken = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.k_2();

	this.instance_1 = new lib.k_1();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,78,129);
p.frameBounds = [rect, rect, rect, rect];


// stage content:
(lib._521 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// lluvia
	this.instance = new lib.lluvia("synched",0);
	this.instance.setTransform(361.5,268.5,1,1,0,0,0,361.5,268.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30));

	// batman
	this.instance_1 = new lib.ken("synched",0);
	this.instance_1.setTransform(223,475.5,1,1,0,0,0,39,64.5);

	this.instance_2 = new lib.ryu("synched",0);
	this.instance_2.setTransform(517.5,478.5,1,1,0,0,0,34.5,61.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(375,270,750,540);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;