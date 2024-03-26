import React from 'react';
import { v4 as uuid } from 'uuid';
import PropTypes from 'prop-types';
import './card.css';

const Card = ({icon,title,features}) => {
  return (
    <div className='card'>
        <div className="card_inner">
            <div className="card_icon">{React.createElement(icon)}</div>
            <div className="card_title">{title}</div>
            <div className="card_features">
                {features?.map((feature)=>(
                    <p key={uuid()}>{feature}</p>
                    ))}
            </div>
        </div>
    </div>
  )
}
Card.propTypes={
    icon:PropTypes.element,
    title:PropTypes.string.isRequired,
    features:PropTypes.arrayOf(PropTypes.string),
}

export default Card;