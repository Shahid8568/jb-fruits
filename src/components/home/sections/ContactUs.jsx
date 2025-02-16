import React from 'react'
import bgImg from '../../../assets/images/contact-us-bg.jpg'
import Link from 'next/link'
const ContactUs = () => {
    return (
        <section className='commonMT container' id='contact-us'>
            <div className=''>
                <h6 className='sectionTitle !text-black'><span className='primaryColor'>Contact</span> Us</h6>
            </div>

            <div className='commonRadius' style={{ background: `url(${bgImg.src})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
                <div className='container flexColCenter gap-4 md:gap-5 lg:gap-8 py-20 md:py-28 lg:py-36'>
                    <span className='primaryColor  text-base md:text-xl font-[600]'> <span className='italic'>||</span> Any Question You Have <span className='italic'>||</span></span>
                    <span className='text-white text-2xl md:text-3xl lg:text-5xl font-[700]'>9727880413</span>
                    <button className=''></button>
                    <Link href={'tel:9727880413'} className="relative overflow-hidden px-6 py-3 text-white font-bold text-sm uppercase tracking-widest border-2 rounded-md primaryBorder transition-all duration-1000 hover:scale-110 hover:text-white hover:border-white hover:shadow-[4px_5px_17px_-4px_#268391] before:absolute before:left-[-50px] before:top-0 before:w-0 before:h-full before:primaryBg before:-skew-x-12 before:-z-10 before:transition-all before:duration-1000 hover:before:w-[250%]">
                        Make A Call
                    </Link>

                </div>
            </div>
        </section>
    )
}

export default ContactUs
