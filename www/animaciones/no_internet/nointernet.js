(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
var rect; // used to reference frame bounds

// library properties:
lib.properties = {
	width: 750,
	height: 540,
	fps: 12,
	color: "#333333",
	manifest: []
};



// symbols:



(lib.gameboy = function() {
	this.spriteSheet = ss["nointernet_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.signal = function() {
	this.spriteSheet = ss["nointernet_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.clip = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.signal();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,96,72);
p.frameBounds = [rect];


// stage content:
(lib.nointernet = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.clip();
	this.instance.setTransform(358,204,1,1,0,0,0,48,36);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},5).wait(5));

	// gameboy
	this.instance_1 = new lib.gameboy();
	this.instance_1.setTransform(237,98);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(612,368,246,369);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;