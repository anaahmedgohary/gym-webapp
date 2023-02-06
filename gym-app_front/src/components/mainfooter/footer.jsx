import React from 'react';
import "./style/footer.css";

// images

export default function MainFooter()
{
    return (
        <div>

            <div className='fullwidthblock'>

                <div className='colscontainer row text-center'>

                    <div className='col aboutUs'>
                        <div>
                            <i class="fa-solid fa-address-card fa-3x"></i>
                            <p className='header'>About Us</p>
                        </div>
                        <div>
                            <ul className='list-unstyled colList'>
                                <li>
                                    <a href="/history">History</a>
                                </li>
                                <li>
                                    <a href="/founder">Founder</a>
                                </li>
                                <li>
                                    <a href="/mission">Mission</a>
                                </li>
                                <li>
                                    <a href="/privacy">Privacy Policy</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className='col hoursDiv'>
                        <div>
                            <i class="fa-solid fa-clock fa-3x"></i>
                            <p className='header'>Hours Open</p>
                        </div>
                        <div>
                            <ul className='list-unstyled colList'>
                                <li>
                                    saturday to thursday
                                </li>
                                <li><i class="fa-solid fa-arrow-down"></i></li>
                                <li>from 09:00 to 22:00</li>
                                <li>Friday</li>
                                <li><i class="fa-solid fa-arrow-down"></i></li>
                                <li>
                                    from 14: 00 to 22: 00                   
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className='col aboutUs'>
                        <div>
                            <i class="fa-solid fa-bullhorn fa-3x"></i>
                            <p className='header'>Follow Us!</p>
                        </div>
                        <div>
                            <ul className='list-unstyled colList'>
                                <li>
                                    <a href="https://www.fb.com"><i class="fa-brands fa-facebook fa-2x"></i></a>
                                </li>
                                <li>
                                    <a href="https://www.Twitter.com"><i class="fa-brands fa-twitter fa-2x"></i></a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com"><i class="fa-brands fa-instagram fa-2x"></i></a>
                                </li>
                                <li>
                                    <a href="https://www.tiktok.com"><i class="fa-brands fa-tiktok fa-2x"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>


                </div>


            </div>

        </div>
    )
}
