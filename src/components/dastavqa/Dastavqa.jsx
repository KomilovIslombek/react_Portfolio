import React from "react";
import './Dastavqa.css';


function Dastavqa() {
    return (
        <div id="Dastavqa" className="Dastavqa">
            <div className="container">
                <div className="Dastavqa__title">
                    <h1>Buyurtma berish</h1>
                    <p>Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis lacinia ex, eget sollicitudin massa pellentesque in. Vivamus mattis eros at sem pulvinar</p>
                </div>
                <div className="Dastavqa__form">
                    <div className="form__row">
                        <div className="form">
                            <input className="input" type="text" placeholder="Ismingiz" />
                            <input className="input" type="text" placeholder="Telefon raqamingiz"/>
                            <select className="input" name="hello" id="">
                                <option value="default">Xizmat turlari</option>
                                <option value="default">default</option>
                                <option value="default">default</option>
                            </select>
                            <button className="btn" type="button"> <a href="#">Buyurtma berish</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dastavqa;