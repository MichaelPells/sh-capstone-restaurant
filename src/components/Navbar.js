import React from 'react'
import '../App.css';
import { Link } from 'react-router-dom'
import CTA from './CTA';

function Navbar() {
    return (
        <div className="Navbar">
            <h2 className="Logo">
                <img src="/sh-capstone-restaurant/img/logo.png" alt="SOLLY KINGS" style={{width: '15vw', display: 'block', margin: '0px'}}/>
            </h2>

            <ul className="Menu">
                <li className="Menuitem"><Link to="/sh-capstone-restaurant"><font className="Whitelink">Home</font></Link></li>
                <li className="Menuitem"><Link to="/sh-capstone-restaurant/products"><font className="Whitelink">Products</font></Link></li>
                <li className="Menuitem"><Link to="/sh-capstone-restaurant/about"><font className="Whitelink">About Us</font></Link></li>
                <li className="Menuitem"><Link to="/sh-capstone-restaurant/contact"><font className="Whitelink">Contact Us</font></Link></li>
                <br/><br/>
                <div align="center">
                    <CTA text={"Shop Now"} url={"/sh-capstone-restaurant/products"} bd={"#ffffff"} bg={"transparent"} padding={"5px"} width={"50%"} />
                </div>
            </ul>
            
            
        </div>
    )
}

export default Navbar
