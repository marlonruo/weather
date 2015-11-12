(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
var rect; // used to reference frame bounds

// library properties:
lib.properties = {
	width: 750,
	height: 540,
	fps: 12,
	color: "#198AC9",
	manifest: [
		{src:"images/ll_1.png", id:"ll_1"},
		{src:"images/ll_2.png", id:"ll_2"},
		{src:"images/ll_3.png", id:"ll_3"},
		{src:"images/z_1.png", id:"z_1"},
		{src:"images/z_2.png", id:"z_2"}
	]
};



// symbols:



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


(lib.z_1 = function() {
	this.initialize(img.z_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,207,240);


(lib.z_2 = function() {
	this.initialize(img.z_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,207,240);


(lib.viento = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ll_1();

	this.instance_1 = new lib.ll_2();

	this.instance_2 = new lib.ll_3();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,750,540);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.link = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.z_1();

	this.instance_1 = new lib.z_2();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,207,240);
p.frameBounds = [rect, rect];


// stage content:
(lib._956d = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// brezze
	this.instance = new lib.viento("synched",0);
	this.instance.setTransform(375,270,1,1,0,0,0,375,270);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30));

	// link
	this.instance_1 = new lib.link("synched",1);
	this.instance_1.setTransform(374.5,420,1,1,0,0,0,103.5,120);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:426},14).to({y:420,startPosition:0},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(375,270,750,540);
p.frameBounds = [rect, new cjs.Rectangle(375,270,750,540.5), new cjs.Rectangle(375,270,750,540.9), new cjs.Rectangle(375,270,750,541.3), new cjs.Rectangle(375,270,750,541.7), new cjs.Rectangle(375,270,750,542.2), new cjs.Rectangle(375,270,750,542.6), new cjs.Rectangle(375,270,750,543), new cjs.Rectangle(375,270,750,543.5), new cjs.Rectangle(375,270,750,543.9), new cjs.Rectangle(375,270,750,544.3), new cjs.Rectangle(375,270,750,544.7), new cjs.Rectangle(375,270,750,545.2), new cjs.Rectangle(375,270,750,545.6), new cjs.Rectangle(375,270,750,546), new cjs.Rectangle(375,270,750,545.6), new cjs.Rectangle(375,270,750,545.2), new cjs.Rectangle(375,270,750,544.8), new cjs.Rectangle(375,270,750,544.4), new cjs.Rectangle(375,270,750,544), new cjs.Rectangle(375,270,750,543.6), new cjs.Rectangle(375,270,750,543.2), new cjs.Rectangle(375,270,750,542.8), new cjs.Rectangle(375,270,750,542.4), new cjs.Rectangle(375,270,750,542), new cjs.Rectangle(375,270,750,541.6), new cjs.Rectangle(375,270,750,541.2), new cjs.Rectangle(375,270,750,540.8), new cjs.Rectangle(375,270,750,540.4), new cjs.Rectangle(375,270,750,540)];

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;