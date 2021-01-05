import React from 'react';
import img from './resources/canva_infographic.jpg';
import './infographic.css';
import {Link} from "react-router-dom";
import {MDBAnimation} from "mdbreact";

const Infographic = (props) => {

        return (
            <Link className={'LinK'} to={'/'} >
                <div className='container' >
                    <div className='element'> </div>
                    <MDBAnimation type={'bounce'} infinite >
                        <img src={img} alt="my infographic"/>
                    </MDBAnimation>

                </div>
            </Link>

);
    }
export default Infographic;