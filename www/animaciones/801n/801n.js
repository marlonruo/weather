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
		{src:"images/cabina.png", id:"cabina"},
		{src:"images/luz_1.png", id:"luz_1"},
		{src:"images/luz_2.png", id:"luz_2"},
		{src:"images/luz_3.png", id:"luz_3"},
		{src:"images/luz_4.png", id:"luz_4"},
		{src:"images/nubes.png", id:"nubes"}
	]
};



// symbols:



(lib.cabina = function() {
	this.initialize(img.cabina);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,156,261);


(lib.luz_1 = function() {
	this.initialize(img.luz_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,132,132);


(lib.luz_2 = function() {
	this.initialize(img.luz_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,132,132);


(lib.luz_3 = function() {
	this.initialize(img.luz_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,132,132);


(lib.luz_4 = function() {
	this.initialize(img.luz_4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,132,132);


(lib.nubes = function() {
	this.initialize(img.nubes);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,648,147);


(lib.nubes_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.nubes();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,648,147);
p.frameBounds = [rect];


(lib.luz_ventana = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,252,218,0.6)").s().p("ABLDCIAAi0IBaAAIAAC0gAgsDCIAAi0IBYAAIAAC0gAikDCIAAi0IBaAAIAAC0gABLgOIAAi0IBaAAIAAC0gAgsgOIAAi0IBYAAIAAC0gAikgOIAAi0IBaAAIAAC0g");
	this.shape.setTransform(16.5,19.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,33,39);
p.frameBounds = [rect, null];


(lib.luz = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.luz_1();

	this.instance_1 = new lib.luz_2();

	this.instance_2 = new lib.luz_3();

	this.instance_3 = new lib.luz_4();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1},{t:this.instance}]},1).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},1).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},1).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},1).to({state:[{t:this.instance_1},{t:this.instance}]},1).to({state:[]},1).wait(14));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,132,132);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect=null, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.lux = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAPAtIAAhZIA8AAIAABZgAhKAtIAAhZIA9AAIAABZg");
	this.shape.setTransform(7.5,4.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,15,9);
p.frameBounds = [rect];


// stage content:
(lib._801n = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 10
	this.instance = new lib.luz_ventana("synched",0);
	this.instance.setTransform(383.5,367.5,1,1,0,0,0,16.5,19.5);

	this.instance_1 = new lib.luz_ventana("synched",0);
	this.instance_1.setTransform(329.5,367.5,1,1,0,0,0,16.5,19.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(20));

	// Layer 8
	this.instance_2 = new lib.lux("synched",0);
	this.instance_2.setTransform(353.5,295.5,1,1,0,0,0,7.5,4.5);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:0.5},3).to({alpha:0},2).to({_off:true},1).wait(14));

	// luz
	this.instance_3 = new lib.luz("synched",0);
	this.instance_3.setTransform(352,292,1,1,0,0,0,66,66);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(20));

	// cabina
	this.instance_4 = new lib.cabina();
	this.instance_4.setTransform(277,279);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(20));

	// nubes
	this.instance_5 = new lib.nubes_1("synched",0);
	this.instance_5.setTransform(389,126.5,1,1,0,0,0,324,73.5);
	this.instance_5.filters = [new cjs.ColorFilter(0.5, 0.5, 0.5, 1, 1, 24, 37.5, 0)];
	this.instance_5.cache(-2,-2,652,151);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(440,323,648,487);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;