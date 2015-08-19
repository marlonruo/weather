(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
var rect; // used to reference frame bounds

// library properties:
lib.properties = {
	width: 750,
	height: 540,
	fps: 12,
	color: "#BE1413",
	manifest: [
		{src:"images/camion.png", id:"camion"},
		{src:"images/humo4.png", id:"humo4"},
		{src:"images/humo_1.png", id:"humo_1"},
		{src:"images/humo_2.png", id:"humo_2"},
		{src:"images/humo_3.png", id:"humo_3"},
		{src:"images/mono.png", id:"mono"}
	]
};



// symbols:



(lib.camion = function() {
	this.initialize(img.camion);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,492,153);


(lib.humo4 = function() {
	this.initialize(img.humo4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,198,168);


(lib.humo_1 = function() {
	this.initialize(img.humo_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,198,168);


(lib.humo_2 = function() {
	this.initialize(img.humo_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,198,168);


(lib.humo_3 = function() {
	this.initialize(img.humo_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,198,168);


(lib.mono = function() {
	this.initialize(img.mono);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,33,81);


(lib.humo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.humo_1();

	this.instance_1 = new lib.humo_2();

	this.instance_2 = new lib.humo_3();

	this.instance_3 = new lib.humo4();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,198,168);
p.frameBounds = [rect, rect, rect, rect];


// stage content:
(lib._904 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.mono();
	this.instance.setTransform(597.9,458);

	this.instance_1 = new lib.camion();
	this.instance_1.setTransform(73,387);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(50));

	// Layer 1
	this.instance_2 = new lib.humo("synched",0);
	this.instance_2.setTransform(190,318,1,1,0,0,0,99,84);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(448,504,557.9,306);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;