import { Schema, model, Model, Document } from 'mongoose';
const schema = new Schema({
  name: {
    type: String, // Just the name / title of the block
    required: true
  },

  position: {
    type: Number, // What position is the block in; eg: 1st 2nd 3rd
    required: true
  },
  timeSlot: {
    type: String, // RAILWAY TIME ONLY; Format: [beginning time | ending time]; eg: [16:00|17:00]
    required: true
  },
  blockSize: {
    type: Number, // How many grid spaces it's taking; Note 1 grid space = 1 hour
    required: true
  }
}, {versionKey: false})

const block = model('block', schema, 'block');
export default block;