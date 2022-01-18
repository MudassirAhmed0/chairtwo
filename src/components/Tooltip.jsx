import React, { useState } from 'react'
import questionMark from '../assets/questionMark.png'

const Tooltip = ({tooltip}) => {
    const [active,setActive] = useState(false)

    return (
        <div className={`tooltip ${active && 'active'}`}>
            <img src={questionMark} onClick={()=> setActive(!active)} alt="" />
            <span>{tooltip}</span>
        </div>
    )
}

export default Tooltip
