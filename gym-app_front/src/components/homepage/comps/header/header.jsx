import React from 'react';
import "./style/header.css";
import $ from "jquery";

// images
import logo from "/homeimages/logo2.png"

export default function HomeHeader()
{





    return (
        <div className='headSection'>

            <div className='qoutesDiv'>

                <div className='firstqoute'>
                    <p className='qouteP'>
                        your fitness is our mission
                    </p>
                </div>

                <div className='joinbtn-div'>
                    <a href="/membership">
                        <button className='btn btn-danger joinbtn'>
                            JOIN GYM NOW
                        </button>
                    </a>
                </div>

                <div className='firstqoute'>
                    <p className='qouteP'>
                        BUILD A STRONG BODY FOR A HEALTHY LIFE
                    </p>
                </div>


            </div>



        </div>
    )
}


