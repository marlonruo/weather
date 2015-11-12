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
		{src:"images/f1.png", id:"f1"},
		{src:"images/f2.png", id:"f2"},
		{src:"images/f3.png", id:"f3"},
		{src:"images/f4.png", id:"f4"},
		{src:"images/torre.png", id:"torre"},
		{src:"images/volcano.png", id:"volcano"}
	]
};



// symbols:



(lib.f1 = function() {
	this.initialize(img.f1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,177,183);


(lib.f2 = function() {
	this.initialize(img.f2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,177,183);


(lib.f3 = function() {
	this.initialize(img.f3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,177,183);


(lib.f4 = function() {
	this.initialize(img.f4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,177,183);


(lib.torre = function() {
	this.initialize(img.torre);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,108,201);


(lib.volcano = function() {
	this.initialize(img.volcano);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,228,141);


(lib.Tween2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#660000").s().p("AgOAeIAAg7IAcAAIAAA7g");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-1.5,-3,3,6);
p.frameBounds = [rect];


(lib.humo2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.f1();

	this.instance_1 = new lib.f2();

	this.instance_2 = new lib.f3();

	this.instance_3 = new lib.f4();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,177,183);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect];


(lib.fuego = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#660000").s().p("AgNAOIAAgbIAbAAIAAAbg");
	this.shape.setTransform(1.5,1.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#660000").s().p("AgNAPIAAgdIAbAAIAAAdg");
	this.shape_1.setTransform(-10.5,13.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#660000").s().p("AgNAPIAAgcIAbAAIAAAcg");
	this.shape_2.setTransform(-10.5,22.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#660000").s().p("AgOAPIAAgcIAcAAIAAAcg");
	this.shape_3.setTransform(16.5,1.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#660000").s().p("AgOAOIAAgcIAcAAIAAAcg");
	this.shape_4.setTransform(10.5,-1.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#660000").s().p("AgOAOIAAgcIAcAAIAAAcg");
	this.shape_5.setTransform(-4.5,1.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#660000").s().p("AgNAPIAAgdIAbAAIAAAdg");
	this.shape_6.setTransform(-10.5,28.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#660000").s().p("AgNAOIAAgcIAcAAIAAAcg");
	this.shape_7.setTransform(13.5,-1.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#660000").s().p("AgNAOIAAgcIAcAAIAAAcg");
	this.shape_8.setTransform(16.5,1.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#660000").s().p("AgOAPIAAgcIAdAAIAAAcg");
	this.shape_9.setTransform(25.5,28.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#660000").s().p("AgNAOIAAgcIAbAAIAAAcg");
	this.shape_10.setTransform(-10.5,13.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#660000").s().p("AgNAOIAAgcIAbAAIAAAcg");
	this.shape_11.setTransform(-10.5,22.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#660000").s().p("AgOAOIAAgcIAdAAIAAAcg");
	this.shape_12.setTransform(-10.5,25.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#660000").s().p("AgNAPIAAgcIAbAAIAAAcg");
	this.shape_13.setTransform(-10.5,22.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape},{t:this.shape_5},{t:this.shape_4,p:{x:10.5,y:-1.5}},{t:this.shape_3},{t:this.shape_2,p:{y:22.5}},{t:this.shape_1,p:{y:13.5}}]},1).to({state:[{t:this.shape_8},{t:this.shape_7,p:{x:13.5,y:-1.5}},{t:this.shape_6,p:{y:28.5}},{t:this.shape_1,p:{y:19.5}}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_7,p:{x:31.5,y:28.5}},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape},{t:this.shape_4,p:{x:-10.5,y:25.5}},{t:this.shape_6,p:{y:25.5}},{t:this.shape_1,p:{y:16.5}}]},1).to({state:[{t:this.shape},{t:this.shape_13},{t:this.shape_2,p:{y:13.5}}]},1).to({state:[{t:this.shape},{t:this.shape_6,p:{y:28.5}},{t:this.shape_1,p:{y:19.5}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,3,3);
p.frameBounds = [rect, new cjs.Rectangle(-12,-3,30,27), new cjs.Rectangle(-12,-3,30,33), new cjs.Rectangle(24,27,3,3), new cjs.Rectangle(-12,12,45,18), new cjs.Rectangle(-12,0,15,27), new cjs.Rectangle(-12,0,15,24), new cjs.Rectangle(-12,0,15,30)];


(lib.ojo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween2("synched",0);
	this.instance.setTransform(1.5,3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({x:-1.5},0).wait(2).to({x:-4.5},0).wait(2).to({x:-1.5},0).wait(2).to({x:1.5},0).wait(2).to({x:4.5},0).wait(2).to({x:7.5},0).wait(2).to({x:4.5},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,3,6);
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(-3,0,3,6), rect, rect=new cjs.Rectangle(-6,0,3,6), rect, rect=new cjs.Rectangle(-3,0,3,6), rect, rect=new cjs.Rectangle(0,0,3,6), rect, rect=new cjs.Rectangle(3,0,3,6), rect, rect=new cjs.Rectangle(6,0,3,6), rect, rect=new cjs.Rectangle(3,0,3,6), rect];


// stage content:



(lib._762 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// fuego
	this.instance = new lib.fuego("synched",0);
	this.instance.setTransform(212.5,343.5,1,1,0,0,0,1.5,1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(16));

	// ojo
	this.instance_1 = new lib.ojo("synched",0);
	this.instance_1.setTransform(221.5,357,1,1,0,0,0,1.5,3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(16));

	// fondo
	this.instance_2 = new lib.torre();
	this.instance_2.setTransform(154,339);

	this.instance_3 = new lib.volcano();
	this.instance_3.setTransform(386.1,399);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).wait(16));

	// humo
	this.instance_4 = new lib.humo2("synched",0);
	this.instance_4.setTransform(465.5,336.5,1,1,0,0,0,88.5,91.5);
	this.instance_4.alpha = 0.398;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(529,515,460.1,295);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;