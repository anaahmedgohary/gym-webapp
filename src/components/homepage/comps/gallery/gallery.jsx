import React from 'react';
import "./gallery.css";

// images
import img01 from "/homeimages/headerbg-2.jpg";
import img02 from "/homeimages/machine12.png";
import img03 from "/homeimages/machine16.jpg";
import img04 from "/homeimages/machine09.jpg";
import img05 from "/homeimages/headerbg-3.jpg";
import img06 from "/homeimages/headerbg-1.jpeg";
import img07 from "/homeimages/Gym-Equipment.jpg";
import img08 from "/homeimages/machine07.jpg";
import img09 from "/homeimages/machine10.jpg";

export default function GalleryComp()
{

  const chooseImg = (e) =>
  {
    let clicked = e.target;
    let mainImg = document.getElementById("mainImg");
    mainImg.src = clicked.src

  }
  const showModal = (e) =>
  {
    let mainImg = document.getElementById("mainImg");
    let modalImg = document.getElementById("modalImg");
    let GallModal = document.getElementById("GallModal");
    modalImg.src = mainImg.src
    GallModal.style.display = "block"
  }

  return (
    <div>

      <div className='galImgModal' id='GallModal'>
        <div className='fixed-div' onClick={(event) => { document.getElementById("GallModal").style.display = "none"}}>
          <img id='modalImg' className='modal-Img' src={img02} alt="" />
          <button className='btn btn-danger closebtn'>Exit</button>
        </div>
      </div>
    
    <div className='mainDiv'>

      <div>
        <h1 className='text-center'>MACHINES & EQUIPMENT</h1>
      </div>

      <div className='trainorsGallery'>
        <div className='trainorP'>
          <img id='mainImg' className='sideImg' src={img01} alt="" onClick={showModal} />
        </div>

        <div className='imgsGallery'>

          <div className='imgcol'>
            <img className='GalleryImg' src={img01} alt="firstpic" onClick={chooseImg} />
            <img className='GalleryImg' src={img02} alt="firstpic" onClick={chooseImg} />
            <img className='GalleryImg' src={img03} alt="firstpic" onClick={chooseImg} />
          </div>
          <div className='imgcol'>
            <img className='GalleryImg' src={img04} alt="firstpic" onClick={chooseImg} />
            <img className='GalleryImg' src={img05} alt="firstpic" onClick={chooseImg} />
            <img className='GalleryImg' src={img06} alt="firstpic" onClick={chooseImg} />
          </div>
          <div className='imgcol'>
            <img className='GalleryImg' src={img07} alt="firstpic" onClick={chooseImg} />
            <img className='GalleryImg' src={img08} alt="firstpic" onClick={chooseImg} />
            <img className='GalleryImg' src={img09} alt="firstpic" onClick={chooseImg} />
          </div>
        </div>
      </div>

      </div>
    </div>
  )
}
