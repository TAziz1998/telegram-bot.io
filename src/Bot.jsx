import React from "react";
import IceCreamEmoji from './ice-cream-emoji.png';
import BurgerEmoji from './burger-emoji.png';
import './bot.css'

export default function Bot() {
    return (
        <div className="container">
            <div className="inner">
                <div className="item">
                    <div>
                        <img src={BurgerEmoji} alt="" className="img" />
                        <p className="underline-txt">Burger $3.79</p>
                    </div>
                    <button className="btn">ADD</button>
                </div>
                <div className="item">
                    <div>
                        <img src={IceCreamEmoji} alt="" className="img" />
                        <p className="underline-txt">Fries $5.60</p>
                    </div>
                    <button className="btn">ADD</button>
                </div>
                <div className="item">
                    <div>
                        <img src={IceCreamEmoji} alt="" className="img" />
                        <p className="underline-txt">Hotdog $2.35</p>
                    </div>
                    <button className="btn">ADD</button>
                </div>
                <div className="item">
                    <div>
                        <img src={IceCreamEmoji} alt="" className="img" />
                        <p className="underline-txt">Tako $1.90</p>
                    </div>
                    <button className="btn">ADD</button>
                </div>
                <div className="item">
                    <div>
                        <img src={IceCreamEmoji} alt="" className="img" />
                        <p className="underline-txt">Pizza $7.15</p>
                    </div>
                    <button className="btn">ADD</button>
                </div>
                <div className="item">
                    <div>
                        <img src={IceCreamEmoji} alt="" className="img" />
                        <p className="underline-txt">Donut $3.45</p>
                    </div>
                    <button className="btn">ADD</button>
                </div>
                <div className="item">
                    <div>
                        <img src={IceCreamEmoji} alt="" className="img" />
                        <p className="underline-txt">Icecream  5.60$</p>
                    </div>
                    <button className="btn">ADD</button>
                </div>
                <div className="item">
                    <div>
                        <img src={IceCreamEmoji} alt="" className="img" />
                        <p className="underline-txt">Icecream  5.60$</p>
                    </div>
                    <button className="btn">ADD</button>
                </div>
                <div className="item">
                    <div>
                        <img src={IceCreamEmoji} alt="" className="img" />
                        <p className="underline-txt">Icecream  5.60$</p>
                    </div>
                    <button className="btn">ADD</button>
                </div>
            </div>
            <div className="usercard" id="usercard"></div>
        </div>
    );
}
