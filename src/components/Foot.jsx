import { useState, useEffect } from 'react'
import fetchAPI from '../utils/fetchAPI'
import footstyle from '../styles/components/Foot.module.css'
import { FaYoutube,FaInstagram,FaFacebook,FaTwitter } from 'react-icons/fa';
function Foot(props) {
    const [data, setData] = useState([]);
    const apiUrl = import.meta.env.VITE_API_URL + `/home/conf/${props.con}`;
    const [loading, setLoading] = useState(false)
    useEffect(() => { fetchAPI(setData, apiUrl, setLoading) }, []);



    return (
        <div className={footstyle.returnedcontainer} >
            {
                !loading ?
                
                    <div className={footstyle.container}> 
                        <div className={footstyle.inst}>
                            <img src='nitjlogo.png' height='100px' />
                            <p className={footstyle.textinst}>Dr B R Ambedkar National Institute of Technology Jalandhar</p>
                            <p className={footstyle.textinst2}>  G.T Road, Amritsar Bypass, Jalandhar, Punjab, India-144008</p>
                            <div className={footstyle.icons}>
                            <a href={data.facebookLink} target="_home"><FaFacebook className={footstyle.iconitem}/></a>
                            <a href={data.youtubeLink} target="_home"><FaYoutube className={footstyle.iconitem}/></a>
                            <a href={data.instaLink} target="_home"><FaInstagram className={footstyle.iconitem}/></a>
                            <a href={data.twitterLink} target="_home"><FaTwitter className={footstyle.iconitem}/></a>
                        </div>
                        </div>

                        <div className={footstyle.aboutinst}>
                        
                        <p className={footstyle.textabouth} >ABOUT NITJ</p>
                        <p className={footstyle.textabout} >{data.aboutIns} </p>
                        
                        </div>

                    </div>
                    
                    :
                    <div> Loading...
                    </div>
            }


        </div>



    );
}
export default Foot;

