module.exports = {
	register: function(signal, q, fawkes, v, data){
		blacklist = require('./boot');
		user = data.user[0],
		name = user.name,
		userid = user.userid
		v.users.push({name:name, id:userid});
		blacklist.boot(fawkes, v, data);
		setTimeout(function(){
			signal.greet(fawkes, v, data);
		}, 1000);
		fawkes.roomInfo(true, function(data) {
			v.modlist = data.room.metadata.moderator_id;
		});
	},
	deregister: function(v, data){
		user = data.user[0]
		delete v.users[user.userid];
		v.users.shift();
	}
}