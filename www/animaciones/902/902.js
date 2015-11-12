(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
var rect; // used to reference frame bounds

// library properties:
lib.properties = {
	width: 750,
	height: 540,
	fps: 12,
	color: "#FF6600",
	manifest: [
		{src:"images/t1.png", id:"t1"},
		{src:"images/t2.png", id:"t2"},
		{src:"images/t3.png", id:"t3"},
		{src:"images/t4.png", id:"t4"}
	]
};



// symbols:



(lib.t1 = function() {
	this.initialize(img.t1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,201,243);


(lib.t2 = function() {
	this.initialize(img.t2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,201,243);


(lib.t3 = function() {
	this.initialize(img.t3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,201,243);


(lib.t4 = function() {
	this.initialize(img.t4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,18,18);


(lib.hurracan = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.t1();

	this.instance_1 = new lib.t2();

	this.instance_2 = new lib.t3();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,201,243);
p.frameBounds = [rect, rect, rect];


(lib.alboniga = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.t4();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,18,18);
p.frameBounds = [rect];


// stage content:
(lib._902 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.alboniga();
	this.instance.setTransform(465,385,1,1,0,0,0,9,9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({x:575,y:555},5).to({_off:true},1).wait(11).to({_off:false,x:341,y:398},0).to({x:199,y:576},4).to({_off:true},1).wait(24));

	// fondo
	this.instance_1 = new lib.hurracan();
	this.instance_1.setTransform(417.5,418.5,1,1,0,0,0,100.5,121.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:387.5},24).to({x:417.5},25).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(692,567,201,243);
p.frameBounds = [rect, new cjs.Rectangle(690.8,567,201,243), new cjs.Rectangle(689.5,567,201,243), new cjs.Rectangle(688.3,567,201,243), new cjs.Rectangle(687,567,201,243), new cjs.Rectangle(685.8,567,201,243), new cjs.Rectangle(684.5,567,208.5,243), new cjs.Rectangle(683.3,567,231.8,243), new cjs.Rectangle(682,567,255,243), new cjs.Rectangle(680.8,567,278.3,267), new cjs.Rectangle(679.5,567,201,243), new cjs.Rectangle(678.3,567,201,243), new cjs.Rectangle(677,567,201,243), new cjs.Rectangle(675.8,567,201,243), new cjs.Rectangle(674.5,567,201,243), new cjs.Rectangle(673.3,567,201,243), new cjs.Rectangle(672,567,201,243), new cjs.Rectangle(670.8,567,201,243), new cjs.Rectangle(669.5,567,201,243), new cjs.Rectangle(668.3,567,201,243), new cjs.Rectangle(667,567,201,243), new cjs.Rectangle(665.8,567,201,243), new cjs.Rectangle(664.5,567,201,243), new cjs.Rectangle(636,567,228.3,243), new cjs.Rectangle(600.5,567,262.5,243.5), new cjs.Rectangle(565,567,299.2,288), new cjs.Rectangle(664.4,567,201,243), new cjs.Rectangle(665.6,567,201,243), new cjs.Rectangle(666.8,567,201,243), new cjs.Rectangle(668,567,201,243), new cjs.Rectangle(669.2,567,201,243), new cjs.Rectangle(670.4,567,201,243), new cjs.Rectangle(671.6,567,201,243), new cjs.Rectangle(672.8,567,201,243), new cjs.Rectangle(674,567,201,243), new cjs.Rectangle(675.2,567,201,243), new cjs.Rectangle(676.4,567,201,243), new cjs.Rectangle(677.6,567,201,243), new cjs.Rectangle(678.8,567,201,243), new cjs.Rectangle(680,567,201,243), new cjs.Rectangle(681.2,567,201,243), new cjs.Rectangle(682.4,567,201,243), new cjs.Rectangle(683.6,567,201,243), new cjs.Rectangle(684.8,567,201,243), new cjs.Rectangle(686,567,201,243), new cjs.Rectangle(687.2,567,201,243), new cjs.Rectangle(688.4,567,201,243), new cjs.Rectangle(689.6,567,201,243), new cjs.Rectangle(690.8,567,201,243), new cjs.Rectangle(692,567,201,243)];

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;