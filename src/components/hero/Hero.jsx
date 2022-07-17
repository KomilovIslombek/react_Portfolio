import React from "react";
import './Hero.css';


function Hero() {
    return (
        <div id="Hero" className="Hero">
            <div className="container">
                <div className="hero__row">
                    <div className="hero__left">
                        <h1>Biznesingizni keyingi bosqichga <br /> olib chiqing</h1>
                        <p>Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis lacinia ex, eget sollicitudin massa pellentesque in. Vivamus mattis eros at sem pulvinar</p>
                        <button className="btn" type="button"><a href="#Services">Xizmatlar bilan tanishish</a></button>
                    </div>
                    <div className="hero__right">
                    <iframe className="iframe" width="460" height="260" src="https://www.youtube.com/embed/KaDz7pxbzyw" title="YouTube video player" ></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Hero;