import React from 'react'
import bgImg from '../../../assets/images/about-us-bg.jpg'

const AboutUs = () => {
    return (
        <section className='commonMT container' id='about-us'>
            <div className=''>
                <h2 className='sectionTitle !text-black'><span className='primaryColor'>About</span> Us</h2>
            </div>

            <div className='commonRadius aboutUs'  style={{ background: `rgba(0, 0, 0, 0.361) url(${bgImg.src})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center',backgroundBlendMode:'darken' }}>
                <div className='container flex flex-col text-white text-sm md:text-xl font-[500] gap-4 md:gap-5 lg:gap-8 py-16 md:py-28 lg:py-36'>
                    <span className='font-[700]'>Delivering Freshness, Quality, and Trust Worldwide</span>
                    <p>At JB Fruits Export Pvt. Ltd., we specialize in exporting premium-quality pomegranates, mangoes, and dragon fruits to markets across the Middle East and Pan India. With a strong commitment to freshness and excellence, we ensure that every fruit is carefully sourced, packed, and delivered to meet global standards.</p>
                    <p>As a trusted supplier, we take pride in connecting farmers to international markets, ensuring that only the best produce reaches your table. Our expertise in fruit exports, backed by quality assurance and reliable logistics, makes us a preferred choice in the industry.</p>
                    <span className='font-[700]'>Experience the taste of nature with JB Fruits - where quality meets trust!</span>
                </div>
            </div>
        </section>
    )
}

export default AboutUs

