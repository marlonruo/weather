(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
var rect; // used to reference frame bounds

// library properties:
lib.properties = {
	width: 750,
	height: 540,
	fps: 12,
	color: "#333333",
	manifest: [
		{src:"images/t_1.png", id:"t_1"},
		{src:"images/t_2.png", id:"t_2"},
		{src:"images/t_3.png", id:"t_3"},
		{src:"images/t_4.png", id:"t_4"},
		{src:"images/v_1.png", id:"v_1"},
		{src:"images/v_2.png", id:"v_2"},
		{src:"images/v_3.png", id:"v_3"},
		{src:"images/v_4.png", id:"v_4"}
	]
};



// symbols:



(lib.t_1 = function() {
	this.initialize(img.t_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,203,185);


(lib.t_2 = function() {
	this.initialize(img.t_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,165,198);


(lib.t_3 = function() {
	this.initialize(img.t_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,176,150);


(lib.t_4 = function() {
	this.initialize(img.t_4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,174,149);


(lib.v_1 = function() {
	this.initialize(img.v_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,229,163);


(lib.v_2 = function() {
	this.initialize(img.v_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,225,140);


(lib.v_3 = function() {
	this.initialize(img.v_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,234,149);


(lib.v_4 = function() {
	this.initialize(img.v_4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,229,163);


(lib.viento = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.v_1();

	this.instance_1 = new lib.v_2();
	this.instance_1.setTransform(4,11);

	this.instance_2 = new lib.v_3();
	this.instance_2.setTransform(0,17.4);

	this.instance_3 = new lib.v_4();
	this.instance_3.setTransform(10.4,-5.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,229,163);
p.frameBounds = [rect, new cjs.Rectangle(4,11,225,140), new cjs.Rectangle(0,17.4,234,149), new cjs.Rectangle(10.4,-5.7,229,163)];


(lib.tornado = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.t_1();

	this.instance_1 = new lib.t_2();
	this.instance_1.setTransform(0,-13);

	this.instance_2 = new lib.t_3();
	this.instance_2.setTransform(-11,36);

	this.instance_3 = new lib.t_4();
	this.instance_3.setTransform(1,35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,203,185);
p.frameBounds = [rect, new cjs.Rectangle(0,-13,165,198), new cjs.Rectangle(-11,36,176,150), new cjs.Rectangle(1,35,174,149)];


// stage content:
(lib._781 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// viento
	this.instance = new lib.viento("synched",0);
	this.instance.setTransform(378,273.3,3,3,0,0,0,117,81.5);
	this.instance.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20));

	// personaje
	this.instance_1 = new lib.tornado("synched",0);
	this.instance_1.setTransform(524,553.2,1,1,0,0,0,210,198.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:424},9).to({x:524},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(402,298.8,687,511.3);
p.frameBounds = [rect, new cjs.Rectangle(414,331.8,675,478.3), new cjs.Rectangle(402,350.8,702,460.2), new cjs.Rectangle(433.1,281.5,687,527.5), new cjs.Rectangle(402,298.8,687,511.3), new cjs.Rectangle(414,331.8,675,478.3), new cjs.Rectangle(402,350.8,702,460.2), new cjs.Rectangle(433.1,281.5,687,527.5), new cjs.Rectangle(402,298.8,687,511.3), new cjs.Rectangle(414,331.8,675,478.3), new cjs.Rectangle(402,350.8,702,459.2), new cjs.Rectangle(433.1,281.5,687,529.5), new cjs.Rectangle(402,298.8,687,510.3), new cjs.Rectangle(414,331.8,675,478.3), new cjs.Rectangle(402,350.8,702,459.2), new cjs.Rectangle(433.1,281.5,687,529.5), new cjs.Rectangle(402,298.8,687,510.3), new cjs.Rectangle(414,331.8,675,478.3), new cjs.Rectangle(402,350.8,702,459.2), new cjs.Rectangle(433.1,281.5,687,528.5)];

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;