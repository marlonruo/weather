(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
var rect; // used to reference frame bounds

// library properties:
lib.properties = {
	width: 750,
	height: 540,
	fps: 12,
	color: "#1C75BC",
	manifest: [
		{src:"images/helice.png", id:"helice"},
		{src:"images/molino.png", id:"molino"},
		{src:"images/quijote.png", id:"quijote"}
	]
};



// symbols:



(lib.helice = function() {
	this.initialize(img.helice);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,216,216);


(lib.molino = function() {
	this.initialize(img.molino);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,105,174);


(lib.quijote = function() {
	this.initialize(img.quijote);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,102,144);


(lib.helice_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.helice();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,216,216);
p.frameBounds = [rect];


// stage content:
(lib._905 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.helice_1("synched",0);
	this.instance.setTransform(623,415,1,1,0,0,0,108,108);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},99).wait(1));

	// fondo
	this.instance_1 = new lib.quijote();
	this.instance_1.setTransform(48.1,396);

	this.instance_2 = new lib.molino();
	this.instance_2.setTransform(570,367);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(423.1,577,682.9,234.1);
p.frameBounds = [rect, new cjs.Rectangle(423.1,570.5,689.4,240.5), new cjs.Rectangle(423.1,564.2,695.7,246.8), new cjs.Rectangle(423.1,558.8,701.2,252.5), new cjs.Rectangle(423.1,553.5,706.5,263.1), new cjs.Rectangle(423.1,549,711,272.1), new cjs.Rectangle(423.1,544.8,715.2,280.5), new cjs.Rectangle(423.1,541.3,718.6,287.3), new cjs.Rectangle(423.1,538.3,721.6,293.4), new cjs.Rectangle(423.1,536,723.9,298), new cjs.Rectangle(423.1,534.2,725.7,301.5), new cjs.Rectangle(423.1,533,726.9,303.9), new cjs.Rectangle(423.1,532.5,727.3,304.9), new cjs.Rectangle(423.1,532.6,727.3,304.7), new cjs.Rectangle(423.1,533.3,726.6,303.4), new cjs.Rectangle(423.1,534.6,725.2,300.7), new cjs.Rectangle(423.1,536.5,723.4,297), new cjs.Rectangle(423.1,539,720.8,291.9), new cjs.Rectangle(423.1,542.1,717.9,285.8), new cjs.Rectangle(423.1,545.8,714.1,278.4), new cjs.Rectangle(423.1,549.9,709.9,270.1), new cjs.Rectangle(423.1,554.8,705.1,260.4), new cjs.Rectangle(423.1,560.2,699.7,250.9), new cjs.Rectangle(423.1,565.8,694,245.2), new cjs.Rectangle(423.1,572.3,687.6,238.8), new cjs.Rectangle(423.1,575.4,684.4,235.6), new cjs.Rectangle(423.1,568.8,691.1,242.2), new cjs.Rectangle(423.1,562.9,697,248.1), new cjs.Rectangle(423.1,557.3,702.6,255.4), new cjs.Rectangle(423.1,552.4,707.5,265.2), new cjs.Rectangle(423.1,547.8,712.1,274.3), new cjs.Rectangle(423.1,543.9,715.9,282.1), new cjs.Rectangle(423.1,540.5,719.4,289), new cjs.Rectangle(423.1,537.7,722.1,294.5), new cjs.Rectangle(423.1,535.5,724.5,299), new cjs.Rectangle(423.1,533.9,726,302.3), new cjs.Rectangle(423.1,532.9,727,304.2), new cjs.Rectangle(423.1,532.5,727.4,305), new cjs.Rectangle(423.1,532.7,727.2,304.6), new cjs.Rectangle(423.1,533.6,726.3,302.8), new cjs.Rectangle(423.1,535,724.9,300), new cjs.Rectangle(423.1,537.1,722.8,295.7), new cjs.Rectangle(423.1,539.7,720.3,290.6), new cjs.Rectangle(423.1,543,716.9,284), new cjs.Rectangle(423.1,546.7,713.2,276.7), new cjs.Rectangle(423.1,551.2,708.7,267.7), new cjs.Rectangle(423.1,556.1,703.7,257.7), new cjs.Rectangle(423.1,561.4,698.5,249.6), new cjs.Rectangle(423.1,567.5,692.4,243.5), new cjs.Rectangle(423.1,573.8,686.2,237.3), new cjs.Rectangle(423.1,573.7,686.2,237.3), new cjs.Rectangle(423.1,567.5,692.4,243.6), new cjs.Rectangle(423.1,561.4,698.5,249.6), new cjs.Rectangle(423.1,556.1,703.8,257.7), new cjs.Rectangle(423.1,551.1,708.8,267.7), new cjs.Rectangle(423.1,546.6,713.3,276.7), new cjs.Rectangle(423.1,543,716.9,284), new cjs.Rectangle(423.1,539.7,720.2,290.6), new cjs.Rectangle(423.1,537.1,722.8,295.8), new cjs.Rectangle(423.1,535,724.9,300), new cjs.Rectangle(423.1,533.6,726.2,302.8), new cjs.Rectangle(423.1,532.7,727.2,304.6), new cjs.Rectangle(423.1,532.4,727.4,305), new cjs.Rectangle(423.1,533,727,304.2), new cjs.Rectangle(423.1,533.9,726,302.3), new cjs.Rectangle(423.1,535.6,724.4,299), new cjs.Rectangle(423.1,537.8,722.2,294.5), new cjs.Rectangle(423.1,540.4,719.4,289), new cjs.Rectangle(423.1,543.9,715.9,282.1), new cjs.Rectangle(423.1,547.8,712.1,274.4), new cjs.Rectangle(423.1,552.4,707.5,265.2), new cjs.Rectangle(423.1,557.3,702.6,255.4), new cjs.Rectangle(423.1,562.9,697,248.1), new cjs.Rectangle(423.1,568.9,691,242.2), new cjs.Rectangle(423.1,575.5,684.4,235.6), new cjs.Rectangle(423.1,572.3,687.6,238.7), new cjs.Rectangle(423.1,565.9,694.1,245.2), new cjs.Rectangle(423.1,560.3,699.7,250.8), new cjs.Rectangle(423.1,554.8,705.1,260.4), new cjs.Rectangle(423.1,549.9,710,270.1), new cjs.Rectangle(423.1,545.8,714.1,278.4), new cjs.Rectangle(423.1,542,717.8,285.9), new cjs.Rectangle(423.1,539,720.8,291.9), new cjs.Rectangle(423.1,536.5,723.4,297), new cjs.Rectangle(423.1,534.6,725.3,300.7), new cjs.Rectangle(423.1,533.3,726.6,303.3), new cjs.Rectangle(423.1,532.6,727.3,304.8), new cjs.Rectangle(423.1,532.5,727.4,304.9), new cjs.Rectangle(423.1,533.1,726.8,303.8), new cjs.Rectangle(423.1,534.2,725.6,301.5), new cjs.Rectangle(423.1,536,723.9,298), new cjs.Rectangle(423.1,538.3,721.6,293.4), new cjs.Rectangle(423.1,541.3,718.6,287.3), new cjs.Rectangle(423.1,544.8,715.2,280.5), new cjs.Rectangle(423.1,549,711,272.1), new cjs.Rectangle(423.1,553.4,706.5,263.1), new cjs.Rectangle(423.1,558.7,701.2,252.5), new cjs.Rectangle(423.1,564.2,695.7,246.8), new cjs.Rectangle(423.1,570.5,689.3,240.5), new cjs.Rectangle(423.1,577,682.9,234.1)];

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;