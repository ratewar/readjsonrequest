var argv = require('yargs')
           .usage("usage: node $0 --url=[String]")
					 .example('$0 --url "https://pricing.us-east-1.amazonaws.com/offers/v1.0/aws/index.json"', 'Read JSON Data')
           .demand(['url'])
           .argv;

var request = require("request");

module.exports.readjsonrequest = function(urlpath, callback) {

	request({
	    url: argv.url,
	    json: true
	}, function (error, response, body) {
			//if the response code is ok
	    if (!error && response.statusCode === 200) {
	    		callback(null,{body});
	    } else {
					callback(error,null);
				}
	});

}
