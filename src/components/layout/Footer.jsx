import Link from 'next/link';
import React from 'react'
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className='commonMT bg-[#283042] text-white py-4 flexCenter'>
      <div className="container flexCenter !justify-between flex-wrap gap-3">

        <d4v className=''>
          <span>Copyright © <span className='primaryColor font-[500]'>JB FRUITS</span></span>
        </d4v>
        <div className='flex items-center gap-4'>
          <span>Follow Us :</span>
          <Link href={'/'} className='transition-all duration-300 hover:primaryColor'><FaFacebook size={18} /></Link>
          <Link href={'/'} className='transition-all duration-300 hover:primaryColor'><AiFillInstagram size={20} /></Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
