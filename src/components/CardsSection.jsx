import React from 'react'
import Card from './Card'
import cardOneImg from '../assets/Flyadeal-02.png'
import cardTwoImg from '../assets/Flyadeal-03.png'
import cardThreeImg from '../assets/Flyadeal-04.png'

const cardContents = [
    {
        img: cardOneImg,
        label: ['Cargo ','Flight'],
    },
    {
        img: cardTwoImg,
        label: ['Dark', 'Routes'],
    },
    {
        img: cardThreeImg,
        label: ['On', 'Budget'],
        cardLabelActive: true
    },
]

const CardsSection = () => {


    return (
        <div className='cardSection'>
            <h4>Select</h4>
            <h2>To Customize & Save</h2>
            <div className="CardsContainer">
                {cardContents.map(card =>
                    <Card card={card} />
                )}

            </div>
        </div>
    )
}

export default CardsSection
