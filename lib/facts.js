module.exports = {
	$.ajax({
		url: 'http://catfacts.nodester.com/',
		dataType: "json",
		type: "GET",
		success: function(result) {
			fawkes.speak(result.catFacts);
		}
	});
}