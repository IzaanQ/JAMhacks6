import { Schema, model, Model, Document } from 'mongoose';
const schema = new Schema({
  darkmode: {
    type: Boolean, // If dark mode enabled or not
    required: true
  }
}, {versionKey: false})

const setting = model('setting', schema, 'setting')

export default setting