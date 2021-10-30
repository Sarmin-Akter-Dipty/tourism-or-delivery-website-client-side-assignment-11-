import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Items from './Items';

const MainItems = () => {
    const [users, setusers] = useState([])
    useEffect(() => {
        fetch('./fakedata.json')
            .then(res => res.json())
            .then(data => setusers(data));
    }, [])
    console.log(users);
    return (
        <div className="row">
            <h1 className="my-4">Our Food Menu</h1>
            {
                users.map(user => <Items key={user.id} user={user}></Items>)
            }

        </div>
    );
};

export default MainItems;