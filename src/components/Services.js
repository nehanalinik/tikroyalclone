import React from 'react'
import GrowthImg from '../assets/images/growth.svg';
import TrustImg from '../assets/images/trust.svg'
import PackageImg from '../assets/images/packages.svg'
import ShippingImg from '../assets/images/quickShipping.svg'
const Services = () => {
    return (
        <section className="services">
            <div className="services__heading">
                <h2>Own Tik Tok With TikRoyal</h2>
                <p className="desc">We Promise to provide the BEST products on the market. Your page and videos are in safe hands. Prepare to see them soar.</p>
            </div>
            <div className="services__content">
                <div className="growth__section">
                    <div className="image__content">
                        <img src={GrowthImg} alt="growth" />
                    </div>
                    <h3>Growth</h3>
                    <p className="about">The secret to worldwide success and recognition is showing how big you already are, come grow with us!</p>
                </div>
                <div className="trust__section">
                    <div className="image__content">
                        <img src={TrustImg} alt="trust" />
                    </div>
                    <h3>Trust</h3>
                    <p className="about"> Our years of experience in the fiels = your guarantee that we provide top-notch quality products and services.</p>
                </div>
                <div className="package__section">
                    <div className="image__content">
                        <img src={PackageImg} alt="packages" />
                    </div>
                    <h3>Packages</h3>
                    <p className="about">Get access to highly valuable services any page owner needs, including performance insights for even further improvement.</p>
                </div>
                <div className="shipping__section">
                    <div className="image__content">
                        <img src={ShippingImg} alt="quick shipping" />
                    </div>
                    <h3>Quick Shipping</h3>
                    <p className="about">You want your services, and you want them NOW, We think the same and dispatch orders as soon as we can.</p>
                </div>
            </div>
        </section>
    )
}

export default Services