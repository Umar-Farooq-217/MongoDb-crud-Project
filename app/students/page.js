import dbConnect from '@/config/db'
import { studentsModel } from '@/model/students'
import React from 'react'
const fetchData = async()=>{
 try {
  let data = await studentsModel.find()
  console.log('data ',data);
  return data
 } catch (error) {
  console.log('error',error);
  
 }
  
}

export default async function page() {
const data = await fetchData()
  return (
    <div>
      <h1>students</h1>
      {
data.map((item,i)=>{
  return(
    <p key={i}>{item.name} - {item.email} - {item.phone}</p>
  )
})
      }
    </div>
  )
}
