import React from 'react';
import team1 from '../images/pngegg.png';
import team2 from '../images/pngegg (4).png';
import team3 from '../images/pngegg (3).png';
import team4 from '../images/pngegg (5).png';
import team5 from '../images/pngegg (6).png';
import './Ourteam.css'

const Ourteam = () => {
    return (
        <div className="bg-color my-3 text-white" >
            <div>
                <h1 className="text-dark">OUR PASSIONATE TEAM MEMBER</h1>
                <p className="text-dark">Chefs are culinary professionals trained in all aspects of food preparation. Their main responsibilities include planning menus, overseeing the kitchen staff, and ensuring that the food meets high-quality standards.</p>
            </div>
            <div className="card-group ">
                <div className="card m-4 rounded border-success ">
                    <img src={team1} className="mx-auto width" alt="..." />
                    <div className="card-body">
                        <h3 className="card-text"><small className="text">Satya Nadella</small></h3>
                        <p className="card-text"><small className="text-muted">Social Media Manager</small></p>
                    </div>
                </div>
                <div className="card m-4 rounded border-success">
                    <img src={team2} className="mx-auto width" alt="..." />
                    <div className="card-body">
                        <h3 className="card-text"><small className="text">Jason Wishnov</small></h3>
                        <p className="card-text"><small className="text-muted">Marketing Director</small></p>
                    </div>
                </div>
                <div className="card m-4 rounded border-success">
                    <img src={team3} className="mx-auto width" alt="..." />
                    <div className="card-body">
                        <h3 className="card-text"><small className="text">ROY COLEMAN</small></h3>
                        <p className="card-text"><small className="text-muted">Chief</small></p>
                    </div>
                </div>
                <div className="card m-4 rounded border-success">
                    <img src={team4} className="mx-auto width" alt="..." />
                    <div className="card-body">
                        <h3 className="card-text"><small className="text">Swapneel Deshmukh</small></h3>
                        <p className="card-text"><small className="text-muted">Founder & CEO</small></p>
                    </div>
                </div>
                <div className="card m-4 rounded border-success">
                    <img src={team5} className="mx-auto width" alt="..." />
                    <div className="card-body">
                        <h3 className="card-text"><small className="text">MARINKA SULIS</small></h3>
                        <p className="card-text"><small className="text-muted">Financial Advisor</small></p>
                    </div>
                </div>


            </div>
        </div>




    );
};

export default Ourteam;