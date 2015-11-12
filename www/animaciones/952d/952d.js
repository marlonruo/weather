(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
var rect; // used to reference frame bounds

// library properties:
lib.properties = {
	width: 750,
	height: 540,
	fps: 12,
	color: "#198AC9",
	manifest: [
		{src:"images/angg.png", id:"angg"},
		{src:"images/viento.png", id:"viento"}
	]
};



// symbols:



(lib.angg = function() {
	this.initialize(img.angg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,162,114);


(lib.viento = function() {
	this.initialize(img.viento);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,540);


(lib.viento_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.viento();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,750,540);
p.frameBounds = [rect];


(lib.ang = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.angg();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,162,114);
p.frameBounds = [rect];


// stage content:
(lib._952d = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.instance = new lib.ang("synched",0);
	this.instance.setTransform(385,280,1,1,0,0,0,81,57);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:250},24).to({y:280},25).wait(1));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AlFFEQiGiGAAi+IAAAAQAAi9CGiIIAAAAQCIiGC9AAIAAAAQC+AACGCGIAAAAQCICIAAC9IAAAAQAAC+iICGIAAAAQiGCIi+AAIAAAAQi9AAiIiIg");
	var mask_graphics_1 = new cjs.Graphics().p("AlFFEQiGiGAAi+IAAAAQAAi9CGiIIAAAAQCIiGC9AAIAAAAQC+AACGCGIAAAAQCICIAAC9IAAAAQAAC+iICGIAAAAQiGCIi+AAIAAAAQi9AAiIiIg");
	var mask_graphics_2 = new cjs.Graphics().p("AlFFEQiGiGAAi+IAAAAQAAi9CGiIIAAAAQCIiGC9AAIAAAAQC+AACGCGIAAAAQCICIAAC9IAAAAQAAC+iICGIAAAAQiGCIi+AAIAAAAQi9AAiIiIg");
	var mask_graphics_3 = new cjs.Graphics().p("AlFFEQiGiGAAi+IAAAAQAAi9CGiIIAAAAQCIiGC9AAIAAAAQC+AACGCGIAAAAQCICIAAC9IAAAAQAAC+iICGIAAAAQiGCIi+AAIAAAAQi9AAiIiIg");
	var mask_graphics_4 = new cjs.Graphics().p("AlFFEQiGiGAAi+IAAAAQAAi9CGiIIAAAAQCIiGC9AAIAAAAQC+AACGCGIAAAAQCICIAAC9IAAAAQAAC+iICGIAAAAQiGCIi+AAIAAAAQi9AAiIiIg");
	var mask_graphics_5 = new cjs.Graphics().p("AlFFEQiGiGAAi+IAAAAQAAi9CGiIIAAAAQCIiGC9AAIAAAAQC+AACGCGIAAAAQCICIAAC9IAAAAQAAC+iICGIAAAAQiGCIi+AAIAAAAQi9AAiIiIg");
	var mask_graphics_6 = new cjs.Graphics().p("AjADAQhQhQABhwQgBhvBQhQQBRhQBvgBQBwABBQBQQBRBQAABvQAABwhRBQQhQBRhwAAQhvAAhRhRg");
	var mask_graphics_7 = new cjs.Graphics().p("AhrBSIAAgTQgDgYAAgHQAAgLAVgVQAEgEASgDQARgEAGgHQADgLAEgGQAGgNAOAAQAHAAAKAKQAEgEAEgPQAFgQAGgHQAFgEALgCIASgCQAJgDAKgGQAIgDAJADQAQAPAGBIQAAAQgOAEQgTAFgDAIIgFAVQgJAQgPAAQgOAAgEgFQgDgGgEgDIgGAQQgJANgKAAIgNgDIgMgCQgSAAgQAPQgRAPgHAAQgRAAgDgSg");
	var mask_graphics_8 = new cjs.Graphics().p("AhsCuQgXgPgEgOQgGgaAAgbQAAgQAFgDQAEgCAcAAQAGAAAAgBQgFgOATgGQAbgJAFgGQAEgGAQgNQARgNAIgGIAAgZQgMgNgRgJQgKgFAAgLQAAgTAjg8QAlhBAQAmIALAgQAHAMAXARQAVAQAJARQAFAKAEAVQAUAHAAAPQAAADgEAHQgDAIAAAHQgBAKgYAPQgbARgDAIQgFAIgTALQgYANgGAIQhZBhgLAAQgOAAgUgNg");
	var mask_graphics_9 = new cjs.Graphics().p("AiaB1QgRgTAAgDQAAgKAbgSQgvgiAAgvQAAgyA0glQA0gjBJAAQBIAAAzAjQARAMALANQAQgNAQADQAXAFAAAbQAAAJgTAtQgXA3gSAAIgDgBQgJAJgLAHQgzAkhIAAQgPAAgOgBIgDgBIgXgDIgJAOQgKAQgVAAQgDAAgEADQgEADgDAAQgMAAgTgUg");
	var mask_graphics_10 = new cjs.Graphics().p("AheCmQgqgYgBhCQgBhCAnhCQAohFA5ggQA4gfApAYQApAXACBCQABBCgnBCQgoBFg5AfQggATgcAAQgUAAgRgKg");
	var mask_graphics_11 = new cjs.Graphics().p("AAaDzQgQgRgBgMIgJAFQgJAFgEAAQgPAAgEgOQgCgOgBAAQgKgGgJgJQgKgJgCgFIgNggQgFgQAEgMQgagOgFgEQgHgGgBgJQAAgNAagQIAIgFIAAgHIgBg+IAHhXQAAgKAIgFQAHgFAAgIQAAgGAggiQAeggAEgDQAMgEARgPQAPgNAMgDQAggJARAKQANAHAAAMQgBAHgJAEQgRAHgGAFQgLAIgBAKQgCAJgIAFIgWAMQgNAJgFALIgEAPQgDAJgKAIQgIAIgJAVQgHATgEAQQgBAJgKAWQgBAGACALIABAMIAAAKIADgEQAHgHAPAUIAEAOQADAIgBAHQAKgCAPAGQASAIgBAKQAAAJAGAKIAIARQADAJAWAXQATAVAAALQgbBQgXAAQgJAAgRgQg");
	var mask_graphics_12 = new cjs.Graphics().p("ABHC6QgIgIgHAAIgKAFQgJADgFAAQgMAAgGgKIgCgKQAAgEACgIIAFgLIgBgCIgKALQgIAHgJAAQgUAAgBgPQgCgJAFgKQgPgBgGgIQgDgGAAgGQAAgGADgFIALgRQgWAGgNgOQgLgMAFgPIAAgBQgWAOgKAAQgNAAgFgKIgDgKQAAgCAEgIQAFgIAAgEIgJgMQgHgIANgHIgXgYQgMgOgEgRQgBgIgMgaIgMgaQABgXA7gTIBRgVQAXAQAEAcIAHAsIAAABQATgCAFANQAFALgHAJIAYgGQARAAAGAYQAAAFgEAGIgBADIAJgGQALgEAFAAQAOgBADANQABAEAAALQAYAKgMATQARALAAALQAAAEgCAFIgIAKIABABQAEgBAGgHQAHgFAEAAQAOAAAVARQAVARAAAEQAAAGgHALQgHALAAABQAAAEAFAFQADAGABADQAAARgVAUQgXAWgcAAQgCAAgJAIQgLAIgEAAQgJAAgHgIg");
	var mask_graphics_13 = new cjs.Graphics().p("ACECcIgGgEQgDAAgFADQgEACgDAAQgLAAgGgLQgDgHAAgHIgbgBQgEAAgMADIgPADQgNAAgLgMQgKgMgHgBQgZgCgdgPIgSgFQgPgGAAgLQAAgHgGgIQgHgKgCgGQgGADgGAAQgZAAgXgWQgagXAFgXQgYgIgHgHQgFgFAAgKQAAgRAegXQAggVADgDQAOgWAOgMQARgOALAKQAJAHAAAKQAAADgDAIQgEAIAAADQAAAUAlAAQAMAAAFALQAEAIgCAFIAAADQALgMAKAAQARAAARAoQACACAXAFQAUAEABASIACABQAAABABAAQAAAAABAAQAAAAABAAQABAAABAAQACAAAGgEQAGgEAEAAQAgAAAmAWIArAfQABAAAFgEQAGgEAFAAQAPAAAEANQACAGgBAHQAAAZgBAGQgCANgMASQgGAJgaASQgbASgKAAQgHAAgFgEg");
	var mask_graphics_14 = new cjs.Graphics().p("AlFFEQiGiGAAi+IAAAAQAAi9CGiIIAAAAQCIiGC9AAIAAAAQC+AACGCGIAAAAQCICIAAC9IAAAAQAAC+iICGIAAAAQiGCIi+AAIAAAAQi9AAiIiIg");
	var mask_graphics_15 = new cjs.Graphics().p("AlFFEQiGiGAAi+IAAAAQAAi9CGiIIAAAAQCIiGC9AAIAAAAQC+AACGCGIAAAAQCICIAAC9IAAAAQAAC+iICGIAAAAQiGCIi+AAIAAAAQi9AAiIiIg");
	var mask_graphics_16 = new cjs.Graphics().p("AlFFEQiGiGAAi+IAAAAQAAi9CGiIIAAAAQCIiGC9AAIAAAAQC+AACGCGIAAAAQCICIAAC9IAAAAQAAC+iICGIAAAAQiGCIi+AAIAAAAQi9AAiIiIg");
	var mask_graphics_17 = new cjs.Graphics().p("AlFFEQiGiGAAi+IAAAAQAAi9CGiIIAAAAQCIiGC9AAIAAAAQC+AACGCGIAAAAQCICIAAC9IAAAAQAAC+iICGIAAAAQiGCIi+AAIAAAAQi9AAiIiIg");
	var mask_graphics_18 = new cjs.Graphics().p("AlFFEQiGiGAAi+IAAAAQAAi9CGiIIAAAAQCIiGC9AAIAAAAQC+AACGCGIAAAAQCICIAAC9IAAAAQAAC+iICGIAAAAQiGCIi+AAIAAAAQi9AAiIiIg");
	var mask_graphics_19 = new cjs.Graphics().p("AlFFEQiGiGAAi+IAAAAQAAi9CGiIIAAAAQCIiGC9AAIAAAAQC+AACGCGIAAAAQCICIAAC9IAAAAQAAC+iICGIAAAAQiGCIi+AAIAAAAQi9AAiIiIg");
	var mask_graphics_20 = new cjs.Graphics().p("AlFFEQiGiGAAi+IAAAAQAAi9CGiIIAAAAQCIiGC9AAIAAAAQC+AACGCGIAAAAQCICIAAC9IAAAAQAAC+iICGIAAAAQiGCIi+AAIAAAAQi9AAiIiIg");
	var mask_graphics_21 = new cjs.Graphics().p("AlFFEQiGiGAAi+IAAAAQAAi9CGiIIAAAAQCIiGC9AAIAAAAQC+AACGCGIAAAAQCICIAAC9IAAAAQAAC+iICGIAAAAQiGCIi+AAIAAAAQi9AAiIiIg");
	var mask_graphics_22 = new cjs.Graphics().p("ADwJYQgDgEAAgHQAAgIAFgLIAIgTQgGgGgHgEQgFAIgOAOQgSARgIABQgGgBgMgCQgKgDgHAAQgHAAgHgGIgIgIQgcAAgRAUQgRAUgLgBQgQABgGgNIgDgPQAAgSAHgSQAKgXAGgSQgXgLAAgNQAAgLAKgZQgLgHgGgJIgDgGQAAgIA0hqQgwALgzAAQi+gBiJiIQiGiHAAi7QAAi+CGiJQCJiHC+AAQC8AACHCHQCICJAAC+QAAC7iICHQgcAcgeAWQgYBCgEAVIgCACIAUADQAEgIAYhBQAPgqATAAQALAAAGAIQACAEABAGIglBrIAAADQAYgFAZguQAXgqAUAAQANAAAFAMQACAFAAAHQAAADgKAdQgKAcgCADIAAAFQANgIATAJQARAHADAMQAGgUAFgNQANgYAQAAQAJgBAGAJQAFAGAAAEQAAAGgNAgIgRAsQAKACAGAHQAEAFAAAEQg3CngUgBQgIAAgOgCQgOgDgTABQgTAAgCgOIABgTQgIAMgRAgQgQAcgYAAQgNABgEgLg");
	var mask_graphics_23 = new cjs.Graphics().p("AlFIHQiHjXAAkwQAAkvCHjbQCIjXC9AAQC+AACGDXQCIDbABEvQgBEwiIDXQiGDbi+gBQi9ABiIjbgABYEUIAXAAIAAgXIgXAAIAXAAIAAAXIgXAAIAAgXIAAAXg");
	var mask_graphics_24 = new cjs.Graphics().p("AlFIAQiHjUABksQgBkrCHjXQCIjVC9AAQC+AACGDVQCJDXgBErQABEsiJDUQiGDYi+AAQi9AAiIjYg");
	var mask_graphics_25 = new cjs.Graphics().p("AlFIAQiGjVgBkrQABkrCGjXQCIjUC9AAQC9AACHDUQCJDXAAErQAAEriJDVQiHDXi9AAQi9AAiIjXg");
	var mask_graphics_26 = new cjs.Graphics().p("AiyJMQi0inhPkYIgMgtQhHkYBHjtQBLj0C4gxQC3gyC4CvQC1CpBREXIAMAuQBGEYhJDqQhJD3i4AxQgnALgoAAQiPAAiTiKg");
	var mask_graphics_27 = new cjs.Graphics().p("AiyJMQizinhPkYIgNgtQhHkYBHjtQBMj0C3gxQC4gyC4CvQC1CpBQEXIANAuQBFEYhJDqQhJD3i3AxQgoALgoAAQiPAAiTiKg");
	var mask_graphics_28 = new cjs.Graphics().p("AiyJMQizinhPkYIgNgtQhHkYBHjtQBMj0C3gxQC4gyC4CvQC1CpBQEXIANAuQBFEYhJDqQhJD3i3AxQgoALgoAAQiPAAiTiKg");
	var mask_graphics_29 = new cjs.Graphics().p("AiyJMQizinhPkYIgNgtQhHkYBHjtQBMj0C3gxQC4gyC4CvQC1CpBQEXIANAuQBFEYhJDqQhJD3i3AxQgoALgoAAQiPAAiTiKg");
	var mask_graphics_30 = new cjs.Graphics().p("AiyJMQizinhPkYIgNgtQhHkYBHjtQBMj0C3gxQC4gyC4CvQC1CpBQEXIANAuQBFEYhJDqQhJD3i3AxQgoALgoAAQiPAAiTiKg");
	var mask_graphics_31 = new cjs.Graphics().p("AiyJMQizinhPkYIgNgtQhHkYBHjtQBMj0C3gxQC4gyC4CvQC1CpBQEXIANAuQBFEYhJDqQhJD3i3AxQgoALgoAAQiPAAiTiKg");
	var mask_graphics_32 = new cjs.Graphics().p("AiyJMQizinhPkYIgNgtQhHkYBHjtQBMj0C3gxQC4gyC4CvQC1CpBQEXIANAuQBFEYhJDqQhJD3i3AxQgoALgoAAQiPAAiTiKg");
	var mask_graphics_33 = new cjs.Graphics().p("AiyJMQizinhPkYIgNgtQhHkYBHjtQBMj0C3gxQC4gyC4CvQC1CpBQEXIANAuQBFEYhJDqQhJD3i3AxQgoALgoAAQiPAAiTiKg");
	var mask_graphics_34 = new cjs.Graphics().p("AilClQhEhEAAhhQAAhgBEhFQBFhEBgAAQBhAABEBEQBFBFABBgQgBBhhFBEQhEBFhhABQhggBhFhFg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:76,y:221}).wait(1).to({graphics:mask_graphics_1,x:47.7,y:247.2}).wait(1).to({graphics:mask_graphics_2,x:39.3,y:285.2}).wait(1).to({graphics:mask_graphics_3,x:49.3,y:322.6}).wait(1).to({graphics:mask_graphics_4,x:80.6,y:345.9}).wait(1).to({graphics:mask_graphics_5,x:118.6,y:355.3}).wait(1).to({graphics:mask_graphics_6,x:157.7,y:355.4}).wait(1).to({graphics:mask_graphics_7,x:199.8,y:341.5}).wait(1).to({graphics:mask_graphics_8,x:227.5,y:321.2}).wait(1).to({graphics:mask_graphics_9,x:212.5,y:312.2}).wait(1).to({graphics:mask_graphics_10,x:191.7,y:326}).wait(1).to({graphics:mask_graphics_11,x:192,y:348}).wait(1).to({graphics:mask_graphics_12,x:199.8,y:370.1}).wait(1).to({graphics:mask_graphics_13,x:217.1,y:378.2}).wait(1).to({graphics:mask_graphics_14,x:245.3,y:389.4}).wait(1).to({graphics:mask_graphics_15,x:267.8,y:391.4}).wait(1).to({graphics:mask_graphics_16,x:290.4,y:393.1}).wait(1).to({graphics:mask_graphics_17,x:313,y:394.4}).wait(1).to({graphics:mask_graphics_18,x:335.7,y:395.2}).wait(1).to({graphics:mask_graphics_19,x:358.4,y:395.6}).wait(1).to({graphics:mask_graphics_20,x:381.1,y:395.6}).wait(1).to({graphics:mask_graphics_21,x:403.8,y:395}).wait(1).to({graphics:mask_graphics_22,x:428.8,y:408.9}).wait(1).to({graphics:mask_graphics_23,x:455.9,y:392.2}).wait(1).to({graphics:mask_graphics_24,x:488.7,y:389.8}).wait(1).to({graphics:mask_graphics_25,x:504.9,y:386.6}).wait(1).to({graphics:mask_graphics_26,x:517.4,y:382.7}).wait(1).to({graphics:mask_graphics_27,x:563.9,y:393.3}).wait(1).to({graphics:mask_graphics_28,x:593.9,y:393.3}).wait(1).to({graphics:mask_graphics_29,x:621.4,y:372.3}).wait(1).to({graphics:mask_graphics_30,x:642.9,y:358.3}).wait(1).to({graphics:mask_graphics_31,x:665.9,y:337.3}).wait(1).to({graphics:mask_graphics_32,x:688.9,y:315.8}).wait(1).to({graphics:mask_graphics_33,x:719.4,y:288.8}).wait(1).to({graphics:mask_graphics_34,x:-96.5,y:93.5}).wait(16));

	// fondo
	this.instance_1 = new lib.viento_1("synched",0);
	this.instance_1.setTransform(375,270,1,1,0,0,0,375,270);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(404.9,444.9,436.1,162.1);
p.frameBounds = [rect, new cjs.Rectangle(376.7,471.2,92.2,92.2), new cjs.Rectangle(375,509.1,85.4,92.2), new cjs.Rectangle(378.2,546.6,92.2,92.2), new cjs.Rectangle(409.5,569.8,92.2,92.2), new cjs.Rectangle(447.6,579.3,92.2,92.2), new cjs.Rectangle(505.4,598.1,54.6,54.6), new cjs.Rectangle(563.6,601.5,22.4,20.1), new cjs.Rectangle(588.3,572.5,28.5,37.6), new cjs.Rectangle(568.2,568.5,38.6,27.6), new cjs.Rectangle(552.8,578.4,27.7,35.3), new cjs.Rectangle(555,592.1,24,51.9), new cjs.Rectangle(555.8,620.6,38,38.9), new cjs.Rectangle(569.3,632.2,45.8,32.1), new cjs.Rectangle(574.2,613.4,92.2,92.2), new cjs.Rectangle(596.8,615.4,92.2,92.2), new cjs.Rectangle(619.3,617,92.2,92.2), new cjs.Rectangle(642,618.3,92.2,92.2), new cjs.Rectangle(664.6,619.2,92.2,92.2), new cjs.Rectangle(687.3,619.6,92.2,92.2), new cjs.Rectangle(710,619.5,92.2,92.2), new cjs.Rectangle(732.8,619,92.2,92.2), new cjs.Rectangle(755.5,617.8,96.5,122.2), new cjs.Rectangle(784.8,588.4,92.2,147.6), new cjs.Rectangle(679,463,230.8,269.6), new cjs.Rectangle(833.8,583.8,92.2,145.6), new cjs.Rectangle(843.8,580,97.2,145.3), new cjs.Rectangle(890.3,590.6,97.2,145.3), new cjs.Rectangle(920.3,590.6,97.2,145.3), new cjs.Rectangle(947.8,569.6,97.2,145.3), new cjs.Rectangle(969.3,555.6,97.2,145.3), new cjs.Rectangle(992.3,534.6,97.2,145.3), new cjs.Rectangle(1015.3,513.1,97.2,145.3), new cjs.Rectangle(1045.8,486.1,79.2,145.3), rect=null, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(679,493,162,114)];

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;