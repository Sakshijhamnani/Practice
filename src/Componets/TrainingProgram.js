import React from 'react'
import './TrainingProgram.css'

export default function Trainers() {
  return (
    <div className='Main'>
   <h1>Training Programs</h1>
<div className='TrainingPrograms'>
     
      <div className='container'>
        <img src="https://picsum.photos/200/300" alt="" />
        <div class="centered">Centered</div>
    </div>
    <div className='container'>
        <img src="https://chriskiefer.com/wp-content/uploads/2015/03/blog1-compressor.jpg" alt="" />
       <div class="centered">Exercise</div>
    </div>
    <div className='container'>
        <img src="https://demo.candidthemes.com/saya-grid/wp-content/uploads/sites/88/2020/10/beach-yoga-800x600.jpg" alt="" className='textOnImage' />
        <div class="centered">Body Building</div>
    </div>
    <div className='container'>
        <img src="https://moneytalk.life/wp-content/uploads/2021/06/beach-sea-sand-girl-woman-vacation-1084638-pxhere.com_.jpg" alt="" />
        <div class="centered">Yoga</div>
    </div>
    <div className='container'>
      <img src="https://yogajournal.com.au/wp-content/uploads/2022/04/yoga-1.jpg" alt="" />
      <div class="centered">Aerobics</div>
    </div>
    <div className='container'>
      <img src="https://www.goodyearhealth.com/wp-content/uploads/woman-doing-the-downward-dog-pose.jpg" alt="" />
      <div class="centered">Flexibilty</div>
    </div>
    </div>
    </div>
    
  )
}
