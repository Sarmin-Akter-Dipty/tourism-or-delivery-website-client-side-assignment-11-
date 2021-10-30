import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import './SingleItems.css'

const SingleItems = () => {
    const { id } = useParams();
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('https://kaushik-pramanik.github.io/data/data.json')
            .then(res => res.json())
            .then(data => setUsers(data));
    }, [])

    const data = users?.find(user => Number(user.id) === Number(id))
    console.log(data);


    return (
        <div className="row my-5">
            <div className="col-md-12">
                <div className="img">
                    <img src={data?.img} alt="" />
                </div>
                <h3>{data?.name}</h3>
                <p>{data?.description}</p>
            </div>
        </div>
    );
};

export default SingleItems;