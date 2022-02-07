
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const tasksSchema = new Schema({
Underscoreid:String , 

sdate:Number , 

edate:Number , 

tname:String , 

vpms:Number , 

tdescription:String 


})

module.exports = {
  Tasks : mongoose.model('Tasks', tasksSchema),
}

