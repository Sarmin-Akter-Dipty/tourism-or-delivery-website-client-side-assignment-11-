import React from 'react';
import { Link } from 'react-router-dom';
import './Items.css'

const Items = (props) => {
    //distructuring
    const { img, name, description, id } = props.user
    return (
        <div className="col-md-2">
            <div className="cart">
                <div className="img">
                    <img src={img} alt="" />
                </div>
                <h6>{name}</h6>
                <p>{description}</p>
                <Link to={`/singleitems/${id}`}><button className="rounded-pill px-4 py-1 border-0 btn-color">Order Now</button></Link>
            </div>
        </div >
    );
};

export default Items;