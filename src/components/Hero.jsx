import React from 'react'
import backgroundImg from '../assets/Flyadeal-01.png'
import arrowIcon from '../assets/arrows.png'
import papologo from '../assets/papologo.png'

const Hero = () => {
    return (
        <div className='Hero'>
            <div className="layer"></div>
            <img src={papologo} alt="" className='papologo'/>
            <div className="bannerMark"></div>
            <div className="HeroImg">
                <img src={backgroundImg} alt="" />
            </div>
            <div className="HeroContent">
                <img src={arrowIcon} alt=""  className='arrows'/>
                <h1>You Wont <br />
                Find It <span>Cheaper</span><br />
                Anywhere else.
                </h1>
                <p className='subTitle'>Starting January 1st 2019, we have found <br />
                    cheaper ways for you to fly.
                </p>
                <p className='lorem'>Lorem ipsum dolor sit amet consectetur adipisicing elit. voluptate minus minima a voluptatem veniam sunt esse repellendus fuga!

                </p>
            </div>
        </div>
    )
}

export default Hero
