'use client'
import dbConnect from '@/config/db'
import React, { useEffect, useState } from 'react'
import UpdateBtn from '../updateBtn/UpdateBtn';
import DeleteBtn from '../deleteBtn/DeleteBtn';
dbConnect()



export default function GetStudents() {
    const [data, setData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await fetch('/api/students');
          const result = await res.json();
          setData(result);
        } catch (error) {
          console.log('Error fetching data', error);
        }
      };
  
      fetchData();
    }, []);
  return (
    <div>
       <div className="grid grid-cols-auto-fit gap-2 mx-4 pt-10 my-5">

{
data?.map((item,i)=>{
return(
<div key={i} className=" bg-white rounded-xl shadow-xl pl-5 py-10 ">
<h1 className="font-bold text-2xl">#{i + 1}</h1>

  <h1>
          <span className="font-bold text-xl">Id: </span>{item._id}
        </h1>
  <h1>
          <span className="font-bold text-xl">Name: </span>{item.name}
        </h1>
        <h1>
          <span className="font-bold text-xl">Email: </span>{item.email}
        </h1>
        <h1>
          <span className="font-bold text-xl">Phone: </span>{item.phone}
        </h1>
  <div className="flex justify-center my-2">

<UpdateBtn student={item} />
<DeleteBtn id={item._id}/>
  </div>
</div>
)
})
}</div>
    </div>
  )
}
