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
		{src:"images/ll1.png", id:"ll1"},
		{src:"images/ll2.png", id:"ll2"},
		{src:"images/ll3.png", id:"ll3"},
		{src:"images/personajes.png", id:"personajes"}
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


(lib.personajes = function() {
	this.initialize(img.personajes);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,186,189);


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


(lib.lluvia = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ll1();

	this.instance_1 = new lib.ll2();

	this.instance_2 = new lib.ll3();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,750,540);
p.frameBounds = [rect, rect, rect];


// stage content:
(lib._200 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// rayos
	this.instance = new lib.relampago("synched",0);
	this.instance.setTransform(375,119,1,1,180,0,0,375,270);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},6).wait(30));

	// lluvia
	this.instance_1 = new lib.lluvia("synched",0);
	this.instance_1.setTransform(375,270,1,1,0,0,0,375,270);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(36));

	// personajes
	this.instance_2 = new lib.personajes();
	this.instance_2.setTransform(291,351);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(36));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(375,119,750,691);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(375,270,750,540), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;