import React from 'react'
import '../App.css';
import CTA from './CTA';

function Shows({text, style, cta='Make an Order Now', url='/products'}) {
    return (
        <div>
            <div className="Shows" style={style}>
                <div className="Showsinner">
                    <div className="Showstext">
                    {text}
                    <br/><br/>
                    <div align="center"><CTA text={cta} url={url} bd={"#ffffff"} bg={"transparent"} /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shows
