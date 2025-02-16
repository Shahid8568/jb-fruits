import Link from 'next/link'
import React from 'react'
import MobileNav from './MobileNav'

const Header = () => {
    return (
        <header className='bg-white shadow-lg py-6 sticky top-0 z-[5]'>
            <div className='container'>
                <div className='flex items-center justify-between'>
                    <div>
                        <Link href={'/'} className='text-xl primaryColor font-[600]'>JB FRUITS</Link>
                    </div>
                    <div className='hidden lg:block'>
                        <ul className='flex items-center gap-10'>
                            <Link href={'/'} className='font-[500] transition-all duration-300 textSecondary hover:primaryColor'>
                                Home
                            </Link>
                            <Link href={'#about-us'} className='font-[500] transition-all duration-300 textSecondary hover:primaryColor'>
                                About Us
                            </Link>
                            <Link href={'#our-fruits'} className='font-[500] transition-all duration-300 textSecondary hover:primaryColor'>
                                Our Fruits
                            </Link>
                            <Link href={'#gallery'} className='font-[500] transition-all duration-300 textSecondary hover:primaryColor'>
                                Gallery
                            </Link>
                            <Link href={'#contact-us'} className='font-[500] transition-all duration-300 textSecondary hover:primaryColor'>
                                Contact Us
                            </Link>
                        </ul>
                    </div>
                    <div className='block lg:hidden'>
                        <MobileNav />
                    </div>
                </div>
            </div>

        </header>
    )
}

export default Header
