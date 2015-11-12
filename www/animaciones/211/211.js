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
		{src:"images/l1.png", id:"l1"},
		{src:"images/l2.png", id:"l2"},
		{src:"images/l3.png", id:"l3"},
		{src:"images/l4.png", id:"l4"},
		{src:"images/l5.png", id:"l5"},
		{src:"images/l6.png", id:"l6"},
		{src:"images/rayo_1.png", id:"rayo_1"},
		{src:"images/rayo_2.png", id:"rayo_2"},
		{src:"images/rayo_3.png", id:"rayo_3"},
		{src:"images/s1.png", id:"s1"},
		{src:"images/s2.png", id:"s2"}
	]
};



// symbols:



(lib.l1 = function() {
	this.initialize(img.l1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,75,93);


(lib.l2 = function() {
	this.initialize(img.l2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,75,93);


(lib.l3 = function() {
	this.initialize(img.l3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,75,93);


(lib.l4 = function() {
	this.initialize(img.l4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,75,93);


(lib.l5 = function() {
	this.initialize(img.l5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,75,93);


(lib.l6 = function() {
	this.initialize(img.l6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,75,93);


(lib.rayo_1 = function() {
	this.initialize(img.rayo_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,540);


(lib.rayo_2 = function() {
	this.initialize(img.rayo_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,540);


(lib.rayo_3 = function() {
	this.initialize(img.rayo_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,540);


(lib.s1 = function() {
	this.initialize(img.s1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,183,159);


(lib.s2 = function() {
	this.initialize(img.s2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,183,159);


(lib.storm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.s1();

	this.instance_1 = new lib.s2();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,183,159);
p.frameBounds = [rect, rect, rect, rect];


(lib.rayos = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.rayo_1();

	this.instance_1 = new lib.rayo_2();

	this.instance_2 = new lib.rayo_3();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,750,540);
p.frameBounds = [rect, rect, rect, rect];


(lib.l = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.l1();

	this.instance_1 = new lib.l2();

	this.instance_2 = new lib.l3();

	this.instance_3 = new lib.l4();

	this.instance_4 = new lib.l5();

	this.instance_5 = new lib.l6();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,75,93);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect=null, rect, rect, rect];


// stage content:
(lib._211 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// rayos
	this.instance = new lib.rayos("synched",0);
	this.instance.setTransform(375,270,1,1,0,0,0,375,270);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},4).wait(46));

	// l
	this.instance_1 = new lib.l("synched",0);
	this.instance_1.setTransform(370.5,283.5,1,1,0,0,0,37.5,46.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(50));

	// Layer 4
	this.instance_2 = new lib.storm("synched",0);
	this.instance_2.setTransform(376.5,271.5,1,1,0,0,0,91.5,79.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(375,270,750,540);
p.frameBounds = [rect, rect, rect, rect, rect=new cjs.Rectangle(660,462,183,159), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;