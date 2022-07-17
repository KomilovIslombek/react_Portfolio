import React from 'react';
import './Footer.css';


export default function Footer() {
    return (
        <div id='Footer' className="Footer">
           <div className="container">
                <div className="Footer__text">
                    <div className="text__row">
                        <div className="column">
                            <div className="column__subtitle">
                                <h1>Copyright 2020</h1>
                            </div>
                            <div className="column__content">
                                <p>Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis lacinia ex, eget sollicitudin massa pellentesque in. Vivamus mattis eros at sem pulvinar tincidunt.</p>
                            </div>
                        </div>

                        <div className="column">
                            <div className="column__subtitle">
                                <h1>Sayt sahifalari</h1>
                            </div>
                            <div className="column__content2">
                                <li>Bosh sahifa</li>
                                <li>Xizmatlar</li>
                                <li>Portfolio</li>
                                <li>Jamoa</li>
                                <li>Blog</li>
                                <li>Kontaktlar</li>
                            </div>
                        </div>

                        <div className="column">
                            <div className="column__subtitle">
                                <h1>Biz internetda</h1>
                            </div>
                            <div className="column__content3">
                                <li><svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 0.375C4.92339 0.375 0 5.57812 0 12C0 18.4219 4.92339 23.625 11 23.625C17.0766 23.625 22 18.4219 22 12C22 5.57812 17.0766 0.375 11 0.375ZM16.4024 8.33906L14.5972 17.3297C14.4641 17.9672 14.1048 18.1219 13.6036 17.8219L10.8536 15.6797L9.52742 17.0297C9.38105 17.1844 9.25686 17.3156 8.97298 17.3156L9.16815 14.3578L14.2645 9.49219C14.4863 9.28594 14.2157 9.16875 13.923 9.375L7.6246 13.5656L4.91008 12.6703C4.32016 12.4734 4.30685 12.0469 5.03427 11.7469L15.6395 7.425C16.1319 7.2375 16.5621 7.55156 16.4024 8.33906Z" fill="white"/></svg>  <span>Telegram</span></li>
                                <li className='li2'><span>Facebook</span></li>
                                <li className='li3'> <span>Instagram</span></li>                            
                            </div>
                        </div>
                    </div>
                </div>
           </div>
        </div>
    )
}