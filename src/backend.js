import mongoose from 'mongoose';

export default async function mongo() {
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
    mongoose.connect(process.env.MongoDB, options).then(() => console.log(`MongoDB is connected`));
  }