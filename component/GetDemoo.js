import React, {useEffect, useState} from 'react';
//import { useEffect } from 'react';
import Axios from 'axios';
const Demogetaxios=()=>
{
  const[user,setUsers]=useState([])
    useEffect(()=>
    {
        Axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response=>setUsers(response.data))
    })
  return (
    <>
    <h1>Welcome to Axios</h1>
    <table border='solid'>
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
        {user.map((user)=>
        <tr key={user.id}>
       <td >{user.name}</td>
        <td >{user.email}</td>
        </tr>
        )}
        </tbody>
    </table>
    
    </>
  )
    
}
export default Demogetaxios;
