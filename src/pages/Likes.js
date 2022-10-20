import React, { useState } from "react";
import { AiFillStar, AiFillHeart } from "react-icons/ai";
import MainLike from "../assets/images/mainlike.png";
import { LikesElements } from "../helper/LikesElements";
import FastDelivery from "../assets/images/fastdelivery-like.png";
import RealTiktok from "../assets/images/realtiktok-like.png";
import SupportTeam from "../assets/images/supportteam-like.png";
import Packages from "../assets/images/packages-like.png";
import LikesWhyAccord from "../helper/LikesWhyAccord";
import WhyLikesAccord from "../components/WhyLikesAccord";
import LikesReview from "../components/LikesReview";

const Likes = () => {
    const [value, onChange] = useState(100);
    const [reasons] = useState(LikesWhyAccord);

    return (
        <>
            <section className="likes__section">
                <div className="likes__contents">
                    <div className="likes__text">
                        <h1>Buy TikTok likes</h1>
                        <p className="desc">
                            We provide high-quality TikTok likes from real and active TikTok
                            users, Join our loyal customer base who already benefits from the
                            best TikTok likes possible.
                        </p>
                    </div>
                    <div className="likes__order">
                        <div className="order">
                            <div className="head">
                                <AiFillHeart size={24} className="heart-icon" />
                                <h3>TikTok Likes</h3>
                            </div>
                            <div className="slider-parent">
                                <div className="bubble">{value} Likes</div>
                                <input
                                    type="range"
                                    className="rangeInput"
                                    value={value}
                                    min={100}
                                    max={5000}
                                    onChange={({ target: { value: radius } }) => {
                                        onChange(radius);
                                    }}
                                />
                                <div className="price">
                                    <div className="currAmount">$1</div>
                                    <div className="off">
                                        <span>25% OFF</span>
                                    </div>
                                </div>
                                <button className="cta">Order Now</button>
                            </div>
                        </div>
                        <div className="about">
                            This heightens the credibility of your profile both to the
                            algorithm as well as to users who may encounter any of your
                            content.
                        </div>
                    </div>
                </div>
            </section>
            <section className="likes__about">
                <div className="likes__about-content">
                    <div className="likes__content-text">
                        <h2>TikRoyal: Buy TikTok likes from $1.00</h2>
                        <div className="likes__desc">
                            <p className="para1">
                                The TikTok logo has become the symbol of success in today's
                                online influencer world. As a result, many are flooding the
                                TikTok platform to grab the chance to mesmerize their target
                                audience and garner fame.
                            </p>
                            <p className="para2">
                                Almost everything that goes up in the TikTok algorithm is ranked
                                based on how many people liked it, So it's not enough to simply
                                create interesting content anymore. Although social media
                                marketing can help you eventually get there, it can take some
                                time to gain consistent TikTok views.
                            </p>
                            <strong className="imp-para">
                                What we offer isn't one computer-generated service that
                                eventually gets flagged.
                            </strong>
                            <p className="para3">
                                TikRoyal.com exclusive TikTok likes from real active users will
                                help you increase engagement on your TikTok profile at
                                affordable prices.
                            </p>
                        </div>
                    </div>
                    <div className="likes__content-image">
                        <img src={MainLike} alt="like" />
                    </div>
                </div>
            </section>
            <section className="buy__likes">
                <div className="buy__likes-content">
                    <div className="buy__likes-text">
                        <h3>How Many TikTok likes?</h3>
                        <button className="cta">Boost Your Social Media Presence</button>
                        <p className="desc">
                            These are some of our popular TikTok likes packages. Choose from
                            our list of TikTok likes services and get to the checkout page
                            instantly!
                        </p>
                    </div>
                    <div className="buy__likes-card">
                        {LikesElements.map((item) => {
                            return (
                                <div className="card" key={item.id}>
                                    <span>Save {item.save}%</span>
                                    <div className="buy">
                                        <h4>Buy</h4>
                                        <p>{item.likes}</p>
                                    </div>
                                    <div className="price">
                                        <h4>TikTok Likes</h4>
                                        <p>${item.price}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className="button">
                        <button>Order Now</button>
                    </div>
                </div>
            </section>
            <section className="promise__likes">
                <div className="promise__content">
                    <div className="promise__heading">
                        <h3>Buy TikTok Likes, Real TikTok Likes</h3>
                        <p>
                            We promise to provide the best likes, so your page will get
                            exactly what it deserves! We'll help you rise through this social
                            media platform, allowing you to achieve that highly-sought after
                            TikTok fame.
                        </p>
                    </div>
                    <div className="like__services">
                        <div className="like__service1">
                            <img src={FastDelivery} alt="fast delivery of tiktok likes" />
                            <h4>Fast Delivery of TikTok Likes</h4>
                            <p className="desc">
                                We deliver your TikTok likes to your TikTok post at fast or
                                natural speed. Choose the option you like most. However, we're
                                not just about speed. We don't want your hard work to go to
                                waste! Having intimate knowledge of TikTok algorithms, we know
                                how to prevent your profile from getting banned.
                            </p>
                        </div>
                        <div className="like__service2">
                            <img
                                src={RealTiktok}
                                alt="real tiktok likes matter for your tiktok account"
                            />
                            <h4>Real TikTok Likes Matter for Your TikTok Account</h4>
                            <p className="desc">
                                We know that fake profiles are easily identified. That's why a
                                lot of them get banned. Others that move past the surveillance
                                of the platform are still seen as untrustworthy because real
                                users can see the difference. By using real TikTok likes, you're
                                preserving the effect of getting likes as well as the
                                credibility of your brand.
                            </p>
                        </div>
                        <div className="like__service3">
                            <img
                                src={SupportTeam}
                                alt="24/7 support team, best likes service provider"
                            />
                            <h4>24/7 Support Team, Best Likes Service Provider</h4>
                            <p className="desc">
                                Our support experts will help you with buying TikTok likes right
                                away. Contact us via our live support chat. If you have any
                                questions and concerns, our team is ready to answer them all. We
                                have the expertise. We can help you select the type of
                                engagement that will have the most impact on your TikTok
                                popularity.
                            </p>
                        </div>
                        <div className="like__service4">
                            <img
                                src={Packages}
                                alt="cheap tiktok likes packages and real tiktok users"
                            />
                            <h4>Cheap TikTok Likes Packages and Real TikTok Users</h4>
                            <p className="desc">
                                We're the only market providers offering low prices and premium
                                quality services. Having a wide network of legitimate users of
                                the TikTok platform, we can fulfill any order without having our
                                clients burn a hole in their pockets. Buy TikTok fans from us
                                today and see yourself generate organic growth.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="reasontobuy__likes">
                <div className="reasonstobuy__content">
                    <div className="top__text">
                        <h2>
                            Still Not Convinced? <br />
                            Here are More Reasons to Buy TikTok Likes:
                        </h2>
                        <p className="desc">
                            When you buy TikTok likes from us, you're swinging the competitive
                            TikTok platform in your favor. We promise to provide the best
                            likes to improve your exposure in the TikTok world, so your page
                            will get exactly what it deserves: social media fame supported by
                            a massive stream of loyal TikTok followers.
                        </p>
                    </div>
                    <div className="bottom__accord">
                        {reasons.map((reason) => {
                            return <WhyLikesAccord key={reason.id} {...reason} />;
                        })}
                    </div>
                </div>
            </section>
            <section className="likes__reviews">
                <div className="reviews__content">
                    <div className="heading__content">
                        <div className="text">
                            <h3>Reviews written by our clients</h3>
                            <p>
                                What do other customers have to say about out TikTok likes? Read
                                before you buy!
                            </p>
                        </div>
                        <div className="ratings">
                            <h1>
                                5<span>/5</span>
                            </h1>
                            <div className="star-container">
                                <div className="stars">
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiFillStar />
                                </div>
                                <p className="peoplereviews">Based on 103 Reviews.</p>
                            </div>
                        </div>
                    </div>
                    <LikesReview />
                </div>
            </section>
        </>
    );
};

export default Likes;
