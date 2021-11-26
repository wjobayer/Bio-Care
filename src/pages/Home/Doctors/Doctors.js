import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Doctor from '../Doctor/Doctor';
import './Doctors.css'

const Doctors = () => {

    const [doctor , setDoctor]=useState([]);
    useEffect(()=>{
        fetch('./doctors.json')
        .then(res=>res.json())
        .then(data=>setDoctor(data))
    },[])
    console.log(doctor);
    return (
        <div>
           <Container className="my-5">
           <h1 className="text-primary display-5">Our Special Doctors</h1>
            <p className="text-primary mb-5">
                We are excited to be part of the WordPress community and looking to make contribution by releasing
                free WordPress themes for everyone to use. Other themes can be found here.

            </p>

            <div className="service-collection">{
            doctor.map(doctorr =><Doctor
                key={doctorr.key}
                doctorr={doctorr}
            
            ></Doctor>
            )
        }
        </div>
           </Container>
        </div>
    );
};
export default Doctors;