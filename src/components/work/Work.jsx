import React from "react";
import './Work.css';


export default function Work() {
    return (
        <div id="Work" className="Work">
            <div className="Container">
                <div className="Work__title">
                    <h1>Biz qanday ishlaymiz?</h1>
                    <p>Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis lacinia ex, eget sollicitudin massa pellentesque in. Vivamus mattis eros at sem pulvinar</p>
                </div>
                <div className="Work__headers">
                    <div className="headers__row">
                        <div className="header__left l">
                            <div className="blqanot"> </div>
                        </div>
                        <div className="margin header__right">
                            <h3>Talablarni aniqlab chiqamiz</h3>
                            <p>Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. <br /> Nam facilisis</p>
                        </div>
                        {/* None and Block */}
                        <div id="none" className="header__right r ">
                            <h3>Bir necha yechimlarni taklif qilamiz</h3>
                            <p className="qalendar__p">nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis</p>
                        </div>
                        <div id="none" className="header__left ">
                            <div className="qalendar"> </div>
                        </div>
                        {/* None and Block end */}
                        <div id="block" className="header__left ">
                            <div className="qalendar"> </div>
                        </div>
                        <div id="block" className="margin header__right">
                            <h3>Bir necha yechimlarni taklif qilamiz</h3>
                            <p className="qalendar__p">nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis</p>
                        </div>

                        <div className="header__left l">
                            <div className="alarm"> </div>
                        </div>
                        <div className="margin header__right">
                            <h3>Loyiha uchun vaqt belgilaymiz</h3>
                            <p>nec turpis et ultrices. Duis sit amet quam arcu Nam facilisis</p>
                        </div>
                        
                        <div id="none" className="header__right">
                            <h3>A’lo sifat bilan bajarib topshiramiz</h3>
                            <p className="qalendar__p">nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis</p>
                        </div>
                        <div id="none" className="header__left p">
                            <div className="cup"> </div>
                        </div>
                        {/* None and Block */}
                        <div id="block" className="header__left p">
                            <div className="cup"> </div>
                        </div>

                        <div id="block" className="margin header__right">
                            <h3>A’lo sifat bilan bajarib topshiramiz</h3>
                            <p className="qalendar__p">nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis</p>
                        </div>
                        {/* None and Block end */}
                        <div className="header__left l">
                            <div className="boyPictur"> </div>
                        </div>
                        <div className="margin header__right mb-0">
                            <h3>Qo’llab-quvvatlab boramiz</h3>
                            <p>nec turpis et ultrices. Duis sit amet quam arcu Nam facilisis</p>
                        </div>

                    </div>
                </div>
                <div className="button">
                    <button className="btn"><a href="#">Buyurtma berish</a></button>
                </div>
            </div>
        </div>
    )
}