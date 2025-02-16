'use client'
import Image from 'next/image'
import React from 'react'
import img1 from '../../../assets/images/img1.jpeg'
import img2 from '../../../assets/images/mangoes.webp'
import img3 from '../../../assets/images/dragon-fruit.jpeg'

const OurFruits = () => {

    const fruits = [
        {
            img: img1,
            name: 'Pomogranate'
        },
        {
            img: img2,
            name: 'Mangoes'
        },
        {
            img: img3,
            name: 'Dragon Fruit'
        },
    ]

    return (
        <section className='container commonMT' id='our-fruits'>
            <div>
                <h3 className='sectionTitle !text-black'><span className='primaryColor'>Our</span> Fruits</h3>
            </div>
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    fruits?.map((data, index) => {
                        return <div className='flexColCenter gap-4 group bg-white border-[2px] p-3 commonRadius transition-all duration-300 hover:primaryBorder shadow-sm overflow-hidden' key={index}>
                            <Image src={data?.img} width={0} height={0} className='w-full h-[300px] md:h-[340px] lg:h-[450px] object-cover rounded-[8px] transition-all duration-300 group-hover:rounded-[16px] group-hover:scale-105' alt='fruits-img' />
                            <h4 className='text-lg md:text-xl font-[600] textSecondary transition-all duration-300 group-hover:primaryColor'>{data?.name}</h4>
                        </div>
                    })
                }


            </div>

        </section>
    )
}

export default OurFruits
