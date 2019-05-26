/*
 * LucidScroll
 * 
 * Created by Shikkediel (c) 2013-2019 ataredo.com
 * 
 * Version 3.4.1 subject to change
 *
 * Requires jQuery 1.8.0+ and easing equations
 *
 */

(function($, nub) {

$.fn.impulse = function(options) {

	var set = $.extend(true, {}, $.fn.impulse.default, options), vessel = this,
	gate = $(nub), object = $(set.target), crux, area = {}, edge = [],
	fad = {}, entity, brink = [], outset = [], quit = [], kinetic, morph = [],
	hit, way, speed, destination = [], pour = 'requestAnimationFrame',
	use = $.extend({novel: pour in nub, turned: 0}, set);

	elementAnalysis();

	vessel.each(function(index) {

		$(this).data('impulse', use).on('wheel.excite', function(act, info) {

			if (!use.keen && !act.mien) return;

			if (act.mien) {
			fad = $.extend({}, use, info);
			use.annul = fad.delay == true;
			var loom = act.mien;
			}
			else {
			if (use.annul) return;
			fad = use;
			loom = act.originalEvent.deltaY;
			}

			loom = loom/Math.abs(loom);
			hit = index;

			if (crux && vessel.length > 1) {
			entity = $(this);
			brink[0] = edge[hit];
			}
			else {
			entity = object;
			brink = edge;
			}

			if (kinetic != loom || act.mien) use.turned = 1;
			else use.turned = Math.min(use.curb, use.turned+1);

			if (typeof fad.range === 'function') fad.orbit = fad.range();
			else fad.orbit = fad.range;

			if (!fad.delay && use.fluid && use.turned == 1) morph[hit] = 'curve';
			else morph[hit] = fad.effect;

			way = loom*fad.orbit*Math.pow(use.leap, use.turned-1);
			speed = fad.tempo*Math.pow(use.sloth, use.turned-1) || 1;
			kinetic = loom;

			entity.each(function(part) {
			outset[part] = $(this).scrollTop();
			destination[part] = outset[part]+way;
			quit[part] = onFringe(this, part, outset[part]);
			});

			use.waive = ceaseOperation();

			if (!way) speed = 1;
			if (use.novel) {
			if (use.motion) {
			cancelAnimationFrame(use.motion);
			use.initial = use.present;
			}
			else use.initial = Date.now();
			use.motion = nub[pour](streamCore);
			}
			else inciteSource();
		});

		this.addEventListener('wheel', function(tick) {

			if (!use.keen) return;
			if (use.annul) return denyRise(tick);
			else if (fad.delay == true && !use.waive) use.annul = true;
			if (!(use.waive && use.occur)) denyRise(tick);

		}, hasQuiet() ? {passive: false} : false);
	});

	$.easing['curve'] = $.easing['easeInOutSine'];

	gate.resize(function() {
	clearTimeout(use.bound);
	use.bound = setTimeout(detectOverflow, 100);
	});

	return this;

	function streamCore() {
	use.present = Date.now();
	var advance = Math.min(use.present-use.initial, speed)/speed,
	increase = $.easing[morph[hit]](advance);
	entity.each(function(key) {
	if (!quit[key]) {
	$(this).scrollTop(outset[key]+increase*way);
	checkLimits(this, key, advance);
	}
	});
	if (advance < 1 && !use.waive) use.motion = nub[pour](streamCore);
	else hindStage();
	}

	function inciteSource() {
	entity.each(function(beat) {
	if (!quit[beat]) {
	$(this).stop().animate({scrollTop: destination[beat]}, {
	duration: speed,
	easing: morph[hit],
	progress: function(current, sequence) {
	checkLimits(this, beat, sequence);
	},
	complete: hindStage
	});
	}
	});
	}

	function checkLimits(essence, rank, factor) {
	if (100*factor >= fad.reset) use.turned = 0;
	if (onFringe(essence, rank)) {
	quit[rank] = true;
	if (!use.novel) $(essence).stop(true, true);
	use.waive = ceaseOperation();
	}
	}

	function onFringe(matter, cue, genesis) {
	var put = Math.round(genesis || $(matter).scrollTop()),
	above = destination[cue] < 0 && !put,
	below = destination[cue] > brink[cue] && put == brink[cue] && fad.orbit > 0;
	return above || below;
	}

	function ceaseOperation() {
	return quit.every(function(flag) {return flag});
	}

	function hindStage() {
	use.turned = use.annul = use.motion = 0;
	}

	function denyRise(jab) {
	jab.preventDefault();
	jab.stopPropagation();
	}

	function elementAnalysis() {
	var item = $();
	if (!object.length) {
	crux = true;
	object = vessel;
	}
	object.each(function() {
	if ($.zenith(this)) {
	if (!use.main) {
	if (use.novel) use.main = nub;
	else use.main = baseTag();
	item = item.add(use.main);
	}
	}
	else item = item.add(this);
	});
	use.target = object = item;
	object.each(function(zest) {
	if ($.zenith(this)) area[zest] = 'hub';
	else area[zest] = 'sub';
	});
	if (crux && use.main) vessel = object;
	detectOverflow();
	}

	function baseTag() {
	var origin = gate.scrollTop();
	gate.scrollTop(1);
	if ($('html').scrollTop()) var root = 'html';
	else if ($('body').scrollTop()) root = 'body';
	else root = 'html, body';
	gate.scrollTop(origin);
	return root;
	}

	function detectOverflow() {
	object.each(function(unit) {
	if (area[unit] == 'hub') var teem = $(document).height()-gate.height();
	else teem = this.scrollHeight-$(this).height();
	edge[unit] = Math.round(teem);
	});
	}

	function hasQuiet() {
	var cold = false,
	hike = function() {};
	try {
	var aid = Object.defineProperty({}, 'passive', {
	get: function() {cold = true}
	});
	nub.addEventListener('test', hike, aid);
	nub.removeEventListener('test', hike, aid);
	} catch(e) {}
	return cold;
	}
};

$.zenith = function(sample) {

	var peak = [nub,document,'HTML','BODY'], facet;
	if (sample) return peak.indexOf(sample) > -1 || peak.indexOf(sample.tagName) > -1;
	$.each(peak, function(spot, detail) {
	facet = $(detail).data('impulse');
	if (facet) return false;
	});
	return facet;
}

$.fn.impulse.default = {

	target: '',
	range: 135,
	leap: 1.35,
	tempo: 500,
	sloth: 1.1,
	curb: 5,
	reset: 85,
	effect: 'easeOutSine',
	keen: true,
	delay: false,
	occur: true,
	fluid: true
};

$.fn.demit = function() {

	return this.each(function() {
	if ($.zenith(this)) var habit = $.zenith();
	else habit = $(this).data('impulse');
	if (habit) {
	if (habit.novel) cancelAnimationFrame(habit.motion);
	else habit.target.stop();
	habit.turned = habit.annul = habit.motion = 0;
	}
	});
};

$.fn.amend = function(gist) {

	return this.each(function() {
	if ($.zenith(this)) var quirk = $.zenith();
	else quirk = $(this).data('impulse');
	if (quirk) {
	$.each(gist, function(sign, rate) {
	if (sign in quirk) quirk[sign] = rate;
	});
	}
	});
};

$.fn.evoke = function(unit) {

	var zeal = $.Event('wheel.excite', {mien: true}), bulk;
	return this.each(function() {
	if ($.zenith(this)) {
	if (!bulk) {
	bulk = $.zenith();
	if (bulk) $(bulk.main).trigger(zeal, unit);
	}
	}
	else $(this).trigger(zeal, unit);
	});
};
}(jQuery, window));