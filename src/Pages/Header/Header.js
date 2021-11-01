import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import image from '../images/unnamed.png'
import useAuth from '../Context/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div className="bg-color">
            <div className="header d-lg-flex align-items-center justify-content-evenly">
                <div className="d-flex">
                    <img className="site-logo" src={image} alt="" />
                    <h1>Yummy <span className="text">Food</span></h1>
                </div>
                <Link to="/home" className="items">Home</Link>
                <Link to="/about" className="items">About</Link>
                <Link to="/items" className="items">Items</Link>
                {user?.email && <Link to="/myorders"><button className="bg-warning rounded px-4 py-2 border-0 my-5 mx-2">My Orders</button></Link>}
                {user?.email && <Link to="/manageallorders"><button className="bg-warning rounded px-4 py-2 border-0 my-5 mx-2">Manage All Orders</button></Link>}

                <span className="text">{user?.displayName}</span>
                {user?.email ? <button onClick={logOut} className=" bg-warning text-dark rounded-pill px-4 py-1 border-0 my-2">Log Out</button> : <Link to="/login" className="items">Log In</Link>}


            </div>
        </div>
    );
};

export default Header;
