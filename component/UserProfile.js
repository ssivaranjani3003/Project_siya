import React, { useState, useEffect } from 'react';

const UserProfile = ({ name, age }) => {
    const [userInfo, setUserInfo] = useState({ name, age });
    useEffect(() => {
        setUserInfo({ name, age });
    }, [name, age]);
    return (
        <div>
            <h2>User Profile</h2>
            <p>Name: {userInfo.name}</p>
            <p>Age: {userInfo.age}</p>
        </div>
    );
};
export default UserProfile;
