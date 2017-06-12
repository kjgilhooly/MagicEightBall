/**
 * parser 
 */
function parser(req, res)
{
	var answers = [ 'It is certain', 'It is decidedly so', 'Without a doubt',
		'Yes, definitely', 'You may rely on it', 'As I see it, yes',
		'Most likely', 'Outlook good', 'Yes', 'Signs point to yes',
		'Reply hazy try again', 'Ask again later', 'Better not tell you now',
		'Cannot predict now', 'Concentrate and ask again',
		'Don\'t count on it', 'My reply is no', 'My sources say no',
		'Outlook not so good', 'Very doubtful' ];

	res.writeHead(200,
	{
		'Content-Type' : 'text/html'
	});
	res.write("<html>");
	res.write("<head>");
	res.write("<title>Magic 8 Ball</title>");
	res.write("</head>");
	res.write("<body>");
	res.write(answers[Math.floor(Math.random() * 19)]);
	res.write("</body>");
	res.write("</html>");
	res.end();
}

exports.parser = parser; 