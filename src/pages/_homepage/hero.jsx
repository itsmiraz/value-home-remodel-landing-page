/* eslint-disable react/no-unescaped-entities */
import { PrimaryButton } from '@/components/ui/Button'
import Image from 'next/image'
import React from 'react'
import Balancer from 'react-wrap-balancer'

const Hero = () => {
    return (
        <div className='flex justify-between px-4 md:px-20  grid-cols-2 gap-10 py-20'>
            <div className='space-y-6 w-[50%]'>
                <p className='bg-third text-white px-4 py-1 rounded w-fit'>
                    Top Rated Local Roofer In Bolingbrook, Illinois.
                </p>
                <h1 className='h1-title'>
                    Maintain your home's appeal and function with expert remodeling!

                </h1>
                <p className='sub-heading '>
                    <Balancer>
                        Hiring a remodeler is tough. We make it easy. Get a free no-hassle storm damage consultation today!
                    </Balancer>
                </p>
                <PrimaryButton>GET A FREE QUOTE</PrimaryButton>
                <div className='flex flex-wrap gap-x-10 mt-6'>
                    <Image className=' drop-shadow-xl' src={'https://res.cloudinary.com/djnlyzsmv/image/upload/v1709731261/resdium-assets/value%20home%20remodeling%20website%20assests/image_45_lgt6wl.webp'} alt='facebook-review' width={200} height={60} />
                    <Image className='drop-shadow-xl' src={'https://res.cloudinary.com/djnlyzsmv/image/upload/v1709731261/resdium-assets/value%20home%20remodeling%20website%20assests/image_46_yo1e6j.webp'} alt='facebook-review' width={200} height={60} />
                </div>
            </div>
            <div className='relative'>

                <Image src={'https://res.cloudinary.com/djnlyzsmv/image/upload/v1709729623/resdium-assets/value%20home%20remodeling%20website%20assests/hero-img-1_n1dyr6.webp'} width={507} height={428} alt='hero-main-img ' />
                <Image className='absolute -bottom-[40%] -left-[45%]' src={'https://res.cloudinary.com/djnlyzsmv/image/upload/v1709729603/resdium-assets/value%20home%20remodeling%20website%20assests/hero-img-2_hsrwzp.webp'} width={587} height={338} alt='hero-main-img ' />
            </div>

        </div>
    )
}

export default Hero