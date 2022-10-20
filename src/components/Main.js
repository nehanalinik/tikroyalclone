import React from 'react'
import { AiFillHeart } from 'react-icons/ai'
import { MdPeopleAlt } from "react-icons/md";
import { GrMenu } from 'react-icons/gr';
import { BsFillCheckCircleFill } from 'react-icons/bs'
import RatingImg from '../assets/images/ratings.svg'
import MainImg from '../assets/images/mainImg.jpeg'
import { Link } from 'react-router-dom';
const Main = () => {
    return (
        <main className="main">
            <section className="main__section">
                <div className="main__text">
                    <h1>Buy TikTok Likes and Followers starting at $1.00</h1>
                    <p>Are you jealous of other Tik Tokers? Our services will strengthen your content and give it the push it needs to go viral.</p>
                    <div className="rating">
                        <img src={RatingImg} alt="rating" />
                        <span>4.8 | Rated Excellent on Trustpilot</span>
                    </div>
                    <div className="ctaBtns">
                        <Link to="tiktok-likes">
                            <button className="cta likes"><AiFillHeart size={24} /> Buy TikTok Likes</button>
                        </Link>
                        <Link to="tiktok-followers">
                            <button className="cta followers"><MdPeopleAlt size={24} /> Buy TikTok Followers</button>
                        </Link>
                        <Link to="tiktok">
                            <button className="cta services"><GrMenu className="services-icon" size={24} /> See All Services</button>
                        </Link>
                    </div>
                </div>
                <div className="main__image">
                    <div className="img-container">
                        <img src={MainImg} alt="main pic" />
                    </div>
                    <div className="img-content">
                        <h3 className="title">@TikRoyal</h3>
                        <div className="social">
                            <div className="following">
                                <strong>105</strong>
                                <p>Following</p>
                            </div>
                            <div className="followers">
                                <strong>162.1k</strong>
                                <p>Followers</p>
                            </div>
                            <div className="likes">
                                <strong>5.2M</strong>
                                <p>Likes</p>
                            </div>
                        </div>
                    </div>
                    <div className="comments">
                        <span className="comment1"><BsFillCheckCircleFill color="#21D5EC" size={28} />Popular creator</span>
                        <span className="comment2">Best content!...</span>
                        <span className="comment3">Perfect 🥰🥰</span>
                        <span className="comment4">So cool! 😎</span>
                        <span className="comment5">Hey lets collab ?</span>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Main