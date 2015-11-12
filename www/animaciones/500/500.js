(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
var rect; // used to reference frame bounds

// library properties:
lib.properties = {
	width: 750,
	height: 540,
	fps: 12,
	color: "#2088BD",
	manifest: [
		{src:"images/pohh.png", id:"pohh"}
	]
};



// symbols:



(lib.pohh = function() {
	this.initialize(img.pohh);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,63,249);


(lib.Pooh = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.pohh();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,63,249);
p.frameBounds = [rect];


(lib.lodo = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6D4312").s().p("AgNAOIAAgbIAcAAIAAAbg");
	this.shape.setTransform(1.5,1.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,3,3);
p.frameBounds = [rect];


(lib.pooh_anima = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F5A803").s().p("AgOAPIAAgcIAdAAIAAAcg");
	this.shape.setTransform(31.5,178.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F5A803").s().p("AgNAPIAAgdIAcAAIAAAdg");
	this.shape_1.setTransform(25.5,184.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},18).wait(2));

	// Layer 1
	this.instance = new lib.Pooh("synched",0);
	this.instance.setTransform(31.5,124.5,1,1,0,0,0,31.5,124.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,63,249);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


// stage content:
(lib._500 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// personaje / fondo
	this.instance = new lib.pooh_anima("synched",4);
	this.instance.setTransform(381.5,191.5,1,1,0,0,0,31.5,124.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:201.5,startPosition:8},27).to({y:191.5,startPosition:13},28).wait(1));

	// lluvia
	this.instance_1 = new lib.lodo("synched",0);
	this.instance_1.setTransform(405.5,394.5,1,1,0,0,0,1.5,1.5);

	this.instance_2 = new lib.lodo("synched",0);
	this.instance_2.setTransform(400.5,429.5,1,1,0,0,0,1.5,1.5);

	this.instance_3 = new lib.lodo("synched",0);
	this.instance_3.setTransform(385.5,514.5,1,1,0,0,0,1.5,1.5);

	this.instance_4 = new lib.lodo("synched",0);
	this.instance_4.setTransform(355.5,489.5,1,1,0,0,0,1.5,1.5);

	this.instance_5 = new lib.lodo("synched",0);
	this.instance_5.setTransform(385.5,379.5,1,1,0,0,0,1.5,1.5);

	this.instance_6 = new lib.lodo("synched",0);
	this.instance_6.setTransform(395.5,529.5,1,1,0,0,0,1.5,1.5);

	this.instance_7 = new lib.lodo("synched",0);
	this.instance_7.setTransform(395.5,494.5,1,1,0,0,0,1.5,1.5);

	this.instance_8 = new lib.lodo("synched",0);
	this.instance_8.setTransform(365.5,459.5,1,1,0,0,0,1.5,1.5);

	this.instance_9 = new lib.lodo("synched",0);
	this.instance_9.setTransform(380.5,474.5,1,1,0,0,0,1.5,1.5);

	this.instance_10 = new lib.lodo("synched",0);
	this.instance_10.setTransform(405.5,469.5,1,1,0,0,0,1.5,1.5);

	this.instance_11 = new lib.lodo("synched",0);
	this.instance_11.setTransform(405.5,449.5,1,1,0,0,0,1.5,1.5);

	this.instance_12 = new lib.lodo("synched",0);
	this.instance_12.setTransform(375.5,429.5,1,1,0,0,0,1.5,1.5);

	this.instance_13 = new lib.lodo("synched",0);
	this.instance_13.setTransform(385.5,354.5,1,1,0,0,0,1.5,1.5);

	this.instance_14 = new lib.lodo("synched",0);
	this.instance_14.setTransform(355.5,334.5,1,1,0,0,0,1.5,1.5);

	this.instance_15 = new lib.lodo("synched",0);
	this.instance_15.setTransform(370.5,394.5,1,1,0,0,0,1.5,1.5);

	this.instance_16 = new lib.lodo("synched",0);
	this.instance_16.setTransform(395.5,364.5,1,1,0,0,0,1.5,1.5);

	this.instance_17 = new lib.lodo("synched",0);
	this.instance_17.setTransform(395.5,339.5,1,1,0,0,0,1.5,1.5);

	this.instance_18 = new lib.lodo("synched",0);
	this.instance_18.setTransform(365.5,304.5,1,1,0,0,0,1.5,1.5);

	this.instance_19 = new lib.lodo("synched",0);
	this.instance_19.setTransform(380.5,319.5,1,1,0,0,0,1.5,1.5);

	this.instance_20 = new lib.lodo("synched",0);
	this.instance_20.setTransform(410.5,329.5,1,1,0,0,0,1.5,1.5);

	this.instance_21 = new lib.lodo("synched",0);
	this.instance_21.setTransform(405.5,294.5,1,1,0,0,0,1.5,1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_21,p:{y:294.5}},{t:this.instance_20,p:{y:329.5,x:410.5}},{t:this.instance_19,p:{y:319.5,x:380.5}},{t:this.instance_18,p:{y:304.5,x:365.5}},{t:this.instance_17,p:{y:339.5,x:395.5}},{t:this.instance_16,p:{y:364.5}},{t:this.instance_15,p:{y:394.5,x:370.5}},{t:this.instance_14,p:{y:334.5,x:355.5}},{t:this.instance_13,p:{y:354.5,x:385.5}},{t:this.instance_12,p:{y:429.5}},{t:this.instance_11,p:{y:449.5}},{t:this.instance_10,p:{y:469.5}},{t:this.instance_9,p:{y:474.5}},{t:this.instance_8,p:{y:459.5}},{t:this.instance_7,p:{y:494.5}},{t:this.instance_6,p:{y:529.5}},{t:this.instance_5,p:{y:379.5}},{t:this.instance_4,p:{y:489.5}},{t:this.instance_3,p:{y:514.5}},{t:this.instance_2,p:{y:429.5}},{t:this.instance_1,p:{y:394.5}}]}).to({state:[{t:this.instance_21,p:{y:359.5}},{t:this.instance_20,p:{y:389.5,x:410.5}},{t:this.instance_19,p:{y:369.5,x:380.5}},{t:this.instance_18,p:{y:354.5,x:365.5}},{t:this.instance_17,p:{y:389.5,x:395.5}},{t:this.instance_16,p:{y:414.5}},{t:this.instance_15,p:{y:459.5,x:370.5}},{t:this.instance_14,p:{y:384.5,x:355.5}},{t:this.instance_13,p:{y:414.5,x:385.5}},{t:this.instance_12,p:{y:479.5}},{t:this.instance_11,p:{y:499.5}},{t:this.instance_10,p:{y:534.5}},{t:this.instance_9,p:{y:524.5}},{t:this.instance_8,p:{y:509.5}},{t:this.instance_7,p:{y:299.5}},{t:this.instance_6,p:{y:334.5}},{t:this.instance_5,p:{y:439.5}},{t:this.instance_4,p:{y:294.5}},{t:this.instance_3,p:{y:319.5}},{t:this.instance_2,p:{y:484.5}},{t:this.instance_1,p:{y:444.5}}]},4).to({state:[{t:this.instance_21,p:{y:409.5}},{t:this.instance_20,p:{y:439.5,x:410.5}},{t:this.instance_19,p:{y:419.5,x:380.5}},{t:this.instance_18,p:{y:404.5,x:365.5}},{t:this.instance_17,p:{y:449.5,x:395.5}},{t:this.instance_16,p:{y:464.5}},{t:this.instance_15,p:{y:509.5,x:370.5}},{t:this.instance_14,p:{y:449.5,x:355.5}},{t:this.instance_13,p:{y:479.5,x:385.5}},{t:this.instance_12,p:{y:529.5}},{t:this.instance_11,p:{y:299.5}},{t:this.instance_10,p:{y:334.5}},{t:this.instance_9,p:{y:324.5}},{t:this.instance_8,p:{y:309.5}},{t:this.instance_7,p:{y:349.5}},{t:this.instance_6,p:{y:384.5}},{t:this.instance_5,p:{y:509.5}},{t:this.instance_4,p:{y:344.5}},{t:this.instance_3,p:{y:379.5}},{t:this.instance_2,p:{y:284.5}},{t:this.instance_1,p:{y:494.5}}]},4).to({state:[{t:this.instance_20,p:{y:474.5,x:405.5}},{t:this.instance_19,p:{y:489.5,x:410.5}},{t:this.instance_18,p:{y:469.5,x:380.5}},{t:this.instance_17,p:{y:454.5,x:365.5}},{t:this.instance_16,p:{y:504.5}},{t:this.instance_15,p:{y:534.5,x:395.5}},{t:this.instance_14,p:{y:304.5,x:360.5}},{t:this.instance_13,p:{y:514.5,x:355.5}},{t:this.instance_12,p:{y:344.5}},{t:this.instance_11,p:{y:349.5}},{t:this.instance_10,p:{y:384.5}},{t:this.instance_9,p:{y:374.5}},{t:this.instance_8,p:{y:374.5}},{t:this.instance_7,p:{y:399.5}},{t:this.instance_6,p:{y:449.5}},{t:this.instance_5,p:{y:324.5}},{t:this.instance_4,p:{y:394.5}},{t:this.instance_3,p:{y:434.5}},{t:this.instance_2,p:{y:334.5}},{t:this.instance_1,p:{y:299.5}}]},4).to({state:[{t:this.instance_21,p:{y:294.5}},{t:this.instance_20,p:{y:329.5,x:410.5}},{t:this.instance_19,p:{y:319.5,x:380.5}},{t:this.instance_18,p:{y:304.5,x:365.5}},{t:this.instance_17,p:{y:339.5,x:395.5}},{t:this.instance_16,p:{y:364.5}},{t:this.instance_15,p:{y:394.5,x:370.5}},{t:this.instance_14,p:{y:334.5,x:355.5}},{t:this.instance_13,p:{y:354.5,x:385.5}},{t:this.instance_12,p:{y:429.5}},{t:this.instance_11,p:{y:449.5}},{t:this.instance_10,p:{y:469.5}},{t:this.instance_9,p:{y:474.5}},{t:this.instance_8,p:{y:459.5}},{t:this.instance_7,p:{y:494.5}},{t:this.instance_6,p:{y:529.5}},{t:this.instance_5,p:{y:379.5}},{t:this.instance_4,p:{y:489.5}},{t:this.instance_3,p:{y:514.5}},{t:this.instance_2,p:{y:429.5}},{t:this.instance_1,p:{y:394.5}}]},4).to({state:[{t:this.instance_21,p:{y:359.5}},{t:this.instance_20,p:{y:389.5,x:410.5}},{t:this.instance_19,p:{y:369.5,x:380.5}},{t:this.instance_18,p:{y:354.5,x:365.5}},{t:this.instance_17,p:{y:389.5,x:395.5}},{t:this.instance_16,p:{y:414.5}},{t:this.instance_15,p:{y:459.5,x:370.5}},{t:this.instance_14,p:{y:384.5,x:355.5}},{t:this.instance_13,p:{y:414.5,x:385.5}},{t:this.instance_12,p:{y:479.5}},{t:this.instance_11,p:{y:499.5}},{t:this.instance_10,p:{y:534.5}},{t:this.instance_9,p:{y:524.5}},{t:this.instance_8,p:{y:509.5}},{t:this.instance_7,p:{y:299.5}},{t:this.instance_6,p:{y:334.5}},{t:this.instance_5,p:{y:439.5}},{t:this.instance_4,p:{y:294.5}},{t:this.instance_3,p:{y:319.5}},{t:this.instance_2,p:{y:484.5}},{t:this.instance_1,p:{y:444.5}}]},4).to({state:[{t:this.instance_21,p:{y:409.5}},{t:this.instance_20,p:{y:439.5,x:410.5}},{t:this.instance_19,p:{y:419.5,x:380.5}},{t:this.instance_18,p:{y:404.5,x:365.5}},{t:this.instance_17,p:{y:449.5,x:395.5}},{t:this.instance_16,p:{y:464.5}},{t:this.instance_15,p:{y:509.5,x:370.5}},{t:this.instance_14,p:{y:449.5,x:355.5}},{t:this.instance_13,p:{y:479.5,x:385.5}},{t:this.instance_12,p:{y:529.5}},{t:this.instance_11,p:{y:299.5}},{t:this.instance_10,p:{y:334.5}},{t:this.instance_9,p:{y:324.5}},{t:this.instance_8,p:{y:309.5}},{t:this.instance_7,p:{y:349.5}},{t:this.instance_6,p:{y:384.5}},{t:this.instance_5,p:{y:509.5}},{t:this.instance_4,p:{y:344.5}},{t:this.instance_3,p:{y:379.5}},{t:this.instance_2,p:{y:284.5}},{t:this.instance_1,p:{y:494.5}}]},4).to({state:[{t:this.instance_20,p:{y:474.5,x:405.5}},{t:this.instance_19,p:{y:489.5,x:410.5}},{t:this.instance_18,p:{y:469.5,x:380.5}},{t:this.instance_17,p:{y:454.5,x:365.5}},{t:this.instance_16,p:{y:504.5}},{t:this.instance_15,p:{y:534.5,x:395.5}},{t:this.instance_14,p:{y:304.5,x:360.5}},{t:this.instance_13,p:{y:514.5,x:355.5}},{t:this.instance_12,p:{y:344.5}},{t:this.instance_11,p:{y:349.5}},{t:this.instance_10,p:{y:384.5}},{t:this.instance_9,p:{y:374.5}},{t:this.instance_8,p:{y:374.5}},{t:this.instance_7,p:{y:399.5}},{t:this.instance_6,p:{y:449.5}},{t:this.instance_5,p:{y:324.5}},{t:this.instance_4,p:{y:394.5}},{t:this.instance_3,p:{y:434.5}},{t:this.instance_2,p:{y:334.5}},{t:this.instance_1,p:{y:299.5}}]},4).to({state:[{t:this.instance_21,p:{y:294.5}},{t:this.instance_20,p:{y:329.5,x:410.5}},{t:this.instance_19,p:{y:319.5,x:380.5}},{t:this.instance_18,p:{y:304.5,x:365.5}},{t:this.instance_17,p:{y:339.5,x:395.5}},{t:this.instance_16,p:{y:364.5}},{t:this.instance_15,p:{y:394.5,x:370.5}},{t:this.instance_14,p:{y:334.5,x:355.5}},{t:this.instance_13,p:{y:354.5,x:385.5}},{t:this.instance_12,p:{y:429.5}},{t:this.instance_11,p:{y:449.5}},{t:this.instance_10,p:{y:469.5}},{t:this.instance_9,p:{y:474.5}},{t:this.instance_8,p:{y:459.5}},{t:this.instance_7,p:{y:494.5}},{t:this.instance_6,p:{y:529.5}},{t:this.instance_5,p:{y:379.5}},{t:this.instance_4,p:{y:489.5}},{t:this.instance_3,p:{y:514.5}},{t:this.instance_2,p:{y:429.5}},{t:this.instance_1,p:{y:394.5}}]},4).to({state:[{t:this.instance_21,p:{y:359.5}},{t:this.instance_20,p:{y:389.5,x:410.5}},{t:this.instance_19,p:{y:369.5,x:380.5}},{t:this.instance_18,p:{y:354.5,x:365.5}},{t:this.instance_17,p:{y:389.5,x:395.5}},{t:this.instance_16,p:{y:414.5}},{t:this.instance_15,p:{y:459.5,x:370.5}},{t:this.instance_14,p:{y:384.5,x:355.5}},{t:this.instance_13,p:{y:414.5,x:385.5}},{t:this.instance_12,p:{y:479.5}},{t:this.instance_11,p:{y:499.5}},{t:this.instance_10,p:{y:534.5}},{t:this.instance_9,p:{y:524.5}},{t:this.instance_8,p:{y:509.5}},{t:this.instance_7,p:{y:299.5}},{t:this.instance_6,p:{y:334.5}},{t:this.instance_5,p:{y:439.5}},{t:this.instance_4,p:{y:294.5}},{t:this.instance_3,p:{y:319.5}},{t:this.instance_2,p:{y:484.5}},{t:this.instance_1,p:{y:444.5}}]},4).to({state:[{t:this.instance_21,p:{y:409.5}},{t:this.instance_20,p:{y:439.5,x:410.5}},{t:this.instance_19,p:{y:419.5,x:380.5}},{t:this.instance_18,p:{y:404.5,x:365.5}},{t:this.instance_17,p:{y:449.5,x:395.5}},{t:this.instance_16,p:{y:464.5}},{t:this.instance_15,p:{y:509.5,x:370.5}},{t:this.instance_14,p:{y:449.5,x:355.5}},{t:this.instance_13,p:{y:479.5,x:385.5}},{t:this.instance_12,p:{y:529.5}},{t:this.instance_11,p:{y:299.5}},{t:this.instance_10,p:{y:334.5}},{t:this.instance_9,p:{y:324.5}},{t:this.instance_8,p:{y:309.5}},{t:this.instance_7,p:{y:349.5}},{t:this.instance_6,p:{y:384.5}},{t:this.instance_5,p:{y:509.5}},{t:this.instance_4,p:{y:344.5}},{t:this.instance_3,p:{y:379.5}},{t:this.instance_2,p:{y:284.5}},{t:this.instance_1,p:{y:494.5}}]},4).to({state:[{t:this.instance_20,p:{y:474.5,x:405.5}},{t:this.instance_19,p:{y:489.5,x:410.5}},{t:this.instance_18,p:{y:469.5,x:380.5}},{t:this.instance_17,p:{y:454.5,x:365.5}},{t:this.instance_16,p:{y:504.5}},{t:this.instance_15,p:{y:534.5,x:395.5}},{t:this.instance_14,p:{y:304.5,x:360.5}},{t:this.instance_13,p:{y:514.5,x:355.5}},{t:this.instance_12,p:{y:344.5}},{t:this.instance_11,p:{y:349.5}},{t:this.instance_10,p:{y:384.5}},{t:this.instance_9,p:{y:374.5}},{t:this.instance_8,p:{y:374.5}},{t:this.instance_7,p:{y:399.5}},{t:this.instance_6,p:{y:449.5}},{t:this.instance_5,p:{y:324.5}},{t:this.instance_4,p:{y:394.5}},{t:this.instance_3,p:{y:434.5}},{t:this.instance_2,p:{y:334.5}},{t:this.instance_1,p:{y:299.5}}]},4).to({state:[{t:this.instance_21,p:{y:294.5}},{t:this.instance_20,p:{y:329.5,x:410.5}},{t:this.instance_19,p:{y:319.5,x:380.5}},{t:this.instance_18,p:{y:304.5,x:365.5}},{t:this.instance_17,p:{y:339.5,x:395.5}},{t:this.instance_16,p:{y:364.5}},{t:this.instance_15,p:{y:394.5,x:370.5}},{t:this.instance_14,p:{y:334.5,x:355.5}},{t:this.instance_13,p:{y:354.5,x:385.5}},{t:this.instance_12,p:{y:429.5}},{t:this.instance_11,p:{y:449.5}},{t:this.instance_10,p:{y:469.5}},{t:this.instance_9,p:{y:474.5}},{t:this.instance_8,p:{y:459.5}},{t:this.instance_7,p:{y:494.5}},{t:this.instance_6,p:{y:529.5}},{t:this.instance_5,p:{y:379.5}},{t:this.instance_4,p:{y:489.5}},{t:this.instance_3,p:{y:514.5}},{t:this.instance_2,p:{y:429.5}},{t:this.instance_1,p:{y:394.5}}]},4).to({state:[{t:this.instance_21,p:{y:359.5}},{t:this.instance_20,p:{y:389.5,x:410.5}},{t:this.instance_19,p:{y:369.5,x:380.5}},{t:this.instance_18,p:{y:354.5,x:365.5}},{t:this.instance_17,p:{y:389.5,x:395.5}},{t:this.instance_16,p:{y:414.5}},{t:this.instance_15,p:{y:459.5,x:370.5}},{t:this.instance_14,p:{y:384.5,x:355.5}},{t:this.instance_13,p:{y:414.5,x:385.5}},{t:this.instance_12,p:{y:479.5}},{t:this.instance_11,p:{y:499.5}},{t:this.instance_10,p:{y:534.5}},{t:this.instance_9,p:{y:524.5}},{t:this.instance_8,p:{y:509.5}},{t:this.instance_7,p:{y:299.5}},{t:this.instance_6,p:{y:334.5}},{t:this.instance_5,p:{y:439.5}},{t:this.instance_4,p:{y:294.5}},{t:this.instance_3,p:{y:319.5}},{t:this.instance_2,p:{y:484.5}},{t:this.instance_1,p:{y:444.5}}]},4).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(725,337,63,464);
