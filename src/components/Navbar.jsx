import React from "react";
import { Link } from 'react-router-dom';
import { FaHome,FaAward,FaHandHoldingUsd} from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import { TfiMenu } from "react-icons/tfi";


import { MdOutlinePendingActions,MdCoPresent,MdContactPhone } from "react-icons/md";
import Navstyle from '../styles/components/Navbar.module.css'
function Navbar() {
    return (
        
            
        <nav>
        <input type="checkbox" id="check" className={Navstyle.check}/>
        <label htmlFor="check" className={Navstyle.checkbtn}> <TfiMenu className={Navstyle.menu} /></label>

        <label >
            <Link className={`${Navstyle.home} ${Navstyle.navitems}`} to="/">
            <FaHome className={Navstyle.homeicon} />Home</Link>
        </label>
    
        <ul className={Navstyle.navlist}>
    
            <li >
                <Link className={Navstyle.navitems} to="/Speakers">
                <MdCoPresent className={Navstyle.icon} />
                Speakers</Link>
            </li>
            <li >
                <Link className={Navstyle.navitems} to="/committee">
                <BsFillPeopleFill className={Navstyle.icon} />Committee</Link>
            </li>
            <li >
                <Link className={Navstyle.navitems} to="/sponsorship">
                <FaHandHoldingUsd className={Navstyle.icon} />Sponsorship</Link>
            </li>
            <li >
                <Link className={Navstyle.navitems}to="/awards">
                <FaAward className={Navstyle.icon} />Awards</Link>
            </li>
            <li >
                <Link className={Navstyle.navitems} to="/registration">
                <MdOutlinePendingActions className={Navstyle.icon} />Registration</Link>
            </li>
            <li >
                <Link className={Navstyle.navitems} to="/contact">
                <MdContactPhone className={Navstyle.icon} />Contact Us</Link>
            </li>
        </ul>
    </nav>
            )
}

export default Navbar;