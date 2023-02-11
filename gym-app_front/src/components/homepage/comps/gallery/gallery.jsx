import React, { useState } from 'react';
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
import imagesData from "./imagesData.js";

export default function GalleryComp()
{
  const ImagesArr = document.querySelectorAll(".GalleryImg");
  // console.log(ImagesArr[0])


  const [currImg, setcurrImg] = useState(imagesData[0]);
  // console.log(currImg)


  const nextImg = (e) =>
  {
    imagesData.forEach((item, index) =>
    {
      if (currImg == item)
      {
        imagesData[index + 1] ? setcurrImg(imagesData[index + 1])
          : setcurrImg(imagesData[0]);
        return
      }
    })
  }
  const prevImg = () =>
  {
    imagesData.forEach((item, index) =>
    {
      if (currImg == item)
      {
        imagesData[index - 1] ? setcurrImg(imagesData[index - 1])
          : setcurrImg(imagesData[imagesData.length - 1]);
        return
      }
    })
  }

  const showModal = (e) =>
  {
    GallModal.style.display = "block"
  }

  return (
    <div>

      <div className='galImgModal' id='GallModal' style={{display:"none"}}>
        <div className='fixed-div' onClick={(event) =>
        {
          // if (event.target != document.getElementById("modalImg"))
          if (event.target == document.querySelector(".fixed-div") || event.target == document.querySelector(".closebtn"))
          {
            document.getElementById("GallModal").style.display = "none"
          }
          
        }}>
          <button onClick={prevImg}>
            <i className="fa-solid fa-chevron-left fa-3x mNext_btn"></i>
          </button>
          <img id='modalImg' className='modal-Img' src={currImg} alt="machines" />
          <button onClick={nextImg}>
            <i className="fa-solid fa-chevron-right fa-3x mPrev_btn"></i>
          </button>
          <button className='closebtn'>X</button>
        </div>
      </div>
    
    <div className='mainDiv'>

      <div className='w-full'>
          <h1 className='text-center text-[30px]'>MACHINES & EQUIPMENT</h1>
      </div>

      <div className='trainorsGallery'>
          <div className='trainorP'>
            <button onClick={prevImg}>
              <i className="fa-solid fa-chevron-left fa-3x prevfa_Btn"></i>
            </button>

            <div className='sideImgDiv'>
              <img id='mainImg' className='sideImg' src={currImg} alt="clicked" onClick={showModal} />
            </div>

            <button onClick={nextImg}>
              <i className="fa-solid fa-chevron-right fa-3x nextfa_Btn"></i>
            </button>
        </div>

          {/* <div className='imgsGallery'>

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
          </div> */}

          <div className='imgsGallery'>

            <div className='imgcol'>
              {imagesData.map((item, index) =>
              {
                return (
                  <img className='GalleryImg' id={index} src={item} alt="firstpic" key={index} onClick={(e) =>
                  {
                    setcurrImg(imagesData[e.target.id]);
                  }} />
                )
              })}
            </div>

          </div>

      </div>

      </div>
    </div>
  )
}
