import React from "react";
import FerreroRocher from "./assets/ferrero-rocher.jpeg";
import KinderBrueno from "./assets/kinder-brueno.jpeg";
import BrowniesChocolateFudge from "./assets/brownies-chocolate-fudge.jpeg"
import ReesesMiniatureCups from "./assets/reeses-miniature-cups.jpeg"
import MandMs from "./assets/m-and-ms.jpeg"
import HersheysCookies from "./assets/hersheys-ccookies.jpeg"
import ChewyChocolateChip from "./assets/chewy-chocholate-chip.jpeg";
import DoveMilkChocolate from "./assets/Dove-milk-chocolate.jpeg";
import HersheysNuggets from "./assets/Hersheys-nuggets.jpeg";
import './bot.css'

export default function Bot() {
    return (
        <div className="container">
            <div className="inner">
                <div className="item">
                    <div>
                        <img src={KinderBrueno} alt="" className="img" />
                        <p className="underline-txt">Kinder brueno $3.79</p>
                    </div>
                    <button className="btn">ADD</button>
                </div>
                <div className="item">
                    <div>
                        <img src={FerreroRocher} alt="" className="img" />
                        <p className="underline-txt">Ferrero rocher $5.60</p>
                    </div>
                    <button className="btn">ADD</button>
                </div>
                <div className="item">
                    <div>
                        <img src={BrowniesChocolateFudge} alt="" className="img" />
                        <p className="underline-txt">Hotdog $2.35</p>
                    </div>
                    <button className="btn">ADD</button>
                </div>
                <div className="item">
                    <div>
                        <img src={HersheysNuggets} alt="" className="img" />
                        <p className="underline-txt">Tako $1.90</p>
                    </div>
                    <button className="btn">ADD</button>
                </div>
                <div className="item">
                    <div>
                        <img src={ReesesMiniatureCups} alt="" className="img" />
                        <p className="underline-txt">Pizza $7.15</p>
                    </div>
                    <button className="btn">ADD</button>
                </div>
                <div className="item">
                    <div>
                        <img src={MandMs} alt="" className="img" />
                        <p className="underline-txt">Donut $3.45</p>
                    </div>
                    <button className="btn">ADD</button>
                </div>
                <div className="item">
                    <div>
                        <img src={HersheysCookies} alt="" className="img" />
                        <p className="underline-txt">Icecream  5.60$</p>
                    </div>
                    <button className="btn">ADD</button>
                </div>
                <div className="item">
                    <div>
                        <img src={ChewyChocolateChip} alt="" className="img" />
                        <p className="underline-txt">Icecream  5.60$</p>
                    </div>
                    <button className="btn">ADD</button>
                </div>
                <div className="item">
                    <div>
                        <img src={DoveMilkChocolate} alt="" className="img" />
                        <p className="underline-txt">Icecream  5.60$</p>
                    </div>
                    <button className="btn">ADD</button>
                </div>
            </div>
            <div className="usercard" id="usercard"></div>
        </div>
    );
}
