import React from 'react'
import { SecondaryButton } from './Button'
import Image from 'next/image'

const Header = () => {
    return (
        <nav className='flex px-20 py-4 justify-between items-center'>
            <div>
                <Image width={150} height={53} className='' src={'https://res.cloudinary.com/djnlyzsmv/image/upload/v1709729602/resdium-assets/value%20home%20remodeling%20website%20assests/image_44_mfk4cc.webp'} alt='value-home-remodel-logo' />
            </div>
            <ul className='flex gap-x-4 font-medium text-sm'>
                <li><p>HOME</p></li>
                <li><p>ABOUT</p></li>
                <li><p>SERVICES</p></li>
                <li><p>TESTIMONIAL</p></li>

            </ul>
            <SecondaryButton>GET A FREE QUOTE</SecondaryButton>
        </nav>
    )
}

export default Header