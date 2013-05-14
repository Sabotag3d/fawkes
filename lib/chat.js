module.exports = {
	cmds: function(twt, signal, q, mod, tweet, $, fawkes, v, data){
		text = data.text.toLowerCase(),
		name = data.name,
		userid = data.userid,
		log = require('./log'),
		o = require('../menu'),
		hump = require('./hump'),
		log.listen(v, data);
		if(v.wiretap == 'true'){
			v.transmission.push(text);
		}
		mod.cmds(tweet, fawkes, v, data);
		switch(text){
			case '.rage':
				var index = v.ragers.indexOf(userid);
				if(index == -1){	
					fawkes.roomInfo(true, function(data) {
						var currentDjName = data.room.metadata.current_song.djname;
						fawkes.speak("(╯°□°)╯︵ @" + currentDjName);
				        setTimeout(function(){
				            fawkes.speak("http://i2.kym-cdn.com/photos/images/original/000/166/819/tumblr_lqjx1cfDeL1qcnibbo2_1280.png");
				        }, 300);
					});
					v.ragers.push(userid);		
				}
				else{
					fawkes.speak('stop being a :trollface: @' + name);
				}
			break;
			case '.9000':
	    		var index = v.ragers.indexOf(userid);
				if(index == -1){
					fawkes.speak("┻━┻ ︵ヽ(`Д´)ﾉ︵ ┻━┻");
					v.ragers.push(userid);		
				}
				else{
					fawkes.speak('stop being a :trollface: @' + name);
				}
			break;
			case '.fact':
				random = Math.floor(Math.random() * v.facts.length);
				v.msg = v.facts[random];
				fawkes.speak(v.msg);
				v.tweeter.post('statuses/update', {
					status: '#fawkesfact ' + v.msg
				}, function(err, reply) {console.log(err, reply);});
			break;
			case '.cats':
				$.ajax({
					url: 'http://catfacts.nodester.com/',
					dataType: "json",
					type: "GET",
					success: function(result) {
						fawkes.speak(result.catFacts);
					}
				});		
			break;
			case '.hump':
				hump.cannon(fawkes, v, data);
			break;
			case '.tpb':
				random = Math.floor(Math.random() * v.tpb.length);
				v.msg = v.tpb[random];
				fawkes.speak(v.msg);
			break;
	        case '.tank':
	            fawkes.speak("●████▄▄▄▄▄▄▄▄▄▄▄ ▄▄▅████████▅▄▃▂ ██████████████████► ◥☼▲⊙▲⊙▲⊙▲⊙▲⊙▲☼◤");
	        break;
			case '.schlong':
				var index = v.schlongs.indexOf(userid);
				if(index == -1){
					var sDSize = Math.floor(Math.random() * 30) + 1;
					var sDInches = (sDSize / 2.5) + 1;
					var sDCm = (sDInches * 2.54);		     
					sDInches = sDInches.toFixed(1);		     
					sDCm = sDCm.toFixed(1);
					var sShaft = "=";
					while(sDSize) {
						sShaft += '=';
						sDSize--;
					}
					fawkes.speak('@' + name + "'s schlong is 8" + sShaft + 'D ' + sDInches + " Inches!" + ', or ' + sDCm + ' Centimeters!');
					v.schlongs.push(userid);		
				}
				else{
					fawkes.speak('stop being a :trollface: @' + name + ' get used to the .schlong u were born with');
				} 
			break;
			case '.album':
					fawkes.speak('title: ' + v.title);
				setTimeout(function () { 
					fawkes.speak('album : ' + v.album);
				}, 150);
				setTimeout(function () { 
					fawkes.speak('cover art: ' + v.cover);
				}, 300);
				setTimeout(function () { 
					fawkes.speak('date: ' + v.date);
				}, 450);
			break;
			case '.rps':
				random = Math.floor(Math.random() * v.rps.length);
				v.msg = v.rps[random];
				fawkes.speak(v.msg);	
			break;
			case '.fcn':
				random = Math.floor(Math.random() * v.fcn.length);
				v.msg = v.fcn[random];
				fawkes.speak(v.msg);	
			break;
			case 'q+':
				if(v.on == true){
					q.add(signal, fawkes, v, data);
				}
				else{
					fawkes.speak('teh q is off');
				}
			break;
			case 'q-':
				if(v.on == true){
					q.remove(fawkes, v, data);
				}
				else{
					fawkes.speak('teh q is off');
				}			
			break;
			case '.q':
				if(v.on == true){
					q.position(fawkes, v, data);
				}
				else{
					fawkes.speak('teh q is off');
				}
			break;
			case '.help':
				var helpmsg = '';
				var index = v.modlist.indexOf(userid);
				for(i in v.modlist){
					if(index >= 0){
						helpmsg = v.chatCommands + v.mcCommands;
					}else if(v.userid == 'xxxxxxxxxxxxxxxxxx'){
						helpmsg = v.chatCommands + v.mcCommands + cptCommands; 
					}else{
						helpmsg = v.chatCommands;
					}
				}
				fawkes.speak(helpmsg);
			break;
			case '.joke':
				$.ajax({
					url: 'http://api.icndb.com/jokes/random',
					dataType: "jsonp",
					type: "GET",
					success: function(result) {
						fawkes.speak(result.value.joke);
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
						var effect = strain.TopEffect;
						var medical = strain.TopMedical;
						var activity = strain.TopActivity;
						var weed = name + ', rated: ' + rating + ', is a ' + category + ' and it has a ' + effect + ' high, try to ' + activity + '. It is best when smoked for ' + medical + '. ' + url;
						fawkes.speak(weed);
					}
				});		
	        break;
	        case '.info':
				if(v.on == true){
					fawkes.speak(v.info + v.Qinfo);
				}
				else{
					fawkes.speak(v.info);
				}
			break;
			case '.blame':
				fawkes.speak('/me is sorry :(');
			break;
			case '.thanks':
				fawkes.speak(':) you\'re welcome @'+ name);
			break;
	        case '.dive':
				fawkes.remDj(userid);
			break;
			case '.bop':
			case '.dance':
				var random = Math.floor(Math.random() * v.dance.length);
				v.msg = v.dance[random];
				switch(userid){
					case 'xxxxxxxxxxxxxxxxxx'://dance with vip
						fawkes.speak('/me bops with @' + name);
						fawkes.pm(v.msg, userid);
					break;
					default:
						fawkes.pm(v.msg, userid);
						fawkes.speak('/me dances');
					break;
				}
				fawkes.bop();
			break;
		}
			//google that for you
			var start = text.indexOf('.google');
			var	slice = text.split('"');
			if(start == 0){	
				var item = slice[1];
				if(item !== undefined){
					var search = item.replace(/ /g,'+');
					var ggl = 'http://lmgtfy.com/?q=' + search;
					fawkes.speak(ggl);
				}else if(v.err >= 1){
					fawkes.speak('i\'m sorry @' + name + ' i cannot let you do that');
					v.err = 0;
				}else{
					fawkes.speak('try .google "query"');
					v.err++;
				}
			}

			////ceiling cannons/////
			var start = text.indexOf('#tweeter');
			var	slice = text.split('"');
				if(start == 0){
					var twit = slice[1];
					if(slice[1] !== undefined){
						var trend = '#trend ';
						var mention = ' @mention';
   				 		if (userid == 'xxxxxxxxxxxxxxxxxx') {
							v.tweeter.post('statuses/update', {
								status: trend + twit + mention
							}, function(err, reply) {console.log(err, reply);});
							fawkes.speak('https://twitter.com/fawkesbot');
						}
					}
					else if(v.err >= 1){
						fawkes.speak('i\'m sorry @' + name + ' i cannot let you do that');
						v.err = 0;
					}else{
						fawkes.speak('try #tweeter "post"');
						v.err++;
					}

				}

			for (var i = 0; i < v.modlist.length; i++) {
			    if (userid == v.modlist[i]) {
					switch(text){
						case '.tweet':
							twt.post(fawkes, v, data);
						break;
					}
							//personalized tweeter
							var start = text.indexOf('#tweeter');
							var	slice = text.split('"');
								if(start == 0){
									var twit = slice[1];
									if(slice[1] !== undefined){
										var trend = '#trend ';
										var mention = ' @mention';
										for (var i = 0; i < v.modlist.length; i++) {
					   				 		if (userid == v.modlist[i]) {
												v.tweeter.post('statuses/update', {
													status: trend + twit + mention
												}, function(err, reply) {console.log(err, reply);});
												fawkes.speak('https://twitter.com/fawkesbot');
											}
										}
									}
									else if(v.err >= 1){
										fawkes.speak('i\'m sorry @' + name + ' i cannot let you do that');
										v.err = 0;
									}else{
										fawkes.speak('try #tweeter "post"');
										v.err++;
									}

								}

			    }
	  		}
	}
}