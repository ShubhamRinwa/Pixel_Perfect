import { useState,useEffect } from 'react'
import fetchAPI from '../utils/fetchAPI'
import SponStyle from '../styles/sections/Sponsors.module.css'
import {FaHandHoldingUsd} from "react-icons/fa";
import Loadingicon from '../components/Loadingicon';

function Appp(props){
    const [data, setData] = useState([]);
    const apiUrl = import.meta.env.VITE_API_URL + `/sponsors/conference/${props.con}`;
    const [loading, setLoading] = useState(false)
    useEffect(() => {fetchAPI(setData,apiUrl,setLoading)},[]);
    return(
        <div className={SponStyle.container}>
      <p className={SponStyle.mainheading}> <FaHandHoldingUsd style={{paddingTop:'10px'}}/>Sponsors </p>
        <div className={SponStyle.sponcontainer}>
        <div className={SponStyle.sponcontent}>

        {!loading?
        data.map(item => (
          <div key={item.id} className={SponStyle.onentry}>
            <p className={SponStyle.type}>{item.type}</p>
            
            <img src={item.logo} style={{height:'40px'}} className={SponStyle.sponimg}/>
            <p className={SponStyle.sponame}>{item.name}</p>
            
          </div>
        )):
        <div><Loadingicon/></div>}
      </div>
      </div>
      </div>
    )
  }
  export default Appp;

  