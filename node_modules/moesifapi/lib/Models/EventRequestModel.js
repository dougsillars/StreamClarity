
/**
 * MoesifAPILib
 *
 *
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of EventRequestModel
 *
 * @constructor
 */
EventRequestModel = function (obj) {
    if(!obj) {
        this.time = null;
        this.uri = null;
        this.verb = null;
        this.headers = null;
        this.apiVersion = null;
        this.ipAddress = null;
        this.body = null;
        this.transferEncoding = null;
        //Append to variable dictionary
        this._variableDict['apiVersion'] = 'api_version';
        this._variableDict['ipAddress'] = 'ip_address';
        this._variableDict['transferEncoding'] = 'transfer_encoding';
    } else {
        this.time = new Date(obj.time);
        this.uri = obj.uri;
        this.verb = obj.verb;
        this.headers = obj.headers;
        this.apiVersion = obj.apiVersion;
        this.ipAddress = obj.ipAddress;
        this.body = obj.body;
        this.transferEncoding = obj.transferEncoding;
        //Append to variable dictionary
        this._variableDict['apiVersion'] = 'api_version';
        this._variableDict['ipAddress'] = 'ip_address';
        this._variableDict['transferEncoding'] = 'transfer_encoding';
    }
};

EventRequestModel.prototype = new BaseModel();
EventRequestModel.prototype.constructor = EventRequestModel;

/**
 * Time when request was made
 *
 * @return {dateTime}
 */
EventRequestModel.prototype.getTime = function() {
    return this.time;
};

/**
 * Setter for Time
 *
 * @param {dateTime} value
 */
EventRequestModel.prototype.setTime = function(value) {
    this.time = value;
};

/**
 * full uri of request such as https://www.example.com/my_path?param=1
 *
 * @return {string}
 */
EventRequestModel.prototype.getUri = function() {
    return this.uri;
};

/**
 * Setter for Uri
 *
 * @param {string} value
 */
EventRequestModel.prototype.setUri = function(value) {
    this.uri = value;
};

/**
 * verb of the API request such as GET or POST
 *
 * @return {string}
 */
EventRequestModel.prototype.getVerb = function() {
    return this.verb;
};

/**
 * Setter for Verb
 *
 * @param {string} value
 */
EventRequestModel.prototype.setVerb = function(value) {
    this.verb = value;
};

/**
 * Key/Value map of request headers
 *
 * @return {object}
 */
EventRequestModel.prototype.getHeaders = function() {
    return this.headers;
};

/**
 * Setter for Headers
 *
 * @param {object} value
 */
EventRequestModel.prototype.setHeaders = function(value) {
    this.headers = value;
};

/**
 * Optionally tag the call with your API or App version
 *
 * @return {string|null}
 */
EventRequestModel.prototype.getApiVersion = function() {
    return this.apiVersion;
};

/**
 * Setter for ApiVersion
 *
 * @param {string|null} value
 */
EventRequestModel.prototype.setApiVersion = function(value) {
    this.apiVersion = value;
};

/**
 * IP Address of the client if known.
 *
 * @return {string|null}
 */
EventRequestModel.prototype.getIpAddress = function() {
    return this.ipAddress;
};

/**
 * Setter for IpAddress
 *
 * @param {string|null} value
 */
EventRequestModel.prototype.setIpAddress = function(value) {
    this.ipAddress = value;
};

/**
 * Request body
 *
 * @return {object|null}
 */
EventRequestModel.prototype.getBody = function() {
    return this.body;
};

/**
 * Setter for Body
 *
 * @param {object|null} value
 */
EventRequestModel.prototype.setBody = function(value) {
    this.body = value;
};


module.exports = EventRequestModel;
