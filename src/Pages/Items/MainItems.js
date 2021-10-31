import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../Context/useAuth';
import Items from './Items';

const MainItems = () => {

    const [users, setusers] = useState([])

    useEffect(() => {
        fetch('https://possessed-moonlight-35549.herokuapp.com/items')
            .then(res => res.json())
            .then(data => setusers(data));
    }, [])
    console.log(users);
    const { isLoading } = useAuth();
    if (isLoading) {
        return <Spinner animation="border" variant="success" />
    };
    return (

        <div className="row">
            <h1 className="my-4">Our Food Menu</h1>
            {
                users.map(user => <Items key={user._id} user={user}></Items>)
            }

        </div>
    );
};

export default MainItems;