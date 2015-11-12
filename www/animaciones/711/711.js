(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
var rect; // used to reference frame bounds

// library properties:
lib.properties = {
	width: 750,
	height: 540,
	fps: 12,
	color: "#808285",
	manifest: [
		{src:"images/hb.png", id:"hb"},
		{src:"images/s_1.png", id:"s_1"},
		{src:"images/s_10.png", id:"s_10"},
		{src:"images/s_11.png", id:"s_11"},
		{src:"images/s_2.png", id:"s_2"},
		{src:"images/s_3.png", id:"s_3"},
		{src:"images/s_4.png", id:"s_4"},
		{src:"images/s_5.png", id:"s_5"},
		{src:"images/s_6.png", id:"s_6"},
		{src:"images/s_7.png", id:"s_7"},
		{src:"images/s_8.png", id:"s_8"},
		{src:"images/s_9.png", id:"s_9"}
	]
};



// symbols:



(lib.hb = function() {
	this.initialize(img.hb);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,294,150);


(lib.s_1 = function() {
	this.initialize(img.s_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,48,72);


(lib.s_10 = function() {
	this.initialize(img.s_10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,48,72);


(lib.s_11 = function() {
	this.initialize(img.s_11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,48,72);


(lib.s_2 = function() {
	this.initialize(img.s_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,48,72);


(lib.s_3 = function() {
	this.initialize(img.s_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,48,72);


(lib.s_4 = function() {
	this.initialize(img.s_4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,48,72);


(lib.s_5 = function() {
	this.initialize(img.s_5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,48,72);


(lib.s_6 = function() {
	this.initialize(img.s_6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,48,72);


(lib.s_7 = function() {
	this.initialize(img.s_7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,48,72);


(lib.s_8 = function() {
	this.initialize(img.s_8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,48,72);


(lib.s_9 = function() {
	this.initialize(img.s_9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,48,72);


(lib.smoke = function(mode,startPosition,loop) {
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

	this.instance_10 = new lib.s_11();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,48,72);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


// stage content:
(lib._711 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.smoke("synched",0);
	this.instance.setTransform(403,393,1,1,0,0,0,24,36);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(204,153,0,0.929)").s().p("AgOAdIAAg5IAdAAIAAA5g");
	this.shape.setTransform(410.5,432);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(153,0,0,0.929)").s().p("AgOAdIAAg5IAdAAIAAA5g");
	this.shape_1.setTransform(410.5,432);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[]},11).to({state:[{t:this.shape}]},35).to({state:[{t:this.shape_1}]},2).wait(2));

	// fondo
	this.instance_1 = new lib.hb();
	this.instance_1.setTransform(226,390);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(601,627,294,183);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(601,660,294,150), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;