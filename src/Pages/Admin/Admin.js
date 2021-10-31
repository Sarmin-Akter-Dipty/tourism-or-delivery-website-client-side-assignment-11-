import React from 'react';
import { Link } from 'react-router-dom';


const Admin = () => {
    return (
        <div>
            <Link to="/addservice"><button className="bg-warning rounded px-4 py-2 border-0 my-5 ">Add Item</button></Link>
            <Link to="/manageitems"><button className="bg-warning rounded px-4 py-2 border-0 my-5 mx-2">Manage Items</button></Link>
        </div>
    );
};

export default Admin;