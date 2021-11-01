import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../Context/useAuth';
import './OrderNow.css'

const OrderNow = () => {

    const { itemId } = useParams();
    const [item, setItem] = useState({});
    const { user, logOut } = useAuth();

    console.log(item);
    useEffect(() => {

        fetch(`https://possessed-moonlight-35549.herokuapp.com/items/${itemId}`)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [itemId])

    const {
        register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = (data) => {

        data.item = item;
        data.status = 'Pending'
        fetch("https://possessed-moonlight-35549.herokuapp.com/orders", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));
        console.log(data);
        reset()
    };
    return (
        <div>
            <div className="row my-5 ">
                <div className="col-md-4 my-5 ">
                    <div className="image-size mt-5">
                        <img src={item?.img} alt="" />
                    </div>

                    <h3>{item?.name}</h3>
                    <h5>{item?.price}</h5>
                    <p>{item?.description}</p>

                </div>

                <div className="col-md-8">
                    <h1 className="text-center"> Fill up your form</h1>
                    <div className="w-25 m-auto mt-5">
                        <div className="container border border d-flex justify-content-center align-items-center">
                            <div>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <input defaultValue={user.displayName} {...register("name")} placeholder="Name" className="p-2 m-2" /> <br />
                                    <input defaultValue={user.email}  {...register("email", { required: true })} placeholder="Email" className="p-2 m-2" />  <br />
                                    <input {...register("date", { required: true })} placeholder="date" defaultValue={new Date()} className="p-2 m-2" />
                                    <br />
                                    <input {...register("address", { required: true })} placeholder="Address" className="p-2 m-2" />
                                    <br />
                                    <input {...register("gender", { required: true })} placeholder="Gender" className="p-2 m-2" />
                                    <br />
                                    {errors.exampleRequired && <span>This field is required</span>}
                                    <input type="submit" className="btn btn-warning w-50" />
                                </form>
                                <p className="m-2 mb-2"> Already have account?{" "}
                                    <Link to="/login">
                                        <span className="text-warning">Create an account</span>
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Link to="/addservice"><button className="bg-warning rounded px-4 py-2 border-0 my-5 ">Add Item</button></Link>
            {user?.email && <button onClick={logOut} className="bg-warning rounded px-4 py-2 border-0 my-5 mx-2">Log Out</button>}

        </div>

    );
};

export default OrderNow;
