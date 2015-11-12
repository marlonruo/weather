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
		{src:"images/casa.png", id:"casa"}
	]
};



// symbols:



(lib.casa = function() {
	this.initialize(img.casa);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,591,372);


(lib.agua_gotas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EEEEE3").s().p("AgNAOIAAgcIAbAAIAAAcg");
	this.shape.setTransform(11.5,6.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EEEEE3").s().p("AgNAPIAAgdIAbAAIAAAdg");
	this.shape_1.setTransform(2.5,10.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EEEEE3").s().p("AgOAOIAAgbIAcAAIAAAbg");
	this.shape_2.setTransform(22.5,23.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EEEEE3").s().p("AgNAOIAAgbIAcAAIAAAbg");
	this.shape_3.setTransform(1.5,23.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EEEEE3").s().p("AgOAPIAAgdIAcAAIAAAdg");
	this.shape_4.setTransform(22.5,1.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EEEEE3").s().p("AgOAOIAAgcIAdAAIAAAcg");
	this.shape_5.setTransform(17.5,6.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5,p:{y:6.5}},{t:this.shape_4,p:{x:22.5,y:1.5}},{t:this.shape_3,p:{y:23.5}},{t:this.shape_2,p:{y:23.5}},{t:this.shape_1,p:{x:2.5}},{t:this.shape,p:{x:11.5,y:6.5}}]}).to({state:[{t:this.shape_5,p:{y:16.5}},{t:this.shape_4,p:{x:12.5,y:1.5}},{t:this.shape_3,p:{y:3.5}},{t:this.shape_2,p:{y:33.5}},{t:this.shape_1,p:{x:2.5}},{t:this.shape,p:{x:1.5,y:26.5}}]},1).to({state:[{t:this.shape_5,p:{y:16.5}},{t:this.shape_4,p:{x:6.5,y:12.5}},{t:this.shape_3,p:{y:3.5}},{t:this.shape_2,p:{y:23.5}},{t:this.shape_1,p:{x:12.5}},{t:this.shape,p:{x:1.5,y:16.5}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,24,25);
p.frameBounds = [rect, new cjs.Rectangle(0,0,24,35), new cjs.Rectangle(0,2,24,23)];


(lib.agua = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EEEEE3").s().p("AgOCVIAAkqIAcAAIAAEqg");
	this.shape.setTransform(1.5,15);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,3,30);
p.frameBounds = [rect];


(lib.agua_anima = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.agua("synched",0);
	this.instance.setTransform(1.5,15,1,1,0,0,0,1.5,15);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:137.5},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,3,30);
p.frameBounds = [rect, new cjs.Rectangle(0,13.6,3,30), new cjs.Rectangle(0,27.2,3,30), new cjs.Rectangle(0,40.9,3,30), new cjs.Rectangle(0,54.5,3,30), new cjs.Rectangle(0,68.1,3,30), new cjs.Rectangle(0,81.7,3,30), new cjs.Rectangle(0,95.3,3,30), new cjs.Rectangle(0,108.9,3,30), new cjs.Rectangle(0,122.5,3,30)];


// stage content:



(lib._803n = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.agua_gotas("synched",0);
	this.instance.setTransform(486,412.5,1,1,0,0,0,12,12.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(50));

	// Layer 1
	this.instance_1 = new lib.agua_anima("synched",0);
	this.instance_1.setTransform(474.5,462,1,1,0,0,0,1.5,15);

	this.instance_2 = new lib.agua_anima("synched",0);
	this.instance_2.setTransform(492,432,1,1,0,0,0,1.5,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(50));

	// fondo
	this.instance_3 = new lib.casa();
	this.instance_3.setTransform(110,168);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(485,438,591,372);
p.frameBounds = [rect, rect, rect, rect, rect, new cjs.Rectangle(485,438,591,377), new cjs.Rectangle(485,438,591,390.7), new cjs.Rectangle(485,438,591,404.3), new cjs.Rectangle(485,438,591,417.9), new cjs.Rectangle(485,438,591,431.5), rect=new cjs.Rectangle(485,438,591,372), rect, rect, rect, rect, new cjs.Rectangle(485,438,591,377), new cjs.Rectangle(485,438,591,390.7), new cjs.Rectangle(485,438,591,404.3), new cjs.Rectangle(485,438,591,417.9), new cjs.Rectangle(485,438,591,431.5), rect=new cjs.Rectangle(485,438,591,372), rect, rect, rect, rect, new cjs.Rectangle(485,438,591,377), new cjs.Rectangle(485,438,591,390.7), new cjs.Rectangle(485,438,591,404.3), new cjs.Rectangle(485,438,591,417.9), new cjs.Rectangle(485,438,591,431.5), rect=new cjs.Rectangle(485,438,591,372), rect, rect, rect, rect, new cjs.Rectangle(485,438,591,377), new cjs.Rectangle(485,438,591,390.7), new cjs.Rectangle(485,438,591,404.3), new cjs.Rectangle(485,438,591,417.9), new cjs.Rectangle(485,438,591,431.5), rect=new cjs.Rectangle(485,438,591,372), rect, rect, rect, rect, new cjs.Rectangle(485,438,591,377), new cjs.Rectangle(485,438,591,390.7), new cjs.Rectangle(485,438,591,404.3), new cjs.Rectangle(485,438,591,417.9), new cjs.Rectangle(485,438,591,431.5)];

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;