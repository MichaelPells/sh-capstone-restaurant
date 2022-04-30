import React from 'react'
import {Link} from 'react-router-dom'

function CTA({text, url, bd='#b01616', bg='#ed6708', padding, width}) {
    return (
        <div>
            <Link to={url}><div className="CTA Whitelink" style={{borderColor: bd, backgroundColor: bg, padding: padding, width: width}}>{text}</div></Link>
        </div>
    )
}

export default CTA
