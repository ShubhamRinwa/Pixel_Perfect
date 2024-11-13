import { useState, useEffect } from 'react'
import fetchAPI from '../utils/fetchAPI'
import ContactStyle from '../styles/pages/Contact.module.css'
import Loadingicon from '../components/Loadingicon';

function Contact(props) {
  const [data, setData] = useState([]);
  const apiUrl = import.meta.env.VITE_API_URL + `/contacts/${props.con}`;
  const [loading, setLoading] = useState(false)
  useEffect(() => { fetchAPI(setData, apiUrl, setLoading) }, []);
  return (
    <div className={ContactStyle.container}>
 <p className={ContactStyle.mainheading}>Contact Us </p>
 <div className={ContactStyle.concontainer}>
      {!loading ?
        data.map(item => (
          <div key={item.id} className={ContactStyle.onentry}>
            <p className={ContactStyle.title}>{item.title}</p>
            <div className={ContactStyle.imgprof} >

              <div className={ContactStyle.imgbtn}>
                <img className={ContactStyle.img} src={item.imgLink} />
                <a href={item.profileLink} target="_main"><button>Profile Link</button></a>
              </div>
              <div >
                <table className={ContactStyle.table}>
                  <tbody>
                    <tr>
                      <td className={ContactStyle.field}>Name</td>
                      <td>:</td>
                      <td>{item.name}</td>
                    </tr>
                    <tr>
                      <td className={ContactStyle.field}>Designation</td>
                      <td>:</td>
                      <td>{item.designation}</td>
                    </tr>
                    <tr>
                      <td className={ContactStyle.field}>Institute</td>
                      <td>:</td>
                      <td>{item.institute}</td>
                    </tr>
                    <tr >
                      <td className={ContactStyle.field}>Phone</td>
                      <td>:</td>
                      <td>{item.phone}</td>
                    </tr>
                    <tr>
                      <td className={ContactStyle.field}>Email</td>
                      <td>:</td>
                      <td>{item.email}</td>
                    </tr>
                    <tr>
                      <td className={ContactStyle.field}>Fax</td>
                      <td>:</td>
                      <td>{item.fax}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            </div>
          
        )) :
        <div><Loadingicon /></div>}
</div>
    </div>
  )
}
export default Contact;

