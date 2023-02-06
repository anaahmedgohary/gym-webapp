import React from 'react';
import "./trainors.css"

// images
import img01 from "/homeimages/trainor01.jpg";
import img03 from "/homeimages/trainor02.jpg";
import img04 from "/homeimages/trainor03.jpg";
import img05 from "/homeimages/trainor05.jpg";


export default function TrainorsComp() {
  return (
      <div>
          
          <div className='trainorcontainer'>
              
              <div>
                  <h1>TRAINORS</h1>
              </div>

              <div className='trainorsGall'>

                  <div className='trainorDiv'>
                      <p className='name'>Alex</p>
                      <img className='trainorImg' src={img01} alt="trainor" />
                      <div className='workHours'>
                        <a className='btn btn-info' href="/schedule">
                            Schedule
                        </a>
                      </div>
                      
                  </div>
                  <div className='trainorDiv'>
                      <p className='name'>Lola</p>
                      <img className='trainorImg' src={img05} alt="trainor" />
                      <div className='workHours'>
                          <a className='btn btn-info' href="/schedule">
                              Schedule
                          </a>
                      </div>
                      
                  </div>
                  <div className='trainorDiv'>
                      <p className='name'>John</p>
                      <img className='trainorImg' src={img04} alt="trainor" />
                      <div className='workHours'>
                        <a className='btn btn-info' href="/schedule">
                            Schedule
                        </a>
                      </div>
                      
                  </div>
                  <div className='trainorDiv'>
                      <p className='name'>Jack</p>
                      <img className='trainorImg' src={img03} alt="trainor" />
                      <div className='workHours'>
                        <a className='btn btn-info' href="/schedule">
                            Schedule
                        </a>
                      </div>
                      
                  </div>



              </div>

          </div>

    </div>
  )
}
