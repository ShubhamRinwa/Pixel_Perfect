import React from 'react';
import Uperstyle from '../styles/components/Uperheader.module.css'

function Uperheader() {
    return (
        <div className={Uperstyle.outer}>
            <div className={Uperstyle.inner}>Dr. B.R. Ambedkar National Institute of Technology,Jalandhar </div>
            <div className={Uperstyle.inner1} id={Uperstyle.logodiv}></div>
            <div className={Uperstyle.inner1}>Dr. B.R. Ambedkar National Institute of Technology,Jalandhar </div>


        </div>
    
    )
}

export default Uperheader;