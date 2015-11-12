(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
var rect; // used to reference frame bounds

// library properties:
lib.properties = {
	width: 750,
	height: 540,
	fps: 12,
	color: "#EA9144",
	manifest: [
		{src:"images/bufanda_abajo.png", id:"bufanda_abajo"},
		{src:"images/bufanda_arriba.png", id:"bufanda_arriba"},
		{src:"images/casa.png", id:"casa"},
		{src:"images/nubes.png", id:"nubes"},
		{src:"images/personaje.png", id:"personaje"}
	]
};



// symbols:



(lib.bufanda_abajo = function() {
	this.initialize(img.bufanda_abajo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,27,15);


(lib.bufanda_arriba = function() {
	this.initialize(img.bufanda_arriba);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,27,15);


(lib.casa = function() {
	this.initialize(img.casa);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,114,99);


(lib.nubes = function() {
	this.initialize(img.nubes);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,648,147);


(lib.personaje = function() {
	this.initialize(img.personaje);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,54,72);


(lib.personaje_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.personaje();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:1},0).wait(1).to({y:2},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,54,72);
p.frameBounds = [rect, new cjs.Rectangle(1,0,54,72), new cjs.Rectangle(1,2,54,72)];


(lib.bufanda_arriba_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bufanda_arriba();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:3},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,27,15);
p.frameBounds = [rect, new cjs.Rectangle(3,0,27,15)];


(lib.bufanda_abajo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bufanda_abajo();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:-3},0).wait(1).to({y:3},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,27,15);
p.frameBounds = [rect, new cjs.Rectangle(-3,0,27,15), new cjs.Rectangle(-3,3,27,15)];


// stage content:



(lib._801d = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// nubes
	this.instance = new lib.nubes();
	this.instance.setTransform(61,38);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// casa.png
	this.instance_1 = new lib.casa();
	this.instance_1.setTransform(300,442);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

	// bufanda_arriba.png
	this.instance_2 = new lib.bufanda_arriba_1("synched",0);
	this.instance_2.setTransform(359.5,415,1,1,0,0,0,22.5,12);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2));

	// personaje.png
	this.instance_3 = new lib.personaje_1("synched",0);
	this.instance_3.setTransform(378,422,1,1,0,0,0,39,51);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2));

	// bufanda_abajo.png
	this.instance_4 = new lib.bufanda_abajo_1("synched",0);
	this.instance_4.setTransform(349.5,408.5,1,1,0,0,0,19.5,10.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(436,308,648,503);
p.frameBounds = [rect, rect];

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;