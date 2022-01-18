import React, { useState } from 'react'
import BudgetClass from './BudgetClass'
import ListItems from './ListItems'
import Navbar from './Navbar'
import chair from '../assets/chair.png'
import CardsSection from './CardsSection'
import Hero from './Hero'

const seatListContent ={
    listHeading:"Share You Seat",
    items:[
        {
            name:'seat',
            value:'noSharing',
            label:'No Sharing',
        },
        {
            name:'seat',
            value:'shareSeat',
            label:'Share seat',
            tooltip:"Take turns sitting. Choose number of people to share your seat (1 or 2). If you select 2, the greater the discount applied."

        },
        {
            name:'seat',
            value:'shareMeal',
            label:'Share Meal',
            tooltip:"Take turns sitting. Choose number of people to share your seat (1 or 2). If you select 2, the greater the discount applied."

        },
    ]
    
}
const bathroomListContent ={
    listHeading:"Pay for bathroom",
    items:[
        {
            name:'bathroom',
            value:'dontUse',
            label:'Dont use, dont pay'
        },
        {
            name:'bathroom',
            value:'payShort',
            label:'Pay for short time'
        },
        {
            name:'bathroom',
            value:'payLong',
            label:'Pay for long time'
        },
    ]
    
}

const DemoPage = () => {
    const [text,setText] = useState('Continue')
    return (
        <>
            <Hero/>
            <CardsSection/>
            <Navbar />  
              <div className='chairImage'>
                <img src={chair} alt="" />
            </div>
            <BudgetClass />
            <div className='listComponent'>
                <ListItems content={seatListContent} />
                <ListItems  content={bathroomListContent}/>
            </div>
            <button onClick={()=> setText('Thank You!')}>{text}</button>

        </>
    )
}

export default DemoPage
