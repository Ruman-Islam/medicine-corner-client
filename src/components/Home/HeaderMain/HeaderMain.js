import React from 'react';
import cover from '../../../images/medicineCover.jpg';

const HeaderMain = () => {
    return (
        <main style={{height: '500px'}} className="row align-items-center mb-5">
            <div className="col-md-4 offset-md-1">
                <h1>Find <br />any medicine <br /> you need!</h1>
                <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit mollitia alias ipsa amet. Libero illo numquam cum tenetur saepe sapiente.</p>
                <h1 style={{ fontSize: '100px' }}>30%</h1>
                <button className="btn btn-primary">GET MEDICINE</button>
            </div>
            <div className="col-md-6">
                <img style={{ borderRadius: '5px' }} src={cover} alt="" className="img-fluid" />
            </div>
        </main>
    );
};

export default HeaderMain;