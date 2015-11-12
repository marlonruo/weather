(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
var rect; // used to reference frame bounds

// library properties:
lib.properties = {
	width: 750,
	height: 540,
	fps: 12,
	color: "#0A4462",
	manifest: [
		{src:"images/cj_1.png", id:"cj_1"},
		{src:"images/cj_2.png", id:"cj_2"},
		{src:"images/cj_3.png", id:"cj_3"},
		{src:"images/cj_4.png", id:"cj_4"},
		{src:"images/ll_1.png", id:"ll_1"},
		{src:"images/ll_2.png", id:"ll_2"},
		{src:"images/ll_3.png", id:"ll_3"},
		{src:"images/ll_4.png", id:"ll_4"},
		{src:"images/m_1.png", id:"m_1"},
		{src:"images/m_2.png", id:"m_2"},
		{src:"images/relampaago.png", id:"relampaago"}
	]
};



// symbols:



(lib.cj_1 = function() {
	this.initialize(img.cj_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,360,129);


(lib.cj_2 = function() {
	this.initialize(img.cj_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,360,129);


(lib.cj_3 = function() {
	this.initialize(img.cj_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,360,129);


(lib.cj_4 = function() {
	this.initialize(img.cj_4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,360,129);


(lib.ll_1 = function() {
	this.initialize(img.ll_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,339,405);


(lib.ll_2 = function() {
	this.initialize(img.ll_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,339,405);


(lib.ll_3 = function() {
	this.initialize(img.ll_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,339,405);


(lib.ll_4 = function() {
	this.initialize(img.ll_4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,339,405);


(lib.m_1 = function() {
	this.initialize(img.m_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,51,78);


(lib.m_2 = function() {
	this.initialize(img.m_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,57,75);


(lib.relampaago = function() {
	this.initialize(img.relampaago);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,54,384);


(lib.mordecai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.m_2();
	this.instance.setTransform(0,3);

	this.instance_1 = new lib.m_1();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,3,57,75);
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(0,0,51,78), rect];


(lib.lluvia = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ll_4();

	this.instance_1 = new lib.ll_3();

	this.instance_2 = new lib.ll_2();

	this.instance_3 = new lib.ll_1();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,339,405);
p.frameBounds = [rect, rect, rect, rect];


(lib.cj = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cj_1();

	this.instance_1 = new lib.cj_2();

	this.instance_2 = new lib.cj_3();

	this.instance_3 = new lib.cj_4();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,360,129);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect];


// stage content:
(lib._232 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cj
	this.instance = new lib.cj("synched",0);
	this.instance.setTransform(350,129.5,1,1,0,0,0,180,64.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(80));

	// lluvia
	this.instance_1 = new lib.lluvia("synched",0);
	this.instance_1.setTransform(340.5,337.5,1,1,0,0,0,169.5,202.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(80));

	// Layer 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_45 = new cjs.Graphics().p("AoqOJIAA8RIRVAAIAAcRg");
	var mask_graphics_46 = new cjs.Graphics().p("AoqYxMAAAgxhIRVAAMAAAAxhg");
	var mask_graphics_47 = new cjs.Graphics().p("AoqfzMAAAg/lIRVAAMAAAA/lg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(45).to({graphics:mask_graphics_45,x:297.1,y:225.5}).wait(1).to({graphics:mask_graphics_46,x:297.1,y:293.5}).wait(1).to({graphics:mask_graphics_47,x:297.1,y:338.5}).wait(2).to({graphics:null,x:0,y:0}).wait(31));

	// rayo
	this.instance_2 = new lib.relampaago();
	this.instance_2.setTransform(276.1,156);
	this.instance_2._off = true;

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(45).to({_off:false},0).to({_off:true},4).wait(31));

	// fondo
	this.instance_3 = new lib.mordecai("synched",0);
	this.instance_3.setTransform(490.5,501,1,1,0,0,0,28.5,39);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(545,335,360,475);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;