//Model for the Clients that are submitted by Contact form and managed by Admin.

import mongoose from "mongoose";

var Schema = mongoose.Schema;

var ClientSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "A name is required."
  },

  emailAddress: {
    type: String,
    trim: true,
    unique: true,
    required: "An email address is required.",
    match: [/.+\@.+\..+/, "Please enter a valid e-mail address"]
  },

  phoneNumber: {
    type: Number,
    trim: true,
    required: "An phone number is required."
  },

  petNames: {
    type: String,
    trim: true,
  },

  comment: {
    type: String,
    trim: true,
    required: "A comment is required."
  },

  notes: {
    type: String,
    trim: true,
    },

  clientCreated: {
    type: Date,
    default: Date.now
  },

  clientGroup: {
    type: String
  }
  
});


var Client = mongoose.model("Client", ClientSchema)

module.exports = Client;
