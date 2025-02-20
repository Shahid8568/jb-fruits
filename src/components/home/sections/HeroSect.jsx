import React from 'react'
import bgImg from '../../../assets/images/bg2.jpg'
const HeroSect = () => {
    return (
        <section className='h-[40vh] sm:h-[52vh] md:h-[60vh] lg:h-[80vh] heroSect relative before:contents-[""] before:absolute before:h-full before:w-full before:bg-[#00000094] before:top-0 before:left-0 lg:before:h-0 lg:before:w-0' style={{ background: `url(${bgImg.src})`, backgroundRepeat: 'no-repeat', backgroundSize: 'center' }}>
            <div className='container h-full'>
                <div className='grid lg:grid-cols-2 h-full relative z-[1]'>
                    <div className='flexColCenter !items-start h-full gap-8 pr-[]'>
                        <h1 className='text-xl md:text-3xl xl:text-5xl font-[900] text-white lg:text-black'>Freshness You Can Trust, Quality You Deserve</h1>
                        <p className='text-sm md:text-xl lg:font-[600] text-white lg:textSecondary'>JB Fruits Export Pvt. Ltd. specializes in delivering the freshest, high-quality fruits globally. Based in Bhuj, Kutch, Gujarat, we ensure top-grade produce with a commitment to excellence and reliability.</p>
                    </div>
                    <div className='hidden lg:block'></div>
                </div>
            </div>

        </section>
    )
}

export default HeroSect
