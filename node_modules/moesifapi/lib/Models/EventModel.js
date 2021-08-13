
/**
 * MoesifAPILib
 *
 *
 */
var BaseModel = require("./BaseModel");
var EventRequestModel = require("./EventRequestModel");
var EventResponseModel = require("./EventResponseModel");
/**
 * Creates a instance of EventModel
 *
 * @constructor
 */
var EventModel = function (obj) {
    if(!obj) {
        this.request = null;
        this.response = null;
        this.sessionToken = null;
        this.tags = null;
        this.userId = null;
        this.companyId = null;
        this.metadata = null;
        this.direction = null;
        this.weight = null;
        //Append to variable dictionary
        this._variableDict['sessionToken'] = 'session_token';
        this._variableDict['userId'] = 'user_id';
        this._variableDict['companyId'] = 'company_id';
    } else {
        this.request = new EventRequestModel(obj.request);
        this.response = new EventResponseModel(obj.response);
        this.sessionToken = obj.sessionToken;
        this.tags = obj.tags;
        this.userId = obj.userId;
        this.companyId = obj.companyId;
        this.metadata = obj.metadata;
        this.direction = obj.direction;
        this.weight = obj.weight;
        //Append to variable dictionary
        this._variableDict['sessionToken'] = 'session_token';
        this._variableDict['userId'] = 'user_id';
        this._variableDict['companyId'] = 'company_id';
    }
};

EventModel.prototype = new BaseModel();
EventModel.prototype.constructor = EventModel;

/**
 * API request object
 *
 * @return {EventRequestModel}
 */
EventModel.prototype.getRequest = function() {
    return this.request;
};

/**
 * Setter for Request
 *
 * @param {EventRequestModel} value
 */
EventModel.prototype.setRequest = function(value) {
    this.request = value;
};

/**
 * API response Object
 *
 * @return {EventResponseModel|null}
 */
EventModel.prototype.getResponse = function() {
    return this.response;
};

/**
 * Setter for Response
 *
 * @param {EventResponseModel|null} value
 */
EventModel.prototype.setResponse = function(value) {
    this.response = value;
};

/**
 * End user's auth/session token
 *
 * @return {string|null}
 */
EventModel.prototype.getSessionToken = function() {
    return this.sessionToken;
};

/**
 * Setter for SessionToken
 *
 * @param {string|null} value
 */
EventModel.prototype.setSessionToken = function(value) {
    this.sessionToken = value;
};

/**
 * comma separated list of tags, see documentation
 *
 * @return {string|null}
 */
EventModel.prototype.getTags = function() {
    return this.tags;
};

/**
 * Setter for Tags
 *
 * @param {string|null} value
 */
EventModel.prototype.setTags = function(value) {
    this.tags = value;
};

/**
 * End user's user_id string from your app
 *
 * @return {string|null}
 */
EventModel.prototype.getUserId = function() {
    return this.userId;
};

/**
 * Setter for UserId
 *
 * @param {string|null} value
 */
EventModel.prototype.setUserId = function(value) {
    this.userId = value;
};

/**
 * company_id string
 *
 * @return {string|null}
 */
EventModel.prototype.getCompanyId = function() {
    return this.companyId;
};

/**
 * Setter for CompanyId
 *
 * @param {string|null} value
 */
EventModel.prototype.setCompanyId = function(value) {
    this.companyId = value;
};


/**
 * Metadata in JSON.
 *
 * @return {object|null}
 */
EventModel.prototype.getMetadata = function() {
  return this.metadata;
};

/**
 * Setter for Metadata
 *
 * @param {object|null} value
 */
EventModel.prototype.setMetadata = function(value) {
  this.metadata = value;
};

/**
 * direction string
 *
 * @return {string|null}
 */
EventModel.prototype.getDirection = function() {
    return this.direction;
};

/**
 * Setter for direction
 *
 * @param {string|null} value
 */
EventModel.prototype.setDirection = function(value) {
    this.direction = value;
};

/**
 * Weight of an API call number
 *
 * @return {number|null}
 */
EventModel.prototype.getWeight = function() {
    return this.weight;
};

/**
 * Setter for weight
 *
 * @param {number|null} value
 */
EventModel.prototype.setWeight = function(value) {
    this.weight = value;
};

module.exports = EventModel;