import React from 'react';
import "./timeline.css";

// images
import img01 from "/homeimages/timeline01.jpg";
import img02 from "/homeimages/timeline02.jpg";
import img03 from "/homeimages/femalebb-1.png";
import img04 from "/homeimages/femalebb-16.jpg";
import img05 from "/homeimages/timeline03.jpg";

export default function TimelineComp()
{
    return (
        <div>

            <div className='timeLine'>

                <div className='timelineDiv'>
                    <div className='timelinePs'>
                        <p className='aboutgymp'>ABOUT OUR GYM</p>
                        <p className='secondp'>
                            BUILD DISCIPLINE. BUILD A LEGACY. BUILD EVERY SINGLE DAY WITH A MEMBERSHIP TO OUR GYM. GET THE AMENITIES, WORKOUTS, EQUIPMENT AND PERSONAL TRAINING AT THE BEST PRICE.
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
                    <img className='timelineImg imgToBg' src={img05} alt="firstpic" />

                </div>

                <div className='timelineDiv'>
                    <img className='timelineImg imgToBg' src={img04} alt="firstpic" />
                    <div className='timelinePs'>
                        <p className='aboutgymp'>OUR MACHINES</p>
                        <p className='secondp'>
                            ENJOY OUR MODERN BRAND NEW MACHINES AND EQUIPMENT. PERFORM YOUR WORK OUTS LIKE A PROFESSIONAL.
                        </p>
                        <p>
                            We have all the modern machines you will need and more.
                        </p>

                        <a href="/machines">
                            <button className='btn btn-success'>
                                VIEW OUR MACHINES
                            </button>
                        </a>
                    </div>
                </div>

            </div>

            

        </div>
    )
}
