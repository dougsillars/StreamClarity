/**
 * MoesifAPILib
 *
 *
 */

/**
 * Creates a instance of BaseModel
 *
 * @constructor
 */
function BaseModel() {
    //Maintain a name mapping dictionary
    this._variableDict= [];
    this.toJSON = function(){
        var newDict = {};
            for(var prop in this){                       
                if(typeof this[prop]!=="function" && prop !== "_variableDict"){                         
                    if(prop in this._variableDict){  
                        var value = this._variableDict[prop];
                        newDict[value] = this[prop];
                    }else{                         
                        newDict[prop] = this[prop];
                    }
                }
            } 
        return (newDict);
    }
}
module.exports = BaseModel;