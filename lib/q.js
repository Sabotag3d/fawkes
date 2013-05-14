module.exports = {
	add: function(signal, fawkes, v, data){
		if(v.on == true){	
			var i;
			for(i in v.djs) {
				if(v.djs[i] == userid) {
					fawkes.pm('You\'re DJing... @' + name, userid);
					return false;
				}
			}
			for(i in v.q) {
				if(v.q[i].id == userid) {
					fawkes.pm('You\'re in teh Q already @' + name, userid);
					return false;
				}
			}
			v.q.push({name:name, id:userid});
				fawkes.pm('You\'re #' + v.q.length + ' in teh Q. @' + name, userid);
			if(v.q.length == 1 && v.djs.length < 5) {
				signal.speak(fawkes, v, data);
			}
		}else{
			fawkes.pm('teh Q is off.', userid);
		}
	},
	remove: function(fawkes, v, data){
		if(v.on == true){	
			var i;
			for (i in v.q) {
	                if (v.q[i].id == userid) {
	                    v.q.splice(i, 1);
	                    fawkes.pm('You\'re deleted from teh Q. @' + name, userid);
	                }
	            }
		}else{
			fawkes.pm('teh Q is off.', userid);
		}
	},
	position: function(fawkes, v, data){
		senderid = data.senderid;
		userid = data.userid;
		var j = 0;
	    if(v.q !== undefined){
	    	var qlen = v.q.length;
		    for (i in v.q) {
		        j++;
		        if (v.q[i].id == userid) {
		            fawkes.speak('You\'re ' + j + '/' + qlen + ' @' + name);
		        }
		    }
		}
	}
}