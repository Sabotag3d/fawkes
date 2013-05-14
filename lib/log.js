module.exports = {
	listen: function(v, data){
		ts = new Date(),
		year = ts.getFullYear(),
		month = ts.getMonth(),
		day = ts.getDate(),
		hour = ts.getHours(),
		minutes = ts.getMinutes(),
		seconds = ts.getSeconds(),
		time = month + '/' + day + '/' + year + ' ' + hour + ':' + minutes + ':' + seconds + ' ... '
		console.log(time + ' ' + name + ': ' + text);
	}
}