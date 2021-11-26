import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const{service_name,description,img}=props.sservice;
    return (
        <div className="service">
             <img className="w-100 image" src={img} alt="" />
            <div className="details">
            <h4>{service_name}</h4>
            <p>{description.slice(0,168)}</p>
            {/* <Link to={`/booking/${id}`}>
                <button className="btn btn-warning">Book {name.toLowerCase()}</button>
            </Link> */}
            <Link to={`/appoint/${service_name.toLowerCase()}`}><button className="btn btn-primary">Appoint</button></Link>
            
            </div>
           
        </div>
    );
};

export default Service;