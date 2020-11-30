import React, {useState} from 'react';
import img from './resources/canva_infographic.jpg';
import './infographic.css';
import {Link} from "react-router-dom";

const Infographic = (props) => {

        return (
            <Link classname={'LinK'} to={'/'} >
                <div className='container' >
                    <div className='element'> </div>
                    <img src={img} alt="my infographic"/>
                </div>
            </Link>

);
    }
export default Infographic;