import mongoose, { Schema } from "mongoose";


const studentSchema = new Schema({
    name : {type:String,required:true},
    email:{type:String,required:true},
    phone:Number,
})

export  const studentsModel = mongoose.models?.students || mongoose.model('students',studentSchema)