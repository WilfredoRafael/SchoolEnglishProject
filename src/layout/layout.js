import React, {useState} from 'react';
import Title from "../title/title";
import Navigation from "../navigation/navigation";
import Button from "../button/button";
import './layout.css';
function layout() {

    return (

        <>
            <Navigation> </Navigation>
            <div className='wrapper-square'>
                <Title/>
                <Button/>
            </div>

        </>

    );
}

export default layout;