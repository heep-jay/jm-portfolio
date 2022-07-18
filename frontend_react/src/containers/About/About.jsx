import React, {useState, useEffect} from 'react'
import {motion} from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';

import './About.scss'
import { images } from '../../constants';
import {urlFor, client} from '../../client';


const About = () => {

  const [abouts, setAbouts] = useState([])

  useEffect(() => {
    const query = '*[_type == "abouts"]'
    client.fetch(query)
    .then((data) => setAbouts(data))
  
  }, []);
  
  return (
    <>
      <h2 className='head-text'>
        I Know that 
        <span> Good Design</span>
        <br/>
        means 
        <span> Good Business</span>
      
      
      </h2>
      <div className="app__profiles">
        {abouts.map((abouts, index)=> (
          <motion.div
          whileInView={{opacity: 1}}
          whileHover={{scale: 1.1}}
          transition={{duration: 0.6, type: 'tween'}}
          className="app__profile-item"
          key={abouts.title + index}
          
          >
            <img src={urlFor(abouts.imgUrl)} alt={abouts.title}/>
            <h2 className='bold-text' style={{marginTop: 20}}> {abouts.title} </h2>
            <p className="p-text" style={{marginTop: 10}}> {abouts.description}</p>



          </motion.div>
        ))}
        
      </div>
    
    
    </>
  )
}

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg',
);
