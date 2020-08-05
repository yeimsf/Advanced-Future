const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;

var photoSchema = new Schema({
  imgtitle: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  imgtext: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

var appartSchema = new Schema({
  appartTitle: {
    type: String,
    required: true
  },
  appartPrice: {
    type: Currency,
    required: true
  },
  appartText: {
    type: String,
    required: true
  },
  appartPhotos: [photoSchema]
},{
  timestamps: true
});

var Appartments = mongoose.model('Appartment', appartSchema);

module.exports = Appartments;
