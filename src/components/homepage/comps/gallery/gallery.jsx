import React from 'react';
import "./gallery.css";

// images
import img01 from "/homeimages/1535446.jpg";
import img02 from "/homeimages/timeline02.jpg";
import img03 from "/homeimages/femalebb-1.png";
import img04 from "/homeimages/femalebb-16.jpg";
import img05 from "/homeimages/1664275511.png";

import img06 from "/homeimages/femalebb-4.jpg";
import img07 from "/homeimages/bodybuilding-tips.jpg";
import img08 from "/homeimages/qqqqqww.jpg";

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
          <img id='mainImg' className='sideImg' src={img05} alt="" />
        </div>

        <div className='imgsGallery'>
          <div className='imgcol'>
            <img className='GalleryImg' src={img05} alt="firstpic" onClick={chooseImg} />
            <img className='GalleryImg' src={img07} alt="firstpic" onClick={chooseImg} />
          </div>

          <div className='imgcol'>
            <img className='GalleryImg' src={img06} alt="firstpic" onClick={chooseImg} />
            <img className='GalleryImg' src={img08} alt="firstpic" onClick={chooseImg} />
          </div>
        </div>
      </div>

    </div>
  )
}
