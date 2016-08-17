var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User = require('./user');
var schema = new Schema({
    content: {type: String, required: true},
    user: {type: Schema.Types.ObjectId, ref: 'User'}
});
schema.post('remove', (doc)=>{
    const deleteMessage  = doc;
  User.findById(doc.user,  (err, doc)=>{
      doc.message.pull(deleteMessage);
      doc.save()

  })
});
module.exports = mongoose.model('Message', schema);