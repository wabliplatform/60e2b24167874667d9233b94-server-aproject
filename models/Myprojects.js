
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const myprojectsSchema = new Schema({
Underscoreid:String , 

pimage:String , 

ptitle:String , 

pstart:String , 

pend:String , 

pduration:String , 

pabstract:String , 

pdescription:String , 

pga:String 


})

module.exports = {
  Myprojects : mongoose.model('Myprojects', myprojectsSchema),
}

