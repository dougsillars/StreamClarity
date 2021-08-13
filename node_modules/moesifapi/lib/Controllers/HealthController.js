/**
 * MoesifAPILib
 *
 *
 */

var _request = require('../Http/Client/RequestClient'),
    _configuration = require('../configuration'),
    _APIHelper = require('../APIHelper'),
    pjson = require('../../package.json')

var HealthController = {

    /**
     * Health Probe
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {StatusModel}
     */
    getHealthProbe : function(callback){

        //prepare query string for API call;
        var _baseUri = _configuration.BaseUri;

        var _queryBuilder = _baseUri + "/health/probe";

        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

        //prepare headers
        var _headers = {
            "accept" : "application/json",
            "X-Moesif-Application-Id" : _configuration.ApplicationId,
            "User-Agent": "moesifapi-nodejs/" + pjson.version
        };

        //Construct the request
        var _options = {
            queryUrl: _queryUrl,
            method: "GET",
            headers: _headers,
        };

        //Build the response processing.
        function cb(_error, _response, _context) {
            if(_error) {
                callback({errorMessage: _error.message, errorCode: _error.code},null,_context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                var parsed = JSON.parse(_response.body);
                parsed = new StatusModel(parsed);
                callback(null,parsed,_context);
            } else {
                callback({errorMessage: "HTTP Response Not OK", errorCode: _response.statusCode, errorResponse:_response.body},null,_context);
            }
        }
        _request(_options, cb);
    }

};

module.exports = HealthController;
