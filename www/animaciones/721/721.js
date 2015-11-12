(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
var rect; // used to reference frame bounds

// library properties:
lib.properties = {
	width: 750,
	height: 540,
	fps: 12,
	color: "#808285",
	manifest: [
		{src:"images/a.png", id:"a"},
		{src:"images/b.png", id:"b"},
		{src:"images/c.png", id:"c"},
		{src:"images/c1.png", id:"c1"},
		{src:"images/c2.png", id:"c2"},
		{src:"images/c3.png", id:"c3"},
		{src:"images/c4.png", id:"c4"},
		{src:"images/d.png", id:"d"},
		{src:"images/e.png", id:"e"},
		{src:"images/f.png", id:"f"},
		{src:"images/s1.png", id:"s1"},
		{src:"images/s10.png", id:"s10"},
		{src:"images/s11.png", id:"s11"},
		{src:"images/s12.png", id:"s12"},
		{src:"images/s2.png", id:"s2"},
		{src:"images/s3.png", id:"s3"},
		{src:"images/s4.png", id:"s4"},
		{src:"images/s5.png", id:"s5"},
		{src:"images/s6.png", id:"s6"},
		{src:"images/s7.png", id:"s7"},
		{src:"images/s8.png", id:"s8"},
		{src:"images/s9.png", id:"s9"}
	]
};



// symbols:



(lib.a = function() {
	this.initialize(img.a);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,30,27);


(lib.b = function() {
	this.initialize(img.b);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,30,27);


(lib.c = function() {
	this.initialize(img.c);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,30,27);


(lib.c1 = function() {
	this.initialize(img.c1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,207,186);


(lib.c2 = function() {
	this.initialize(img.c2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,207,186);


(lib.c3 = function() {
	this.initialize(img.c3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,207,186);


(lib.c4 = function() {
	this.initialize(img.c4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,207,186);


(lib.d = function() {
	this.initialize(img.d);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,30,27);


(lib.e = function() {
	this.initialize(img.e);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,30,27);


(lib.f = function() {
	this.initialize(img.f);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,30,27);


(lib.s1 = function() {
	this.initialize(img.s1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,540);


(lib.s10 = function() {
	this.initialize(img.s10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,540);


(lib.s11 = function() {
	this.initialize(img.s11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,540);


(lib.s12 = function() {
	this.initialize(img.s12);
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


(lib.s9 = function() {
	this.initialize(img.s9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,540);


(lib.smoke = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.a();

	this.instance_1 = new lib.b();

	this.instance_2 = new lib.c();

	this.instance_3 = new lib.d();

	this.instance_4 = new lib.e();

	this.instance_5 = new lib.f();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,30,27);
p.frameBounds = [rect, rect, rect, rect, rect, rect];


(lib.humo2 = function(mode,startPosition,loop) {
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

	this.instance_8 = new lib.s9();

	this.instance_9 = new lib.s10();

	this.instance_10 = new lib.s11();

	this.instance_11 = new lib.s12();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.instance_3}]},3).to({state:[{t:this.instance_4}]},3).to({state:[{t:this.instance_5}]},3).to({state:[{t:this.instance_6}]},3).to({state:[{t:this.instance_7}]},3).to({state:[{t:this.instance_8}]},3).to({state:[{t:this.instance_9}]},3).to({state:[{t:this.instance_10}]},3).to({state:[{t:this.instance_11}]},3).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,750,540);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.humo = function(mode,startPosition,loop) {
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

	this.instance_8 = new lib.s9();

	this.instance_9 = new lib.s10();

	this.instance_10 = new lib.s11();

	this.instance_11 = new lib.s12();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance_10}]},2).to({state:[{t:this.instance_11}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,750,540);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.caballo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.c1();

	this.instance_1 = new lib.c2();

	this.instance_2 = new lib.c3();

	this.instance_3 = new lib.c4();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,207,186);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect];


// stage content:
(lib._721 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// humo_2
	this.instance = new lib.humo2("synched",0);
	this.instance.setTransform(375,271,1,1,0,0,0,375,270);
	this.instance.alpha = 0.398;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(48));

	// humo
	this.instance_1 = new lib.humo("synched",0);
	this.instance_1.setTransform(375,270,1,1,0,0,0,375,270);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(48));

	// smoke
	this.instance_2 = new lib.smoke("synched",0);
	this.instance_2.setTransform(297,459.5,1,1,0,0,0,15,13.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},6).wait(42));

	// fondo
	this.instance_3 = new lib.caballo("synched",0);
	this.instance_3.setTransform(390.5,447,1,1,0,0,0,103.5,93);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(48));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(375,270,750,541);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;