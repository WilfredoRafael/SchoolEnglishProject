import React from 'react';
import './navigation.css';
import {IoLogoGithub,IoLogoLinkedin} from "react-icons/io";

const navigation = ()=>{
    return(
        <div className='box'>
            <nav>
                <ul>
                    <li ><a href="https://www.linkedin.com/in/wilfredo-colina-5252b716a/">
                        <p className={'btn-white'}>Check my LinkedIn  <IoLogoLinkedin className='icon-1'/></p>
                    </a>
                    </li>
                    <li  >
                        <a href="https://github.com/WilfredoRafael/SchoolEnglishProject">
                            <p className={'btn'}>
                                Check my Github <IoLogoGithub className='icon-2'/>
                            </p>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};
export default navigation;