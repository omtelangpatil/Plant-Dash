import React from "react";
import './listing.css'

import img from '../../../Assets/image (1).jpg'
import img1 from '../../../Assets/image (9).jpg'
import img2 from '../../../Assets/image (8).jpg'
import img3 from '../../../Assets/image (10).jpg'
import img4 from '../../../Assets/user (1).jpg'
import img5 from '../../../Assets/user (2).jpg'
import img6 from '../../../Assets/user (3).jpg'
import img7 from '../../../Assets/user (4).jpg'


import { BsArrowRightShort } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";

const Listing = () => {
    return(
        <div className="listingSection">
            <div className="heading flex">
                <h1>My Listings</h1>
                <button className="btn flex">
                    See All <BsArrowRightShort className="icon"/>
                </button>
            </div>
            <div className="secContainer flex">
                <div className="singleItem">
                    <AiFillHeart className="icon"/>
                    <img src={img} alt="Name"/>
                    <h3>Annual Vince</h3>
                </div>

                <div className="singleItem">
                    <AiFillHeart className="icon"/>
                    <img src={img1} alt="Name"/>
                    <h3>Annual Vince</h3>
                </div>

                <div className="singleItem">
                    <AiFillHeart className="icon"/>
                    <img src={img2} alt="Name"/>
                    <h3>Annual Vince</h3>
                </div>

                <div className="singleItem">
                    <AiFillHeart className="icon"/>
                    <img src={img3} alt="Name"/>
                    <h3>Annual Vince</h3>
                </div>
            </div>

        <div className="sellers flex">
            <div className="topSellers">
                <div className="heading flex">
                    <h3>Top Sellers</h3>
                    <button className="btn flex">
                        See All <BsArrowRightShort className="icon"/>
                    </button>
                </div>
                    <div className="card flex"> 
                        <div className="users">
                            <img src={img4} alt="User" />
                            <img src={img5} alt="User" />
                            <img src={img6} alt="User" />
                            <img src={img7} alt="User" />
                        </div>
                        <div className="cardText">
                            <span>
                                1434 Plant Sold <br />
                                <small>
                                    21 Sellers<span className="date">7 Days</span> 
                                </small>
                            </span>
                        </div>
                    </div>
                
            </div>

            <div className="featuredSellers">
                <div className="heading flex">
                    <h3>Featured Sellers</h3>
                    <button className="btn flex">
                        See All <BsArrowRightShort className="icon"/>
                    </button>
                </div>
                    <div className="card flex"> 
                        <div className="users">
                            <img src={img4} alt="User" />
                            <img src={img5} alt="User" />
                            <img src={img6} alt="User" />
                            <img src={img7} alt="User" />
                        </div>
                        <div className="cardText">
                            <span>
                                36,566 Plant Sold <br/>
                                <small>
                                    26 Sellers <span className="date">21 Days</span> 
                                </small>
                            </span>
                        </div>
                    </div>
            </div>
        </div>
        </div>
    )
    }

export default Listing;
