import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../Context/useAuth';



const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory()
    const redirect_uri = location.state?.from || '/home'
    console.log('came from', location.state?.from);
    const handleGoogleLogin = () => {
        console.log(redirect_uri);
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }
    return (
        <div>
            <Link to="/home"><button onClick={handleGoogleLogin}
                className=" bg-success text-white rounded-pill px-4 py-1 border-0 my-4">Google Sign In</button></Link>
        </div>
    );
};

export default Login;

