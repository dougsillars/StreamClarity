
/**
 * MoesifAPILib
 *
 * modifiedTime: Option[DateTime],
 * ipAddress: Option[String],
 * sessionToken: Option[String],
 * userId: String,
 * companyId: Option[String],
 * userAgentString: Option[String],
 * metadata: Option[JsObject],
 * campaign: Option[CampaignModel]
 */
var BaseModel = require("./BaseModel");
var CampaignModel = require("./CampaignModel");
/**
 * Creates a instance of UserModel
 *
 * @constructor
 */
var UserModel = function (obj) {
  if(!obj) {
    this.userId = null;
    this.companyId = null;
    this.modifiedTime = null;
    this.ipAddress = null;
    this.sessionToken = null;
    this.userAgentString = null;
    this.metadata = null;
    this.campaign = null;
    // Append to variable dictionary
    this._variableDict['userId'] = 'user_id'; 
    this._variableDict['companyId'] = 'company_id'; 
  } else {
    this.userId = obj.userId;
    this.companyId = obj.companyId;
    this.modifiedTime = new Date(obj.modifiedTime);
    this.ipAddress = obj.ipAddress;
    this.sessionToken = obj.sessionToken;
    this.userAgentString = obj.userAgentString;
    this.metadata = obj.metadata;
    this.campaign = new CampaignModel(obj.campaign);
    this._variableDict['userId'] = 'user_id';
    this._variableDict['companyId'] = 'company_id';
  }
};

UserModel.prototype = new BaseModel();
UserModel.prototype.constructor = UserModel;

/**
 * Modified time
 *
 * @return {dateTime}
 */
UserModel.prototype.getModifiedTime = function() {
  return this.modifiedTime;
};

/**
* Setter for modified time
*
* @param {dateTime} value
*/
UserModel.prototype.setModifiedTime = function(value) {
  this.modifiedTime = value;
};

/**
 * The user Id
 *
 * @return {string}
 */
UserModel.prototype.getUserId = function() {
  return this.userId;
};

/**
* Setter for the user Id
*
* @param {string} value
*/
UserModel.prototype.setUserId = function(value) {
  this.userId = value;
};

/**
 * Get the user agent string
 *
 * @return {string|null}
 */
UserModel.prototype.getUserAgentString = function() {
  return this.userAgentString;
};

/**
* Setter for the user agent string
*
* @param {string|null} value
*/
UserModel.prototype.setUserAgentString = function(value) {
  this.userAgentString = value;
};

/**
 * The company Id
 *
 * @return {string|null}
 */
UserModel.prototype.getCompanyId = function() {
  return this.companyId;
};

/**
* Setter for the company Id
*
* @param {string|null} value
*/
UserModel.prototype.setCompanyId = function(value) {
  this.companyId = value;
};

/**
 * Get the ip address
 *
 * @return {string|null}
 */
UserModel.prototype.getIpAddress = function() {
  return this.ipAddress;
};

/**
* Setter for the ip address
*
* @param {string|null} value
*/
UserModel.prototype.setIpAddress = function(value) {
  this.ipAddress = value;
};

/**
 * Get the session token
 *
 * @return {string|null}
 */
UserModel.prototype.getSessionToken = function() {
  return this.sessionToken;
};

/**
* Setter for the session token
*
* @param {string|null} value
*/
UserModel.prototype.setSessionToken = function(value) {
  this.sessionToken = value;
};

/**
 * Metadata in JSON.
 *
 * @return {object|null}
 */
UserModel.prototype.getMetadata = function() {
  return this.metadata;
};

/**
 * Setter for Metadata
 *
 * @param {object|null} value
 */
UserModel.prototype.setMetadata = function(value) {
  this.metadata = value;
};

/**
 * The Campaign object
 *
 * @return {CampaignModel|null}
 */
UserModel.prototype.getCampaign = function() {
  return this.campaign;
};

/**
* Setter for the Campaign object
*
* @param {CampaignModel|null} value
*/
UserModel.prototype.setCampaign = function(value) {
  this.campaign = value;
};

module.exports = UserModel;
