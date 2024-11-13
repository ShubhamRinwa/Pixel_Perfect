import { useState,useEffect } from 'react'

import fetchAPI from '../utils/fetchAPI'
import SponStyle from '../styles/pages/Sponsorship.module.css'
import Loadingicon from '../components/Loadingicon';
function Sponsorship(props) {
  const [loading, setLoading] = useState(false)

  const [data, setData] = useState([]);
  const apiUrl = import.meta.env.VITE_API_URL + `/sponsors/conference/${props.con}`;
  useEffect(() => {fetchAPI(setData,apiUrl,setLoading)},[]);
  return(
      
    <div className={SponStyle.container}>
    <p className={SponStyle.mainheading}>Sponsors </p>
    <div className={SponStyle.sponcontainer}>
    

    {!loading?
    data.map(item => (
      <div key={item.id} className={SponStyle.onentry}>
        <p className={SponStyle.type}>{item.type}</p>
        
        <img src={item.logo} className={SponStyle.sponimg}/>
        <p className={SponStyle.sponame}>{item.name}</p>
        
      </div>
    )):
    <div><Loadingicon /></div>}
  </div>
  </div>
  
  
  )
}
export default Sponsorship;