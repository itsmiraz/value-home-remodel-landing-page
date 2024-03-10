import Image from 'next/image'
import React from 'react'
import Balancer from 'react-wrap-balancer'
import Twitter from '../../assets/icons/twitter'
import Insta from '../../assets/icons/insta'
import Yt from '../../assets/icons/yt'
import Location from '../../assets/icons/location'
import Phone from '../../assets/icons/phone'
import Link from 'next/link'

const Footer = () => {
    return (
        <div className='bg-primary px-4 py-6 md:px-20'>

            <div className='grid grid-cols-6 gap-10'>
                <div className='col-span-6 md:col-span-3 space-y-4'>
                    <Image src={'https://res.cloudinary.com/djnlyzsmv/image/upload/v1710052988/resdium-assets/value%20home%20remodeling%20website%20assests/logo-white-version_g5ptcl.png'} alt='logo' width={250} height={89.74} />
                    <p className='text-white'>
                        <Balancer>
                            We are the roofing experts you should call when <br /> you’re looking for reliable roof services in Humble,  <br /> Texas and surrounding areas.
                        </Balancer>
                    </p>
                    <div className='flex gap-x-3'>
                        <Twitter />
                        <Insta />
                        <Yt />
                    </div>
                </div>
                <div className=' col-span-3 md:col-span-1'>
                    <h3 className='text-lg mt-10 mb-6 font-medium text-white'>
                        Navigation
                    </h3>
                    <ul className='text-sm text-gray-300 space-y-4'>
                        <li>
                            <Link href='#home'>    <p>Home</p></Link>
                        </li>
                        <li>
                            <Link href='#about'>  <p>About</p></Link>
                        </li>
                        <li>
                            <Link href='#service'><p>Services</p></Link>
                        </li>
                        <li>
                            <Link href='#whoweServe'>  <p>Who We Servce</p></Link>
                        </li>
                    </ul>
                </div>
                <div className=' col-span-6 md:col-span-2 '>
                    <h3 className='text-lg mt-10 mb-6 font-medium text-white'>
                        Contact Us
                    </h3>
                    <p className='text-gray-300'>
                        Our Support and Sales team is available 24 /7 to answer your queries
                    </p>
                    <div className='flex my-4 text-gray-300 items-center gap-x-2'>
                        <Location />
                        <p>
                            123 Main St, Suite 500, New York, NY 10001
                        </p>
                    </div>
                    <div className='flex text-gray-300 items-center gap-x-2'>
                        <Phone />
                        <p>
                            +1 (333) 000-0000
                        </p>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Footer