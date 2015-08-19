(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
var rect; // used to reference frame bounds

// library properties:
lib.properties = {
	width: 750,
	height: 540,
	fps: 12,
	color: "#00426C",
	manifest: [
		{src:"images/capa_1.png", id:"capa_1"},
		{src:"images/capa_2.png", id:"capa_2"},
		{src:"images/cuerpo2.png", id:"cuerpo2"},
		{src:"images/cuerpo_1.png", id:"cuerpo_1"},
		{src:"images/lluvia_1.png", id:"lluvia_1"},
		{src:"images/lluvia_2.png", id:"lluvia_2"},
		{src:"images/lluvia_3.png", id:"lluvia_3"},
		{src:"images/luz.png", id:"luz"},
		{src:"images/martillo.png", id:"martillo"},
		{src:"images/rayo_0.png", id:"rayo_0"},
		{src:"images/rayo_1.png", id:"rayo_1"},
		{src:"images/rayo_2.png", id:"rayo_2"},
		{src:"images/rayo_3.png", id:"rayo_3"},
		{src:"images/rayo_4.png", id:"rayo_4"}
	]
};



// symbols:



(lib.capa_1 = function() {
	this.initialize(img.capa_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,126,93);


(lib.capa_2 = function() {
	this.initialize(img.capa_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,129,93);


(lib.cuerpo2 = function() {
	this.initialize(img.cuerpo2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,78,180);


(lib.cuerpo_1 = function() {
	this.initialize(img.cuerpo_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,78,177);


(lib.lluvia_1 = function() {
	this.initialize(img.lluvia_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,531);


(lib.lluvia_2 = function() {
	this.initialize(img.lluvia_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,531);


(lib.lluvia_3 = function() {
	this.initialize(img.lluvia_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,531);


(lib.luz = function() {
	this.initialize(img.luz);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,114,525);


(lib.martillo = function() {
	this.initialize(img.martillo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,24,27);


(lib.rayo_0 = function() {
	this.initialize(img.rayo_0);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,48,45);


(lib.rayo_1 = function() {
	this.initialize(img.rayo_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,102,69);


(lib.rayo_2 = function() {
	this.initialize(img.rayo_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,516,168);


(lib.rayo_3 = function() {
	this.initialize(img.rayo_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,528,255);


(lib.rayo_4 = function() {
	this.initialize(img.rayo_4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,534,330);


(lib.thor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF15A").s().p("AgNAPIAAgdIAcAAIAAAdg");
	this.shape.setTransform(43.5,67.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFF15A").s().p("AgNAPIAAgcIAcAAIAAAcg");
	this.shape_1.setTransform(70.5,76.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFF15A").s().p("AgNAPIAAgcIAcAAIAAAcg");
	this.shape_2.setTransform(70.5,67.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFF15A").s().p("AgNAOIAAgcIAbAAIAAAcg");
	this.shape_3.setTransform(70.5,70.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1,p:{y:76.5}},{t:this.shape,p:{x:43.5}}]}).to({state:[{t:this.shape_3},{t:this.shape_1,p:{y:79.5}},{t:this.shape,p:{x:46.5}}]},2).wait(2));

	// Layer 1
	this.instance = new lib.cuerpo_1();

	this.instance_1 = new lib.cuerpo2();
	this.instance_1.setTransform(0,-3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(2));

	// Layer 2
	this.instance_2 = new lib.capa_1();
	this.instance_2.setTransform(-6,62);

	this.instance_3 = new lib.capa_2();
	this.instance_3.setTransform(-6,62);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-6,0,126,177);
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(-6,-3,129,180), rect];


(lib.lluvia = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.lluvia_1();

	this.instance_1 = new lib.lluvia_3();

	this.instance_2 = new lib.lluvia_2();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,750,531);
p.frameBounds = [rect, rect, rect];


// stage content:
(lib._202 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 6
	this.instance = new lib.martillo();
	this.instance.setTransform(367,360);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false,y:357},0).to({_off:true},1).wait(1).to({_off:false,y:360},0).to({_off:true},1).wait(23));

	// Layer 5
	this.instance_1 = new lib.rayo_2();
	this.instance_1.setTransform(153,51);

	this.instance_2 = new lib.rayo_3();
	this.instance_2.setTransform(153,51);

	this.instance_3 = new lib.rayo_4();
	this.instance_3.setTransform(153,51);

	this.instance_4 = new lib.rayo_1();
	this.instance_4.setTransform(331,334);

	this.instance_5 = new lib.rayo_0();
	this.instance_5.setTransform(351,348);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},19).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(24));

	// lluvia
	this.instance_6 = new lib.lluvia("synched",0);
	this.instance_6.setTransform(375,274.5,1,1,0,0,0,375,265.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(52));

	// personaje
	this.instance_7 = new lib.thor("synched",0);
	this.instance_7.setTransform(370,451.5,1,1,0,0,0,39,88.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(52));

	// Layer 7
	this.instance_8 = new lib.luz();
	this.instance_8.setTransform(318,15);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(22).to({_off:false},0).to({_off:true},4).wait(26));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(375,279,750,531);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;