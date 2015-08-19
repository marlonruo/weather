(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
var rect; // used to reference frame bounds

// library properties:
lib.properties = {
	width: 750,
	height: 540,
	fps: 12,
	color: "#006699",
	manifest: [
		{src:"images/p_1.png", id:"p_1"},
		{src:"images/p_1b.png", id:"p_1b"},
		{src:"images/p_2.png", id:"p_2"},
		{src:"images/p_2b.png", id:"p_2b"},
		{src:"images/p_3.png", id:"p_3"},
		{src:"images/p_4.png", id:"p_4"},
		{src:"images/rayo_1.png", id:"rayo_1"},
		{src:"images/rayo_2.png", id:"rayo_2"},
		{src:"images/rayo_3.png", id:"rayo_3"},
		{src:"images/rayo_4.png", id:"rayo_4"},
		{src:"images/trueno_1.png", id:"trueno_1"},
		{src:"images/trueno_2.png", id:"trueno_2"},
		{src:"images/trueno_3.png", id:"trueno_3"},
		{src:"images/trueno_4.png", id:"trueno_4"},
		{src:"images/trueno_5.png", id:"trueno_5"},
		{src:"images/trueno_6.png", id:"trueno_6"}
	]
};



// symbols:



(lib.p_1 = function() {
	this.initialize(img.p_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,138,126);


(lib.p_1b = function() {
	this.initialize(img.p_1b);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,138,126);


(lib.p_2 = function() {
	this.initialize(img.p_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,138,126);


(lib.p_2b = function() {
	this.initialize(img.p_2b);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,138,126);


(lib.p_3 = function() {
	this.initialize(img.p_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,138,126);


(lib.p_4 = function() {
	this.initialize(img.p_4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,135,129);


(lib.rayo_1 = function() {
	this.initialize(img.rayo_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,126,72);


(lib.rayo_2 = function() {
	this.initialize(img.rayo_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,111,48);


(lib.rayo_3 = function() {
	this.initialize(img.rayo_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,42,51);


(lib.rayo_4 = function() {
	this.initialize(img.rayo_4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,39,30);


(lib.trueno_1 = function() {
	this.initialize(img.trueno_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,153,162);


(lib.trueno_2 = function() {
	this.initialize(img.trueno_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,171,204);


(lib.trueno_3 = function() {
	this.initialize(img.trueno_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,201,297);


(lib.trueno_4 = function() {
	this.initialize(img.trueno_4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,201,525);


(lib.trueno_5 = function() {
	this.initialize(img.trueno_5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,168,465);


(lib.trueno_6 = function() {
	this.initialize(img.trueno_6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,150,213);


(lib.rayo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.rayo_1();

	this.instance_1 = new lib.rayo_2();
	this.instance_1.setTransform(5,-10);

	this.instance_2 = new lib.rayo_3();
	this.instance_2.setTransform(25,-30);

	this.instance_3 = new lib.rayo_4();
	this.instance_3.setTransform(25,-35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,126,72);
p.frameBounds = [rect, new cjs.Rectangle(5,-10,111,48), new cjs.Rectangle(25,-30,42,51), new cjs.Rectangle(25,-35,39,30)];


(lib.pika = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.p_1();

	this.instance_1 = new lib.p_2();

	this.instance_2 = new lib.p_1b();

	this.instance_3 = new lib.p_2b();

	this.instance_4 = new lib.p_3();

	this.instance_5 = new lib.p_4();
	this.instance_5.setTransform(3,-3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_4}]},13).to({state:[{t:this.instance_1}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,138,126);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(3,-3,135,129), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(0,0,138,126), rect, rect, rect];


// stage content:
(lib._212 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// rayos
	this.instance = new lib.rayo("synched",0);
	this.instance.setTransform(382,483,1,1,0,0,0,63,36);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15).to({_off:false},0).to({_off:true},12).wait(18));

	// personaje
	this.instance_1 = new lib.pika("synched",0);
	this.instance_1.setTransform(407,477,1,1,0,0,0,69,63);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(45));

	// Layer 3
	this.instance_2 = new lib.trueno_1();
	this.instance_2.setTransform(317,378);

	this.instance_3 = new lib.trueno_2();
	this.instance_3.setTransform(307,336);

	this.instance_4 = new lib.trueno_3();
	this.instance_4.setTransform(277,243);

	this.instance_5 = new lib.trueno_4();
	this.instance_5.setTransform(287,21);

	this.instance_6 = new lib.trueno_5();
	this.instance_6.setTransform(299,81);

	this.instance_7 = new lib.trueno_6();
	this.instance_7.setTransform(304,327);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},26).to({state:[]},1).to({state:[{t:this.instance_2}]},1).to({state:[]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[]},1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(713,684,138,126);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(694,684,157,126), new cjs.Rectangle(699,684,152,126), new cjs.Rectangle(713,684,138,126), new cjs.Rectangle(713,682,138,128), new cjs.Rectangle(694,684,157,126), new cjs.Rectangle(699,684,152,126), new cjs.Rectangle(713,684,138,126), new cjs.Rectangle(713,682,138,128), new cjs.Rectangle(694,684,157,126), new cjs.Rectangle(699,684,152,126), new cjs.Rectangle(713,684,138,126), new cjs.Rectangle(692,648,159,162), new cjs.Rectangle(713,684,138,126), new cjs.Rectangle(692,648,159,162), new cjs.Rectangle(716,681,135,129), new cjs.Rectangle(682,606,171,204), new cjs.Rectangle(652,513,201,297), new cjs.Rectangle(662,291,201,525), new cjs.Rectangle(674,351,177,465), new cjs.Rectangle(679,597,172,213), rect=new cjs.Rectangle(716,681,135,129), rect, rect, rect, rect, rect, rect=new cjs.Rectangle(713,684,138,126), rect, rect, rect];

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;