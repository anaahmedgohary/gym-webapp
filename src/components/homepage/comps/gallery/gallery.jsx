import React from 'react';
import "./gallery.css";

// images
import img01 from "/homeimages/headerbg-2.jpg";
import img05 from "/homeimages/headerbg-3.jpg";

import img06 from "/homeimages/headerbg-1.jpeg";
import img07 from "/homeimages/Gym-Equipment.jpg";

export default function GalleryComp()
{

  const chooseImg = (e) =>
  {
    let clicked = e.target;
    let mainImg = document.getElementById("mainImg");
    mainImg.src = clicked.src

  }
  return (
    <div className='mainDiv'>

      <div>
        <h1 className='text-center'>MACHINES & EQUIPMENT</h1>
      </div>

      <div className='trainorsGallery'>
        <div className='trainorP'>
          <img id='mainImg' className='sideImg' src={img01} alt="" />
        </div>

        <div className='imgsGallery'>
          <div className='imgcol'>
            <img className='GalleryImg' src={img01} alt="firstpic" onClick={chooseImg} />
            <img className='GalleryImg' src={img05} alt="firstpic" onClick={chooseImg} />
          </div>

          <div className='imgcol'>
            <img className='GalleryImg' src={img06} alt="firstpic" onClick={chooseImg} />
            <img className='GalleryImg' src={img07} alt="firstpic" onClick={chooseImg} />
          </div>
        </div>
      </div>

    </div>
  )
}
