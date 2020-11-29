import React from "react";
// import ArrowRightAltRoundedIcon from '@material-ui/icons/ArrowRightAltRounded';
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