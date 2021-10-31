import React from 'react';
import { Link } from 'react-router-dom';
import './Items.css'

const Items = (props) => {

    //distructuring
    const { _id, img, name, description, price } = props.user
    return (
        <div className="col-md-3">
            <div className="cart">
                <div className="img">
                    <img src={img} alt="" />
                </div>
                <h3>{name}</h3>
                <h5>{price}</h5>
                <p>{description}</p>
                <Link to={`/ordernow/${_id}`}>
                    <button className="btn btn-warning">Order Now {name.toLowerCase()}</button>
                </Link>
            </div>
        </div >
    );
};

export default Items;