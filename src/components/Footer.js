import React from 'react'
import '../App.css';
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className="Footer">
            <ul className="Extras">
                <li><Link to="/sh-capstone-restaurant"><font className="Whitelink">Home</font></Link></li>
                <li><Link to="/sh-capstone-restaurant/products"><font className="Whitelink">Foods</font></Link></li>
                <li><Link to="/sh-capstone-restaurant/about"><font className="Whitelink">About</font></Link></li>
                <li><Link to="/sh-capstone-restaurant/contact"><font className="Whitelink">Contact Us</font></Link></li>
            </ul>

            <ul className="Extras">
                <li>Packages</li>
                <li>Make an Order</li>
                <li>Find Nearest Kings Restaurant</li>
                <li>Monthly Subscription</li>
            </ul>

            <ul className="Extras">
                Contact Us:<br/><br/>
                <li><a href="tel:+2349030142964"><font className="Whitelink">+234 903 014 2964</font></a></li>
                <li><a href="mailto:themichaelpells@gmail.com"><font className="Whitelink">themichaelpells@gmail.com</font></a></li>
            </ul>

            <br/><br/><br/>
            <div align="center">
            Plot 151C, Marome Way, Nogterwen City, Abtari State, Grate.
            </div>
        </div>
    )
}

export default Footer
