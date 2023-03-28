import React from 'react'
import data from '../../data/article'
import "../../article.css"

function All() {
    return (
        <div className='flexRoute'>
            {
                data.map((item) => {
                    return <div className='article' key={item.id}>
                        <h3>{item.text}</h3>
                        <span>{item.time}</span>
                    </div>
                })
            }
        </div>
    )
}

export default All