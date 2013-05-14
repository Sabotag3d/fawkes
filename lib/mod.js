module.exports = {
	cmds: function(tweet, fawkes, v, data){
		var nuke = require('./nuke');
		var index = v.modlist.indexOf(userid);
			for(i in v.modlist){
				if(index >= 0){
					switch(text){
						case '.fan':
							fawkes.roomInfo(true, function(data) {
								var dj = data.room.metadata.current_dj;
								fawkes.becomeFan(v.dj);
							});
						break;
						case '.toss':
							fawkes.roomInfo(true, function(data) {
								var newsong = data.room.metadata.current_song._id;
								var newsongname = songname = data.room.metadata.current_song.metadata.song;
								fawkes.playlistRemove(v.newsong);
								fawkes.pm('/me removed ' + v.newsongname + ' from  its Q', senderid);
							});
						break;
						case '.djs':
							var random = Math.floor(Math.random() * v.memes.length);
							v.msg = v.memes[random];
							for(i in v.djs){
								fawkes.pm(v.msg, v.djs[i]);
								fawkes.pm('attack successful :trollface:', senderid);
							}
						break;
						case '.nuke':
								fawkes.speak('teh launch codes pl0x?');
								nuke.check(fawkes, v);
						break;
						case '.on':
							if(v.on == true){
								fawkes.speak('teh Q is already on.');
							}
							else{
								v.on = true;
								fawkes.speak('teh Q is on. 1 play per dj. q+ to add');
								return v;
							}
						break;
						case '.off':
							if(v.on == true){
								v.on = false;
								fawkes.speak('teh Q is off.');
							}
							else{
								fawkes.speak('teh Q is already off.');
							}
						break;
						case '.uploads':
							fawkes.speak(v.ttbroke);
						break;
						case '.up':
							fawkes.addDj();
						break;
						case '.down':
							fawkes.remDj();
						break;
						case '.skip':
							fawkes.skip();
						break;
						case '.snag':
							fawkes.roomInfo(true, function(data) {
								v.newsong = data.room.metadata.current_song._id;
								v.newsongname = v.songname = data.room.metadata.current_song.metadata.song;
								fawkes.playlistAdd(v.newsong);
								fawkes.snag();
								fawkes.pm('/me added '+v.newsongname+' to  its Q', senderid);
							});
						break;
						case '.shuffle':
						fawkes.playlistAll(function(playlist) {
						  var i = 0;
						  var reorder = setInterval(function() {
						    if (i <= playlist.list.length) {
						      var nextId = Math.ceil(Math.random() * playlist.list.length);
						      fawkes.playlistReorder(i, nextId);
						      i++;
						    } else {
						      clearInterval(reorder);
						      fawkes.speak("/me shuffles its playlist");
						    }
						  }, 1000);
						});
						break;
						case '.tweet':
						fawkes.roomInfo(true, function(data) {
							var rm = data.room.metadata;
							var roomname = data.room.name;
							var listeners = rm.listeners;
							var djcount = rm.djcount;
							var song = rm.current_song;
							var djname = song.djname;
							var title = song.metadata.song;
							var artist = song.metadata.artist;
							var tweets = [
								'i r listening to ' + title + ' by ' + artist + ' in ' + roomname + ' http://turntable.fm/lala_land7',
								djname + ' is currently playing ' + title + ' by ' + artist + ' in ' + roomname + ' http://turntable.fm/lala_land7',
								'come check out http://turntable.fm/lala_land7 we currently have ' + djcount+'/5 djs and ' + listeners + ' listeners'];
							var	random = Math.floor(Math.random() * tweets.length);
							v.msg = tweets[random];

							v.tweeter.post('statuses/update', {
								status: v.msg
							}, function(err, reply) {console.log(err, reply);});
							fawkes.pm('https://twitter.com/fawkesbot', senderid);
							
						});
						break;
					}
			      break;
			    }
		  }
	  }
}