p.frameBounds = [rect, new cjs.Rectangle(725,337.4,63,463.7), new cjs.Rectangle(725,337.8,63,463.3), new cjs.Rectangle(725,338.1,63,462.9), new cjs.Rectangle(725,338.5,63,467.5), new cjs.Rectangle(725,338.9,63,467.2), new cjs.Rectangle(725,339.2,63,466.8), new cjs.Rectangle(725,339.6,63,466.4), new cjs.Rectangle(725,340,63,461.1), new cjs.Rectangle(725,340.4,63,460.7), new cjs.Rectangle(725,340.7,63,460.3), new cjs.Rectangle(725,341.1,63,460), new cjs.Rectangle(725,341.5,63,464.6), new cjs.Rectangle(725,341.8,63,464.2), new cjs.Rectangle(725,342.2,63,463.8), new cjs.Rectangle(725,342.6,63,463.5), new cjs.Rectangle(725,343,63,458.1), new cjs.Rectangle(725,343.3,63,457.7), new cjs.Rectangle(725,343.7,63,457.4), new cjs.Rectangle(725,344.1,63,457), new cjs.Rectangle(725,344.4,63,461.6), new cjs.Rectangle(725,344.8,63,461.2), new cjs.Rectangle(725,345.2,63,460.9), new cjs.Rectangle(725,345.5,63,460.5), new cjs.Rectangle(725,345.9,63,455.1), new cjs.Rectangle(725,346.3,63,454.8), new cjs.Rectangle(725,346.7,63,454.4), new cjs.Rectangle(725,347,63,454), new cjs.Rectangle(725,346.7,63,459.4), new cjs.Rectangle(725,346.3,63,459.7), new cjs.Rectangle(725,346,63,460.1), new cjs.Rectangle(725,345.6,63,460.5), new cjs.Rectangle(725,345.2,63,455.8), new cjs.Rectangle(725,344.9,63,456.2), new cjs.Rectangle(725,344.5,63,456.5), new cjs.Rectangle(725,344.2,63,456.9), new cjs.Rectangle(725,343.8,63,462.2), new cjs.Rectangle(725,343.5,63,462.6), new cjs.Rectangle(725,343.1,63,463), new cjs.Rectangle(725,342.7,63,463.3), new cjs.Rectangle(725,342.4,63,458.7), new cjs.Rectangle(725,342,63,459), new cjs.Rectangle(725,341.7,63,459.4), new cjs.Rectangle(725,341.3,63,459.7), new cjs.Rectangle(725,341,63,465.1), new cjs.Rectangle(725,340.6,63,465.5), new cjs.Rectangle(725,340.2,63,465.8), new cjs.Rectangle(725,339.9,63,466.2), new cjs.Rectangle(725,339.5,63,461.5), new cjs.Rectangle(725,339.2,63,461.9), new cjs.Rectangle(725,338.8,63,462.2), new cjs.Rectangle(725,338.5,63,462.6), new cjs.Rectangle(725,338.1,63,468), new cjs.Rectangle(725,337.7,63,468.3), new cjs.Rectangle(725,337.4,63,468.7), new cjs.Rectangle(725,337,63,469)];

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;