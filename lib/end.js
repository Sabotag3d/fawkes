module.exports = {
	get: function(fawkes, v, data){
		var djId = data.room.metadata.current_dj;
		var djcount = data.room.metadata.djcount;
		if(v.on == true){	
			//if (v.djs[v.djId] && ++v.djs[v.djId].nbSong >= v.snglmt) {
				fawkes.remDj(djId);
				delete v.djs[djId];
				v.currentsong = "";
			//}
		}
		fawkes.speak(':thumbsup: '+ v.ups +':thumbsdown: '+ v.downs +':hearts: ' + v.snags);
		snags = 0;
	}
}