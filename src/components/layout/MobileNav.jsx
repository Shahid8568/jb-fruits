import React from 'react'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import { RxHamburgerMenu } from "react-icons/rx";
import Link from 'next/link';

const MobileNav = () => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <span><RxHamburgerMenu size={26} /></span>
            </SheetTrigger>
            <SheetContent>
                <ul className='flex flex-col gap-6'>
                    <SheetClose asChild>
                        <Link href={'/'} className='font-[500] transition-all duration-300 textSecondary hover:primaryColor'>
                            Home
                        </Link>
                    </SheetClose>

                    <SheetClose asChild>
                        <Link href={'#about-us'} className='font-[500] transition-all duration-300 textSecondary hover:primaryColor'>
                            About Us
                        </Link>
                    </SheetClose>

                    <SheetClose asChild>
                        <Link href={'#our-fruits'} className='font-[500] transition-all duration-300 textSecondary hover:primaryColor'>
                            Our Fruits
                        </Link>
                    </SheetClose>

                    <SheetClose asChild>
                        <Link href={'#gallery'} className='font-[500] transition-all duration-300 textSecondary hover:primaryColor'>
                            Gallery
                        </Link>
                    </SheetClose>

                    <SheetClose asChild>
                        <Link href={'#contact-us'} className='font-[500] transition-all duration-300 textSecondary hover:primaryColor'>
                            Contact Us
                        </Link>
                    </SheetClose>
                </ul>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav
