import React from 'react'
import './article.css'
import banner from '../../assets/article_banner.png'

const Article = ({blog_link,img_link,title,}) => {
  return (
    <div className='biotech__article'>
      <div className="biotech__article-image">
        <img src={banner} alt='blog_image'/>
      </div>

      <div className="biotech__article-content">
        <h3>{title}</h3>
        <div className="biotech__article-content_info">
          <p><a href={blog_link}>Read More...</a></p>
          <p>Date</p>
        </div>
      </div>
    </div>
  )
}

export default Article