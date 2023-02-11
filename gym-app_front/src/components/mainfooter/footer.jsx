import React from 'react';
import "./style/footer.css";

// images

export default function MainFooter()
{
    return (
        <div>

            <div className='fullwidthblock'>

                <div className='colscontainer text-center'>

                    <div className='footerCol aboutUs'>
                        <div>
                            <i className="fa-solid fa-address-card fa-3x"></i>
                            <p className='title'>About Us</p>
                        </div>
                        <div className='colListDiv'>
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

                    <div className='footerCol hoursDiv'>
                        <div>
                            <i className="fa-solid fa-clock fa-3x"></i>
                            <p className='title'>Hours Open</p>
                        </div>
                        <div className='colListDiv'>
                            <ul className='list-unstyled colList'>
                                <li>
                                    Saturday <i className="fa-solid fa-arrow-right px-4"></i> Thursday
                                </li>
                                <li>
                                    09:00
                                    <i className="fa-solid fa-arrow-right px-8"></i>
                                    22:00
                                </li>
                                <li></li>
                                <li>Friday</li>
                                <li>
                                    14:00 <i className="fa-solid fa-arrow-right px-6"></i> 22:00                   
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className='footerCol aboutUs'>
                        <div>
                            <i className="fa-solid fa-bullhorn fa-3x"></i>
                            <p className='title'>Follow Us!</p>
                        </div>
                        <div className='colListDiv'>
                            <ul className='socialLinks colList'>
                                <li>
                                    <a href="https://www.fb.com"><i className="fa-brands fa-facebook fa-2x"></i></a>
                                </li>
                                <li>
                                    <a href="https://www.Twitter.com"><i className="fa-brands fa-twitter fa-2x"></i></a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com"><i className="fa-brands fa-instagram fa-2x"></i></a>
                                </li>
                                <li>
                                    <a href="https://www.tiktok.com"><i className="fa-brands fa-tiktok fa-2x"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>


                </div>


            </div>

        </div>
    )
}
