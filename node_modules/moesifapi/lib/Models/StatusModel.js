
/**
 * MoesifAPILib
 *
 *
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of StatusModel
 *
 * @constructor
 */
StatusModel = function (obj) {
    if(!obj) {
        this.status = null;     
        this.region = null;     
    } else {
        this.status = obj.status;
        this.region = obj.region;
    }
};

StatusModel.prototype = new BaseModel();
StatusModel.prototype.constructor = StatusModel;

/**
 * Status of Call
 *
 * @return {bool}
 */
StatusModel.prototype.getStatus = function() {
    return this.status;
};

/**
 * Setter for Status
 * 
 * @param {bool} value 
 */
StatusModel.prototype.setStatus = function(value) {
    this.status = value;
};

/**
 * Location
 *
 * @return {string}
 */
StatusModel.prototype.getRegion = function() {
    return this.region;
};

/**
 * Setter for Region
 * 
 * @param {string} value 
 */
StatusModel.prototype.setRegion = function(value) {
    this.region = value;
};


module.exports = StatusModel;