import React from 'react';
import "./style/home.css";

// components
import TimelineComp from './comps/timeline/timeline';
import GalleryComp from './comps/gallery/gallery';
import TrainorsComp from './comps/trainors/trainors';
import HomeHeader from './comps/header/header';

export default function HomePage() {
  return (
    <div className='homediv'>
      
      <HomeHeader />
      <TimelineComp />
      {/* <div className='timeLine'>
        
        <div className='timelineDiv'>
          <div className='timelinePs'>
            <p className='aboutgymp'>ABOUT OUR GYM</p>
            <p className='secondp'>
              BUILD DISCIPLINE. BUILD A LEGACY. BUILD EVERY SINGLE DAY WITH A MEMBERSHIP TO GOLD'S GYM. GET THE AMENITIES, WORKOUTS, EQUIPMENT AND PERSONAL TRAINING AT THE BEST PRICE.
            </p>
            <p>
              Save time and energy with best work outs and safe training methods.
            </p>

            <a href="/membership">
              <button className='btn btn-success'>
                MEMBERSHIPS
              </button>
            </a>
          </div>
          <img className='timelineImg' src={img04} alt="firstpic" />
        </div>
        
        <div className='timelineDiv'>
          <div className='timelinePs'>
            <p className='aboutgymp'>ABOUT OUR GYM</p>
            <p className='secondp'>
              BUILD DISCIPLINE. BUILD A LEGACY. BUILD EVERY SINGLE DAY WITH A MEMBERSHIP TO GOLD'S GYM. GET THE AMENITIES, WORKOUTS, EQUIPMENT AND PERSONAL TRAINING AT THE BEST PRICE.
            </p>
            <p>
              Save time and energy with best work outs and safe training methods.
            </p>

            <a href="/membership">
              <button className='btn btn-success'>
                MEMBERSHIPS
              </button>
            </a>
          </div>
          <img className='timelineImg' src={img02} alt="firstpic" />
          
        </div>

        <div className='timelineDiv'>
          <img className='timelineImg' src={img03} alt="firstpic" />
          <div className='timelinePs'>
            <p className='aboutgymp'>ABOUT OUR GYM</p>
            <p className='secondp'>
              BUILD DISCIPLINE. BUILD A LEGACY. BUILD EVERY SINGLE DAY WITH A MEMBERSHIP TO GOLD'S GYM. GET THE AMENITIES, WORKOUTS, EQUIPMENT AND PERSONAL TRAINING AT THE BEST PRICE.
            </p>
            <p>
              Save time and energy with best work outs and safe training methods.
            </p>

            <a href="/membership">
              <button className='btn btn-success'>
                MEMBERSHIPS
              </button>
            </a>
          </div>
        </div>

        <div className='timelineGallery'>
          <img className='GalleryImg' src={img01} alt="firstpic" />
          <img className='GalleryImg' src={img01} alt="firstpic" />
          <img className='GalleryImg' src={img01} alt="firstpic" />
          <img className='GalleryImg' src={img01} alt="firstpic" />

        </div>

        
     </div> */}
      
      <GalleryComp />

      <TrainorsComp />
      

    </div>
  )
}
