import dbConnect from '@/config/db'
dbConnect()
import { studentsModel } from '@/model/students'
import React from 'react'
import DeleteBtn from '../components/deleteBtn/DeleteBtn'
import UpdateBtn from '../components/updateBtn/UpdateBtn'
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
data?.map((item,i)=>{
  return(
    <div key={i} className="">

      <p >{item._id} 
        </p>
        <p className=""> {item.name}</p>
        <p className="">{item.email}</p>
        <p className="">{item.phone}</p>
      <UpdateBtn id={item._id} />
      <DeleteBtn id={item._id}/>
    </div>
  )
})
      }
    </div>
  )
}
