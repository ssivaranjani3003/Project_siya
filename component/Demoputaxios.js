import React,{useState,useEffect} from 'react';
import Axios from 'axios';
const Demoputaxios=()=>
{
    const[users,setUsers]=useState([]);
    const[userId,setUserId]=useState('');
    const[name,setName]=useState('');
    
    useEffect(()=>{
        Axios.get('https://jsonplaceholder.typicode.com/users').then(res=>setUsers(res.data))
    },[])
const addNew=()=>
{
    Axios.put('https://jsonplaceholder.typicode.com/users/'+userId,{name:name})
    .then(()=>
    {
        setUsers(users.map(user => (user.id === parseInt(userId)? {...user,name} : user)  
        ));
    })
    .catch(err=>console.log(err));
}
return(
    <>
    <h1>Axios Get Demo</h1>
    {
        users.map((user)=>(
            <div key={user.id}>
                <p>{user.name}</p>
            </div>
        ))
    }
    <input type="text" value={userId} onChange={(e)=>(setUserId(e.target.value))}/>
    <input type="text" value={name} onChange={(e)=>(setName(e.target.value))}/>
    <button onClick={addNew}>Add New</button>
    </>
)
}
export default Demoputaxios;
