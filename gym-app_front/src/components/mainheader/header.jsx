import React, { useEffect, useState } from 'react';
import "./style/header.css";
import $ from "jquery";

// images
import logo from "/homeimages/logo2.png"

export default function MainHeader()
{



    const [modalVisible, setModalVisible] = useState(false);
    useEffect(() =>
    {
        let barMenuClass = document.querySelector("#mainBarMenu").classList;
        if (modalVisible)
        {
            barMenuClass.remove("starthidden")
            barMenuClass.remove("faderout")
            barMenuClass.add("faderBlck");
        } else
        {
            barMenuClass.remove("faderBlck")
            barMenuClass.add("faderout")
        }
    }, [modalVisible])

    return (
        <div>
            <div className='MainHeader'>
                <div className='navDiv'>
                    <div className='logoDiv'>
                        <a href="/" title="home">
                            <img className='logoimg' src={logo} alt="my-logo" />
                        </a>
                        <h1>GYM</h1>
                    </div>

                    <nav id='mainNav'>
                        <ul className='nav-list list-none'>
                            <li className='nav-list-item'>
                                <a className='nav-list-link' href="/">Home</a>
                            </li>
                            <li className='nav-list-item'>
                                <a className='nav-list-link' href="/trainors">Trainors</a>
                            </li>
                            <li className='nav-list-item'>
                                <a className='nav-list-link' href="/membership">Membership</a>
                            </li>
                            <li className='nav-list-item'>
                                <a className='nav-list-link' href="/sessions">Sessions</a>
                            </li>
                            <li className='nav-list-item'>
                                <a className='nav-list-link' href="/hours">Hours</a>
                            </li>
                            <li className='nav-list-item'>
                                <a className='nav-list-link' href="/contact">Contact</a>
                            </li>
                        </ul>
                    </nav>

                    <div className='burger-menu-div'>
                        <button title="menu" className='burger-menu'
                            onClick={() =>
                            {
                                setModalVisible(!modalVisible)
                            }}
                        >
                            {/* <i class="fa-regular fa-circle-xmark"></i> */}
                            {/* <i className="fa-solid fa-bars fa-2x"></i> */}
                            <i className={`${modalVisible ? "fa-regular fa-circle-xmark fa-2x" : "fa-solid fa-bars fa-2x"}`}></i>
                        </button>
                    </div>
                </div>
            </div>

            <div id='mainBarMenu' className={`BarMenuDiv starthidden`}
                onClick={(e) =>
                {
                    if (e.target == document.querySelector("#mainBarMenu"))
                    {
                        setModalVisible(!modalVisible);
                    }
                }}
            >
                <ul className={`bar-list ${modalVisible ? "SlideLeft" : "slideRight"}`} >
                    <li className='bar-list-item'>
                        <a className='bar-list-link text-decoration-none' href="/">Home</a>
                    </li>
                    <li className='bar-list-item'>
                        <a className='bar-list-link text-decoration-none' href="/trainors">Trainors</a>
                    </li>
                    <li className='bar-list-item'>
                        <a className='bar-list-link text-decoration-none' href="/membership">Membership</a>
                    </li>
                    <li className='bar-list-item'>
                        <a className='bar-list-link text-decoration-none' href="/sessions">Sessions</a>
                    </li>
                    <li className='bar-list-item'>
                        <a className='bar-list-link text-decoration-none' href="/hours">Hours</a>
                    </li>
                    <li className='bar-list-item'>
                        <a className='bar-list-link text-decoration-none' href="/contact">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}


