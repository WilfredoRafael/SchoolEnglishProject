import React from 'react';
import './layout.css';
const layout = ()=>{
    return(
        <div className='box'>
            <nav>
                <ul>
                    <li ><a href="#about">
                        <p className={'btn-white'}>About Me</p>
                    </a>
                    </li>
                    <li  >
                        <a href="#Resume">
                            <p className={'btn'}>
                                Check my work
                            </p>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};
export default layout;