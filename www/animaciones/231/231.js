(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
var rect; // used to reference frame bounds

// library properties:
lib.properties = {
	width: 750,
	height: 540,
	fps: 12,
	color: "#02253C",
	manifest: [
		{src:"images/b1.png", id:"b1"},
		{src:"images/b2.png", id:"b2"},
		{src:"images/l_1.png", id:"l_1"},
		{src:"images/l_2.png", id:"l_2"},
		{src:"images/l_3.png", id:"l_3"},
		{src:"images/laser.png", id:"laser"},
		{src:"images/ll1.png", id:"ll1"},
		{src:"images/ll2.png", id:"ll2"},
		{src:"images/ll3.png", id:"ll3"},
		{src:"images/o1.png", id:"o1"},
		{src:"images/o4.png", id:"o4"},
		{src:"images/o5.png", id:"o5"},
		{src:"images/o6.png", id:"o6"},
		{src:"images/o7.png", id:"o7"}
	]
};



// symbols:



(lib.b1 = function() {
	this.initialize(img.b1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,114,162);


(lib.b2 = function() {
	this.initialize(img.b2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,114,162);


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


(lib.laser = function() {
	this.initialize(img.laser);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,48,30);


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


(lib.o1 = function() {
	this.initialize(img.o1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,117,144);


(lib.o4 = function() {
	this.initialize(img.o4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,117,144);


(lib.o5 = function() {
	this.initialize(img.o5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,117,144);


(lib.o6 = function() {
	this.initialize(img.o6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,117,144);


(lib.o7 = function() {
	this.initialize(img.o7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,117,144);


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


(lib.rayo = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.laser();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,48,30);
p.frameBounds = [rect];


(lib.obi = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.o1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({y:3},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,117,144);
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(0,3,117,144), rect];


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


(lib.boba = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.b2();

	this.instance_1 = new lib.b1();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,114,162);
p.frameBounds = [rect, rect];


// stage content:



(lib._231 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.relampago("synched",0);
	this.instance.setTransform(375,80,1,1,180,0,0,375,270);
	this.instance.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},6).wait(54));

	// lluvia
	this.instance_1 = new lib.lluvia("synched",0);
	this.instance_1.setTransform(375,270,1,1,0,0,0,375,270);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(60));

	// boba
	this.instance_2 = new lib.boba("synched",0);
	this.instance_2.setTransform(642,266,1,1,0,0,0,57,81);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:260,startPosition:1},9).to({y:266,startPosition:0},10).to({y:260,startPosition:1},9).to({y:266,startPosition:0},10).to({y:260,startPosition:1},10).to({y:266,startPosition:0},11).wait(1));

	// laser
	this.instance_3 = new lib.rayo("synched",0);
	this.instance_3.setTransform(561,263.1,1,1,0,0,0,24,15);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(29).to({_off:false},0).to({x:202,y:408.1},4).wait(1).to({x:192},0).to({rotation:90,x:-28,y:278.1},2).to({_off:true},1).wait(23));

	// obi
	this.instance_4 = new lib.obi("synched",0);
	this.instance_4.setTransform(139.5,468,1,1,0,0,0,58.5,72);

	this.instance_5 = new lib.o4();
	this.instance_5.setTransform(81,399);

	this.instance_6 = new lib.o5();
	this.instance_6.setTransform(81,399);

	this.instance_7 = new lib.o6();
	this.instance_7.setTransform(81,399);

	this.instance_8 = new lib.o7();
	this.instance_8.setTransform(81,399);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4,p:{startPosition:0}}]}).to({state:[{t:this.instance_4,p:{startPosition:2}}]},33).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_4,p:{startPosition:0}}]},1).to({state:[{t:this.instance_4,p:{startPosition:1}}]},18).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(375,80,750,730);
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(375,80,750,733), rect, rect=new cjs.Rectangle(375,80,750,730), rect, rect=new cjs.Rectangle(375,270,750,543), rect, rect=new cjs.Rectangle(375,270,750,540), rect, rect=new cjs.Rectangle(375,270,750,543), rect, rect=new cjs.Rectangle(375,270,750,540), rect, rect=new cjs.Rectangle(375,270,750,543), rect, rect=new cjs.Rectangle(375,270,750,540), rect, rect=new cjs.Rectangle(375,270,750,543), rect, rect=new cjs.Rectangle(375,270,750,540), rect, rect=new cjs.Rectangle(375,270,750,543), rect, rect=new cjs.Rectangle(375,270,750,540), rect, rect=new cjs.Rectangle(375,270,750,543), rect, rect=new cjs.Rectangle(375,270,750,540), rect, rect=new cjs.Rectangle(375,270,750,543), rect, new cjs.Rectangle(375,270,750,540), rect=new cjs.Rectangle(375,270,750,543), rect, rect, new cjs.Rectangle(332,270,793,543), new cjs.Rectangle(375,270,750,543), rect=new cjs.Rectangle(375,270,750,540), rect, rect=new cjs.Rectangle(375,270,750,543), rect, rect=new cjs.Rectangle(375,270,750,540), rect, rect=new cjs.Rectangle(375,270,750,543), rect, rect=new cjs.Rectangle(375,270,750,540), rect, rect=new cjs.Rectangle(375,270,750,543), rect, rect=new cjs.Rectangle(375,270,750,540), rect, rect=new cjs.Rectangle(375,270,750,543), rect, rect=new cjs.Rectangle(375,270,750,540), rect, rect, rect=new cjs.Rectangle(375,270,750,543), rect, new cjs.Rectangle(375,270,750,540)];

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;