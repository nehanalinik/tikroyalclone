import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillStar, AiFillHeart } from 'react-icons/ai'
import video1 from '../assets/videos/vid1.mp4'
import video2 from '../assets/videos/vid2.mp4'
import video3 from '../assets/videos/vid3.mp4'
import video4 from '../assets/videos/vid4.mp4'

const Support = () => {
    return (
        <section className="support">
            <div className="support__content">
                <div className="support__text">
                    <div className="title">
                        <h3>Best</h3><span>Support</span>
                    </div>
                    <div className="desc">
                        <p>Do you have any question about your order? You're never alone.</p>
                        <p>Shoot TikRoyal's support a message - we'll get to it soon!</p>
                    </div>
                    <Link to="support">
                        <button className='cta'>Support</button>
                    </Link>
                </div>
                <div className="support__video">
                    <div className="background">
                        <AiFillStar className='star-icon' />
                    </div>
                    <div className="videos">
                        <div className="vid1">
                            <video src={video1} autoPlay loop muted className='video1'>
                            </video>
                            <div className="content">
                                <AiFillHeart />
                                <span>92.12K</span>
                            </div>
                        </div>
                        <div className="vid2">
                            <video src={video2} autoPlay loop muted className='video2'>
                            </video>
                            <div className="content">
                                <AiFillHeart />
                                <span>92.12K</span>
                            </div>
                        </div>
                        <div className="vid3">
                            <video src={video3} autoPlay loop muted className='video3'>
                            </video>
                            <div className="content">
                                <AiFillHeart />
                                <span>92.12K</span>
                            </div>
                        </div>
                        <div className="vid4">
                            <video src={video4} autoPlay loop muted className='video4'>
                            </video>
                            <div className="content">
                                <AiFillHeart />
                                <span>92.12K</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Support