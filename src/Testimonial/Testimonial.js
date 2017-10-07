//Model for the Testimonials that are submitted by Testimonial form and managed by Admin.

import mongoose from "mongoose";

var Schema = mongoose.Schema;

var TestimonialSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "A name is required."
  },

  testimonial: {
    type: String,
    trim: true,
    required: "Text is required."
  },

  visible: {
    type: Boolean,
  }

});

var Testimonial = mongoose.model("Testimonial", TestimonialSchema)

module.exports = Testimonial;
