module.exports = {
	check: function(fawkes, v){
		var nuke = require('./nuke');
		v.launch = false;
		v.transmission = [];
		v.wiretap = 'true';
		setTimeout(function(){
			var foo = v.transmission.indexOf('foo');
			var bar = v.transmission.indexOf('bar');
			if(foo >= 0 && bar >= 0){
				v.launch = true;
				setTimeout(function(){
					nuke.countdown(fawkes, v);
				},500);
			}else{
				v.launch = false;
				nuke.evals(fawkes, v);
			}
		}, 5000);
	},
	countdown: function(fawkes, v){
		var nuke = require('./nuke');
		setTimeout(function(){
			fawkes.speak('3');
		}, 1000);
		setTimeout(function(){
			fawkes.speak('2');
		}, 2000);
		setTimeout(function(){
			fawkes.speak('1');
		}, 3000);
		setTimeout(function(){
			nuke.evals(fawkes, v);
		}, 3500);
	},
	evals: function(fawkes, v){
		v.wiretap = 'false';
		var nuke = require('./nuke');
		setTimeout(function(){
			if(v.launch == true){
				nuke.launch(fawkes, v);
				v.transmission = [];
			}
			else{
				nuke.disarm(fawkes, v);
				v.transmission = [];
			}
		}, 500);
	},
	disarm: function(fawkes, v){
		fawkes.speak('teh nuke was disarmed...')
	},
	launch: function(fawkes, v){
			fawkes.speak('nuclear targeting systems engaged');
		setTimeout(function(){
			fawkes.speak('warhead armed');
		},1000);
		setTimeout(function(data){
			for(i in v.djs){
				fawkes.remDj(v.djs[i]);
			}
		},3600);
	}
}