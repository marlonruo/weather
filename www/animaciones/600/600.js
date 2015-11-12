(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
var rect; // used to reference frame bounds

// library properties:
lib.properties = {
	width: 750,
	height: 540,
	fps: 12,
	color: "#003366",
	manifest: [
		{src:"images/rayo.png", id:"rayo"},
		{src:"images/re_1.png", id:"re_1"},
		{src:"images/re_2.png", id:"re_2"},
		{src:"images/re_3.png", id:"re_3"},
		{src:"images/re_4.png", id:"re_4"},
		{src:"images/s1.png", id:"s1"},
		{src:"images/s2.png", id:"s2"},
		{src:"images/s3.png", id:"s3"},
		{src:"images/s4.png", id:"s4"},
		{src:"images/s5.png", id:"s5"},
		{src:"images/s6.png", id:"s6"},
		{src:"images/s7.png", id:"s7"},
		{src:"images/s8.png", id:"s8"}
	]
};



// symbols:



(lib.rayo = function() {
	this.initialize(img.rayo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,114,114);


(lib.re_1 = function() {
	this.initialize(img.re_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,171,147);


(lib.re_2 = function() {
	this.initialize(img.re_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,171,153);


(lib.re_3 = function() {
	this.initialize(img.re_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,171,153);


(lib.re_4 = function() {
	this.initialize(img.re_4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,171,153);


(lib.s1 = function() {
	this.initialize(img.s1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,540);


(lib.s2 = function() {
	this.initialize(img.s2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,540);


(lib.s3 = function() {
	this.initialize(img.s3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,540);


(lib.s4 = function() {
	this.initialize(img.s4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,540);


(lib.s5 = function() {
	this.initialize(img.s5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,540);


(lib.s6 = function() {
	this.initialize(img.s6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,540);


(lib.s7 = function() {
	this.initialize(img.s7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,540);


(lib.s8 = function() {
	this.initialize(img.s8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,540);


(lib.rayo_2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.rayo();
	this.instance.setTransform(32.1,32.1,0.438,0.438);

	this.instance_1 = new lib.rayo();

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,114,114);
p.frameBounds = [rect];


(lib.pestanas = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8BCEF4").s().p("AgrAtIAAhYIBYAAIAABYg");
	this.shape.setTransform(16,4.5,0.872,1,0,0,0,-4.5,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8BCEF4").s().p("AgrAtIAAhYIBYAAIAABYg");
	this.shape_1.setTransform(0,4.5,0.894,1,0,0,0,-4.5,0);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,23.9,9);
p.frameBounds = [rect];


(lib.nieve = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.s1();

	this.instance_1 = new lib.s2();

	this.instance_2 = new lib.s3();

	this.instance_3 = new lib.s4();

	this.instance_4 = new lib.s5();

	this.instance_5 = new lib.s6();

	this.instance_6 = new lib.s7();

	this.instance_7 = new lib.s8();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_7}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,750,540);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.rayo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.rayo();

	this.instance_1 = new lib.rayo_2("synched",0);
	this.instance_1.setTransform(57,57,0.702,0.702,0,0,0,57,57);
	this.instance_1.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,114,114);
p.frameBounds = [rect, new cjs.Rectangle(17,17,80,80)];


(lib.rey_helado = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.rayo_1("synched",0);
	this.instance.setTransform(0,67,1,1,0,0,0,57,57);
	this.instance.alpha = 0.199;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12));

	// Layer 1
	this.instance_1 = new lib.re_1();

	this.instance_2 = new lib.re_2();

	this.instance_3 = new lib.re_3();

	this.instance_4 = new lib.re_4();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

	// Layer 3
	this.instance_5 = new lib.rayo_1("synched",0);
	this.instance_5.setTransform(166,82,1,1,0,0,0,57,57);
	this.instance_5.alpha = 0.199;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-57,0,280,147);
p.frameBounds = [rect, new cjs.Rectangle(-40,0,246,147), new cjs.Rectangle(-57,0,280,153), new cjs.Rectangle(-40,0,246,153), new cjs.Rectangle(-57,0,280,153), new cjs.Rectangle(-40,0,246,153), new cjs.Rectangle(-57,0,280,153), new cjs.Rectangle(-40,0,246,153), new cjs.Rectangle(-57,0,280,153), new cjs.Rectangle(-40,0,246,153), new cjs.Rectangle(-57,0,280,153), new cjs.Rectangle(-40,0,246,153)];


(lib.helado_mueve = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.rey_helado("synched",0);
	this.instance.setTransform(85.5,76.5,1,1,0,0,0,85.5,76.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:126.5,startPosition:10},11).to({y:76.5,startPosition:11},12).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-57,0,280,147);
p.frameBounds = [rect, new cjs.Rectangle(-40,4.6,246,147), new cjs.Rectangle(-57,9.1,280,153), new cjs.Rectangle(-40,13.7,246,153), new cjs.Rectangle(-57,18.2,280,153), new cjs.Rectangle(-40,22.8,246,153), new cjs.Rectangle(-57,27.3,280,153), new cjs.Rectangle(-40,31.8,246,153), new cjs.Rectangle(-57,36.4,280,153), new cjs.Rectangle(-40,40.9,246,153), new cjs.Rectangle(-57,45.5,280,153), new cjs.Rectangle(-57,50,280,153), new cjs.Rectangle(-40,45.9,246,153), new cjs.Rectangle(-57,41.7,280,147), new cjs.Rectangle(-40,37.5,246,147), new cjs.Rectangle(-57,33.4,280,153), new cjs.Rectangle(-40,29.2,246,153), new cjs.Rectangle(-57,25,280,153), new cjs.Rectangle(-40,20.9,246,153), new cjs.Rectangle(-57,16.7,280,153), new cjs.Rectangle(-40,12.5,246,153), new cjs.Rectangle(-57,8.4,280,153), new cjs.Rectangle(-40,4.2,246,153), new cjs.Rectangle(-40,0,246,153)];


// stage content:



(lib._600 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// nieve
	this.instance = new lib.nieve("synched",4);
	this.instance.setTransform(275,270,1,1,0,0,180,375,270);
	this.instance.alpha = 0.199;

	this.instance_1 = new lib.nieve("synched",0);
	this.instance_1.setTransform(375,210,1,1,0,0,180,375,270);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(70));

	// Layer 1
	this.instance_2 = new lib.pestanas();
	this.instance_2.setTransform(391.3,259,1.134,0.333,0,0,0,13.5,0);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(40).to({_off:false},0).wait(1).to({y:258},0).to({_off:true},1).wait(1).to({_off:false,y:246.5},0).to({_off:true},1).wait(26));

	// personaje
	this.instance_3 = new lib.helado_mueve("synched",0);
	this.instance_3.setTransform(374.5,270.5,1,1,0,0,0,85.5,76.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(70));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(275,210,850,600);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;