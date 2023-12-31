import React from "react";
import './activity.css'
import { BsArrowRightShort } from "react-icons/bs";

import img8 from '../../../Assets/user (4).jpg'
import img9 from '../../../Assets/user (1).jpg'
import img10 from '../../../Assets/user (2).jpg'
import img11 from '../../../Assets/user (3).jpg'
import img12 from '../../../Assets/user (5).jpg'

const Activity = () => {
    return(
        <div className="activitySection">
            <div className="heading flex">
                <h1>Resent Activity</h1>
                <button className="btn flex">
                    See All
                    <BsArrowRightShort className="icon"/>
                </button>
            </div>

            <div className="secContainer grid">
                <div className="singleCustomer flex">
                    <img src={img8} alt="Customer"/>
                    <div className="customerDetails">
                        <span className="name">Martha Wayne</span>
                        <small>Ordered a new plant</small>
                    </div>
                    <div className="duration">
                        2 min ago
                    </div>
                </div>
                <div className="singleCustomer flex">
                    <img src={img9} alt="Customer Image"/>
                    <div className="customerDetails">
                        <span className="name">Mike Tyson</span>
                        <small>Ordered a new plant</small>
                    </div>
                    <div className="duration">
                        4 min ago
                    </div>
                </div>
                <div className="singleCustomer flex">
                    <img src={img10} alt="Customer Image"/>
                    <div className="customerDetails">
                        <span className="name">Tfai amfe</span>
                        <small>Ordered a new plant</small>
                    </div>
                    <div className="duration">
                        6 min ago
                    </div>
                </div>
                <div className="singleCustomer flex">
                    <img src={img11} alt="Customer Image"/>
                    <div className="customerDetails">
                        <span className="name">walter white</span>
                        <small>Ordered a new plant</small>
                    </div>
                    <div className="duration">
                        7 min ago
                    </div>
                </div>
                <div className="singleCustomer flex">
                    <img src={img12} alt="Customer Image"/>
                    <div className="customerDetails">
                        <span className="name">shelton kiaf</span>
                        <small>Ordered a new plant</small>
                    </div>
                    <div className="duration">
                        7 min ago
                    </div>
                </div>
            </div>
        </div>
    )
    }

export default Activity;
