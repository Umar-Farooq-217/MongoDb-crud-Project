'use client'
import React, { useState } from 'react'

export default function UpdateBtn() {
  const [isUpdating,setIsUpadating] = useState(false)
  
  return (
    <div>
            <button className='bg-green-500 px-3 py-2 rounded-xl text-white' onClick={()=>setIsUpadating(true)}>Update</button>
            {
              isUpdating ? 
            }

    </div>
  )
}
