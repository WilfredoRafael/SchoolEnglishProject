import React from "react";
import './button.css';
import {Link} from 'react-router-dom';
const button =()=>{
    return(
        <div>
            <Link to='/infographic' className='Button'>Click in Here </Link>
        </div>
    )
};
export default button;