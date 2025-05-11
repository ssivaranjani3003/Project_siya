/*import { useState } from "react";
function ArrayOfObjects(){
    const[user,setUser]=useState(
        [
            {
                id:1,
                name:"Siya",
                type:"Student1"
            },
            {
                id:2,
                name:"Selci",
                type:"Student2"
            }
        ]
    );
    const handleAddNewUser=()=>
    {
        setUser([...user,{id:3,name:"Sharu",type:"Student3"},{id:4,name:"Sorna",type:"Student4"}])
    }
    return(
        <div>
            <ul>
                {user.map((user)=>(
                    <div key={user.id}>
                    <p>{user.name}</p>
                    <p>{user.type}</p>
                    </div>
                ))}
            </ul>
            <button onClick={handleAddNewUser}>+Add User</button>
        </div>
    )
}
export default ArrayOfObjects;*/
