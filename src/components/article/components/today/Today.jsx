import React from 'react'
import data from '../../data/today'
import "./today.css"

function Today() {
    return (
        <div className='articleBox'>
            {
                data.map((item) => {
                    return <div className='cardItem' key={item.id}>
                        <img src={item.img} alt="" />
                        <div className='textDesc'>
                            <h2>{item.text}</h2>
                            <span>{item.desc}</span>
                        </div>
                    </div>
                })
            }
        </div>
    )
}

export default Today