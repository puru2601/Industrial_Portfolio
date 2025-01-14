import React from 'react'
import "./Service.css"
import { FaCheck } from "react-icons/fa6";

const service = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container service__conatiner">
      <article className='service'>
       <div className="service__head">
       <h3>UI/UX Design</h3>
       </div>

       <ul className='service__list'>
       <li>
         <FaCheck className='service__list-icon' />
         <p>Lorem, ipsum dolor sit amet  adipisicing.</p>
       </li>
       <li>
         <FaCheck className='service__list-icon' />
         <p>Lorem, ipsum dolor sit amet  adipisicing.</p>
       </li>
       <li>
         <FaCheck className='service__list-icon' />
         <p>Lorem, ipsum dolor sit amet  adipisicing.</p>
       </li>
       <li>
         <FaCheck className='service__list-icon' />
         <p>Lorem, ipsum dolor sit amet  adipisicing.</p>
       </li>
       <li>
         <FaCheck className='service__list-icon' />
         <p>Lorem, ipsum dolor sit amet  adipisicing.</p>
       </li>
       </ul>
      </article>


      <article className='service'>
       <div className="service__head">
       <h3>Web Development</h3>
       </div>

       <ul className='service__list'>
       <li>
         <FaCheck className='service__list-icon' />
         <p>Lorem, ipsum dolor sit amet  adipisicing.</p>
       </li>
       <li>
         <FaCheck className='service__list-icon' />
         <p>Lorem, ipsum dolor sit amet  adipisicing.</p>
       </li>
       <li>
         <FaCheck className='service__list-icon' />
         <p>Lorem, ipsum dolor sit amet  adipisicing.</p>
       </li>
       <li>
         <FaCheck className='service__list-icon' />
         <p>Lorem, ipsum dolor sit amet  adipisicing.</p>
       </li>
       <li>
         <FaCheck className='service__list-icon' />
         <p>Lorem, ipsum dolor sit amet  adipisicing.</p>
       </li>
       <li>
         <FaCheck className='service__list-icon' />
         <p>Lorem, ipsum dolor sit amet  adipisicing.</p>
       </li>
       </ul>
      </article>


      <article className='service'>
       <div className="service__head">
       <h3>Content Creation</h3>
       </div>

       <ul className='service__list'>
       <li>
         <FaCheck className='service__list-icon' />
         <p>Lorem, ipsum dolor sit amet  adipisicing.</p>
       </li>
       <li>
         <FaCheck className='service__list-icon' />
         <p>Lorem, ipsum dolor sit amet  adipisicing.</p>
       </li>
       <li>
         <FaCheck className='service__list-icon' />
         <p>Lorem, ipsum dolor sit amet  adipisicing.</p>
       </li>
       <li>
         <FaCheck className='service__list-icon' />
         <p>Lorem, ipsum dolor sit amet  adipisicing.</p>
       </li>
       <li>
         <FaCheck className='service__list-icon' />
         <p>Lorem, ipsum dolor sit amet  adipisicing.</p>
       </li>
       </ul>
      </article>


      </div>
    </section>
  )
}

export default service
