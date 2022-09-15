const personDataworker = require("../dataworker/person.dataworker");
const person = require("../models/person");

exports.getAll() = async (req, res) => {
    let allPerson = await personDataworker.getAll();
    if(allPerson != null){
        res.status(200).send({
            response: allPerson 
         });
    }
    else res.status(404).send('Not found');
}

exports.getById = async(req, res) => {
    const id = req.params.id;
    let personByID = await personDataworker.getByID(id);
    if(personByID != null){
        res.status(200).send({
            response: personByID 
         });
    }
    else res.status(404).send('Not found');
}

exports.getByFilter = async(req, res) => {
    const filter = req.body;
    let allPersonByFilter = await personDataworker.getByFilter(filter);
    if(allPersonByFilter != null){
        res.status(200).send({
            response: allPersonByFilter 
         });
    }
    else res.status(404).send('Not found');
} 

exports.create = async (req, res) => {
    const data = req.body; 
    let newPerson = await personDataworker.create(data);
    res.status(200).send({
        response: newPerson
    });
}

exports.delete = async(req, res) => {
    const id = req.params.id;
    let delPerson = await personDataworker.delete(id);
    res.status(200).send({
        response: delPerson
    });
}

exports.update = async (req, res) => {
    const data = req.body;
    const id = req.params.id;
    let updtPerson = await personDataworker.update(data, id);
    
    if(updtPerson != null){
        res.status(200).send({
            response: updtPerson 
         });
    }
    else res.status(404).send('Not found');
}