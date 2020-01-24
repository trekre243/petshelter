const express = require('express');
const app = express();

const path = require('path');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/petshelter', {useNewUrlParser: true});

app.use(express.static(__dirname + '/public/dist/public'));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

const SkillsSchema = mongoose.Schema({
    skill1: String,
    skill2: String,
    skill3: String
})

const PetSchema = mongoose.Schema({
    name: {type: String, required: [true, 'A name is required'], minlength: [3, 'Name must be at least three characters']},
    type: {type: String, required: [true, 'A pet must be a specific type'], minLength: [3, 'Pet type must be at least 3 charcters']},
    description: {type: String, required: [true, 'A description is required'], minLength: [3, 'Pet description must be at least 3 characters']},
    skills: SkillsSchema,
    likes: {type: Number, default: 0}
});

const Pet = mongoose.model('Pet', PetSchema);


app.get('/api/pets', (req, res) => {
    Pet.find().sort('type')
        .then(data => {
            res.json({message: 'success', data: data});
        })
        .catch(err => {
            res.json({message: 'error', data: err});
        });
});

app.get('/api/pets/:id', (req, res) => {
    Pet.findOne({_id: req.params.id})
        .then(data => {
            res.json({message: 'success', data: data});
        })
        .catch(err => {
            res.json({message: 'error', data: err});
        });
});

app.post('/api/pets', (req, res) => {
    Pet.find({name: req.body.name})
        .then(data => {
            if(data.length != 0) {
                res.json({message: 'error', data: 'name taken'});
            } else {
                Pet.create(req.body)
                    .then(data => {
                        res.json({message: 'success', data: data});
                    })
                    .catch(err => {
                        res.json({message: 'error', data: err});
                    });
            }
        })
        .catch(err => {
            res.json({message: 'error', data: err});
        });

});

app.put('/api/pets/:id', (req, res) => {
    Pet.find({name: req.body.name})
        .then(data => {
            if(data.length != 0 && data[0]._id != req.body._id) {
                res.json({message: 'error', data: 'name taken'});
            } else {
                Pet.updateOne({_id: req.params.id}, {$set: req.body})
                    .then(data => {
                        res.json({message: 'success', data: data});
                    })
                    .catch(err => {
                        res.json({message: 'error', data: err});
                    });
            }
        })
        .catch(err => {
            res.json({message: 'error', data: err});
        });
});

app.delete('/api/pets/:id', (req, res) => {
    Pet.deleteOne({_id: req.params.id})
        .then(data => {
            res.json({message: 'success', data: data});
        })
        .catch(err => {
            res.json({message: 'error', data: err});
        });
});

app.get('/api/pets/:id/like', (req, res) => {
    Pet.findOneAndUpdate({_id: req.params.id}, {$inc: {likes: 1}}, {new: true})
        .then(data => {
            res.json({message: 'success', data: data});
        })
        .catch(err => {
            res.json({message: 'error', data: err});
        });
});

app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"));
})

app.listen(8000, () => console.log('Server started on port 8000'));