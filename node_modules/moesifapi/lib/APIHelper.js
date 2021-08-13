/**
 * MoesifAPILib
 *
 *
 */
 
var stream = require('stream');


var APIHelper = {

    /**
     * Replaces template parameters in the given url
     * @param	{String} queryBuilder    The query string builder to replace the template parameters
     * @param	{Array} parameters    The parameters to replace in the queryBuilder 
     */
    appendUrlWithTemplateParameters:function(queryBuilder, parameters) {            
        //perform parameter validation
        if(queryBuilder == null) {
            console.log('queryBuilder is null');
            return;
        }
        if(parameters ==null) {
            return queryBuilder;
        }             
        //iterate and replace parameters             
        for(var key in parameters) {
            var replaceValue = "";
            //load parameter value
            var element =  parameters[key];
            if(element == null) {
                replaceValue = "";
            } else if (element instanceof Array) {
                replaceValue = element.map(function(element){
                    return encodeURIComponent(element);
                })
                replaceValue = replaceValue.join("/");
            } else {
                replaceValue = encodeURIComponent(element.toString());
            }
            queryBuilder = queryBuilder.replace('{'+(key)+'}', replaceValue)   
        }
        return queryBuilder;
    },

    /**
     * Appends the given set of parameters to the given query string
     * @param	{String} queryBuilder    The query url string to append the parameters
     * @param	{Array} parameters   The parameters to append 
     */
    appendUrlWithQueryParameters:function(queryBuilder, parameters) {
        //perform parameter validation
        if(queryBuilder == null) {
            console.log('queryBuilder is null');
            return;
        }
        if(parameters == queryBuilder) {
            return queryBuilder;
        }
        var hasParams = queryBuilder.indexOf('?') >-1;
        //iterate and replace parameters
        var encoded = this.urlEncodeObject(parameters);
        var separator = (hasParams)?'&':'?'
        queryBuilder = queryBuilder + separator + encoded;
        return queryBuilder;
    },

    /**
     * Validates and processes the given Url
     * @param {String} url    The Url to process
     * @return {String}   Pocessed url 
     */
    cleanUrl:function(url) {            
        //ensure that the urls are absolute            
        var re = /^https?:\/\/[^\/]+/; 
        var str = url;            
        var match = url.match(re);
        if(match==null) {
            console.log('Invalid Url format');
            return;                
        }
        //remove redundant forward slashes
        var protocol = match[0];
        var queryUrl = url.substring(protocol.length);
        queryUrl = queryUrl.replace(/\/\/+/,"/");                    
        var result = protocol+queryUrl;  
        return result;
    },        
    
    /**
     * JSON Serialization of a given object.
     * @param	{Object} data The object to serialize into JSON
     * @return	The	serialized Json string representation of the given object 
     */
    jsonSerialize: function(data) {
        return JSON.stringify(data);
    },
    
    /**
     * Formats the template parameters in the string
     * @param	str     The string containing the template
     * @return	The string with template parameters filled in. 
     */
    formatString: function(str){        
        if (!str || arguments.length <=1 ) return str;
        var args = arguments;
        for (var i = 1; i < arguments.length; i++) {       
            var reg = new RegExp("\\{" + (i - 1) + "\\}", "gm");             
            str = str.replace(reg, arguments[i]);
        }
        return str;
    },

    /**
     * Cleans the object by removing null properties.
     * @param	{object} input Object or dictionary. 
     * @return	{object} Returns the cleaned version of the object.
     */
    cleanObject: function(input){
        if(input instanceof stream.Stream){
            return input;
        }
        for(var key in input) {
            var value = input[key];
            if (value == null || value == undefined){
                if (input.constructor === Array){input.splice(key, 1)}
                else delete input[key];
            } else if (Object.prototype.toString.call(value) === '[object Object]') {
                this.cleanObject(value);
            } else if (value.constructor === Array) {
                this.cleanObject(value);
            }
        }
        return input;
    },


    /**
     * Shallow merges the properties of two objects
     * @param {object} first The object to merge in to
     * @param {object} second The object to be added to first
     *
     * @return the merged (modified) first object
     */
    merge:function(first,second){
        for (var attrname in second) { first[attrname] = second[attrname]; }
        return first;
    },

    /**
     * Checks if the elements of the given array are all primitives
     */
    isPrimitiveArray: function(value){
        if(value.constructor && value.constructor !== Array){
            return false;
        }
        if(value.length == 0) return true;
        return value.every(function (obj) {
            return obj == null || obj == undefined || obj.constructor && [String, Number, Boolean].indexOf(obj.constructor) >=0 
        });
    },
    /**
     * Converts an object to formdata serialization.
     * @param {Object} obj
     * @return {array<key,value>}
     */
    formDataEncodeObject : function (obj,keys) {
        var query = '', key, value, fullSubName, subName, subValue, innerObj, i;
        if(!keys){
            keys=[];
        }
        for (key in obj) {
            value = obj[key];
            if(value instanceof stream.Stream){
                keys.push({key:key,value:value});
            } else if (value instanceof Array) {
                var arrayFormat = "{0}[{1}]";
                for (i = 0; i < value.length; ++i) {
                    subValue = value[i];
                    fullSubName = this.formatString(arrayFormat,key,i);
                    innerObj = {};
                    innerObj[fullSubName] = subValue;
                    this.formDataEncodeObject(innerObj,keys);
                }
            } else if (value instanceof Object) {
                for (subName in value) {
                    subValue = value[subName];
                    fullSubName = key + '[' + subName + ']';
                    innerObj = {};
                    innerObj[fullSubName] = subValue;
                    this.formDataEncodeObject(innerObj,keys);
                }
            } else if (value !== undefined && value !== null){
                if(!(value instanceof Object)) {
                      keys.push({key:key,value:value});
                }
            }
        }
        return keys;
    },

    /**
     * Converts an object to x-www-form-urlencoded serialization.
     * @param {Object} obj
     * @return {String}
     */
    urlEncodeObject : function (obj) {
        var params = this.formDataEncodeObject(obj);
        var query="";
        for(var index in params){
            var pair = params[index];
            var key = pair.key
            var value = pair.value;
            query= query += encodeURIComponent(key) + '=' + encodeURIComponent(value) + '&'
        }
        return query.length ? query.substr(0, query.length - 1) : query;
    }
}
module.exports = APIHelper;