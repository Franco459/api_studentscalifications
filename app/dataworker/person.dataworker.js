
const indxDB = require("../models/index")
const personRepository = indxDB.models.person;

//Create
exports.create = async(data) => {
    let newPerson = await personRepository.create(data);
    return newPerson;
}

//Read
exports.getAll() = async() => {
    let allPerson = await personRepository.findAll();
    return allPerson;
}

exports.getByID = async(idPerson) => {
    let personByID = await personRepository.findOne({
        where: {
            id: idAdmin
        }
    });
    return personByID;
}

exports.getByFilter = async(filters) => {
    let personByFilter = await personRepository.getByFilter({
        where: {
            ...filters
        }
    });
    return personByFilter;
}

//Update 
exports.update = async(data, idPerson) => {
    let updtPerson = await personRepository.update(data, {
        where: {
            id : idPerson
        }
    });
    return updtPerson;
}

//Delete
exports.delete = async (idPerson) => {
    let delPerson = await personRepository.destroy({
        where:{
            id: idPerson
        }
    });
    return delPerson;
}