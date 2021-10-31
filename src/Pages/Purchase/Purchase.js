import React from 'react';
import images1 from '../images/images (2).jpg'


const Purchase = () => {
    return (
        <div>
            <h2 className="text-danger my-5">wow!!Confirm your order</h2>
            <img className=" my-5" src={images1} alt="" />
        </div>
    );
};

export default Purchase;