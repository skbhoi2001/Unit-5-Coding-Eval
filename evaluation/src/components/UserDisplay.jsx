import React, { useEffect, useState } from 'react'

export const User = () => {
  const [data,setData] = useState([])

  const getData = ()=>{
    fetch("http://localhost:3000/users")
      .then((r)=>r.json())
      .then((r)=>setData(r))
  }

  useEffect(()=>{
    getData()
  },[])

  return (
    <div>
      <div>
        {
          data.map(()=>{
            
          })
        }
      </div>
    </div>
  )
}
