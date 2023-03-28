import React from 'react'
import data from '../../data/photo'
import "../../article.css"

function Photo() {
    return (
        <div className='flexPho'>
            {
                data.map((item) => {
                    return <div className='photo' key={item.id}>
                        <img src={item.img} alt="" />
                    </div>
                })
            }
        </div>
    )
}

export default Photo