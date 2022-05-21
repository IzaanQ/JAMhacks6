import { Schema, model, Model, Document } from 'mongoose';
const schema = new Schema({
  name: {
    type: String, // Just the name / title of the contact
    required: true
  },

  position: {
    type: Number, // What position is the contact in; eg: 1st 2nd 3rd
    required: true
  },
  
  relation: {
    type: String, // What is the relation, eg: father, mother, friend
    required: false
  },

  online: {
    type: Boolean, // If user is online or not
    required: true
  }
}, {versionKey: false})

const contact = model('contact', schema, 'contact')

export default contact