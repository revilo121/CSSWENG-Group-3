const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BranchSchema = new Schema({
    name: { type: String, required: true }

});


 const Branch = mongoose.model('branch', BranchSchema);


module.exports = Branch;