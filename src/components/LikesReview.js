import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import reviews from '../helper/LikesReviewsAccord';
import { AiFillStar } from "react-icons/ai";
import { IoIosQuote } from 'react-icons/io'

const LikesReview = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <section className='reviews__section'>
            <Slider {...settings}>
                {reviews.map((review) => (
                    <div className="review__card" key={review.id}>
                        <div className="stars-quote">
                            <div className="star-icons">
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                            </div>
                            <div className="quotes">
                                <IoIosQuote />
                            </div>
                        </div>
                        <div className="card-top">{review.review}</div>
                        <div className="card-bottom">{review.reviewerName}</div>
                    </div>
                ))}
            </Slider>
        </section>
    )
}

export default LikesReview