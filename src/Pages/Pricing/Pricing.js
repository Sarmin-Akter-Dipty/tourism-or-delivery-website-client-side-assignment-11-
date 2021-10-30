import React from 'react';

const Pricing = () => {
    return (
        <div>
            <h1 className="text-dark">COMPARE PRICING</h1>
            <div className="card-group container">
                <div className="card m-4 border-primary">
                    <div className="card-body">
                        <h3 className="card-text bg-color">TEST DAY</h3>
                        <h1 className="card-text text">$39/day</h1>
                        <div className="d-flex justify-content-center">
                            <h6 className="card-text m-3">Meals for Breakfast, Lunch, Dinner and Snack with 1 day Rotation</h6>
                        </div>
                        <div>
                            <h6 className="card-text m-3">Calories Female 1150-1350, Male 1300-1600</h6>
                        </div>
                        <div>  <h6 className="card-text m-3">Protein Customization Limited Protein Customization</h6></div>
                        <u>-----------------------------</u><br />
                        <button className="bg-primary text-white px-4 py-1 border-0 my-2">More Menu</button>
                    </div>
                </div>
                <div className="card m-4 border-warning">
                    <div className="card-body">
                        <h3 className="card-text bg-color">ONE WEEK</h3>
                        <h1 className="card-text text">$200/week</h1>
                        <div className="d-flex justify-content-center">
                            <h6 className="card-text m-3">Meals for Breakfast, Lunch, Dinner and Snack with 4 Week Rotation</h6>
                        </div>
                        <div>
                            <h6 className="card-text m-3">Calories Female 1150-1350, Male 1600-2000</h6>
                        </div>
                        <div>  <h6 className="card-text m-3">Protein Customization Limited Protein Customization</h6></div>
                        <u>-----------------------------</u><br />
                        <button className="bg-warning text-white px-4 py-1 border-0 my-2">More Menu</button>
                    </div>
                </div>
                <div className="card m-4 border-info">
                    <div className="card-body">
                        <h3 className="card-text bg-color">ONE MONTH</h3>
                        <h1 className="card-text text">$390/month</h1>
                        <div className="d-flex justify-content-center">
                            <h6 className="card-text m-3">Meals for Breakfast, Lunch, Dinner and Snack with 1 month Rotation</h6>
                        </div>
                        <div>
                            <h6 className="card-text m-3">Calories Female 1300-1450, Male 1700-2200</h6>
                        </div>
                        <div>  <h6 className="card-text m-3 ">Protein Customization Limited Protein Customization</h6></div>
                        <u>-----------------------------</u><br />
                        <button className="bg-info text-white px-4 py-1 border-0 my-2">More Menu</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Pricing;