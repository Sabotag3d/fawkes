module.exports = {
	cmds: function(signal, q, mod, tweet, $, fawkes, v, data){
		text = data.text,
		userid = data.userid,
		senderid = data.senderid,
		log = require('./log'),
		hump = require('./hump'),
		menu = require('../menu')
		mod.cmds(tweet, fawkes, v, data);
		switch(text){
			case '.props':
				var index = v.sirs.indexOf(senderid);
				if(index == -1){
					fawkes.roomInfo(true, function(data) {
						var currentDjName = data.room.metadata.current_song.djname;
						fawkes.speak(':clap: @' +currentDjName);
						v.sirs.push(senderid);
					});
				}
				else{
					fawkes.pm('stop being a :trollface:', senderid);
				}
			break;
			case '.fact':
				random = Math.floor(Math.random() * v.facts.length);
				v.msg = v.facts[random];
				fawkes.pm(v.msg, senderid);
			break;
			case '.cats':
				$.ajax({
					url: 'http://catfacts.nodester.com/',
					dataType: "json",
					type: "GET",
					success: function(result) {
						fawkes.pm(result.catFacts, senderid);
					}
				});		
			break;
			case 'q+':
				q.add(signal, fawkes, v, data);
			break;
			case 'q-':
				q.remove( fawkes, v, data);
			break;
			case '.q':
				q.position(signal, fawkes, v, data);
			break;
			case '.hump':
				hump.cannon(fawkes, v, data);
			break;
			case '.mc':
				fawkes.pm('http://i.qkme.me/3oybjp.jpg', senderid);
			break;
			case '.umad?':
				var random = Math.floor(Math.random() * v.memes.length);
				v.msg = v.memes[random];
				fawkes.pm(v.msg, senderid);
			break;
			case '.molly':
				random = Math.floor(Math.random() * v.molly.length);
				v.msg = v.molly[random];
				fawkes.pm(v.msg, senderid);
			break;
	        case '.cispa':
	            fawkes.pm("█████", senderid);
	        break;
	        case '.meow':
				fawkes.roomInfo(true, function(data) {
					var currentDjName = data.room.metadata.current_song.djname;
					fawkes.speak('>^..^< @' + currentDjName);
				});
	        break;
	        case '.joke':
				$.ajax({
					url: 'http://api.icndb.com/jokes/random',
					dataType: "jsonp",
					type: "GET",
					success: function(result) {
						fawkes.pm(result.value.joke, senderid);
					}
				});
	        break;
	        case '.weed':
	        	$.ajax({
					url: 'http://www.leafly.com/api/strains',
					type: "GET",
					success: function(result) {
						var random = Math.floor(Math.random() * 554);
						var strain = result[random];
						var name = strain.Name;
						var category = strain.Category;
						var rating = strain.Rating;
						var url = "http://budgenius.com/";
						var rate = strain.RateUrl;
						var effect = strain.TopEffect;
						var medical = strain.TopMedical;
						var activity = strain.TopActivity;
						var weed = name + ', rated: ' + rating + ', is a ' + category + ' and it has a ' + effect + ' high, try to ' + activity + '. It is best when smoked for ' + medical + '.' + url;
						fawkes.pm(weed, senderid);
					}
				});		
	        break;
			case '.help':
				var helpmsg = '';
				var index = v.modlist.indexOf(userid);
				for(i in v.modlist){
					if(index >= 0){
						helpmsg = v.pmCommands + v.mpCommands;
					}else{
						helpmsg = v.pmCommands;
					}
				}
				fawkes.pm(helpmsg, senderid);
			break;
		}
			//order menu
			var start = text.indexOf('.order');
			var	slice = text.split(' ');
			if(start == 0){
				var item = slice[1];
				var get = menu.item;
				console.log(get);
				//fawkes.pm(get, senderid);
			} 
	}
}