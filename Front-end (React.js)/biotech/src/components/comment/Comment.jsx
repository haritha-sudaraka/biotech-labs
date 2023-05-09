import React from 'react'
import './comment.css'
import { star0,star1,star2,star3,star4,star5 } from './imports'
import quote_icon from '../../assets/quote_symbol.png'

const Comment = ({name,comment,rate}) => {
  const rate_icons = [star0,star1,star2,star3,star4,star5]

  return (
    <div className="biotech__comment">
      <div className="biotech__comment-stars">
        <img src={rate_icons[rate]} alt='rate_icon'/>
      </div>
      <div className="biotech__comment-commenttext">
        <p>{comment}</p>
      </div>
      <div className="biotech__comment-namesect">
        <h3>{name}</h3>
        <img src={quote_icon} alt='quote_symbol'/>
      </div>
    </div>
  )
}

export default Comment