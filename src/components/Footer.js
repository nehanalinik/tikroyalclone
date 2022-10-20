import React from 'react'
import { Link } from 'react-router-dom'
import Rating from '../assets/images/ratings.svg'
import MasterCard from '../assets/images/mastercard.svg'
import VisaCard from '../assets/images/visa.svg'
import Paypal from '../assets/images/paypal.svg'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__content">
                <div className="top__content">
                    <div className="footer__boost">
                        <h4 className="title">Boost Your TikTok</h4>
                        <div className="links">
                            <Link to="tiktok-likes">Buy TikTok Likes</Link>
                            <Link to="tiktok-followers">Buy TikTok Followers</Link>
                            <Link to="tiktok-views">Buy TikTok Views</Link>
                            <Link to="tiktok-video-shares">Buy TikTok Shares</Link>
                        </div>
                    </div>
                    <div className="footer__support">
                        <h4 className="title">Support</h4>
                        <div className='links'>
                            <Link to="/">Live Chat</Link>
                            <Link to="support">Ticket Support</Link>
                            <Link to="/">Terms of Use</Link>
                        </div>
                    </div>
                    <div className="footer__tikroyal">
                        <h4 className="title">TikRoyal</h4>
                        <div className="desc">Buy TikTok likes and followers from TikRoyal.com, Instant delivery of Likes and Followers with Non drop guarantee and 24/7 Support chat.</div>
                        <div className="rating">
                            <img src={Rating} alt="rating" />
                            <span>4.8 | Rated Excellent on Trustpilot</span>
                        </div>
                    </div>
                </div>
                <div className="bottom__content">
                    <div className="payment-options">
                        <div className="card1">
                            <img src={MasterCard} alt="master card" />
                        </div>
                        <div className="card2">
                            <img src={VisaCard} alt="visa card" />
                        </div>
                        <div className="card3">
                            <img src={Paypal} alt="paypal" />
                        </div>
                    </div>
                    <p className="copyright">Copyright © 2022 - All rights reserved to TikRoyal.com</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer