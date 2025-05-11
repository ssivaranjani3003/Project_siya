import React,{useState,useEffect} from 'react';
import Axios from 'axios';
const Demodeleteaxios=()=>
{
    const[user,setUser]=useState([]);
    const[userId,setUserId]=useState('');
    const[name,setName]=useState('');
    useEffect(()=>
        {Axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res=>setUser(res.data))
        },[]
    )
    const addNew=()=>
    {
        Axios.put('https://jsonplaceholder.typicode.com/users/'+userId,{name:name})
        .then(()=>
        {
            setUser(user.map(u=>(u.id===parseInt(userId)? {...u,name}:u)))
        })
    }
    const deleteUser=(userId)=>
    {
        Axios.delete(https://jsonplaceholder.typicode.com/users/${userId})
        .then(()=>
        {
            setUser(user.filter(u=>u.id!==parseInt(userId)));
        })
    }
    return(
        <>
        {
        user.map((u)=>
        (
            <div key={u.id}>
                <p>{u.name}</p>
            </div>
        ))}
        <input type="text" value={userId} onChange={(e)=>(setUserId(e.target.value))}/><br />
        <input type="text" value={name} onChange={(e)=>(setName(e.target.value))}/><br />
      
        <button onClick={addNew}>AddNew</button>
        <button onClick={()=>deleteUser(userId)}>Delete</button>
        </>
    )
}
export default Demodeleteaxios;
