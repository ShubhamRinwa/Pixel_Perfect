import { useState, useEffect } from 'react'
import fetchAPI from '../utils/fetchAPI'
import RewardStyle from '../styles/sections/Rewards.module.css'
import {FaAward} from "react-icons/fa";
import Loadingicon from '../components/Loadingicon';

function Rewards(props) {
  const [data, setData] = useState([]);
  const apiUrl = import.meta.env.VITE_API_URL + `/awards/conference/${props.con}`;
  const [loading, setLoading] = useState(false)
  useEffect(() => { fetchAPI(setData, apiUrl, setLoading) }, []);
  return (
    <div className={RewardStyle.container}>
      <p className={RewardStyle.mainheading}> <FaAward style={{paddingTop:'10px'}}/>Rewards </p>
      <div className={RewardStyle.ancontainer}>
        <div className={!loading ? RewardStyle.ancontent : RewardStyle.load }>
          {!loading ?
            data.map(item => (
              <div key={item.id} className={RewardStyle.onentry}>

                <p className={RewardStyle.title}>{item.title1}</p>
                <p className={RewardStyle.desc}>{item.description}</p>

              </div>
            ))
            : <div><Loadingicon/></div>}
        </div></div>
    </div>
  )
}
export default Rewards;

