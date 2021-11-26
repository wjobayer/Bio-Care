import React from 'react';
import './Doctor.css'

const Doctor = (props) => {
    const{name,department,img,time}=props.doctorr;
    return (
        <div className="service">
             <img className="w-100 image" src={img} alt="" />
            <div className="details">
            <h4>{name}</h4>
            <p>{department}</p>
            <p>Appointment Time: {time}</p>
            </div>
           
        </div>
    );
};

export default Doctor;