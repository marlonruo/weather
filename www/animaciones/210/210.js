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
		{src:"images/l_1.png", id:"l_1"},
		{src:"images/l_2.png", id:"l_2"},
		{src:"images/l_3.png", id:"l_3"},
		{src:"images/p1.png", id:"p1"},
		{src:"images/p2.png", id:"p2"},
		{src:"images/r1.png", id:"r1"},
		{src:"images/r2.png", id:"r2"},
		{src:"images/r3.png", id:"r3"},
		{src:"images/r4.png", id:"r4"},
		{src:"images/r5.png", id:"r5"},
		{src:"images/r6.png", id:"r6"}
	]
};



// symbols:



(lib.l_1 = function() {
	this.initialize(img.l_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,540);


(lib.l_2 = function() {
	this.initialize(img.l_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,540);


(lib.l_3 = function() {
	this.initialize(img.l_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,540);


(lib.p1 = function() {
	this.initialize(img.p1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,126,192);


(lib.p2 = function() {
	this.initialize(img.p2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,126,192);


(lib.r1 = function() {
	this.initialize(img.r1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,141,189);


(lib.r2 = function() {
	this.initialize(img.r2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,141,189);


(lib.r3 = function() {
	this.initialize(img.r3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,141,189);


(lib.r4 = function() {
	this.initialize(img.r4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,141,189);


(lib.r5 = function() {
	this.initialize(img.r5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,141,189);


(lib.r6 = function() {
	this.initialize(img.r6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,141,189);


(lib.relampago = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.l_1();

	this.instance_1 = new lib.l_2();

	this.instance_2 = new lib.l_3();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,750,540);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.rayos = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.r1();

	this.instance_1 = new lib.r2();

	this.instance_2 = new lib.r3();

	this.instance_3 = new lib.r4();

	this.instance_4 = new lib.r5();

	this.instance_5 = new lib.r6();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,141,189);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect=null, rect, rect, rect];


(lib.raiden = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.p1();

	this.instance_1 = new lib.p2();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,126,192);
p.frameBounds = [rect, rect, rect, rect];


// stage content:
(lib._210 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// rayos
	this.instance = new lib.relampago("synched",0);
	this.instance.setTransform(375,270,1,1,0,0,0,375,270);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},6).wait(34));

	// rayos
	this.instance_1 = new lib.rayos("synched",0);
	this.instance_1.setTransform(379.5,444.5,1,1,0,0,0,70.5,94.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(40));

	// personaje
	this.instance_2 = new lib.raiden("synched",0);
	this.instance_2.setTransform(375,444,1,1,0,0,0,63,96);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(375,270,750,540);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(687,618,126,192), rect, rect, rect, rect=new cjs.Rectangle(684,618,141,192), rect, rect, rect, rect, rect, rect=new cjs.Rectangle(687,618,126,192), rect, rect, rect, rect=new cjs.Rectangle(684,618,141,192), rect, rect, rect, rect, rect, rect=new cjs.Rectangle(687,618,126,192), rect, rect, rect, rect=new cjs.Rectangle(684,618,141,192), rect, rect, rect, rect, rect, rect=new cjs.Rectangle(687,618,126,192), rect, rect, rect];

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;