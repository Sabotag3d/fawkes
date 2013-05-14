module.exports = {
	boot: function(fawkes, v, data){
		user = data.user[0],
		userid = user.userid
		name = user.name
		for (var i=0; i < v.ban.length; i++) {
			if (userid == v.ban[i]) {
				fawkes.bootUser(userid, 'Pew Pew Pew');
				break;
			}
		}
	}
}