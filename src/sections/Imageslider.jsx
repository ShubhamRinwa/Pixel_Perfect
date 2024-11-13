import { useState, useEffect } from 'react';
import fetchAPI from '../utils/fetchAPI';
import SliderStyle from '../styles/sections/Imageslider.module.css';
import { MdAddAPhoto } from 'react-icons/md';
import Loadingicon from '../components/Loadingicon';

function Imageslider(props) {
  const [data, setData] = useState([]);
  const apiUrl = import.meta.env.VITE_API_URL + `/images/${props.con}`;
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetchAPI(setData, apiUrl, setLoading);
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageLinks, setImageLinks] = useState([]);
  const [currentImageName, setCurrentImageName] = useState('');

  useEffect(() => {
    const links = data.map(item => item.imgLink);
    const names = data.map(item => item.name);
    setImageLinks(links);
    setCurrentImageName(names[currentIndex]);
  }, [data, currentIndex]);

  const nextImage = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % imageLinks.length);
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 3000);

    return () => clearInterval(interval);
  }, [imageLinks]);

  return (
    <div className={SliderStyle.container}>
      <p className={SliderStyle.mainheading}>
        <MdAddAPhoto style={{ paddingTop: '10px' }} />
        Photo Gallery
      </p>
      {!loading ? (
        <div className={SliderStyle.slider}>
          <img src={imageLinks[currentIndex]} alt="Image" className={SliderStyle.imge} />
          <div className={SliderStyle.imgdesc} >{currentImageName}</div>
        </div>
      ) : (
        <div><Loadingicon/></div>
      )}
    </div>
  );
}

export default Imageslider;
