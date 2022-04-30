import React from 'react'
import CTA from './CTA';

function About() {
    return (
        <div>
           <div className="Foreview">
               <br/><br/>
               <div align="center">
                   <img src="img/logo.png" alt="SOLLY KINGS" style={{width: '20vw', display: 'block', margin: '0px'}}/>
               </div>
               <br/><br/>
               <p align="center" style={{fontSize: 'large'}}><b>Solly Kings Inc.</b> is a leading international restaurant on the continent of Borgiana, that has fed more than 2 million different Borgians since its inception in 2003. At Solly Kings, we offer both local and foreign dishes in a 100% hygienic environment. Having its customers in mind, Kings offers hungry kings with different plans, including home delivery, home service, monthly meal subscription, takeaway, and modern eateries across all countries of Borgiana. We are very affordable!</p>
                
                <br/><br/>
                <div align="center">
                    <CTA text={"Contact Us"} url={"/contact"} padding={'10px'} />
                </div>
            </div>
        </div>
    )
}

export default About
