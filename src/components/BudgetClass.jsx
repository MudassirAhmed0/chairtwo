import React from 'react'
import bathroomIcon from '../assets/bathroomIcon.png'
import seatIcon from '../assets/seatIcon.png'

const BudgetClass = () => {
    return (
        <div className='budget'>
            <h3>On-Budget Class</h3>
            <div>
                <div>
                    <span></span>
                    <img src={seatIcon} alt="" />
                </div>
                <div>
                    <span></span>
                    <img src={bathroomIcon} alt="" />
                </div>
            </div>
        </div>
    )
}

export default BudgetClass
