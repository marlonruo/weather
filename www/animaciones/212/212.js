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
		{src:"images/p1.png", id:"p1"},
		{src:"images/p2.png", id:"p2"},
		{src:"images/p3.png", id:"p3"},
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



(lib.p1 = function() {
	this.initialize(img.p1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,69,63);


(lib.p2 = function() {
	this.initialize(img.p2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,69,60);


(lib.p3 = function() {
	this.initialize(img.p3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,72,60);


(lib.rayo_1 = function() {
	this.initialize(img.rayo_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,60,36);


(lib.rayo_2 = function() {
	this.initialize(img.rayo_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,57,21);


(lib.rayo_3 = function() {
	this.initialize(img.rayo_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,18,21);


(lib.rayo_4 = function() {
	this.initialize(img.rayo_4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,24,15);


(lib.trueno_1 = function() {
	this.initialize(img.trueno_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,102,102);


(lib.trueno_2 = function() {
	this.initialize(img.trueno_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,105,132);


(lib.trueno_3 = function() {
	this.initialize(img.trueno_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,129,189);


(lib.trueno_4 = function() {
	this.initialize(img.trueno_4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,138,330);


(lib.trueno_5 = function() {
	this.initialize(img.trueno_5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,147,405);


(lib.trueno_6 = function() {
	this.initialize(img.trueno_6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,117,153);


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
p.nominalBounds = rect = new cjs.Rectangle(0,0,60,36);
p.frameBounds = [rect, new cjs.Rectangle(5,-10,57,21), new cjs.Rectangle(25,-30,18,21), new cjs.Rectangle(25,-35,24,15)];


(lib.pika = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.p1();

	this.instance_1 = new lib.p2();
	this.instance_1.setTransform(0,3);
	this.instance_1._off = true;

	this.instance_2 = new lib.p3();
	this.instance_2.setTransform(0,3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance}]},13).to({state:[{t:this.instance_1}]},2).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},2).wait(2).to({_off:false},0).to({_off:true},2).wait(2).to({_off:false},0).to({_off:true},2).wait(2).to({_off:false},0).to({_off:true},2).wait(2).to({_off:false},0).to({_off:true},2).wait(2).to({_off:false},0).to({_off:true},2).wait(2).to({_off:false},0).to({_off:true},2).wait(15).to({_off:false},0).to({_off:true},2).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).to({_off:true},2).wait(2).to({_off:false},0).to({_off:true},2).wait(2).to({_off:false},0).to({_off:true},2).wait(2).to({_off:false},0).to({_off:true},2).wait(2).to({_off:false},0).to({_off:true},2).wait(2).to({_off:false},0).to({_off:true},2).wait(2).to({_off:false},0).to({_off:true},2).wait(15).to({_off:false},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,69,63);
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(0,3,69,60), rect, rect=new cjs.Rectangle(0,0,69,63), rect, rect=new cjs.Rectangle(0,3,69,60), rect, rect=new cjs.Rectangle(0,0,69,63), rect, rect=new cjs.Rectangle(0,3,69,60), rect, rect=new cjs.Rectangle(0,0,69,63), rect, rect=new cjs.Rectangle(0,3,69,60), rect, rect=new cjs.Rectangle(0,0,69,63), rect, rect=new cjs.Rectangle(0,3,69,60), rect, rect=new cjs.Rectangle(0,0,69,63), rect, rect=new cjs.Rectangle(0,3,69,60), rect, rect=new cjs.Rectangle(0,0,69,63), rect, rect=new cjs.Rectangle(0,3,69,60), rect, rect=new cjs.Rectangle(0,3,72,60), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(0,0,69,63), rect, rect=new cjs.Rectangle(0,3,69,60), rect];


// stage content:



(lib._212 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// rayos
	this.instance = new lib.rayo("synched",0);
	this.instance.setTransform(389,553,1,1,0,0,0,63,36);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15).to({_off:false},0).to({_off:true},12).wait(18));

	// personaje
	this.instance_1 = new lib.pika("synched",0);
	this.instance_1.setTransform(407,540,1,1,0,0,0,69,63);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(45));

	// Layer 3
	this.instance_2 = new lib.trueno_1();
	this.instance_2.setTransform(316,459);

	this.instance_3 = new lib.trueno_2();
	this.instance_3.setTransform(317,406);

	this.instance_4 = new lib.trueno_3();
	this.instance_4.setTransform(304,363);

	this.instance_5 = new lib.trueno_4();
	this.instance_5.setTransform(297,211);

	this.instance_6 = new lib.trueno_5();
	this.instance_6.setTransform(290,161);

	this.instance_7 = new lib.trueno_6();
	this.instance_7.setTransform(304,387);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2,p:{x:316,y:459}}]},26).to({state:[]},1).to({state:[{t:this.instance_2,p:{x:317,y:438}}]},1).to({state:[]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[]},1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(713,747,69,63);
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(713,750,69,60), rect, rect=new cjs.Rectangle(713,747,69,63), rect, rect=new cjs.Rectangle(713,750,69,60), rect, rect=new cjs.Rectangle(713,747,69,63), rect, rect=new cjs.Rectangle(713,750,69,60), rect, rect=new cjs.Rectangle(713,747,69,63), rect, new cjs.Rectangle(713,750,69,60), new cjs.Rectangle(701,750,81,73), new cjs.Rectangle(706,747,76,63), new cjs.Rectangle(713,747,69,63), new cjs.Rectangle(713,750,69,60), new cjs.Rectangle(701,750,81,73), new cjs.Rectangle(706,747,76,63), new cjs.Rectangle(713,747,69,63), new cjs.Rectangle(713,750,69,60), new cjs.Rectangle(701,750,81,73), new cjs.Rectangle(706,747,76,63), new cjs.Rectangle(713,747,69,63), new cjs.Rectangle(691,729,102,102), new cjs.Rectangle(713,750,69,60), new cjs.Rectangle(692,708,102,102), new cjs.Rectangle(713,750,72,60), new cjs.Rectangle(692,676,105,134), new cjs.Rectangle(679,633,129,189), new cjs.Rectangle(672,481,138,330), new cjs.Rectangle(665,431,147,405), new cjs.Rectangle(679,657,117,153), rect=new cjs.Rectangle(713,750,72,60), rect, rect, rect, rect, rect, rect=new cjs.Rectangle(713,747,69,63), rect, rect=new cjs.Rectangle(713,750,69,60), rect];

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;