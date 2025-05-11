import React, {useEffect} from 'react';
import Axios from 'axios';
const Getdemo=()=>
{
    useEffect(()=>{
        Axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response=>console.log(response.data))
    })
    return(
        <>
        <h1>Welcome to Axios</h1>
        </>
    )
}
export default Getdemo;