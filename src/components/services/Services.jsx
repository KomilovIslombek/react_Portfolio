import React from "react";
import './Services.css';


 function Services() {
    return (
        <div id="Services" className="Services">
            <div className="container">
                <div className="Services__title">
                    <h1>Xizmatlar</h1>
                    <p>Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis lacinia ex, eget sollicitudin massa pellentesque in. Vivamus mattis eros at sem pulvinar</p>
                </div>
                <div className="Services__card">
                    <div className="card__row">
                        <div className="card_s">
                            <div className="img"></div>
                            <h3>Vebsayt tuzish</h3>
                            <p>lorem ipsum</p>
                        </div>
                        <div className="card_s">
                            <div className="img img2"></div>
                            <h3>Telegram bot</h3>
                            <p>lorem ipsum</p>
                        </div>
                        <div className="card_s">
                            <div className="img img3"></div>
                            <h3>SMM</h3>
                            <p>lorem ipsum</p>
                        </div>
                        <div id="last1" className="card_s">
                            <div className="img img4"></div>
                            <h3>Grafik dizayn</h3>
                            <p>lorem ipsum</p>
                        </div>
                        <div id="last2" className="card_s">
                            <div className="img img5"></div>
                            <h3>CRM tizimlar</h3>
                            <p>lorem ipsum</p>
                        </div>
                    </div>
                </div>
                <div className="Services__buttons">
                    <div className="btn__row">
                        <button className='btn' type='button'><a href="#"> Buyurtma berish </a></button>
                        <button className="link"><a className="" href="#">Xizmatlar sahifasiga o’tish</a></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;