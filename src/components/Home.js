import React from 'react';
import Shows from './Shows.js'
import CTA from './CTA.js'

function Home() {
    return (
        <div>
            <div className="Foreview">
                <h1 align="center" style={{color: '#111111', fontSize: '250%', margin: '0px'}}>
                    <b style={{fontSize: '150%'}}><font style={{color: '#b01616'}}>The</font> <font style={{color: '#b01616'}}>#1</font></b><br/> Restaurant in Borgiana...
                    <br/><br/>
                    <font style={{fontSize: '75%', color: '#ed6708'}}>Feeding The Continent<br/>With Royalty</font>
                </h1>
                <br/><br/>
                <div align="center">
                    <CTA text={"Make an Order Now"} url={"/sh-capstone-restaurant/products"} />
                </div>
            </div>

            <div className="Content">
                <Shows text={"Your family in our care... Offering you all you want for them."} style={{backgroundImage: 'url("sh-capstone-restaurant/img/family.jpg")'}} />
                <Shows text={"You and your date, just the way you want it!"} style={{backgroundImage: 'url("sh-capstone-restaurant/img/date.jpg")'}} cta={"View Our Menu"} />
                <Shows text={"There is a bliss that comes with spending the evening at Kings with your friends."} style={{backgroundImage: 'url("sh-capstone-restaurant/img/bliss.jpg")'}} cta={"Find Us"} url={"/sh-capstone-restaurant/about"} />
                <Shows text={"We offer Home Service and Delivery for Kings..."} style={{backgroundImage: 'url("sh-capstone-restaurant/img/homeservice.jpg")'}} cta={"Ask for a Treat"} url={"/sh-capstone-restaurant/contact"} />
            </div>
        </div>
    )
}

export default Home
