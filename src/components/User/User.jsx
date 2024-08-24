// import React from 'react'
import { useParams } from "react-router-dom"

function User() {
    const {id} = useParams();
  return (
    <div className="bg-slate-600 text-white rounded-md p-5 text-center m-10">User:{id}</div>
  )
}

export default User