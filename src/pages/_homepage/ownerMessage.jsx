import Image from 'next/image'
import React from 'react'

const OwnerMessage = () => {
    return (
        <div className='px-4 md:px-20 py-20 place-items-center grid grid-cols-5 gap-6'>
            <div className='col-span-2'>
                <Image width={449} height={454} src={'https://res.cloudinary.com/djnlyzsmv/image/upload/v1710044560/resdium-assets/value%20home%20remodeling%20website%20assests/founder_svkeem.webp'} alt='' />
            </div>
            <div className='col-span-3 pr-20'>
                <h2 className='h2-title'>Your Best Interest at Heart</h2>
                <p className='text-xl text-primary'>Jack Nabizada</p>
                <p className='text-lg text-primary'>
                    Owner & Founder
                </p>
                <p className='py-8 desc w-fit'>
                    My vision is to build a remodeling company - that will always have your best interest at heart. When you decide to work with us - you aren’t simply working with someone looking to make a buck, you’re working with someone who’s looking to make a difference.
                </p>
                <p className='py-4 desc w-fit'>
                    My mission is to be the remodeling company consisting of a winning team of high integrity, self starting, problems solvers - in it to the end.
                </p>
            </div>
        </div>
    )
}

export default OwnerMessage