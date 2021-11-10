// Create a person schema called personSchema having this prototype:

// - Person Prototype -
// --------------------
// name : string [required]
// age :  number
// favoriteFoods : array of strings (*)

// Use the Mongoose basic schema types. If you want you can also add more fields, use simple validators like required or unique, and set default values. See the Mongoose docs.
// https://mongoosejs.com/docs/guide.html

// Now, create a model called Person from the personSchema.

import mongoose from "mongoose";
const { Schema } = mongoose;

const personSchema = new Schema({
  name: { type: String, required: true },
  age: { type: Number },
  favoriteFoods: [{ type: String }],
});
