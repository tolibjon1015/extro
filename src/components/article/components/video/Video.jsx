import React from 'react'
import "./video.css"
import data from '../../data/video'

function Video() {
    return (
        <div className='border'>
            {
                data.map((item) => {
                    return <div key={item.id}>
                        <div>{item.iframe}</div>
                    </div>
                })
            }
        </div>
    )
}

export default Video