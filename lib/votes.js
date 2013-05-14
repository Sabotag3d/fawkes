module.exports = {
	get: function(fawkes, v, data){
		v.votelog = data.room.metadata.votelog;
		for (var i=0; i < v.votelog.length; i++) {
			var userid = v.votelog[i][0];
			v.lastsong = data.room.metadata;
			v.ups = v.lastsong.upvotes;
			v.downs = v.lastsong.downvotes;
		}	
		fawkes.roomInfo(true, function(data) {
			var listeners = data.room.metadata.listeners;
			var half = Math.floor(listeners/2);
				if(v.ups >= half){
					fawkes.bop();
				}
		});
	}
}