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
		{src:"images/bat_1.png", id:"bat_1"},
		{src:"images/bat_2.png", id:"bat_2"},
		{src:"images/lluvia_1.png", id:"lluvia_1"},
		{src:"images/lluvia_2.png", id:"lluvia_2"},
		{src:"images/lluvia_3.png", id:"lluvia_3"}
	]
};



// symbols:



(lib.bat_1 = function() {
	this.initialize(img.bat_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,108,210);


(lib.bat_2 = function() {
	this.initialize(img.bat_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,108,210);


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


(lib.batman = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bat_2();

	this.instance_1 = new lib.bat_1();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,108,210);
p.frameBounds = [rect, rect, rect, rect];


// stage content:
(lib._522 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// lluvia
	this.instance = new lib.lluvia("synched",0);
	this.instance.setTransform(361.5,268.5,1,1,0,0,0,361.5,268.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30));

	// batman
	this.instance_1 = new lib.batman("synched",0);
	this.instance_1.setTransform(396,435,1,1,0,0,0,54,105);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(375,270,750,540);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;