import { studentsModel } from "@/model/students";
import { NextResponse } from "next/server";
import dbConnect from "@/config/db";
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

export const POST  = async(req)=>{
try {
    const body = await req.json()
    console.log('body',body);
    if(body.name && body.email && body.phone){
        const data = await studentsModel(body)
        await data.save()
    }
   return NextResponse.json({message:'all params are required'})
    
} catch (error) {
    console.log('error',error);
   return NextResponse.json({message:'something went wrong'})
    
}
}