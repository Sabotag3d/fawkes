module.exports = {
	post: function(fawkes, v, data){
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
		});
	}
}