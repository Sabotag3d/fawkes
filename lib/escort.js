module.exports = {
	get: function(v, data){
		user = data.user[0],
		userid = user.userid
		delete v.djs[{name:name, id:userid}];
		v.djs.shift();
	}
}