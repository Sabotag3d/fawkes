module.exports = {
	cannon: function(fawkes, v, data){
		name = data.name,
		userid = data.userid
		if(userid == 'xxxxxxxxxxxxxxxxxxxxxxx'){
			fawkes.roomInfo(true, function(data) {
				var currentDjName = data.room.metadata.current_song.djname;
				var humps = [
					"http://i2.kym-cdn.com/photos/images/newsfeed/000/218/730/mlfw1818-Ahmrw.gif",
					"http://25.media.tumblr.com/tumblr_m3nz90on1j1r9ds0ro1_250.gif",
					"http://stream1.gifsoup.com/view1/1838649/james-vanderbeek-humping-o.gif",
					"https://gs1.wac.edgecastcdn.net/8019B6/data.tumblr.com/tumblr_m1v5cs4G681r3vbezo1_400.gif",
					"https://gs1.wac.edgecastcdn.net/8019B6/data.tumblr.com/tumblr_m9aga1ERIT1qmbkyco1_500.gif",
					"https://gs1.wac.edgecastcdn.net/8019B6/data.tumblr.com/tumblr_m6cvfmFKIC1r2yswko1_500.gif",
					"http://25.media.tumblr.com/tumblr_mavfs3Q3dV1r12q27o1_400.gif",
					"https://gs1.wac.edgecastcdn.net/8019B6/data.tumblr.com/37ab1777b41db3baeda7a40ed4ae5a5f/tumblr_mixaxx2nlL1rqwshdo1_250.gif",
					"https://gs1.wac.edgecastcdn.net/8019B6/data.tumblr.com/tumblr_mcme7zAAKq1rufjqb.gif",
					"https://gs1.wac.edgecastcdn.net/8019B6/data.tumblr.com/tumblr_mdpt7xmuFH1rl9861o1_400.gif",
					"http://gifs.gifbin.com/092010/1283862919_turkey-burning-metal.gif"
				];
				var random = Math.floor(Math.random() * humps.length);

				fawkes.speak(name + ' dry humps @' + currentDjName + "'s leg " + humps[random]);
			});
		}
	}
}