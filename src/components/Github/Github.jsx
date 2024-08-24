import React from 'react'
import { useLoaderData } from "react-router-dom";

function Github() {
    const data = useLoaderData();
    // const [data, setData] = useState([]);
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/krarpit')
    //     .then(res => res.json())
    //     .then(data => setData(data));
    // },[])
  return (
    <div className='bg-slate-600 text-white rounded-md p-5 text-center m-10 flex gap-8'>
    <div><img src={data.avatar_url} alt="profile-img" width={300}/></div>
    <div><h2 className='text-2xl font-semibold text-center'>Github followers - {data.followers}</h2>
    <h2 className='text-2xl font-semibold'>Username - {data.login}</h2>
    </div>
    </div>
  )
}

export default Github

export const githubInfoLoader = async ()=>{
    const response = await fetch('https://api.github.com/users/krarpit');
    return response.json();
}