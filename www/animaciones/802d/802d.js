(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
var rect; // used to reference frame bounds

// library properties:
lib.properties = {
	width: 750,
	height: 540,
	fps: 12,
	color: "#2D97C7",
	manifest: [
		{src:"images/ala_der.png", id:"ala_der"},
		{src:"images/ala_izq.png", id:"ala_izq"},
		{src:"images/b_1.png", id:"b_1"},
		{src:"images/b_2.png", id:"b_2"},
		{src:"images/b_3.png", id:"b_3"},
		{src:"images/nubes.png", id:"nubes"},
		{src:"images/w_1.png", id:"w_1"},
		{src:"images/w_2.png", id:"w_2"},
		{src:"images/w_3.png", id:"w_3"}
	]
};



// symbols:



(lib.ala_der = function() {
	this.initialize(img.ala_der);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,60,27);


(lib.ala_izq = function() {
	this.initialize(img.ala_izq);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,60,27);


(lib.b_1 = function() {
	this.initialize(img.b_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,78,102);


(lib.b_2 = function() {
	this.initialize(img.b_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,78,102);


(lib.b_3 = function() {
	this.initialize(img.b_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,78,102);


(lib.nubes = function() {
	this.initialize(img.nubes);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,540);


(lib.w_1 = function() {
	this.initialize(img.w_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,57,120);


(lib.w_2 = function() {
	this.initialize(img.w_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,57,120);


(lib.w_3 = function() {
	this.initialize(img.w_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,57,120);


(lib.woody = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.w_1();

	this.instance_1 = new lib.w_2();

	this.instance_2 = new lib.w_3();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,57,120);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect];


(lib.buzz = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.b_1();

	this.instance_1 = new lib.b_2();

	this.instance_2 = new lib.b_3();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,78,102);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect];


(lib.ala2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.298)").s().p("AgOAOIAAgcIAdAAIAAAcg");
	this.shape.setTransform(4.5,1.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.298)").s().p("AgdAeIAAg7IA7AAIAAA7g");
	this.shape_1.setTransform(3,3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[]},2).wait(2));

	// Layer 1
	this.instance = new lib.ala_izq();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,60,27);
p.frameBounds = [rect, rect, rect, rect];


(lib.ala_der_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.298)").s().p("AgdAeIAAg7IA7AAIAAA7g");
	this.shape.setTransform(58.5,1.5,0.5,0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.298)").s().p("AgdAeIAAg7IA7AAIAAA7g");
	this.shape_1.setTransform(57,3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},2).wait(2));

	// Layer 1
	this.instance = new lib.ala_der();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,60,27);
p.frameBounds = [rect, rect, rect, rect];


// stage content:
(lib._802d = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// animaciones
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(87,96,62,0.22)").s().p("AgNAPIAAgdIAbAAIAAAdg");
	this.shape.setTransform(476.5,454.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(87,96,62,0.22)").s().p("AgNAPIAAgdIAbAAIAAAdg");
	this.shape_1.setTransform(476.5,454.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(87,96,62,0.22)").s().p("AgOAPIAAgdIAcAAIAAAdg");
	this.shape_2.setTransform(469.5,454.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(87,96,62,0.22)").s().p("AgOAPIAAgdIAcAAIAAAdg");
	this.shape_3.setTransform(469.5,454.5);

	this.instance = new lib.buzz("synched",0);
	this.instance.setTransform(472,489,1,1,0,0,0,39,51);

	this.instance_1 = new lib.woody("synched",0);
	this.instance_1.setTransform(281.5,480,1,1,0,0,0,28.5,60);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(80));

	// mascara (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AmPF1IAArpIMeAAIAALpg");
	mask.setTransform(426.8,464.1);

	// alas
	this.instance_2 = new lib.ala2("synched",0);
	this.instance_2.setTransform(493,469.5,1,1,0,0,0,30,13.5);
	this.instance_2._off = true;

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(29).to({_off:false},0).to({x:433},4).wait(42).to({startPosition:2},0).to({x:493,startPosition:0},4).wait(1));

	// mascara (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AmOF1IAArpIMeAAIAALpg");
	mask_1.setTransform(511.8,464.1);

	// alas
	this.instance_3 = new lib.ala_der_1("synched",2);
	this.instance_3.setTransform(433,469.5,1,1,0,0,0,30,13.5);
	this.instance_3._off = true;

	this.instance_3.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(29).to({_off:false},0).to({x:508,startPosition:3},4).wait(42).to({startPosition:0},0).to({x:433,startPosition:2},4).wait(1));

	// fondo
	this.instance_4 = new lib.nubes();
	this.instance_4.setTransform(14.1,12);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(389.1,282,750,540);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;