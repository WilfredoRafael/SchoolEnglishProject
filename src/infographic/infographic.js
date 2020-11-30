import React, {useState} from 'react';
import img from './resources/canva_infographic.jpg';
import './infographic.css';
import {Redirect} from "react-router-dom";
import Layout from "../layout/layout";
const Infographic = (props) => {
    const [click,changeClick] = useState(false);
    const moveToHome= ()=>{
        changeClick(true);
    };
return (

    <div className='container' >
        <div className='element'> </div>
        <img src={img} alt="my infographic"/>
    </div>
);
    }
export default Infographic;