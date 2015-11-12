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
		{src:"images/a_1.png", id:"a_1"},
		{src:"images/a_2.png", id:"a_2"},
		{src:"images/a_3.png", id:"a_3"},
		{src:"images/c_1.png", id:"c_1"},
		{src:"images/c_2.png", id:"c_2"},
		{src:"images/h_1.png", id:"h_1"},
		{src:"images/h_2.png", id:"h_2"},
		{src:"images/h_3.png", id:"h_3"},
		{src:"images/h_4.png", id:"h_4"},
		{src:"images/h_5.png", id:"h_5"}
	]
};



// symbols:



(lib.a_1 = function() {
	this.initialize(img.a_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,195,108);


(lib.a_2 = function() {
	this.initialize(img.a_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,195,108);


(lib.a_3 = function() {
	this.initialize(img.a_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,195,108);


(lib.c_1 = function() {
	this.initialize(img.c_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,141,99);


(lib.c_2 = function() {
	this.initialize(img.c_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,141,99);


(lib.h_1 = function() {
	this.initialize(img.h_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,333,135);


(lib.h_2 = function() {
	this.initialize(img.h_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,333,135);


(lib.h_3 = function() {
	this.initialize(img.h_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,333,135);


(lib.h_4 = function() {
	this.initialize(img.h_4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,333,135);


(lib.h_5 = function() {
	this.initialize(img.h_5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,333,135);


(lib.hielo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.h_1();

	this.instance_1 = new lib.h_2();

	this.instance_2 = new lib.h_3();

	this.instance_3 = new lib.h_4();

	this.instance_4 = new lib.h_5();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,333,135);
p.frameBounds = [rect, rect, rect, rect, rect];


(lib.cisne = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.c_1();

	this.instance_1 = new lib.c_2();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,141,99);
p.frameBounds = [rect, rect, rect, rect];


(lib.camus = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.a_1();

	this.instance_1 = new lib.a_2();

	this.instance_2 = new lib.a_3();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,195,108);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


// stage content:
(lib._903 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// caballeros
	this.instance = new lib.camus("synched",0);
	this.instance.setTransform(188.5,486,1,1,0,0,0,97.5,54);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(50));

	// hielo
	this.instance_1 = new lib.cisne("synched",0);
	this.instance_1.setTransform(563.5,490.5,1,1,0,0,0,70.5,49.5);

	this.instance_2 = new lib.hielo("synched",0);
	this.instance_2.setTransform(379.5,457.5,1,1,0,0,0,166.5,67.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(466,660,543,150);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;