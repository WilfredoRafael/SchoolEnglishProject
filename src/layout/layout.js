import React from 'react';
import './layout.css';
import { AiOutlineUser } from "react-icons/ai";
import {CgArrowRight} from "react-icons/cg";

const layout = ()=>{
    return(
        <div className='box'>
            <nav>
                <ul>
                    <li ><a href="#about">
                        <p className={'btn-white'}>About Me  <AiOutlineUser className='icon-1'/></p>
                    </a>
                    </li>
                    <li  >
                        <a href="#Resume">
                            <p className={'btn'}>
                                Check my work <CgArrowRight className='icon-2'/>
                            </p>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};
export default layout;