import React from 'react'
import Tooltip from './Tooltip'
import bathroomIcon from '../assets/bathroomIcon.png'

const ListItems = ({content:{items,listHeading}}) => {
    return (
        <div className='list'>
            {listHeading ==='Pay for bathroom' &&<div>
                <img src={bathroomIcon} alt="" />
            </div>}
            <h4>{listHeading}</h4>
            <ul>
                {items?.map(item=>
                <li key={item.value}><input type="radio" name={item.name}  value={item.value} id={item.value} /><label htmlFor={item.value}>{item.label}</label>{item.tooltip && <Tooltip tooltip={item.tooltip}/>}</li>
                )}</ul>
        </div>
    )
}

export default ListItems
