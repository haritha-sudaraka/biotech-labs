import React,{useEffect} from 'react'
import './blog.css'
import {Article} from '../../components'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Blog = () => {
  useEffect(()=>{
    Aos.init({duration:2000});
  },[]);
  return (
    <div data-aos='zoom-in-up' id='blog' className='biotech__blog section__padding'>
      <h2>Blog</h2>
      <h1>Most Popular Tips & Tricks For You</h1>
      <div className='biotech__blog-articles'>
        <Article title="10 Tips To Lead A Healthy And Happy Life"/>
        <Article title="10 Tips To Lead A Healthy And Happy Life"/>
        <Article title="10 Tips To Lead A Healthy And Happy Life"/>
        <Article title="10 Tips To Lead A Healthy And Happy Life"/>
        <Article title="10 Tips To Lead A Healthy And Happy Life"/>
      </div>
    </div>
  )
}

export default Blog