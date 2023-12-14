import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";
const Banner = () => {
    return( <div className="hero-banner">
        <div className="content">
            <div className="text-content">
                <h1>SALES</h1>
                <p>
                Welcome to Shop, your premier destination for a seamless and enjoyable
                 shopping experience. Dive into a diverse and carefully curated selection of fashion, 
                 electronics, home decor, and more. We pride ourselves on providing top-notch products 
                 that blend style with functionality. Enjoy the convenience of secure payment options, swift shipping, and a hassle-free return process. 
                </p>
                <div className="ctas">
                    <div className="banner-cta">
                        <a href="http://localhost:3000/about/:id">Read More</a>    
                     </div>
                    <div className="banner-cta v2">
                        <a href="http://localhost:3000/category/1">Shop Now</a>
                    </div>
                </div>
            </div>
            <img className="banner-img" src={BannerImg} alt="banner" />
        </div>
    </div>
    );
};

export default Banner;

/*
import React from "react";

import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";

const Banner = () => {
    return (
        <div className="hero-banner">
            <div className="content">
                <div className="text-content">
                    <h1>SALES</h1>
                    <p>
                        Convallis interdum purus adipiscing dis parturient
                        posuere ac a quam a eleifend montes parturient posuere
                        curae tempor
                    </p>
                    <div className="ctas">
                        <div className="banner-cta">Read More</div>
                        <div className="banner-cta v2">Shop Now</div>
                    </div>
                </div>
                <img className="banner-img" src={BannerImg} />
            </div>
        </div>
    );
};

export default Banner;
*/