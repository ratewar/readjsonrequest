var request = require("request");

module.exports = function readjsonrequest(myurl,callback)
{
	request({
	    			url: myurl,
	    			json: true
					}, function (error, response, body) {
									if (!error && response.statusCode === 200) {
						 			callback(null,body);
								}
	    });
};
