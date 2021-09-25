import React from 'react';
import './Banner.css';
import img from '../../img/file-20180306-146694-k5m19s.webp';

const Banner = () => {
    return (
        <div className="banner-sec">
            <div className="background">
                <div className="background_img">
                    <img src={img} alt="" />
                </div>
                <div className="background_header">
                    <h2>TV</h2>
                    <h4>Maze</h4>
                </div>
            </div>
        </div>
    );
};

export default Banner;