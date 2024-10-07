import { studentsModel } from "@/model/students";
import { NextResponse } from "next/server";

const { dbConnect } = require("@/config/db");



dbConnect()
export  const GET = async()=>{
try {
    const data =await studentsModel.find();
    console.log("data",data)
    return NextResponse.json({ message: "success",users:data })

} catch (error) {
    console.log('error',error);
    return NextResponse.json({ message: "error",error })

    
}
}