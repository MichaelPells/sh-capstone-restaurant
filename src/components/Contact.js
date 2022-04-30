import React from 'react'
import CTA from './CTA';

function Contact() {
    return (
        <div>
            <div className="Foreview">
               <br/><br/>
               <div align="center">
                    <img src="img/logo.png" alt="SOLLY KINGS" style={{width: '60%', display: 'block', margin: '0px'}}/>
                    <br/>

                    <blockquote align="left" style={{width: '400px', fontSize: 'x-large', textAlign: 'left'}}><b>
                        Plot 151C, Marome Way,<br/>
                        Nogterwen City, Abtari State,<br/>
                        Grate.<br/><br/>

                        Contact Us:<br/>
                        <ul>
                            <li>+234 903 014 2964</li>
                            <li>themichaelpells@gmail.com</li>
                            <li>www.sollykings.com</li>
                        </ul>
                    </b></blockquote>
                    <br/><br/>
                    <CTA text={"Buy a Meal"} url={"/product"} padding={'10px'} />
                    <br/><br/><br/><br/>

                    <div className="Content" style={{width: '70%'}}>
                        <form action="" method="get" style={{width: '70%', color: '#ffffff'}}>
                            <div align="left">
                            <br/>
                            <h3 align="center">We'd Love to Hear From You!</h3><br/>
                            <div className="Contact">Name:</div>
                            <input name="name" class="Contact" style={{width: '100%'}}/><br/><br/>
                            <div className="Contact">Email Address:</div>
                            <input name="email" class="Contact"  style={{width: '100%'}}/><br/><br/>
                            <div className="Contact">Message:</div>
                            <textarea name="message" class="Contact" style={{width: '100%', height: '250px'}}></textarea><br/><br/>
                            <input type="submit" name="submit" class="Contact" style={{border: '#ffffff 1px solid', borderRadius: '500px', background: '#b01616', color: '#ffffff', width: '20%', fontSize: 'medium'}} value="Send"/><br/><br/>
                            <br/>
                            </div>
                        </form>
                    </div>
                    <br/><br/><br/>
                </div>
            </div>
        </div>
    )
}

export default Contact
