module.exports = {
	get: function(twt, fawkes, v, data){
		v.dj = data.room.metadata.current_dj;
		v.newsong = data.room.metadata.current_song.metadata;
		v.album = v.newsong.album;
		v.cover = v.newsong.coverart;
		v.date = v.newsong.releasedate;
		v.title = v.newsong.song;
		v.snags = 0;
		v.sirs = [];
		v.rager = [];
		v.schlongs = [];
		v.listeners = data.room.metadata.listeners;
		if(v.on == true){
			twt.post(fawkes, v, data);
		}
	}
}