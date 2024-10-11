'use client'
import React, { useState } from 'react'

export default function UpdateBtn({student}) {
  const [isUpdating,setIsUpadating] = useState(false)
  const [name,setName] = useState(student.name)
  const [email,setEmail] = useState(student.email)
  const [phone,setPhone] = useState(student.phone)
  const [loading,setLoading] = useState(false)
  

  const updateHandler = async()=>{
    try {
      setLoading(true)
      const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  "id": student._id,
  name,
  email,
  phone
  
});

const requestOptions = {
  method: "PUT",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

await fetch("http://localhost:3000/api/students", requestOptions)
 
 
  setIsUpadating(false)
  setLoading(false)
    } catch (error) {
      console.log('error',error);
      
    }
  }

  return (
    <div>
            <button className='bg-green-500 px-3 py-2 rounded-xl text-white' onClick={()=>setIsUpadating(true)}>Update</button>
            {
              isUpdating  && (

                <div className="bg-black  md:w-[50%] sm:w-[90%] mx-auto">
                  <h4 className='text-5xl text-center font-bold text-white '>Update Student</h4>

                  <input className='border-none outline-none my-2 rounded-lg px-3 py-1' type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter Name' /> <br />
                  <input className='border-none outline-none my-2 rounded-lg px-3 py-1' type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Email' /> <br />
                  <input className='border-none outline-none my-2 rounded-lg px-3 py-1' type="text" value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder='Enter Phone' /> <br />
                  <button className='bg-green-600 px-3 py-2 text-white rounded-xl mr-3' onClick={updateHandler}>{!loading ? 'Update Student': 'loading...'}</button>
                  <button className='bg-red-600 px-3 py-2 text-white rounded-xl' onClick={()=>setIsUpadating(false)}>Cancel</button>

              </div>
          )
            }

    </div>
  )
}
