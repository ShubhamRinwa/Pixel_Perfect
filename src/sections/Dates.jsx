import { useState, useEffect } from 'react'
import fetchAPI from '../utils/fetchAPI'
import formatDate from '../utils/formatDate';
import DateStyle from '../styles/sections/Dates.module.css'
import {BsCalendarDate} from "react-icons/bs";
import Loadingicon from '../components/Loadingicon';


function Dates(props) {
  const [data, setData] = useState([]);
  const apiUrl = import.meta.env.VITE_API_URL + `/eventDates/conference/${props.con}`;
  const [loading, setLoading] = useState(false)
  useEffect(() => { fetchAPI(setData, apiUrl, setLoading) }, []);


  return (
    <div className={DateStyle.container}>
      <p className={DateStyle.mainheading}><BsCalendarDate style={{paddingTop:'10px'}}/>Important Dates </p>
      <div className={!loading ? DateStyle.datescontainer : DateStyle.load }>

        {!loading ?
          data.map(item => (
            <div key={item.id}  >
              {item.extended ? (
                <div className={DateStyle.onentry}>
                  <p className={DateStyle.desc}>{item.title}</p>
                  <p className={DateStyle.desc} style={{ textDecoration: 'line-through' }}>{formatDate(item.date)}</p>
                  <p className={DateStyle.desc}>{formatDate(item.newDate)}</p>
                </div>
              ) : (
                <div className={DateStyle.onentry}>
                  <p className={DateStyle.desc}>{item.title}</p>
                  <p className={DateStyle.desc}></p>
                  <p className={DateStyle.desc}>{formatDate(item.date)}</p>

                </div>

              )}

              <br /><br />
            </div>
          )) :
          <div><Loadingicon/></div>}
      </div>
    </div>



  );
}
export default Dates;

