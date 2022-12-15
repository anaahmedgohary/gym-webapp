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
                        <div><p className='header'>About Us</p></div>
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
                        <div><p className='header'>Hours Open</p></div>
                        <div>
                            <ul className='list-unstyled colList'>
                                <li>
                                    saturday to thursday
                                </li>
                                <li>09:00 to 22:00</li>
                                <li>Friday: 14:00 to 22:00</li>
                            </ul>
                        </div>
                    </div>

                    <div className='col aboutUs'>
                        <div><p className='header'>Follow Us!</p></div>
                        <div>
                            <ul className='list-unstyled colList'>
                                <li>
                                    <a href="https://www.fb.com">Facebook</a>
                                </li>
                                <li>
                                    <a href="https://www.Twitter.com">Twitter</a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com">Instagram</a>
                                </li>
                                <li>
                                    <a href="https://www.tiktok.com">Tiktok</a>
                                </li>
                            </ul>
                        </div>
                    </div>


                </div>


            </div>

        </div>
    )
}
