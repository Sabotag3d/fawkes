module.exports = {
	get: function(fawkes, q, v, data){
		user = data.user[0],
		name = user.name,
		userid = user.userid
		v.djs.push(userid);
		//v.djs[v.userid] = { nbSong: 0 };
		fawkes.roomInfo(true, function(data){
			v.djcount = data.room.metadata.djcount;
			v.djs = data.room.metadata.djs;
		});
		if(v.on == true){	
			var allowed = false;	
			for(i in v.q) {
				if(v.q[i].id == userid){
					if(v.q[0].id == userid){
						allowed = true;
						for (i in v.q) {
				            if (v.q[i].name == name) {
				                v.q.shift();
				            }
				        }
					}else{
						allowed = false;
						fawkes.remDj(userid);
						fawkes.pm('You\'re not the next in teh Q. @' + name, userid);
					}
					break;
				}
			}
			//for(i in v.djs) {
				if(allowed == false){
					fawkes.pm('You\'re not in the Q!, q+ to add. @' + v.name, userid);
					fawkes.remDj(userid);
					var djind = v.djs.indexOf(userid); 
					delete v.djs[{name:name, id:userid}];
					v.djs.splice(djind, 1);
				}
			//}
			
			// v.q.shift();
			// console.log(v.q,2);
		}

	},
	give: function(signal, fawkes, v, data){
		user = data.user[0],
		userid = user.userid,
		djind = v.djs.indexOf(userid)
		delete v.djs[{name:name, id:userid}];
		v.djs.splice(djind, 1);
		fawkes.roomInfo(true, function(data){
			v.djcount = data.room.metadata.djcount;
			v.djs = data.room.metadata.djs;
		});
		signal.speak(fawkes, v, data);
	},
	auto: function(fawkes, data){
		fawkes.roomInfo(true, function(data) {
			var djnum = data.room.metadata.djcount;
			if(djnum < 3){
				fawkes.addDj();
			}
		});	
	}
}