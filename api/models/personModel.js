const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Long = mongoose.Schema.Types.Long;

const validateEmail = function(email){
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(email);
}

let PersonSchema = new Schema({
    personId: {
        type: Number,
        set: (v) => Math.round(v),
        get: (v) => Math.round(v),
        required: 'PersonId is a mandatory field'
    },
    firstName: {
        type: String,
        required: 'firstName is a mandatory field'
    },
    lastName: {
        type: String,
        required: 'lastName is a mandatory field'
    },
    email: {
        type: String,
        validate: [validateEmail, 'invalid email']
    }
});

PersonSchema.set('toJSON', {
    transform: (doc, ret, options) =>{
        delete ret._id;
        delete ret.__v;
        return ret;
    }
})

module.exports = mongoose.model('Person', PersonSchema);