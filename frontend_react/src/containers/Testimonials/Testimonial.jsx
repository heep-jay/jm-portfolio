import React, { useEffect, useState } from 'react'
import './Testimionial.scss'
import { motion } from 'framer-motion';
import {HiChevronLeft, HiChevronRight} from 'react-icons/hi'

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [brands, setBrands] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  

  const handleClick = (index) =>{
    setCurrentIndex(index);
    
  }

  useEffect(() => {
    const query = '*[_type == "testimonials"]';
    const brandsQuery = '*[_type == "brands"]';

    client.fetch(query).then((data) => {
      setTestimonials(data);
    });

    client.fetch(brandsQuery).then((data) => {
      setBrands(data);
    });
  }, []);


  const test = testimonials[currentIndex];
  
  return (
    <>
    <h2 className="head-text" style={{margin:"3rem"}}>Testimonials</h2>
      {testimonials.length && (
        <>
          <div className="app__testimonial-item app__flex">
            <img src={urlFor(test.imgurl)} alt={test.name} />
            
            <div className="app__testimonial-content">
              <p className="p-text">{test.feedback}</p>
              <div>
                <h4 className="bold-text">{test.name}</h4>
                <h5 className="bold-text">{test.company}</h5>
              </div>
            </div>
          </div>

          <div className="app__testimonial-btns app__flex">
            <div className="app__flex" onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
            
              <HiChevronLeft />
            </div>

            <div className="app__flex" onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
              <HiChevronRight />
            </div>
          </div>
        </>
      )}

      <div className="app__testimonial-brands app__flex">
        {brands.map((brand, index)=>(
          <motion.div
            whileInView={{opacity:[0,1]}}
            transition={{duration: 0.5, type: 'tween'}}
            key={index}
          >
            <img src={urlFor(brand.imgUrl)} alt={brand.name} />

          </motion.div>
        ))}
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Testimonial, "app__testimonial"),
  "testimonial",
  "app__primarybg"
) 