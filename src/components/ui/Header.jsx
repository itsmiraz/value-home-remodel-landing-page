import React from 'react'
import { SecondaryButton } from './Button'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
    return (
        <nav className='flex sticky top-0 bg-white z-50 px-20 py-4 justify-between items-center'>
            <div>
                <Image width={150} height={53} className='' src={'https://res.cloudinary.com/djnlyzsmv/image/upload/v1709729602/resdium-assets/value%20home%20remodeling%20website%20assests/image_44_mfk4cc.webp'} alt='value-home-remodel-logo' />
            </div>
            <ul className='flex gap-x-8 font-medium text-sm'>
                <li><Link href='#home'><p>HOME</p></Link></li>
                <li><Link href='#about'><p>ABOUT</p></Link></li>
                <li><Link href='#service'> <p>SERVICES</p></Link></li>
                <li><Link href='#testimonial'><p>TESTIMONIAL</p></Link></li>

            </ul>
            <SecondaryButton>GET A FREE QUOTE</SecondaryButton>
        </nav>
    )
}

export default Header