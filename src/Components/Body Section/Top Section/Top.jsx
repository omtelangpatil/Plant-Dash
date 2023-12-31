import React from "react";
import './top.css'
import { BiSearchAlt } from "react-icons/bi";
import { TbMessageCircle } from "react-icons/tb";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BsArrowRightShort } from "react-icons/bs";

import img from '../../../Assets/user (3).jpg'
import img2 from '../../../Assets/image (4).jpg'
import video from '../../../Assets/video.mp4'

const Top = () => {
    return(
        <div className="topSection">
            <div className="headerSection flex">
                <div className="title">
                    <h1>Welcome to Planti.</h1>
                    <p>Hello Om Patil, Welcome back!</p>
                </div>

                <div className="searchBar flex">
                    <input type="text" placeholder="Search Dashboard"/>
                        <BiSearchAlt className="icon"></BiSearchAlt>
                    
                </div>
                <div className="adminDiv flex">
                    <TbMessageCircle className="icon"/>
                    <IoMdNotificationsOutline className="icon"></IoMdNotificationsOutline>
                    <div className="adminImage">
                        <img src={img} alt="Admin"/>
                    </div>
                </div>
            </div>

            <div className="cardSection flex">
                <div className="rightCard flex">
                    <h1>Create and Sell extraordinary products</h1>
                    <p>The world's fast growing industry today are natural made products!</p>

                    <div className="buttons flex">
                        <button className="btn">Explore More</button>
                        <button className="btn transparent">Top Sellers</button>
                    </div>
                    <div className="videoDiv">
                        <video src={video} autoPlay loop muted></video>
                    </div>
                </div>

                <div className="leftCard flex">
                    <div className="main flex">
                        <div className="textDiv">
                        <h1>My Stat</h1>

                        <div className="flex">
                            <span>
                                Today <br/> <small>4 Orders</small>
                            </span>
                            <span>
                                This Month <br/> <small>127 Orders</small>
                            </span>
                        </div>

                        <span className="flex link">
                            Go To My Orders <BsArrowRightShort className="icon"/>
                        </span>
                        </div>
                        <div className="imgDiv">
                            <img src={img2} alt="Name"/>
                        </div>

                    {/*<div className="sideBarCard">
                        <BsQuestionCircle className="icon"/>
                        <div className="cardContent">
                        <div className="circle1"></div>
                        <div className="circle1"></div>

                        <h3>Help Center</h3>
                        <p>Having trouble in planti, please contact us from for more questions.</p>
                        <button className="btn">go to help center</button>
                        </div>
                    </div>*/}
                    </div>
                </div>
            </div>
        </div>
    )
    }

export default Top;
