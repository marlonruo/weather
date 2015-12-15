(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
var rect; // used to reference frame bounds

// library properties:
lib.properties = {
	width: 750,
	height: 540,
	fps: 24,
	color: "#33CCCC",
	manifest: []
};



// symbols:



(lib.swipe = function() {
	this.initialize();

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhzCXIAAgvQAWALAdAIQAdAHAYAAQAkAAAXgMQAVgNAAgaQAAgTgRgOQgPgNgxgUQgsgOgVgOQgUgMgKgRQgJgQAAgXQAAgoAhgYQAhgXA3AAQA2AAAzAVIgRApQg0gUgngBQgiAAgSAMQgSALAAAUQAAANAGAKQAIAIAPAJQANAIAqAQQA8AWAUAUQAVAVAAAhQAAAwgiAYQgjAZg8ABQhCgBglgUg");
	this.shape.setTransform(218.9,121.6,0.557,0.557);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABYCoIAAjUQAAgogSgVQgTgUgoAAQgxAAgZAcQgYAdAABAIAACsIgyAAIAAlJIAoAAIAJAtIACAAQAPgYAcgOQAdgNAfAAQA8AAAfAdQAeAcAABAIAADWg");
	this.shape_1.setTransform(201.7,121.5,0.557,0.557);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhPCXQgjgVgTgnQgSgnAAg0QAAhQApgtQAoguBGABQBFgBAqAvQApAuAABOQAABQgpAuQgqAthFABQgtgBgigUgAhKhgQgZAhAAA/QAAA/AaAhQAZAhAwAAQAwAAAaghQAZghAAg/QAAg+gZghQgZghgxAAQgxAAgZAgg");
	this.shape_2.setTransform(182.2,121.6,0.557,0.557);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgYDjIAAlKIAwAAIAAFKgAgUinQgIgIAAgSQAAgQAIgJQAJgIALAAQALAAAJAJQAJAIAAAQQAAASgJAIQgIAIgMAAQgMAAgIgIg");
	this.shape_3.setTransform(169,118.2,0.557,0.557);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgxBpIAAjDIgwAAIAAgYIAwgVIAVhHIAcAAIAABNIBfAAIAAAnIhfAAIAADCQAAAeANAQQAPAPAYABIAagCIAUgFIAAAmQgIAEgQADQgQADgNAAQheAAAAhmg");
	this.shape_4.setTransform(160,119.7,0.557,0.557);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhoCSQgcgaAAgvQAAhiCfgFIA4gCIAAgUQAAgngQgTQgRgTglAAQgoAAg0AaIgPgnQAYgNAdgIQAegHAbAAQA7AAAdAaQAcAbABA6IAADgIglAAIgKgvIgDAAQgYAfgZALQgaALgiAAQgxAAgdgZgAAgAEQg5ACgcARQgaAQAAAjQAAAbARAOQAQAPAeAAQAtAAAagaQAbgaAAguIAAgeg");
	this.shape_5.setTransform(145.4,121.6,0.557,0.557);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhPB/QgngsAAhRQAAhSAogtQAngtBJAAQAZAAAXAEQAYAGANAHIgPAqQgTgHgRgEQgUgEgPAAQhjAAAAB/QAAA+AYAfQAZAiAugBQAqAAAsgSIAAAtQgiASgyAAQhHAAgngtg");
	this.shape_6.setTransform(130.3,121.6,0.557,0.557);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhPCXQgigVgTgnQgTgoAAgzQAAhQApgtQAoguBGABQBFgBAqAvQApAuAABOQAABQgpAuQgqAthFABQgtgBgigUgAhKhgQgZAhAAA/QAAA/AZAhQAaAhAwAAQAwAAAaghQAaggAAhAQAAg+gaghQgaghgwAAQgxAAgZAgg");
	this.shape_7.setTransform(112.8,121.6,0.557,0.557);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgXDrIAAnVIAvAAIAAHVg");
	this.shape_8.setTransform(99.6,117.7,0.557,0.557);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhsDCQgkgtAAhSQAAhRAkgsQAkguBBAAQBCAAAjAxIAFAAIgCgYIgCieIAyAAIAAHVIgoAAIgHgtIgDAAQgiAzhEAAQhBAAgkgsgAhFgbQgYAgAAA/QAAA+AYAiQAXAgAuAAQAxAAAXgcQAXgcAAg+IAAgLQAAhFgXgeQgYgegxAAQgsAAgYAjg");
	this.shape_9.setTransform(78.4,117.9,0.557,0.557);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhgB/QgrgtAAhQQAAhPAoguQAngwBBABQA+AAAkAoQAlApAABDIAAAfIjjAAQACA6AcAeQAbAeAyAAQA1ABA1gXIAAAtQgcAMgXAEQgaAGgfAAQhHgBgrgsgAg6hnQgXAbgFAtICsAAQAAgvgVgZQgVgagoAAQgmAAgYAag");
	this.shape_10.setTransform(60.4,121.6,0.557,0.557);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgcClIh+lJIA2AAIBIDCQAYBFAEAVIABAAQADgQASgyQASg2A9ikIA2AAIh+FJg");
	this.shape_11.setTransform(43.6,121.6,0.557,0.557);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhoCSQgcgaAAgvQABhiCegFIA4gCIAAgUQABgogSgSQgQgTglAAQgoAAg0AaIgQgnQAZgNAdgIQAegHAbAAQA7AAAdAaQAcAbABA6IAADgIglAAIgKgvIgDAAQgYAfgZALQgaALgiAAQgxAAgdgZgAAgAEQg6ACgbARQgaAQAAAjQAAAbARAOQAQAPAeAAQAtAAAagaQAbgaAAguIAAgeg");
	this.shape_12.setTransform(26.3,121.6,0.557,0.557);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhzCXIAAgvQAWALAdAIQAdAHAYAAQAlAAAWgMQAUgNAAgaQAAgTgQgOQgQgNgwgUQgsgOgVgOQgUgMgJgRQgKgQAAgXQAAgoAhgYQAggXA4AAQA3AAAyAVIgRApQg0gUgngBQgiAAgSAMQgSALAAAUQAAANAHAKQAGAIAQAJQANAIAqAQQA8AWAUAUQAVAWAAAgQAAAwgiAYQgjAZg8ABQhCgBglgUg");
	this.shape_13.setTransform(10.8,121.6,0.557,0.557);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AheCpIAAlKIApAAIAGA9IACAAQATghAagRQAZgSAeAAQAXABARADIgHAvQgVgFgQAAQgoAAgaAhQgdAhAAAwIAACxg");
	this.shape_14.setTransform(232.7,80,0.557,0.557);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AhrCMQgfgeAAg+IAAjXIA0AAIAADVQgBApATATQASAUAoAAQAyAAAYgcQAYgdAAhAIAAisIAyAAIAAFKIgpAAIgHgtIgDAAQgQAYgbAOQgcANgggBQg9AAgegcg");
	this.shape_15.setTransform(215.3,80.3,0.557,0.557);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhPCXQgigWgTgnQgTgnAAgzQAAhQAoguQApgsBGgBQBFABAqAtQApAwAABNQAABRgpAsQgpAvhGgBQgsAAgjgUgAhKhgQgZAhAAA/QAAA+AZAiQAaAhAwAAQAwAAAaghQAaghAAg/QAAg+gaghQgaghgwAAQgwAAgaAgg");
	this.shape_16.setTransform(196,80.2,0.557,0.557);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AiWDrIAAgoQAUADARAAQA0AAAWg6IATgvIiGlMIA2AAIBIC9QAYBAAEAcIACAAIBjkZIA2AAIiPF4QgTA4gcAXQgbAYgrAAQgYAAgVgFg");
	this.shape_17.setTransform(178.5,84.3,0.557,0.557);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("Ah4DbQgjgYAAgtQAAgdATgXQAUgWAigIQgMgFgJgNQgJgMABgQQgBgSAKgMQALgOAUgMQgZgLgRgZQgQgaAAggQAAg3AhgdQAggeA8AAQAYAAAVAGIBzAAIAAAgIg+AHQAIAKAIASQAGAQAAAXQAAAwghAdQghAdg4AAQgRAAgLgCQghARABAYQgBANALAHQAMAGAbAAIA5AAQA3AAAbAXQAdAXAAArQAAA3grAdQgsAdhUAAQhBAAgjgYgAhXBnQgUAQABAfQAAAbAWAOQAWANArAAQA+AAAegSQAegUAAggQAAgbgRgKQgQgLguAAIg6AAQgjAAgSARgAg8i6QgUAUABAkQAAAjATASQAVASAiAAQBIAAAAhHQAAhLhJAAQgiAAgUATg");
	this.shape_18.setTransform(154.5,84.1,0.557,0.557);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("ABYCpIAAjVQAAgpgSgUQgTgUgoAAQgxAAgZAcQgYAcAABBIAACtIgyAAIAAlKIApAAIAIAtIACAAQAPgYAcgOQAdgOAfAAQA8AAAfAdQAeAdAABAIAADXg");
	this.shape_19.setTransform(136.2,80,0.557,0.557);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AhPCXQgigWgTgnQgTgnAAgzQAAhQApguQAogsBGgBQBFABAqAtQApAvAABOQAABRgpAsQgpAvhGgBQgtAAgigUgAhJhgQgaAhAAA/QAAA+AaAiQAZAhAwAAQAxAAAaghQAZghAAg/QAAg+gZghQgbghgwAAQgwAAgZAgg");
	this.shape_20.setTransform(116.7,80.2,0.557,0.557);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgXDrIAAnVIAvAAIAAHVg");
	this.shape_21.setTransform(103.5,76.3,0.557,0.557);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AhoCSQgcgZAAgwQAAhiCfgFIA4gCIAAgUQAAgogQgSQgRgTglAAQgnAAg1AaIgQgnQAZgNAdgIQAegHAbAAQA7AAAdAaQAcAbABA6IAADgIglAAIgKgvIgDAAQgYAfgZALQgaALgiAAQgxAAgdgZgAAgAEQg6ACgbARQgaAQAAAjQAAAbAQAOQARAPAdAAQAuAAAagaQAbgZAAgvIAAgeg");
	this.shape_22.setTransform(90.6,80.2,0.557,0.557);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AhgB+QgrgtAAhPQAAhNAngxQAoguBAgBQA/ABAkApQAlAqAABCIAAAdIjjAAQABA6AdAfQAcAfAxgBQA1AAA1gWIAAAtQgaALgZAGQgaAEgfAAQhHABgrgugAg5hmQgZAagDAuICrAAQAAgwgVgZQgWgZgnAAQgmAAgXAag");
	this.shape_23.setTransform(66.2,80.2,0.557,0.557);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgcCmIh+lKIA2AAIBHDCQAZBHAEATIAAAAQAEgPARg0IBQjZIA2AAIh+FKg");
	this.shape_24.setTransform(49.5,80.2,0.557,0.557);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AhPCXQgjgWgSgnQgTgmAAg0QAAhQApguQAogsBGgBQBGABApAtQApAvAABOQAABRgpAsQgpAvhGgBQgsAAgjgUgAhKhgQgZAhAAA/QAAA+AaAiQAZAhAwAAQAxAAAZghQAaghAAg/QAAg+gaghQgZghgxAAQgwAAgaAgg");
	this.shape_25.setTransform(32,80.2,0.557,0.557);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AC6CpIAAjWQAAgpgRgTQgRgUgkAAQgvAAgWAbQgWAaAAA5IAAC4IgxAAIAAjWQAAgpgRgTQgQgUglAAQgvAAgWAdQgWAcAABAIAACtIgyAAIAAlKIApAAIAIAtIACAAQAOgZAbgNQAZgOAhAAQBNAAAWA4IADAAQAPgaAcgOQAcgPAkgBQA4AAAcAdQAcAdAABAIAADXg");
	this.shape_26.setTransform(7.2,80,0.557,0.557);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AhgB/QgrgtAAhQQAAhPAoguQAngwBBAAQA+AAAkAqQAlApAABDIAAAdIjjAAQACA8AcAdQAbAfAyAAQA2gBAzgWIAAAtQgZALgZAGQgaAEgfABQhIAAgqgtgAg6hmQgXAagFAuICsAAQAAgwgVgZQgVgagoAAQgmABgYAag");
	this.shape_27.setTransform(205.5,38.7,0.557,0.557);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AheCpIAAlLIApAAIAGA+IACAAQAUghAZgRQAZgSAeAAQAXAAARAEIgHAvQgVgFgQAAQgnAAgbAhQgdAgAAAxIAACxg");
	this.shape_28.setTransform(191.6,38.6,0.557,0.557);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AhgB/QgrguAAhPQAAhOAngvQAogwBBAAQA+AAAkAqQAlApAABDIAAAdIjjAAQACA8AcAdQAbAfAyAAQA1gBA0gWIAAAtQgaALgYAGQgaAEgfABQhHAAgrgtgAg5hmQgYAZgEAvICrAAQAAgxgVgYQgWgagnAAQglABgYAag");
	this.shape_29.setTransform(175.3,38.7,0.557,0.557);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("ABYDrIAAjXQAAglgSgVQgTgUgnAAQgzAAgYAcQgYAdAAA/IAACtIgyAAIAAnVIAyAAIAACPQAAAXgCATIADAAQAPgYAbgNQAbgOAiAAQA9AAAeAdQAeAcAAA+IAADYg");
	this.shape_30.setTransform(156.6,34.8,0.557,0.557);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AhPCWQgigVgTgmQgTgoAAgzQAAhPApgvQAogtBGAAQBGAAApAuQApAwAABNQAABRgpAsQgpAvhGAAQgtAAgigWgAhKhfQgZAgAAA/QAAA/AaAhQAZAhAwAAQAxAAAZghQAaghAAg/QAAg+gaghQgZghgxAAQgxAAgZAhg");
	this.shape_31.setTransform(129.8,38.7,0.557,0.557);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgxBqIAAjEIgwAAIAAgYIAwgVIAVhHIAcAAIAABNIBfAAIAAAnIhfAAIAADCQAAAcANASQAPAPAYAAIAagCIAUgDIAAAlQgIAEgQADQgRADgMAAQheAAAAhlg");
	this.shape_32.setTransform(114.8,36.7,0.557,0.557);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AhhB/QgqguAAhPQAAhOAogvQAngwBBAAQA+AAAlAqQAkApAABDIAAAdIjjAAQACA8AcAdQAcAfAwAAQA2gBA0gWIAAAtQgaALgYAGQgaAEgfABQhHAAgsgtgAg5hmQgYAZgEAvICrAAQAAgxgWgYQgUgagoAAQgmABgXAag");
	this.shape_33.setTransform(93.4,38.7,0.557,0.557);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AiRDzIAAnfIApAAIAHAuIADAAQATgcAagMQAagMAeAAQBCAAAlAtQAjAtABBSQAABQglAtQglAthBAAQgdAAgbgMQgbgMgSgZIgEAAQADAcABAbIAACJgAhHirQgXAdAAA9IAAALQgBBFAYAdQAYAeAxAAQArAAAYgjQAYghABg9QgBg+gYghQgYghgsAAQgxAAgXAcg");
	this.shape_34.setTransform(75.2,42.7,0.557,0.557);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgYDjIAAlKIAwAAIAAFKgAgUinQgIgJAAgRQAAgRAIgIQAJgIALAAQALAAAJAIQAJAJAAAQQAAASgJAIQgIAIgMAAQgMAAgIgIg");
	this.shape_35.setTransform(61.4,35.3,0.557,0.557);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("ABTCmIg+jCIgVhRIgBAAQgLA1gKAdIg+DBIg6AAIhblLIA1AAIAxC9QARBDACAVIACAAIALgtIANgrIA9i9IA1AAIA6C9QARAxAHAnIACAAIAHgiQAGgeA5jVIA0AAIhcFLg");
	this.shape_36.setTransform(45.2,38.7,0.557,0.557);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AiKDPIAAgyQAdALAfAHQAfAGAgABQAyAAAagUQAagTAAgjQAAgXgJgPQgJgOgWgNQgXgNgpgPQg+gVgagdQgbgfAAgwQAAgzAngfQAmgeA9AAQBCAAA4AYIgQAtQg2gXg1AAQgnAAgXASQgXARAAAfQAAAXAJAPQAIAOAUAMQAUANAoAPQBGAXAaAcQAaAcAAAuQAAA7gqAgQgrAhhGAAQhOAAgsgUg");
	this.shape_37.setTransform(23.9,35.6,0.557,0.557);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#FAE030").ss(5,1,1).p("A0/tJMAp/AAAIAAaTMgp/AAAg");
	this.shape_38.setTransform(117.8,78.8);

	this.addChild(this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-19.1,-7.9,273.8,173.5);
p.frameBounds = [rect];


(lib.menu = function() {
	this.initialize();

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhUBvQgYgYAAgyIAAipIAoAAIAACoQAAAhAPAPQAOAQAfAAQAnAAAUgWQATgYAAgyIAAiIIAnAAIAAEEIggAAIgGgjIgCAAQgMAUgWAKQgWAKgaAAQgvAAgYgWg");
	this.shape.setTransform(181.7,331.6,0.92,0.92);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABGCFIAAinQgBgggPgQQgOgQgfAAQgnAAgTAWQgUAXAAAyIAACIIgnAAIAAkEIAgAAIAGAkIADAAQALgUAWgKQAYgLAYAAQAuAAAZAXQAYAXAAAyIAACpg");
	this.shape_1.setTransform(156.4,331.1,0.92,0.92);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhMBkQghgjAAg/QAAg9AfgmQAfgmAzAAQAxAAAdAhQAcAhAAA0IAAAYIiyAAQABAuAWAYQAWAYAmAAQArAAApgSIAAAkQgWAJgSADQgUAEgZABQg4AAgigkgAgthRQgTAWgDAkICHAAQAAgmgRgUQgRgUgfAAQgdAAgTAUg");
	this.shape_2.setTransform(132,331.4,0.92,0.92);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ACTCFIAAioQAAgfgOgRQgNgPgcAAQglAAgSAVQgRAWgBAsIAACQIgmAAIAAioQABgfgNgRQgOgPgcAAQglAAgSAWQgRAWAAAzIAACIIgpAAIAAkEIAhAAIAHAkIABAAQAMgUAUgKQAVgLAZAAQA9AAASAtIABAAQAMgVAWgMQAXgMAcAAQAsAAAXAXQAVAXABAyIAACpg");
	this.shape_3.setTransform(100.6,331.1,0.92,0.92);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhMBkQghgjAAg/QAAg9AegmQAggmAzAAQAxAAAcAhQAdAiAAAzIAAAYIizAAQACAuAWAYQAWAYAnAAQAqAAApgSIAAAkQgWAJgSADQgUAEgZABQg4AAgigkgAgthRQgSAVgFAlICIAAQAAgmgRgUQgRgUgfAAQgeAAgSAUg");
	this.shape_4.setTransform(59.5,331.4,0.92,0.92);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABGC6IAAiqQgBgegPgPQgOgQgfgBQgnAAgTAXQgUAXAAAxIAACJIgnAAIAAlyIAnAAIAABwQAAAWgCAMIADAAQAMgTAVgLQAXgLAZAAQAvAAAZAXQAYAXAAAvIAACsg");
	this.shape_5.setTransform(35.1,326.3,0.92,0.92);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgmBUIAAibIgmAAIAAgTIAmgRIAQg4IAWAAIAAA+IBLAAIAAAeIhLAAIAACYQAAAYAKANQAMANATAAIAVgCIAPgDIAAAfQgGACgNACQgLACgLABQhKAAAAhQg");
	this.shape_6.setTransform(15.2,328.8,0.92,0.92);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhMBkQghgjAAg/QgBg+AgglQAfgmAzAAQAwABAeAgQAcAhAAA0IAAAYIiyAAQABAtAWAZQAXAYAmAAQAqAAApgSIAAAjQgXAKgQAEQgVADgZAAQg4AAgigjgAgthRQgTAWgDAjICHAAQAAglgRgUQgQgUggAAQgdAAgTAUg");
	this.shape_7.setTransform(147.2,277.3,0.92,0.92);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhMBkQghgjAAg/QAAg+AfglQAfgmAzAAQAwABAeAgQAcAhAAA0IAAAYIiyAAQABAuAWAYQAWAYAmAAQArAAApgSIAAAjQgWAKgSAEQgUADgZAAQg4AAgigjgAgthRQgTAWgDAjICHAAQAAgkgRgVQgRgUgfAAQgdAAgTAUg");
	this.shape_8.setTransform(124,277.3,0.92,0.92);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhbB3IAAglQASAJAWAGQAWAGAVAAQAcAAARgKQARgKAAgVQAAgPgNgLQgNgKglgQQgkgLgQgKQgQgLgHgNQgIgMABgSQAAghAZgSQAbgSArgBQAqAAApASIgPAhQgngRggAAQgaAAgPAJQgOAJAAAPQAAAKAFAIQAGAHAMAHQALAGAhANQAuARARAQQAQASAAAZQABAlgcATQgbAUgvAAQg1AAgdgQg");
	this.shape_9.setTransform(102.8,277.3,0.92,0.92);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag+B3QgbgQgQggQgOgfAAgoQAAg/AggjQAhglA2AAQA3AAAhAlQAgAlAAA9QAAA/ggAkQghAlg3gBQgjAAgbgQgAg6hLQgUAZAAAyQAAAyAUAaQAUAbAmAAQAmAAAUgbQAVgaAAgyQAAgxgVgZQgTgagnAAQgngBgTAag");
	this.shape_10.setTransform(70.8,277.3,0.92,0.92);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgmBTIAAiZIgmAAIAAgUIAmgRIAQg3IAWAAIAAA9IBLAAIAAAfIhLAAIAACXQAAAYAKANQAMANATAAIAUgCIAQgDIAAAeQgFADgOACQgMACgLAAQhKAAABhQg");
	this.shape_11.setTransform(51.2,274.7,0.92,0.92);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhMBkQghgjAAg/QAAg9AfgmQAfglAzAAQAxgBAdAhQAcAhAAA1IAAAXIiyAAQABAvAWAXQAWAYAmAAQArAAApgSIAAAjQgWAKgSADQgUAFgZAAQg4AAgigkgAgthQQgTAVgDAkICHAAQAAglgRgVQgRgUgfAAQgdAAgTAVg");
	this.shape_12.setTransform(181.8,223.2,0.92,0.92);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhKCFIAAkEIAhAAIAFAwIABAAQAPgZAUgOQATgOAZAAQARAAAOADIgFAlQgQgDgNgBQggABgVAZQgWAbAAAlIAACLg");
	this.shape_13.setTransform(163.6,222.9,0.92,0.92);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhMBkQghgjAAg/QAAg9AegmQAgglAzAAQAxgBAcAhQAdAhABA1IAAAXIi0AAQACAvAWAXQAWAYAmAAQArAAApgSIAAAjQgWAKgSADQgUAFgZAAQg4AAgigkgAgthQQgTATgDAmICHAAQAAglgRgVQgRgUgfAAQgdAAgTAVg");
	this.shape_14.setTransform(142.4,223.2,0.92,0.92);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("ABFC5IAAipQAAgegOgQQgPgQgfAAQgnABgTAWQgUAXABAwIAACJIgoAAIAAlyIAoAAIAABxQgBAWgCAMIADAAQAMgTAVgLQAXgLAZAAQAwAAAYAXQAYAYAAAuIAACrg");
	this.shape_15.setTransform(118,218.1,0.92,0.92);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AA4C5Ihbh7IgdAZIAABiIgnAAIAAlyIAnAAIgCDsIACAAQALgQAUgWIBThYIAvAAIhpBvIBxCVg");
	this.shape_16.setTransform(86.5,218.1,0.92,0.92);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("Ag+BlQgfgkAAhAQAAhAAggjQAfgkA5AAQATgBATAFQAUAEAJAFIgMAiQgPgGgOgDQgOgDgNAAQhOAAAABkQAAAxAUAZQAUAaAjAAQAhAAAjgPIAAAkQgbAOgoAAQg3AAgfgjg");
	this.shape_17.setTransform(64.8,223.2,0.92,0.92);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgTCzIAAkEIAmAAIAAEEgAgQiEQgGgGAAgOQAAgOAGgGQAIgGAIAAQAJAAAHAGQAHAHAAANQAAANgHAHQgHAHgJAAQgJAAgHgHg");
	this.shape_18.setTransform(50,218.7,0.92,0.92);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgSC5IAAlyIAlAAIAAFyg");
	this.shape_19.setTransform(40.7,218.1,0.92,0.92);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AhZCEQgqguAAhWQAAg1AVgpQAUgoAmgWQAmgWAyAAQA4AAAoAUIgRAjQgngTgpAAQg3AAgiAmQghAoAABAQAABEAgAmQAhAlA5AAQAlAAAugNIAAAkQgkANg1AAQhMAAgqgvg");
	this.shape_20.setTransform(23.6,219.1,0.92,0.92);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FAE030").ss(5,1,1).p("ArEN3QAPv4Dxk3QFlnNMlAP");
	this.shape_21.setTransform(164,88.8);

	this.addChild(this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(8.1,-2.5,229.4,346.4);
p.frameBounds = [rect];


(lib.map = function() {
	this.initialize();

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhyDAIAAl6IAgAAIAGAkIACAAQAPgWAUgJQAWgKAXAAQA1AAAcAkQAcAkAABAQAAA+gdAkQgdAkgzAAQgYAAgVgKQgUgJgPgTIgDAAQADAXAAAUIAABsgAg4iHQgRAWgBAxIAAAJQAAA3ASAWQATAYAnAAQAhAAAUgcQATgZAAgwQAAgygTgaQgTgagjAAQgmAAgTAWg");
	this.shape.setTransform(184.7,249.4,0.888,0.888);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhRBzQgXgUAAglQAAhNB9gEIAtgCIAAgQQAAgfgNgPQgOgOgdAAQgfAAgpAUIgMgfQATgKAXgGQAYgGAVAAQAvAAAWAVQAXAVAAAuIAACwIgeAAIgIglIgCAAQgTAZgUAJQgUAIgaAAQgoAAgVgUgAAZADQgtACgVANQgVANAAAbQAAAWANALQANAMAYAAQAjAAAVgVQAVgUAAglIAAgXg");
	this.shape_1.setTransform(159.9,244.4,0.888,0.888);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ACTCFIAAioQAAgfgOgRQgNgPgdAAQglAAgRAVQgSAVAAAtIAACQIglAAIAAioQgBgfgNgRQgOgPgcAAQglAAgRAWQgSAYAAAxIAACIIgoAAIAAkEIAhAAIAHAkIABAAQALgUAVgKQAVgLAZAAQA9AAARAtIACAAQAMgVAWgMQAXgMAbAAQAsAAAYAXQAVAXAAAyIAACpg");
	this.shape_2.setTransform(130.5,244.1,0.888,0.888);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhMBkQghgjAAg/QAAg+AfglQAfgmAzAAQAwAAAeAhQAcAhAAA0IAAAYIiyAAQABAtAWAZQAWAYAmAAQAqAAAqgSIAAAkQgWAJgSADQgUAEgZABQg4AAgigkgAgthRQgTAWgDAkICHAAQAAgmgRgUQgRgUgfAAQgdAAgTAUg");
	this.shape_3.setTransform(90.8,244.4,0.888,0.888);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ABFC6IAAiqQAAgegOgPQgOgQgggBQgnAAgTAXQgTAWAAAyIAACJIgoAAIAAlyIAoAAIAABwQAAAQgCASIACAAQALgSAWgMQAXgLAZAAQAvAAAZAXQAYAXAAAvIAACsg");
	this.shape_4.setTransform(67.3,239.5,0.888,0.888);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgnBUIAAibIglAAIAAgTIAlgRIARg4IAWAAIAAA+IBLAAIAAAeIhLAAIAACYQAAAYAKANQAMANATAAIAUgCIAQgDIAAAfQgFACgOACQgLACgMABQhKAAAAhQg");
	this.shape_5.setTransform(48.1,241.9,0.888,0.888);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhMBkQghgjAAg/QgBg+AgglQAfgmAzAAQAwABAeAgQAdAhgBA0IAAAYIiyAAQABAtAWAZQAXAYAmAAQAqAAApgSIAAAjQgWAKgRAEQgVADgZAAQg4AAgigjgAgthRQgTAWgDAjICHAAQAAglgRgUQgQgUggAAQgdAAgTAUg");
	this.shape_6.setTransform(163,192.2,0.888,0.888);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhMBkQghgjAAg/QAAg+AfglQAfgmAzAAQAwABAeAgQAcAhAAA0IAAAYIiyAAQABAuAWAYQAWAYAmAAQArAAApgSIAAAjQgWAKgSAEQgUADgZAAQg4AAgigjgAgthRQgTAWgDAjICHAAQAAgkgRgVQgRgUgfAAQgdAAgTAUg");
	this.shape_7.setTransform(140.6,192.2,0.888,0.888);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhbB3IAAglQASAJAWAGQAXAGAUAAQAcAAARgKQARgKAAgVQAAgPgNgLQgNgKglgQQglgLgPgKQgQgLgHgNQgIgMAAgSQAAghAagSQAbgSArgBQAqAAApASIgOAhQgngRghAAQgaAAgPAJQgOAJAAAPQAAAKAFAIQAGAHAMAHQAKAGAiANQAvARAQAQQAQASAAAZQABAlgcATQgbAUgvAAQg1AAgdgQg");
	this.shape_8.setTransform(120.1,192.2,0.888,0.888);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag+B3QgbgQgPggQgPgfAAgoQAAg/AggjQAhglA2AAQA3AAAgAlQAhAlAAA9QAAA/ghAkQgfAlg4gBQgjAAgbgQgAg6hLQgUAZAAAyQAAAyAUAaQAUAbAmAAQAmAAAUgbQAVgagBgyQABgxgVgZQgTgagnAAQgngBgTAag");
	this.shape_9.setTransform(89.3,192.2,0.888,0.888);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgmBTIAAiZIgmAAIAAgUIAmgRIAQg3IAWAAIAAA9IBLAAIAAAfIhLAAIAACXQAAAYAKANQAMANATAAIAVgCIAPgDIAAAeQgFADgOACQgLACgMAAQhKAAABhQg");
	this.shape_10.setTransform(70.4,189.7,0.888,0.888);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhMBkQghgjAAg/QAAg9AfgmQAfglAzAAQAxgBAdAhQAcAhAAA1IAAAXIiyAAQABAvAWAXQAWAYAmAAQArAAApgSIAAAjQgWAKgSADQgUAFgZAAQg4AAgigkgAgthQQgTAVgDAkICHAAQAAglgRgVQgRgUgfAAQgdAAgTAVg");
	this.shape_11.setTransform(196.4,139.9,0.888,0.888);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhKCFIAAkEIAhAAIAFAwIABAAQAPgZAUgOQATgOAZAAQARAAAOADIgFAlQgQgDgNgBQggABgVAZQgWAbAAAlIAACLg");
	this.shape_12.setTransform(178.9,139.7,0.888,0.888);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhMBkQghgjAAg/QAAg9AegmQAgglAzAAQAxgBAcAhQAdAhAAA1IAAAXIizAAQACAvAWAXQAXAYAmAAQAqAAApgSIAAAjQgWAKgSADQgUAFgZAAQg4AAgigkgAgthQQgSATgFAmICIAAQAAglgRgVQgRgUgfAAQgdAAgTAVg");
	this.shape_13.setTransform(158.4,139.9,0.888,0.888);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("ABFC5IAAipQAAgegOgQQgPgQgfAAQgnABgTAWQgUAXAAAwIAACJIgnAAIAAlyIAnAAIAABxQAAAWgCAMIADAAQAMgTAVgLQAXgLAZAAQAvAAAZAXQAYAYAAAuIAACrg");
	this.shape_14.setTransform(134.9,135.1,0.888,0.888);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AA4C5Ihbh7IgdAZIAABiIgoAAIAAlyIAoAAIgCDsIACAAQALgQAUgWIBThYIAvAAIhpBvIBxCVg");
	this.shape_15.setTransform(104.4,135.1,0.888,0.888);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Ag+BlQgfgkAAhAQAAhAAggjQAfgkA5AAQATgBATAFQAUAEAJAFIgMAiQgPgGgOgDQgOgDgNAAQhOAAAABkQAAAxAUAZQAUAaAjAAQAhAAAjgPIAAAkQgbAOgoAAQg3AAgfgjg");
	this.shape_16.setTransform(83.5,139.9,0.888,0.888);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgSCzIAAkEIAlAAIAAEEgAgQiEQgGgGAAgOQAAgOAGgGQAIgGAIAAQAJAAAHAGQAHAHAAANQAAANgHAHQgGAHgKAAQgJAAgHgHg");
	this.shape_17.setTransform(69.2,135.6,0.888,0.888);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgSC5IAAlyIAlAAIAAFyg");
	this.shape_18.setTransform(60.3,135.1,0.888,0.888);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AhZCEQgqguAAhWQAAg1AVgpQAUgoAmgWQAmgWAyAAQA4AAAoAUIgRAjQgngTgpAAQg3AAgiAmQghAoAABAQAABEAgAmQAhAlA5AAQAlAAAugNIAAAkQgkANg1AAQhMAAgqgvg");
	this.shape_19.setTransform(43.7,136.1,0.888,0.888);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FAE030").ss(5,1,1).p("AoDn6QEiApDQBpQHyD8AjJn");
	this.shape_20.setTransform(51.6,50.8);

	this.addChild(this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-2.5,-2.5,208.8,269);
p.frameBounds = [rect];


(lib.location = function() {
	this.initialize();

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABYCoIAAjUQAAgogTgVQgSgUgnAAQgyAAgZAcQgYAcAABBIAACsIgyAAIAAlJIAoAAIAJAtIADAAQAOgYAcgOQAdgNAfAAQA9AAAeAdQAeAcAABAIAADWg");
	this.shape.setTransform(153.3,121.6,0.685,0.685);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhPCXQgigVgTgnQgTgnAAg0QAAhQApgtQAoguBGABQBFgBAqAvQApAuAABOQAABQgpAuQgqAthFABQgtgBgigUgAhKhgQgZAhAAA/QAAA/AZAhQAaAhAwAAQAwAAAaghQAaghAAg/QAAg9gagiQgaghgwAAQgwAAgaAgg");
	this.shape_1.setTransform(129.3,121.8,0.685,0.685);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgYDjIAAlKIAwAAIAAFKgAgUinQgIgIAAgSQAAgQAIgJQAJgIALAAQALAAAJAJQAJAIAAAQQAAASgJAIQgIAIgMAAQgMAAgIgIg");
	this.shape_2.setTransform(113.1,117.5,0.685,0.685);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgxBpIAAjDIgwAAIAAgYIAwgVIAVhHIAcAAIAABNIBfAAIAAAnIhfAAIAADCQAAAeANAQQAPAPAYABIAagCIAUgFIAAAmQgIAEgQADQgQADgNAAQheAAAAhmg");
	this.shape_3.setTransform(102.1,119.4,0.685,0.685);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhoCSQgcgaAAgvQAAhiCfgFIA4gCIAAgUQAAgngQgTQgRgTglAAQgnAAg1AaIgPgnQAYgNAdgIQAegHAbAAQA7AAAdAaQAcAbABA6IAADgIglAAIgKgvIgDAAQgYAfgZALQgaALgiAAQgxAAgdgZgAAgAEQg5ACgcARQgaAQAAAjQAAAbARAOQAQAPAeAAQAtAAAagaQAbgaAAguIAAgeg");
	this.shape_4.setTransform(84.2,121.8,0.685,0.685);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhPB/QgngsAAhRQAAhSAogtQAngtBJAAQAZAAAXAEQAYAGANAHIgPAqQgTgHgRgEQgUgEgPAAQhjAAAAB/QAAA+AYAfQAZAiAugBQAqAAAsgSIAAAtQgiASgyAAQhHAAgngtg");
	this.shape_5.setTransform(65.5,121.8,0.685,0.685);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhPCXQgigVgTgnQgTgoAAgzQAAhQAogtQApguBGABQBFgBAqAvQApAuAABOQAABRgpAtQgpAthGABQgsgBgjgUgAhKhgQgZAhAAA/QAAA/AZAhQAaAhAwAAQAwAAAaghQAaggAAhAQAAg+gaghQgaghgwAAQgwAAgaAgg");
	this.shape_6.setTransform(44.1,121.8,0.685,0.685);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgYDrIAAnVIAxAAIAAHVg");
	this.shape_7.setTransform(27.9,117,0.685,0.685);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhoCSQgcgZAAgwQAAhiCfgFIA4gCIAAgUQAAgogRgSQgQgTglAAQgnAAg1AaIgQgnQAagNAcgIQAegHAbAAQA7AAAdAaQAdAbAAA6IAADgIgmAAIgKgvIgCAAQgZAfgYALQgaALgiAAQgxAAgdgZgAAgAEQg6ACgaARQgbAQAAAjQAAAbARAOQARAPAdAAQAtAAAagaQAbgaABguIAAgeg");
	this.shape_8.setTransform(3,121.8,0.685,0.685);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhsDCQgkgtAAhSQAAhQAkgtQAkguBBAAQBCAAAkAxIADAAIgCgYIgBieIAyAAIAAHVIgoAAIgHgtIgDAAQgjAzhDAAQhBAAgkgsgAhFgbQgXAfAABAQAAA/AXAhQAXAgAtAAQAyAAAXgcQAXgdAAg9IAAgLQAAhEgXgfQgXgegyAAQgsAAgYAjg");
	this.shape_9.setTransform(124,66.3,0.685,0.685);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhtDCQgkgtAAhSQAAhRAlgsQAkguBBAAQBBAAAlAxIADAAIgCgYIgBieIAzAAIAAHVIgqAAIgGgtIgDAAQgiAzhEAAQhAAAgmgsgAhFgbQgYAgABA/QgBA+AYAiQAXAgAtAAQAyAAAXgcQAXgcAAg+IAAgLQAAhFgYgeQgWgegyAAQgsAAgYAjg");
	this.shape_10.setTransform(100,66.3,0.685,0.685);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhoCSQgcgaAAgvQAAhiCfgFIA4gCIAAgUQAAgngQgTQgRgTglAAQgnAAg1AaIgQgnQAZgNAdgIQAegHAbAAQA7AAAdAaQAcAbABA6IAADgIglAAIgKgvIgDAAQgYAfgZALQgbALghAAQgxAAgdgZgAAgAEQg5ACgcARQgaAQAAAjQAAAbAQAOQARAPAeAAQAtAAAagaQAbgaAAguIAAgeg");
	this.shape_11.setTransform(77.1,70.9,0.685,0.685);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhPCXQgigWgTgnQgTgnAAgzQAAhQAoguQApgsBHgBQBFABApAtQApAvAABOQAABRgpAsQgpAvhGgBQgtAAgigUgAhKhgQgZAhAAA/QAAA+AZAiQAaAhAwAAQAxAAAaghQAZghAAg/QAAg+gZghQgaghgxAAQgxAAgZAgg");
	this.shape_12.setTransform(46.2,70.9,0.685,0.685);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgxBpIAAjDIgwAAIAAgYIAwgVIAVhHIAcAAIAABNIBfAAIAAAnIhfAAIAADBQAAAdANARQAPARAYgBIAagBIAUgFIAAAnQgIAEgQACQgQADgNAAQheAAAAhmg");
	this.shape_13.setTransform(27.8,68.4,0.685,0.685);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhgB/QgrgtAAhQQAAhPAoguQAngwBBAAQA+AAAlAqQAkApAABDIAAAdIjjAAQACA7AcAeQAbAfAyAAQA1gBA1gWIAAAtQgcAMgXAFQgaAEgfABQhHAAgrgtgAg6hmQgXAagFAuICsAAQAAgwgVgZQgVgagoAAQgmABgYAag");
	this.shape_14.setTransform(154.6,19.9,0.685,0.685);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AheCpIAAlLIApAAIAGA+IACAAQAUghAZgRQAYgSAfAAQAYAAAQAEIgHAvQgUgFgQAAQgoAAgbAhQgdAhAAAwIAACxg");
	this.shape_15.setTransform(137.5,19.7,0.685,0.685);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhgB/QgrgtAAhQQAAhPAoguQAngwBBAAQA+AAAkAqQAlApAABDIAAAdIjjAAQACA8AcAdQAbAfAyAAQA2gBAzgWIAAAtQgZALgZAGQgaAEgfABQhIAAgqgtgAg6hmQgXAZgFAvICsAAQAAgwgVgZQgWgagnAAQgmABgYAag");
	this.shape_16.setTransform(117.5,19.9,0.685,0.685);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("ABYDrIAAjXQAAgmgTgUQgSgUgnAAQgzAAgYAcQgYAdAAA/IAACtIgyAAIAAnVIAyAAIAACPQAAAcgDAOIAEAAQAPgYAbgNQAbgOAhAAQA+AAAeAdQAeAcAAA+IAADYg");
	this.shape_17.setTransform(94.6,15.1,0.685,0.685);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("ABIDrIh0idIglAhIAAB8IgyAAIAAnVIAyAAIAAD4IgDAzIADAAQANgTAagdIBphwIA8AAIiECMICNC+g");
	this.shape_18.setTransform(64.8,15.1,0.685,0.685);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AhPB/QgogtAAhQQAAhSApgtQAngtBJgBQAZABAXAFQAYAFANAGIgPAsQgTgIgSgDQgTgFgPAAQhkAAAAB/QAAA9AaAgQAYAhAuABQAqAAArgSIAAAsQghARgzABQhFgBgogsg");
	this.shape_19.setTransform(44.5,19.9,0.685,0.685);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgYDjIAAlKIAwAAIAAFKgAgUinQgIgJAAgRQAAgRAIgIQAKgIAKAAQALAAAKAIQAIAJAAAQQAAARgIAJQgJAIgMAAQgLAAgJgIg");
	this.shape_20.setTransform(30.5,15.7,0.685,0.685);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgXDrIAAnVIAvAAIAAHVg");
	this.shape_21.setTransform(21.8,15.1,0.685,0.685);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AhxCnQg1g7AAhsQAAhDAag0QAZg0AxgbQAvgcBAAAQBFAAA1AZIgWAsQgxgXgzAAQhHAAgrAwQgqAyAABSQAABWApAwQApAvBJAAQAvAAA7gRIAAAtQgvAShDAAQhfAAg2g8g");
	this.shape_22.setTransform(5.7,16.1,0.685,0.685);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FAE030").ss(5,1,1).p("AsVFDQWjCWCIsy");
	this.shape_23.setTransform(238.2,36.7);

	this.addChild(this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-6.1,-1,325.8,134.6);
p.frameBounds = [rect];


(lib.Path_1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkXEXIAAouIIuAAIAAIug");
	this.shape.setTransform(28,28);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,56,56);
p.frameBounds = [rect];


(lib.Path_1_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AkXEXIAAouIIuAAIAAIug");
	this.shape_1.setTransform(28,28);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,56,56);
p.frameBounds = [rect];


(lib.Path_1_2 = function() {
	this.initialize();

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AkXEXIAAouIIuAAIAAIug");
	this.shape_2.setTransform(28,28);

	this.addChild(this.shape_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,56,56);
p.frameBounds = [rect];


(lib.Path = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkXEXIAAouIIuAAIAAIug");
	this.shape.setTransform(28,28);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,56,56);
p.frameBounds = [rect];


// stage content:
(lib.tutorial = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.instance = new lib.location("synched",0);
	this.instance.setTransform(200.4,168.9,1,1,0,0,0,154.8,41.6);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(94).to({_off:false},0).to({y:78.9,alpha:1},10,cjs.Ease.get(1)).to({y:88.9},2,cjs.Ease.get(1)).wait(96).to({startPosition:0},0).to({y:78.9},2).to({y:168.9,alpha:0},10).wait(8));

	// Layer 5
	this.instance_1 = new lib.swipe("synched",0);
	this.instance_1.setTransform(375.1,388.1,1,1,0,0,0,117.8,73.8);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(104).to({_off:false},0).to({y:358.1,alpha:1},7,cjs.Ease.get(1)).to({y:368.1},2,cjs.Ease.get(1)).wait(99).to({startPosition:0},0).to({y:358.1},2).to({y:388.1,alpha:0},7).wait(1));

	// FlashAICB
	this.instance_2 = new lib.map("synched",0);
	this.instance_2.setTransform(620.9,210.6,1,1,0,0,0,108.8,110.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).to({x:615.9,y:128.6,alpha:1},9,cjs.Ease.get(-1)).to({y:138.6},2).wait(63).to({startPosition:0},0).to({y:128.6},2).to({x:620.9,y:210.6,alpha:0},9).to({_off:true},1).wait(127));

	// FlashAICB
	this.instance_3 = new lib.menu("synched",0);
	this.instance_3.setTransform(132.5,209.1,1,1,0,0,0,118.7,109.6);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:127.1,alpha:1},9,cjs.Ease.get(-1)).to({y:137.1},2).wait(65).to({startPosition:0},0).to({y:127.1},2).to({y:209.1,alpha:0},9).to({_off:true},1).wait(134));

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhlALIAAgVIDLAAIAAAVg");
	this.shape.setTransform(253.4,35.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhlALIAAgVIDLAAIAAAVg");
	this.shape_1.setTransform(253.4,30.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhlALIAAgVIDLAAIAAAVg");
	this.shape_2.setTransform(253.4,24.6);

	this.text = new cjs.Text("New York", "20px 'Simplifica'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 22;
	this.text.lineWidth = 70;
	this.text.setTransform(371.7,18.3,1.134,1.134);

	this.text_1 = new cjs.Text("º", "18px 'Simplifica'", "#FFFFFF");
	this.text_1.lineHeight = 18;
	this.text_1.setTransform(495.4,99.1,1.134,1.134);

	this.text_2 = new cjs.Text("9", "18px 'Simplifica'", "#FFFFFF");
	this.text_2.lineHeight = 18;
	this.text_2.setTransform(488.2,99.1,1.134,1.134);

	this.text_3 = new cjs.Text("1", "18px 'Simplifica'", "#FFFFFF");
	this.text_3.lineHeight = 18;
	this.text_3.setTransform(483.1,99.1,1.134,1.134);

	this.text_4 = new cjs.Text("º", "18px 'Simplifica'", "#FFFFFF");
	this.text_4.lineHeight = 18;
	this.text_4.setTransform(449.2,99.1,1.134,1.134);

	this.text_5 = new cjs.Text("2", "18px 'Simplifica'", "#FFFFFF");
	this.text_5.lineHeight = 18;
	this.text_5.setTransform(441.6,99.1,1.134,1.134);

	this.text_6 = new cjs.Text("2", "18px 'Simplifica'", "#FFFFFF");
	this.text_6.lineHeight = 18;
	this.text_6.setTransform(434.1,99.1,1.134,1.134);

	this.text_7 = new cjs.Text("º", "18px 'Simplifica'", "#FFFFFF");
	this.text_7.lineHeight = 18;
	this.text_7.setTransform(402.2,99.1,1.134,1.134);

	this.text_8 = new cjs.Text("5", "18px 'Simplifica'", "#FFFFFF");
	this.text_8.lineHeight = 18;
	this.text_8.setTransform(395,99.1,1.134,1.134);

	this.text_9 = new cjs.Text("1", "18px 'Simplifica'", "#FFFFFF");
	this.text_9.lineHeight = 18;
	this.text_9.setTransform(390,99.1,1.134,1.134);

	this.text_10 = new cjs.Text("º", "18px 'Simplifica'", "#FFFFFF");
	this.text_10.lineHeight = 18;
	this.text_10.setTransform(354.8,99.1,1.134,1.134);

	this.text_11 = new cjs.Text("7", "18px 'Simplifica'", "#FFFFFF");
	this.text_11.lineHeight = 18;
	this.text_11.setTransform(348.9,99.1,1.134,1.134);

	this.text_12 = new cjs.Text("º", "18px 'Simplifica'", "#FFFFFF");
	this.text_12.lineHeight = 18;
	this.text_12.setTransform(310.6,99.1,1.134,1.134);

	this.text_13 = new cjs.Text("2", "18px 'Simplifica'", "#FFFFFF");
	this.text_13.lineHeight = 18;
	this.text_13.setTransform(303,99.1,1.134,1.134);

	this.text_14 = new cjs.Text("2", "18px 'Simplifica'", "#FFFFFF");
	this.text_14.lineHeight = 18;
	this.text_14.setTransform(296.4,99.1,1.134,1.134);

	this.text_15 = new cjs.Text("º", "18px 'Simplifica'", "#FFFFFF");
	this.text_15.lineHeight = 18;
	this.text_15.setTransform(262.8,99.1,1.134,1.134);

	this.text_16 = new cjs.Text("0", "18px 'Simplifica'", "#FFFFFF");
	this.text_16.lineHeight = 18;
	this.text_16.setTransform(255.6,99.1,1.134,1.134);

	this.text_17 = new cjs.Text("1", "18px 'Simplifica'", "#FFFFFF");
	this.text_17.lineHeight = 18;
	this.text_17.setTransform(250.5,99.1,1.134,1.134);

	this.text_18 = new cjs.Text("14º", "96px 'Simplifica'", "#FFFFFF");
	this.text_18.lineHeight = 98;
	this.text_18.lineWidth = 76;
	this.text_18.setTransform(264.6,185.6,1.134,1.134);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A0C9EA").s().p("AgJAdIAAg5IATAAIAAA5g");
	this.shape_3.setTransform(447.3,141.6,0.425,0.425);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#A0C9EA").s().p("AgJAdIAAg5IASAAIAAA5g");
	this.shape_4.setTransform(442.2,141.6,0.425,0.425);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A0C9EA").s().p("AgIAdIAAg5IASAAIAAA5g");
	this.shape_5.setTransform(449,141.6,0.425,0.425);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#A0C9EA").s().p("AgJAdIAAg5IATAAIAAA5g");
	this.shape_6.setTransform(443.9,141.6,0.425,0.425);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#A0C9EA").s().p("AgJATIAAglIASAAIAAAlg");
	this.shape_7.setTransform(450.7,141.1,0.425,0.425);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#A0C9EA").s().p("AgIATIAAglIASAAIAAAlg");
	this.shape_8.setTransform(440.5,141.1,0.425,0.425);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#A0C9EA").s().p("AgIAoIAAhOIARAAIAABOg");
	this.shape_9.setTransform(445.6,142,0.425,0.425);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ah6CCQggAAgXgXQgXgWAAghQAAgdATgWQATgTAbgFIgBgJQAAgUAPgQQAOgOAWAAQAVAAAPARQAKgdAZgRQAXgSAfAAQAoAAAdAdQAcAcABAoIgBAJQAbAGATATQASAWAAAcQAAAhgXAWQgXAXggAAg");
	this.shape_10.setTransform(445.9,133.9,0.425,0.425);

	this.instance_4 = new lib.Path_1_1();
	this.instance_4.setTransform(446,136.3,0.425,0.425,0,0,0,27.9,28.6);
	this.instance_4.alpha = 0;

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhwB4QgeAAgWgVQgUgVAAgeQgBgbASgUQARgSAagEIgBgJQAAgTANgNQAOgOATAAQAUAAAOAPQAKgaAWgPQAWgRAcAAQAlAAAbAaQAaAbAAAlIAAAIQAZAFAQASQASAUgBAaQABAegWAVQgVAVgeAAg");
	this.shape_11.setTransform(493.2,136.9,0.425,0.425);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FAE030").s().p("AhBAvQgNgUAAgYQgBgfAYgYQAXgXAgAAQAgAAAYAXQAXAYABAfIgBAIQgOgFgMAAQgaAAgTARQgQARgDAaQgKADgKAHQgVgJgNgUg");
	this.shape_12.setTransform(487.5,132.5,0.425,0.425);

	this.instance_5 = new lib.Path_1_2();
	this.instance_5.setTransform(492.6,136.3,0.425,0.425,0,0,0,27.9,28.6);
	this.instance_5.alpha = 0;

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#A0C9EA").s().p("AgJAdIAAg5IATAAIAAA5g");
	this.shape_13.setTransform(354.1,141.6,0.425,0.425);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#A0C9EA").s().p("AgJAdIAAg5IASAAIAAA5g");
	this.shape_14.setTransform(349,141.6,0.425,0.425);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#A0C9EA").s().p("AgIAdIAAg5IASAAIAAA5g");
	this.shape_15.setTransform(355.8,141.6,0.425,0.425);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#A0C9EA").s().p("AgJAdIAAg5IATAAIAAA5g");
	this.shape_16.setTransform(350.7,141.6,0.425,0.425);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#A0C9EA").s().p("AgJATIAAglIASAAIAAAlg");
	this.shape_17.setTransform(357.5,141.1,0.425,0.425);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#A0C9EA").s().p("AgIATIAAglIASAAIAAAlg");
	this.shape_18.setTransform(347.3,141.1,0.425,0.425);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#A0C9EA").s().p("AgIAoIAAhOIARAAIAABOg");
	this.shape_19.setTransform(352.4,142,0.425,0.425);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("Ah6CCQggAAgXgXQgXgWAAghQAAgdATgWQATgTAbgFIgBgJQAAgUAPgQQAOgOAWAAQAVAAAPARQAKgdAZgRQAXgSAfAAQAoAAAdAdQAcAcABAoIgBAJQAbAGATATQASAWAAAcQAAAhgXAWQgXAXggAAg");
	this.shape_20.setTransform(352.7,133.9,0.425,0.425);

	this.instance_6 = new lib.Path_1_1();
	this.instance_6.setTransform(352.4,136.3,0.425,0.425,0,0,0,26.9,28.6);
	this.instance_6.alpha = 0;

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#A0C9EA").s().p("AgJAdIAAg5IATAAIAAA5g");
	this.shape_21.setTransform(260.4,141.6,0.425,0.425);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#A0C9EA").s().p("AgJAdIAAg5IASAAIAAA5g");
	this.shape_22.setTransform(255.3,141.6,0.425,0.425);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#A0C9EA").s().p("AgIAdIAAg5IASAAIAAA5g");
	this.shape_23.setTransform(262.1,141.6,0.425,0.425);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#A0C9EA").s().p("AgJAdIAAg5IATAAIAAA5g");
	this.shape_24.setTransform(257,141.6,0.425,0.425);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#A0C9EA").s().p("AgJATIAAglIASAAIAAAlg");
	this.shape_25.setTransform(263.8,141.1,0.425,0.425);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#A0C9EA").s().p("AgIATIAAglIASAAIAAAlg");
	this.shape_26.setTransform(253.6,141.1,0.425,0.425);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#A0C9EA").s().p("AgIAoIAAhOIARAAIAABOg");
	this.shape_27.setTransform(258.7,142,0.425,0.425);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("Ah6CCQggAAgXgXQgXgWAAghQAAgdATgWQATgTAbgFIgBgJQAAgUAPgQQAOgOAWAAQAVAAAPARQAKgdAZgRQAXgSAfAAQAoAAAdAdQAcAcABAoIgBAJQAbAGATATQASAWAAAcQAAAhgXAWQgXAXggAAg");
	this.shape_28.setTransform(259.1,133.9,0.425,0.425);

	this.instance_7 = new lib.Path_1_1();
	this.instance_7.setTransform(259.7,136.3,0.425,0.425,0,0,0,29.2,28.6);
	this.instance_7.alpha = 0;

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AhwB4QgeAAgWgVQgUgVAAgeQgBgbASgUQARgSAagEIgBgJQAAgTANgNQAOgOATAAQAUAAAOAPQAKgaAWgPQAWgRAcAAQAlAAAbAaQAaAbAAAlIAAAIQAZAFAQASQASAUgBAaQABAegWAVQgVAVgeAAg");
	this.shape_29.setTransform(399.7,136.9,0.425,0.425);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FAE030").s().p("AhBAvQgNgUAAgYQgBgfAYgYQAXgXAgAAQAgAAAYAXQAXAYABAfIgBAIQgOgFgMAAQgaAAgTARQgQARgDAaQgKADgKAHQgVgJgNgUg");
	this.shape_30.setTransform(394,132.5,0.425,0.425);

	this.instance_8 = new lib.Path_1_2();
	this.instance_8.setTransform(399,136.3,0.425,0.425,0,0,0,27.8,28.6);
	this.instance_8.alpha = 0;

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FAE030").s().p("Ag+A/QgagagBglQABgkAagaQAagaAkgBQAlABAaAaQAbAagBAkQABAlgbAaQgaAaglAAQgkAAgagag");
	this.shape_31.setTransform(306.2,136,0.425,0.425);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FAE030").s().p("AgiAjQgDgDAAgEQAAgEADgDIA2g3QADgDAFAAQAEAAADADQADADAAAFQAAAEgDADIg3A2QgDADgEAAQgEAAgDgDg");
	this.shape_32.setTransform(311.6,130.6,0.425,0.425);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FAE030").s().p("AgiAjQgDgDAAgEQAAgFADgDIA3g2QADgDAEAAQAEAAADADQADADAAAEQAAAEgDADIg2A3QgDADgEAAQgFAAgDgDg");
	this.shape_33.setTransform(300.8,141.4,0.425,0.425);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FAE030").s().p("AAVAjIg3g2QgDgDAAgEQAAgFADgDQADgDAFAAQAEAAADADIA2A3QADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDg");
	this.shape_34.setTransform(300.8,130.6,0.425,0.425);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FAE030").s().p("AAUAjIg2g3QgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADIA3A2QADADAAAFQAAAEgDADQgDADgEAAQgFAAgDgDg");
	this.shape_35.setTransform(311.6,141.4,0.425,0.425);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FAE030").s().p("AgmAJQgFABgCgDQgDgDAAgEIAAAAQAAgCADgEQACgDAFAAIBOAAQADAAADADQAEAEAAACIAAAAQAAAEgEADQgDADgDgBg");
	this.shape_36.setTransform(298.6,136,0.425,0.425);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FAE030").s().p("AgmAJQgFABgCgDQgDgDAAgEIAAAAQAAgCADgEQACgDAFAAIBOAAQAEAAACADQAEAEAAACIAAAAQAAAEgEADQgCADgEgBg");
	this.shape_37.setTransform(313.9,136,0.425,0.425);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FAE030").s().p("AgGAvQgDgDAAgEIAAhOQAAgFADgCQAEgDACAAQADAAAEADQACACAAAFIAABOQAAAEgCADQgEADgDAAQgCAAgEgDg");
	this.shape_38.setTransform(306.2,143.7,0.425,0.425);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FAE030").s().p("AgGAvQgDgDAAgEIAAhOQAAgFADgCQAEgDACAAQADAAAEADQACACAAAFIAABOQAAAEgCADQgEADgDAAQgCAAgEgDg");
	this.shape_39.setTransform(306.2,128.4,0.425,0.425);

	this.instance_9 = new lib.Path();
	this.instance_9.setTransform(305.9,136.3,0.425,0.425,0,0,0,27.3,28.6);
	this.instance_9.alpha = 0;

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#A0C9EA").s().p("AgJAdIAAg5IATAAIAAA5g");
	this.shape_40.setTransform(447.3,522.6,0.425,0.425);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#A0C9EA").s().p("AgJAdIAAg5IASAAIAAA5g");
	this.shape_41.setTransform(442.2,522.6,0.425,0.425);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#A0C9EA").s().p("AgIAdIAAg5IASAAIAAA5g");
	this.shape_42.setTransform(449,522.6,0.425,0.425);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#A0C9EA").s().p("AgJAdIAAg5IATAAIAAA5g");
	this.shape_43.setTransform(443.9,522.6,0.425,0.425);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#A0C9EA").s().p("AgJATIAAglIASAAIAAAlg");
	this.shape_44.setTransform(450.7,522.1,0.425,0.425);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#A0C9EA").s().p("AgIATIAAglIASAAIAAAlg");
	this.shape_45.setTransform(440.5,522.1,0.425,0.425);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#A0C9EA").s().p("AgIAoIAAhOIARAAIAABOg");
	this.shape_46.setTransform(445.6,523,0.425,0.425);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("Ah6CCQggAAgXgXQgXgWAAghQAAgdATgWQATgTAbgFIgBgJQAAgUAPgQQAOgOAWAAQAVAAAPARQAKgdAZgRQAXgSAfAAQAoAAAdAdQAcAcABAoIgBAJQAbAGATATQASAWAAAcQAAAhgXAWQgXAXggAAg");
	this.shape_47.setTransform(445.9,514.9,0.425,0.425);

	this.instance_10 = new lib.Path_1_1();
	this.instance_10.setTransform(446,517.4,0.425,0.425,0,0,0,27.9,28.8);
	this.instance_10.alpha = 0;

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AhwB4QgeAAgWgVQgUgVAAgeQgBgbASgUQARgSAagEIgBgJQAAgTANgNQAOgOATAAQAUAAAOAPQAKgaAWgPQAWgRAcAAQAlAAAbAaQAaAbAAAlIAAAIQAZAFAQASQASAUgBAaQABAegWAVQgVAVgeAAg");
	this.shape_48.setTransform(493.2,517.9,0.425,0.425);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FAE030").s().p("AhBAvQgNgUAAgYQgBgfAYgYQAXgXAgAAQAgAAAYAXQAXAYABAfIgBAIQgOgFgMAAQgaAAgTARQgQARgDAaQgKADgKAHQgVgJgNgUg");
	this.shape_49.setTransform(487.5,513.5,0.425,0.425);

	this.instance_11 = new lib.Path_1_2();
	this.instance_11.setTransform(492.6,517.4,0.425,0.425,0,0,0,27.9,28.8);
	this.instance_11.alpha = 0;

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#A0C9EA").s().p("AgJAdIAAg5IATAAIAAA5g");
	this.shape_50.setTransform(354.1,522.6,0.425,0.425);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#A0C9EA").s().p("AgJAdIAAg5IASAAIAAA5g");
	this.shape_51.setTransform(349,522.6,0.425,0.425);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#A0C9EA").s().p("AgIAdIAAg5IASAAIAAA5g");
	this.shape_52.setTransform(355.8,522.6,0.425,0.425);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#A0C9EA").s().p("AgJAdIAAg5IATAAIAAA5g");
	this.shape_53.setTransform(350.7,522.6,0.425,0.425);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#A0C9EA").s().p("AgJATIAAglIASAAIAAAlg");
	this.shape_54.setTransform(357.5,522.1,0.425,0.425);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#A0C9EA").s().p("AgIATIAAglIASAAIAAAlg");
	this.shape_55.setTransform(347.3,522.1,0.425,0.425);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#A0C9EA").s().p("AgIAoIAAhOIARAAIAABOg");
	this.shape_56.setTransform(352.4,523,0.425,0.425);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("Ah6CCQggAAgXgXQgXgWAAghQAAgdATgWQATgTAbgFIgBgJQAAgUAPgQQAOgOAWAAQAVAAAPARQAKgdAZgRQAXgSAfAAQAoAAAdAdQAcAcABAoIgBAJQAbAGATATQASAWAAAcQAAAhgXAWQgXAXggAAg");
	this.shape_57.setTransform(352.7,514.9,0.425,0.425);

	this.instance_12 = new lib.Path_1_1();
	this.instance_12.setTransform(352.4,517.4,0.425,0.425,0,0,0,26.9,28.8);
	this.instance_12.alpha = 0;

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#A0C9EA").s().p("AgJAdIAAg5IATAAIAAA5g");
	this.shape_58.setTransform(260.4,522.6,0.425,0.425);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#A0C9EA").s().p("AgJAdIAAg5IASAAIAAA5g");
	this.shape_59.setTransform(255.3,522.6,0.425,0.425);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#A0C9EA").s().p("AgIAdIAAg5IASAAIAAA5g");
	this.shape_60.setTransform(262.1,522.6,0.425,0.425);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#A0C9EA").s().p("AgJAdIAAg5IATAAIAAA5g");
	this.shape_61.setTransform(257,522.6,0.425,0.425);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#A0C9EA").s().p("AgJATIAAglIASAAIAAAlg");
	this.shape_62.setTransform(263.8,522.1,0.425,0.425);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#A0C9EA").s().p("AgIATIAAglIASAAIAAAlg");
	this.shape_63.setTransform(253.6,522.1,0.425,0.425);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#A0C9EA").s().p("AgIAoIAAhOIARAAIAABOg");
	this.shape_64.setTransform(258.7,523,0.425,0.425);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("Ah6CCQggAAgXgXQgXgWAAghQAAgdATgWQATgTAbgFIgBgJQAAgUAPgQQAOgOAWAAQAVAAAPARQAKgdAZgRQAXgSAfAAQAoAAAdAdQAcAcABAoIgBAJQAbAGATATQASAWAAAcQAAAhgXAWQgXAXggAAg");
	this.shape_65.setTransform(259.1,514.9,0.425,0.425);

	this.instance_13 = new lib.Path_1_1();
	this.instance_13.setTransform(259.7,517.4,0.425,0.425,0,0,0,29.2,28.8);
	this.instance_13.alpha = 0;

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AhwB4QgeAAgWgVQgUgVAAgeQgBgbASgUQARgSAagEIgBgJQAAgTANgNQAOgOATAAQAUAAAOAPQAKgaAWgPQAWgRAcAAQAlAAAbAaQAaAbAAAlIAAAIQAZAFAQASQASAUgBAaQABAegWAVQgVAVgeAAg");
	this.shape_66.setTransform(399.7,517.9,0.425,0.425);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FAE030").s().p("AhBAvQgNgUAAgYQgBgfAYgYQAXgXAgAAQAgAAAYAXQAXAYABAfIgBAIQgOgFgMAAQgaAAgTARQgQARgDAaQgKADgKAHQgVgJgNgUg");
	this.shape_67.setTransform(394,513.5,0.425,0.425);

	this.instance_14 = new lib.Path_1_2();
	this.instance_14.setTransform(399,517.4,0.425,0.425,0,0,0,27.8,28.8);
	this.instance_14.alpha = 0;

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FAE030").s().p("Ag+A/QgagagBglQABgkAagaQAagaAkgBQAlABAaAaQAbAagBAkQABAlgbAaQgaAaglAAQgkAAgagag");
	this.shape_68.setTransform(306.2,517,0.425,0.425);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FAE030").s().p("AgiAjQgDgDAAgEQAAgEADgDIA2g3QADgDAFAAQAEAAADADQADADAAAFQAAAEgDADIg3A2QgDADgEAAQgEAAgDgDg");
	this.shape_69.setTransform(311.6,511.6,0.425,0.425);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FAE030").s().p("AgiAjQgDgDAAgEQAAgFADgDIA3g2QADgDAEAAQAEAAADADQADADAAAEQAAAEgDADIg2A3QgDADgEAAQgFAAgDgDg");
	this.shape_70.setTransform(300.8,522.4,0.425,0.425);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FAE030").s().p("AAVAjIg3g2QgDgDAAgEQAAgFADgDQADgDAFAAQAEAAADADIA2A3QADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDg");
	this.shape_71.setTransform(300.8,511.6,0.425,0.425);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FAE030").s().p("AAUAjIg2g3QgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADIA3A2QADADAAAFQAAAEgDADQgDADgEAAQgFAAgDgDg");
	this.shape_72.setTransform(311.6,522.4,0.425,0.425);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FAE030").s().p("AgmAJQgFABgCgDQgDgDAAgEIAAAAQAAgCADgEQACgDAFAAIBOAAQADAAADADQAEAEAAACIAAAAQAAAEgEADQgDADgDgBg");
	this.shape_73.setTransform(298.6,517,0.425,0.425);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FAE030").s().p("AgmAJQgFABgCgDQgDgDAAgEIAAAAQAAgCADgEQACgDAFAAIBOAAQAEAAACADQAEAEAAACIAAAAQAAAEgEADQgCADgEgBg");
	this.shape_74.setTransform(313.9,517,0.425,0.425);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FAE030").s().p("AgGAvQgDgDAAgEIAAhOQAAgFADgCQAEgDACAAQADAAAEADQACACAAAFIAABOQAAAEgCADQgEADgDAAQgCAAgEgDg");
	this.shape_75.setTransform(306.2,524.7,0.425,0.425);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FAE030").s().p("AgGAvQgDgDAAgEIAAhOQAAgFADgCQAEgDACAAQADAAAEADQACACAAAFIAABOQAAAEgCADQgEADgDAAQgCAAgEgDg");
	this.shape_76.setTransform(306.2,509.4,0.425,0.425);

	this.instance_15 = new lib.Path();
	this.instance_15.setTransform(305.9,517.4,0.425,0.425,0,0,0,27.3,28.8);
	this.instance_15.alpha = 0;

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AhwB4QgeAAgWgVQgUgVAAgeQgBgbASgUQARgSAagEIgBgJQAAgTANgNQAOgOATAAQAUAAAOAPQAKgaAWgPQAWgRAcAAQAlAAAbAaQAaAbAAAlIAAAIQAZAFAQASQASAUgBAaQABAegWAVQgVAVgeAAg");
	this.shape_77.setTransform(448.7,239.5,2.197,2.197);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FAE030").s().p("AhBAvQgNgUAAgYQgBgfAYgYQAXgXAgAAQAgAAAYAXQAXAYABAfIgBAIQgOgFgMAAQgaAAgTARQgQARgDAaQgKADgKAHQgVgJgNgUg");
	this.shape_78.setTransform(419.3,216.7,2.197,2.197);

	this.instance_16 = new lib.Path_1();
	this.instance_16.setTransform(446.6,234.9,2.197,2.197,0,0,0,28.4,27.9);
	this.instance_16.alpha = 0;

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("rgba(255,255,255,0.698)").ss(1,1,1).p("A3RAAMAujAAA");
	this.shape_79.setTransform(374.9,490.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("Ag3A3QgXgXAAggQAAggAXgYQAYgWAfAAQAgAAAYAWQAYAYgBAgQABAggYAXQgYAZggAAQgfAAgYgZg");
	this.shape_80.setTransform(503.6,29.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_80},{t:this.shape_79},{t:this.instance_16},{t:this.shape_78},{t:this.shape_77},{t:this.instance_15},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.instance_14},{t:this.shape_67},{t:this.shape_66},{t:this.instance_13},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.instance_12},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.instance_11},{t:this.shape_49},{t:this.shape_48},{t:this.instance_10},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.instance_9},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.instance_8},{t:this.shape_30},{t:this.shape_29},{t:this.instance_7},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.instance_6},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.instance_5},{t:this.shape_12},{t:this.shape_11},{t:this.instance_4},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.text_18},{t:this.text_17},{t:this.text_16},{t:this.text_15},{t:this.text_14},{t:this.text_13},{t:this.text_12},{t:this.text_11},{t:this.text_10},{t:this.text_9},{t:this.text_8},{t:this.text_7},{t:this.text_6},{t:this.text_5},{t:this.text_4},{t:this.text_3},{t:this.text_2},{t:this.text_1},{t:this.text},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(222));

	// FlashAICB
	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#064B86").s().p("EgXRAqPMAAAhUdMAujAAAMAAABUdg");
	this.shape_81.setTransform(374.9,269.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_81).wait(222));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(396.8,269.4,503.2,540.6);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(396.8,269.4,696.6,540.6), new cjs.Rectangle(396.8,269.4,696.5,540.6), new cjs.Rectangle(396.8,269.4,696.3,540.6), new cjs.Rectangle(396.8,269.4,696,540.6), new cjs.Rectangle(396.8,269.4,695.6,540.6), new cjs.Rectangle(396.8,269.4,695,540.6), new cjs.Rectangle(396.8,269.4,694.4,540.6), new cjs.Rectangle(396.8,269.4,693.6,540.6), new cjs.Rectangle(396.8,269.4,692.6,540.6), rect=new cjs.Rectangle(396.8,269.4,691.6,540.6), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(396.8,269.4,692.1,540.6), new cjs.Rectangle(396.8,269.4,692.7,540.6), new cjs.Rectangle(599.9,269.4,490.2,540.6), new cjs.Rectangle(599.9,269.4,490.7,540.6), new cjs.Rectangle(599.9,269.4,491.3,540.6), new cjs.Rectangle(599.9,269.4,491.9,540.6), new cjs.Rectangle(599.9,269.4,492.4,540.6), new cjs.Rectangle(599.9,269.4,492.9,540.6), new cjs.Rectangle(414.5,269.4,678.9,540.6), rect=new cjs.Rectangle(414.5,269.4,485.5,540.6), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;