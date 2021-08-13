
/**
 * MoesifAPILib
 *
 * utmSource: Option[String],
 * utmMedium: Option[String],
 * utmCampaign: Option[String],
 * utmTerm: Option[String],
 * utmContent: Option[String],
 * referrer: Option[String],
 * referringDomain: Option[String],
 * gclid: Option[String]
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of CampaignModel
 *
 * @constructor
 */
var CampaignModel = function (obj) {
  if(!obj) {
    this.utmSource = null;
    this.utmMedium = null;
    this.utmCampaign = null;
    this.utmTerm = null;
    this.utmContent = null;
    this.referrer = null;
    this.referringDomain = null;
    this.gclid = null;
  } else {
    this.utmSource = obj.utmSource;
    this.utmMedium = obj.utmMedium;
    this.utmCampaign = obj.utmCampaign;
    this.utmTerm = obj.utmTerm;
    this.utmContent = obj.utmContent;
    this.referrer = obj.referrer;
    this.referringDomain = obj.referringDomain;
    this.gclid = obj.gclid;
  }
};

CampaignModel.prototype = new BaseModel();
CampaignModel.prototype.constructor = CampaignModel;


/**
 * Get the utm source
 *
 * @return {string|null}
 */
CampaignModel.prototype.getUtmSource = function() {
    return this.utmSource;
};

/**
 * Setter for the utm source
 *
 * @param {string|null} value
 */
CampaignModel.prototype.setUtmSource = function(value) {
    this.utmSource = value;
};

/**
 * Get the utm medium
 *
 * @return {string|null}
 */
CampaignModel.prototype.getUtmMedium = function() {
    return this.utmMedium;
};

/**
 * Setter for the utm medium
 *
 * @param {string|null} value
 */
CampaignModel.prototype.setUtmMedium = function(value) {
    this.utmMedium = value;
};

/**
 * Get the utm campaign
 *
 * @return {string|null}
 */
CampaignModel.prototype.getUtmCampaign = function() {
    return this.utmCampaign;
};

/**
 * Setter for the utm campaign
 *
 * @param {string|null} value
 */
CampaignModel.prototype.setUtmCampaign = function(value) {
    this.utmCampaign = value;
};

/**
 * Get the utm term
 *
 * @return {string|null}
 */
CampaignModel.prototype.getUtmTerm = function() {
    return this.utmTerm;
};

/**
 * Setter for the utm term
 *
 * @param {string|null} value
 */
CampaignModel.prototype.setUtmTerm = function(value) {
    this.utmTerm = value;
};

/**
 * Get the utm content
 *
 * @return {string|null}
 */
CampaignModel.prototype.getUtmContent = function() {
    return this.utmContent;
};

/**
 * Setter for the utm content
 *
 * @param {string|null} value
 */
CampaignModel.prototype.setUtmContent = function(value) {
    this.utmContent = value;
};

/**
 * Get the referrer
 *
 * @return {string|null}
 */
CampaignModel.prototype.getReferrer = function() {
    return this.referrer;
};

/**
 * Setter for the referrer
 *
 * @param {string|null} value
 */
CampaignModel.prototype.setReferrer = function(value) {
    this.referrer = value;
};

/**
 * Get the referring domain
 *
 * @return {string|null}
 */
CampaignModel.prototype.getReferringDomain = function() {
    return this.referringDomain;
};

/**
 * Setter for the referring domain
 *
 * @param {string|null} value
 */
CampaignModel.prototype.setReferringDomain = function(value) {
    this.referringDomain = value;
};

/**
 * Get the gclid
 *
 * @return {string|null}
 */
CampaignModel.prototype.getGclid = function() {
    return this.gclid;
};

/**
 * Setter for the gclid
 *
 * @param {string|null} value
 */
CampaignModel.prototype.setGclid = function(value) {
    this.gclid = value;
};

module.exports = CampaignModel;
