
/**
 * MoesifAPILib
 *
 *
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of EventResponseModel
 *
 * @constructor
 */
EventResponseModel = function (obj) {
    if(!obj) {
        this.time = null;
        this.status = null;
        this.headers = null;
        this.body = null;
        this.ipAddress = null;
        this.transferEncoding = null;
        //Append to variable dictionary
        this._variableDict['ipAddress'] = 'ip_address';
        this._variableDict['transferEncoding'] = 'transfer_encoding';
    } else {
        this.time = new Date(obj.time);
        this.status = obj.status;
        this.headers = obj.headers;
        this.body = obj.body;
        this.ipAddress = obj.ipAddress;
        this.transferEncoding = obj.transferEncoding;     
        //Append to variable dictionary
        this._variableDict['ipAddress'] = 'ip_address';
        this._variableDict['transferEncoding'] = 'transfer_encoding';
    }
};

EventResponseModel.prototype = new BaseModel();
EventResponseModel.prototype.constructor = EventResponseModel;

/**
 * Time when response received
 *
 * @return {dateTime}
 */
EventResponseModel.prototype.getTime = function() {
    return this.time;
};

/**
 * Setter for Time
 *
 * @param {dateTime} value
 */
EventResponseModel.prototype.setTime = function(value) {
    this.time = value;
};

/**
 * HTTP Status code such as 200
 *
 * @return {int}
 */
EventResponseModel.prototype.getStatus = function() {
    return this.status;
};

/**
 * Setter for Status
 *
 * @param {int} value
 */
EventResponseModel.prototype.setStatus = function(value) {
    this.status = value;
};

/**
 * Key/Value map of response headers
 *
 * @return {object}
 */
EventResponseModel.prototype.getHeaders = function() {
    return this.headers;
};

/**
 * Setter for Headers
 *
 * @param {object} value
 */
EventResponseModel.prototype.setHeaders = function(value) {
    this.headers = value;
};

/**
 * Response body
 *
 * @return {object}
 */
EventResponseModel.prototype.getBody = function() {
    return this.body;
};

/**
 * Setter for Body
 *
 * @param {object} value
 */
EventResponseModel.prototype.setBody = function(value) {
    this.body = value;
};

/**
 * IP Address from the response, such as the server IP Address
 *
 * @return {string|null}
 */
EventResponseModel.prototype.getIpAddress = function() {
    return this.ipAddress;
};

/**
 * Setter for IpAddress
 *
 * @param {string|null} value
 */
EventResponseModel.prototype.setIpAddress = function(value) {
    this.ipAddress = value;
};


module.exports = EventResponseModel;
