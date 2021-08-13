
/**
 * MoesifAPILib
 *
 * modifiedTime: Option[DateTime],
 * ipAddress: Option[String],
 * sessionToken: Option[String],
 * companyId: String,
 * companyDomain: Option[String],
 * metadata: Option[JsObject],
 * campaign: Option[CampaignModel]
 */
var BaseModel = require("./BaseModel");
var CampaignModel = require("./CampaignModel");
/**
 * Creates a instance of CompanyModel
 *
 * @constructor
 */
var CompanyModel = function (obj) {
  if(!obj) {
    this.companyId = null;
    this.modifiedTime = null;
    this.ipAddress = null;
    this.sessionToken = null;
    this.companyDomain = null;
    this.metadata = null;
    this.campaign = null;
    // Append to variable dictionary
    this._variableDict['companyId'] = 'company_id'; 
  } else {
    this.companyId = obj.companyId;
    this.modifiedTime = new Date(obj.modifiedTime);
    this.ipAddress = obj.ipAddress;
    this.sessionToken = obj.sessionToken;
    this.companyDomain = obj.companyDomain;
    this.metadata = obj.metadata;
    this.campaign = new CampaignModel(obj.campaign);
    this._variableDict['companyId'] = 'company_id';
  }
};

CompanyModel.prototype = new BaseModel();
CompanyModel.prototype.constructor = CompanyModel;


/**
 * Modified time
 *
 * @return {dateTime}
 */
CompanyModel.prototype.getModifiedTime = function() {
  return this.modifiedTime;
};

/**
* Setter for modified time
*
* @param {dateTime} value
*/
CompanyModel.prototype.setModifiedTime = function(value) {
  this.modifiedTime = value;
};

/**
 * The company Id
 *
 * @return {string}
 */
CompanyModel.prototype.getCompanyId = function() {
  return this.companyId;
};

/**
* Setter for the company Id
*
* @param {string} value
*/
CompanyModel.prototype.setCompanyId = function(value) {
  this.companyId = value;
};


/**
 * Get the ip address
 *
 * @return {string|null}
 */
CompanyModel.prototype.getIpAddress = function() {
  return this.ipAddress;
};

/**
* Setter for the ip address
*
* @param {string|null} value
*/
CompanyModel.prototype.setIpAddress = function(value) {
  this.ipAddress = value;
};


/**
 * Get the session token
 *
 * @return {string|null}
 */
CompanyModel.prototype.getSessionToken = function() {
  return this.sessionToken;
};

/**
* Setter for the session token
*
* @param {string|null} value
*/
CompanyModel.prototype.setSessionToken = function(value) {
  this.sessionToken = value;
};

/**
 * Get the company domain
 *
 * @return {string|null}
 */
CompanyModel.prototype.getCompanyDomain = function() {
  return this.companyDomain;
};

/**
* Setter for the company domain
*
* @param {string|null} value
*/
CompanyModel.prototype.setCompanyDomain = function(value) {
  this.companyDomain = value;
};

/**
 * Metadata in JSON.
 *
 * @return {object|null}
 */
CompanyModel.prototype.getMetadata = function() {
  return this.metadata;
};

/**
 * Setter for Metadata
 *
 * @param {object|null} value
 */
CompanyModel.prototype.setMetadata = function(value) {
  this.metadata = value;
};

/**
 * The Campaign object
 *
 * @return {CampaignModel|null}
 */
CompanyModel.prototype.getCampaign = function() {
  return this.campaign;
};

/**
* Setter for the Campaign object
*
* @param {CampaignModel|null} value
*/
CompanyModel.prototype.setCampaign = function(value) {
  this.campaign = value;
};

module.exports = CompanyModel;
