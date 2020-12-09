import React from "react";
import './title.css';
import { IoIosArrowRoundForward } from "react-icons/io";
const title=()=>{
    return(
        <div className='main-title'>
            <h1 > Click Right here to see my Infographic</h1>
            <span> <IoIosArrowRoundForward className='arrow-icon' /></span>
        </div>
    )
};
export default title;