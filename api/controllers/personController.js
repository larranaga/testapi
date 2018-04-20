const mongoose = require('mongoose'),
    Person = mongoose.model('Person');


exports.listPeople = (req, res) => {
    let limitRequested = req.query.limit ? Number(req.query.limit) : -1;
    if(limitRequested === -1){
        Person.find({}, (err, person) => {
            if(err)
                res.send(err);
            res.json(person)
        });
    }
    else{
        Person.find({}, (err, person) => {
            if(err)
                res.send(err);
            res.json(person)
        }).limit(limitRequested);
    }
};

exports.getPerson = (req, res) => {
    Person.findById(req.params.personId,  (err, person) => {
        if(err)
            res.send(err);
        res.json(person);
    });
};

exports.createPerson = (req, res) => {
    let new_person = new Person(req.body);
    new_person.save((err, person) => {
        if(err)
            res.send(err);
        res.json(person);
    });
};

exports.updatePerson = (req, res) => {
    Person.findOneAndUpdate({}, req.body, {new: true}, (err, person) => {
        if(err)
            res.send(err);
        res.json(person);
    });
};