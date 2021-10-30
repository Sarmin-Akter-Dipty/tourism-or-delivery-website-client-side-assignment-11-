import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../images/benner1.jpg';
import './Banner.css'

const Banner = () => {
    return (
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active ">
                    <img src={banner} class="w-100 hight" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h1 className="text">BEST FOOD, FAST DELIVERY!</h1>
                        <Link to="/contact"><button className="bg-success text-white border-0 rounded px-4 py-1 my-2 ">CONTACT US</button>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;