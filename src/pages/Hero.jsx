import React from 'react'
import Announcements from '../sections/Announcement';
import Confinfo from '../sections/Confinfo';
import Dates from '../sections/Dates';
import Imageslider from '../sections/Imageslider';
import Rewards from '../sections/Rewards';
import Sponsors from '../sections/Sponsors';
import Herostyle from '../styles/pages/Hero.module.css'

export default function Hero(props) {
    let conId=props.con;
  return (
    <div className={Herostyle.container}>
    <Confinfo con={conId} />
    <div className={Herostyle.imgAnc}>
     <Imageslider con={conId}/>   
     <Announcements con={conId}/> 
     </div >
     
     <Dates con={conId}/>  
     <div className={Herostyle.rwdSpon}> 
     <Rewards con={conId}/>   
     <Sponsors con={conId}/>   
     </div>  

    </div>
  )
}
