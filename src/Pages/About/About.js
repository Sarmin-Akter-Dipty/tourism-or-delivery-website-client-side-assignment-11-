import React from 'react';
import './About.css';
import ourteam from '../images/pngegg (1).png'

const About = () => {
    return (
        <div>
            <div className="container about">
                <h1>About Us</h1>
                <h3 className="text">WE ARE NOT JUST A TEAM, WE ARE FAMILY</h3> <br />

                <p>Delivery. Get your food delivered in less than an hour! That's as fast as it can get</p>
                <h1>Our MOST POPULAR TEAM MEMBER</h1> <br />
                <img className="size rounded-pill" src={ourteam} alt="" />
                <p>"Food, substance consisting of protein, carbohydrate, fat, and other nutrients used in the body of an organism to sustain growth and vital processes"
                </p>
            </div>

        </div>
    );
};

export default About;