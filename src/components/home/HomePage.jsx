'use client'
import React from 'react'
import Layout from '../layout/Layout'
import HeroSect from './sections/HeroSect'
import OurFruits from './sections/OurFruits'
import ContactUs from './sections/ContactUs'
import Gallery from './sections/Gallery'
import AboutUs from './sections/AboutUs'

const HomePage = () => {
    return (
        <Layout>
            <div>
                <HeroSect />
                <AboutUs/>
                <OurFruits />
                <Gallery />
                <ContactUs />
            </div>
        </Layout>
    )
}

export default HomePage
