import { useState, useEffect } from 'react'
import fetchAPI from '../utils/fetchAPI'
import AwardStyle from '../styles/pages/Awards.module.css'
import Loadingicon from '../components/Loadingicon';
function Awards(props) {
  const [data, setData] = useState([]);
  const apiUrl = import.meta.env.VITE_API_URL + `/awards/conference/${props.con}`;
  const [loading, setLoading] = useState(false);
  useEffect(() => { fetchAPI(setData, apiUrl, setLoading) }, []);
  return (
    <div className={AwardStyle.container}>
      <p className={AwardStyle.mainheading}>Rewards </p>
      <div className={AwardStyle.ancontainer}>
        <div className={AwardStyle.ancontent}>
          {!loading ?
            data.map(item => (
              <div key={item.id} className={AwardStyle.onentry}>

                <p className={AwardStyle.title}>{item.title1}</p>
                <p className={AwardStyle.desc}>{item.description}</p>

              </div>
            ))
            : <div><Loadingicon /></div>}
        </div></div>
    </div>
  )
}
export default Awards;

