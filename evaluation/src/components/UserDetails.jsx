import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const UserDetails = () => {
  const [user,setUser] = useState({})
  const pharm = useParams()
  const getData = (id)=>{
    fetch(`http://localhost:3000/users/${id}`)
      .then((r)=>r.json())
      .then((r)=>setUser(r))
  }

  useEffect(()=>{
    return pharm.id && getData(pharm.id)
  },[pharm])
  return (
    <div>
      <h1>id: {user.id}</h1>
      <h1>username: {user.username}</h1>
      <h1> password: {user.password}</h1>
      <h2>Post</h2>
      {
        // user.post.map((d)=>{
        //   return (
        //   <>
        //     <p>{d.name}</p>
        //   </>
        //     )
        // })
      }
    </div>
  )
}
