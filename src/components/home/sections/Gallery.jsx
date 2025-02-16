import Image from 'next/image'
import React from 'react'
import img1 from '../../../assets/images/galleryImg1.jpeg'
import img2 from '../../../assets/images/galleryImg2.jpeg'
import img3 from '../../../assets/images/galleryImg3.jpeg'

const Gallery = () => {
    return (
        <section className='container commonMT' id='gallery'>
            <div>
                <h5 className='sectionTitle'>Gallery</h5>
            </div>
            <div className='grid lg:grid-cols-2 gap-5'>
                <div>
                    <Image src={img3} width={0} height={0} className='w-full h-[38vh] lg:h-[78vh] aspect-[1/1] commonRadius' alt='gallery-img' />
                </div>
                <div className='flexColCenter gap-5'>
                    <Image src={img2} width={0} height={0} className='w-full h-[38vh] aspect-[1/1] commonRadius' alt='gallery-img' />
                    <Image src={img3} width={0} height={0} className='w-full h-[38vh] aspect-[1/1] commonRadius' alt='gallery-img' />
                </div>
            </div>
        </section>
    )
}

export default Gallery
