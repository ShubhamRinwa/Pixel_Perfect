import React from 'react'

import { useState, useEffect } from 'react'
import fetchAPI from '../utils/fetchAPI'
import ComtStyle from '../styles/pages/Committee.module.css'
import Loadingicon from '../components/Loadingicon';


function Committee(props) {
  const [data, setData] = useState([]);
  const apiUrl = import.meta.env.VITE_API_URL + `/committees/conference/${props.con}`;
  const [loading, setLoading] = useState(false)
  useEffect(() => { fetchAPI(setData, apiUrl, setLoading) }, []);
  return (
    <div className={ComtStyle.container}>
      <p className={ComtStyle.mainheading}>Committees </p>
      <div className={ComtStyle.profcontainer}>
      {!loading ?
        data.map(item => (
          <div key={item.id} className={ComtStyle.onentry} >





              <div >
                <img height="150" width='120' src={item.ImgLink} />

              </div>

              <div className={ComtStyle.profbtn} >
                <table className={ComtStyle.table}>
                  <caption className={ComtStyle.title}>{item.Type}</caption>
                  <tbody>
                    <tr>
                      <td className={ComtStyle.field}>Name</td>
                      <td>:</td>
                      <td>{item.Name}</td>
                    </tr>
                    <tr>
                      <td className={ComtStyle.field}>Designation</td>
                      <td>:</td>
                      <td>{item.Designation}</td>
                    </tr>
                    <tr>
                      <td className={ComtStyle.field}>Institute</td>
                      <td>:</td>
                      <td>{item.Institute}</td>
                    </tr>



                  </tbody>


                </table>

                <a href={item.ProfileLink} target="_main"><button>Profile Link</button></a>

              </div>
            </div>

        )) :
        <div><Loadingicon /></div>}
</div></div>
    
  )
}
export default Committee;



