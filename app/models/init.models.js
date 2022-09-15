var DataTypes = require("sequelize").DataTypes;
var _person = require("./person")


function initModels(sequelize){
    var person = _person(sequelize, DataTypes)
    
    
///////////////////////////////////////////////////////////////////    
    return{
        person
    } 
}



module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;