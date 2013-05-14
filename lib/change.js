module.exports = {
	get: function(dj, fawkes, v, data){
		user = data.users[0],
		name = user.name,
		userid = user.userid
	  	dj.auto(fawkes, v, data);
	  	fawkes.placeStickers(v.stickers);
  	}
}