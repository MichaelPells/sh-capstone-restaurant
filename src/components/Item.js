import React from 'react'

function Item({img, name, descr, price}) {

    function Alert() {
        alert("Please wait...")
    }

    return (
        <div className="Item" onClick={ Alert }>
                <img src={"img/"+img+".jpg"} alt={name} className="Food"/>
                <div style={{margin: '10px'}}>
                    <div style={{display: 'inline-block', color: '#ffffff', fontSize: 'large'}}>{name}</div>
                    <div style={{display: 'inline-block', float: 'right', color: '#ffffff', fontSize: 'small'}}>{descr}</div>

                    <div align="right" style={{marginTop: '5px'}}><b>{price}</b></div>
                </div>
        </div>
    )
}

export default Item
