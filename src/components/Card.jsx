import React from 'react'

const Card = ({card:{img,label,cardLabelActive}}) => {
    return (
        <div className="Card">
            <div className="CardImage">
                <img src={img} alt="" />
            </div>
            <div className={`cardLabel ${cardLabelActive && "cardLabelActive"}` }>
                <span>
                    {label[0]} <br />
                    {label[1]}
                </span>
            </div>
        </div>
    )
}

export default Card
