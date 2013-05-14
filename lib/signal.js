module.exports = {
	greet: function(fawkes, v, data){
		user = data.user[0],
		name = user.name,
		userid = user.userid
		if(v.on == true){
			fawkes.pm(v.info + v.Qinfo, userid);
		}else{
			fawkes.pm(v.info, userid);
		}
		if(userid == 'xxxxxxxxxxxxxxxxxxxxxxxx'){
			console.log("running...");
		}else{
			fawkes.speak('Welcome to LaLa Land :) @' + name);
		}
	},
	speak: function(fawkes, v, data){
		var signal = require('./signal');
		fawkes.roomInfo(true, function(data) {
			var djnum = data.room.metadata.djcount;
			for(i in v.djs) {
				if(v.djs[i].id == userid) {
					return false;
				}
			}
			if(djnum < 5){
				if(v.q.length > 0 && v.djs.length < 5) {
						fawkes.speak('You\'re up next! @' + v.q[0].name +' You\'ve got 30 seconds...');
						var waitingfor = v.q[0].id;
						setTimeout(function() {
							if(v.q.length > 0 && v.q[0].id == waitingfor) {
								v.q.shift();
								signal.speak(fawkes, v, data);
							}
						}, 30000);
				}
			}
		});
	},
}