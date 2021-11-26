import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {

    const [service , setService]=useState([]);
    useEffect(()=>{
        fetch('./services.json')
        .then(res=>res.json())
        .then(data=>setService(data))
    },[])
    console.log(service);
    return (
        <div>
           <Container className="my-5">
           <h1 className="text-primary display-5">Our Services</h1>
            <p className="text-primary mb-5">
                We are excited to be part of the WordPress community and looking to make contribution by releasing
                free WordPress themes for everyone to use. Other themes can be found here.

            </p>

            <div className="service-collection">{
            service.map(sservice =><Service
            
                key={sservice.key}
                sservice={sservice}

            >   
            <h1>Jobayer</h1>
            </Service>
            )
        }
        </div>
           </Container>
        </div>
    );
};
export default Services;