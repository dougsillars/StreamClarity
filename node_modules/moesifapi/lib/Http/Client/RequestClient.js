var HttpContext = require("./HttpContext");
var HttpResponse = require("../Response/HttpResponse");
var https = require('https');
var request = require("request");
var zlib = require('zlib')
var APIHelper = require('../../APIHelper');

var keepAliveAgent = new https.Agent({
  keepAlive: true,
  maxSockets: 25
});

var convertHttpRequest = function (req, callback) {
    //Convert to request's version of http request

    var options = {
        url: req.queryUrl,
        method: req.method,
        headers: req.headers,
        timeout: 10000,
        agent: keepAliveAgent
    };

    if (req.body) {
      zlib.gzip(req.body, function (err, buffer) {
        if (err) {
          options.body = req.body;
          callback(options);
        } else {
          options.headers["Content-Encoding"] = 'gzip';
          options.body = buffer;
          callback(options);
        }
      });
    } else {
      callback(options);
    }
}

var appendFormdata = function (form, data) {
    var dataArray = APIHelper.formDataEncodeObject(data);
    for (var index in dataArray) {
        var key = dataArray[index].key
        var value = dataArray[index].value;
        form.append(key, value);
    }
}

var convertHttpResponse = function (resp) {
    var response = new HttpResponse();
    if(resp) {
        response.body = resp.body;
        response.headers = resp.headers;
        response.statusCode = resp.statusCode;
    }

    return response;
}

/**
 * Execute a given HttpRequest to get string response back
 * @param	{HttpRequest | HttpBodyRequest} request    The query string builder to replace the template parameters
 * @param	{Array} parameters    The parameters to replace in the queryBuilder
 */
function executeRequest(req, callback) {

    //Convert abstracted request to request's http request
    convertHttpRequest(req, function(options) {
      var context = new HttpContext();
      context.request = req;

      //Make a temp callback
      var internalCallback = function cb(error, res, body) {
          var response = convertHttpResponse(res);
          context.response = response;
          callback(error, response, context);
      };

      //Make the request;
      request(options, internalCallback);
    });
}
module.exports = executeRequest;
