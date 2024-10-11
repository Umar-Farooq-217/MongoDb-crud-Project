'use client'
import React, { useState } from 'react'

export default function DeleteBtn(props) {
  const [loading,setLoading] = useState(false)

    
    const deleteHandler = async()=>{
      setLoading(true)
        const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  "id": props.id
});

const requestOptions = {
  method: "DELETE",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

const response = await fetch("http://localhost:3000/api/students", requestOptions)
 
setLoading(false)
    }
  return (
    <div>
      <button className='bg-red-500 px-3 py-2 rounded-xl text-white' onClick={deleteHandler}>{loading? 'loading...' : 'Delete'}</button>
    </div>
  )
}
