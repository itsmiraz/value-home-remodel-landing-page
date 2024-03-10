/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import React from 'react'
import { PrimaryButton } from '../../components/ui/Button'

const WhychooseUs = () => {
    return (
        <div className='px-4 md:px-20 grid  grid-cols-1 md:grid-cols-2 gap-14'>

            <div className='flex justify-between flex-col'>
                <h2 className="h2-title">Why Choose Us?</h2>
                <p className='desc py-6'>
                    With 13 years of licensed expertise in kitchen, bathroom, and home remodeling, we understand the keys to ensuring your project's success. Transforming your Houston home shouldn't be a stressful endeavor. When you entrust someone with your remodeling project, you should anticipate them to
                </p>
                <ul className='font-medium space-y-2 py-7 text-xl '>
                    <li>
                        <p>Over 15 years of experience</p>
                    </li>
                    <li>
                        <p>Free evaluation </p>
                    </li>
                    <li>
                        <p>Transparent</p>
                    </li>
                    <li>
                        <p>Insurance claim experts</p>
                    </li>
                </ul>
                <div className='pt-7'>
                    <PrimaryButton>
                        GET STARTED
                    </PrimaryButton>
                </div>
            </div>
            <div className='md:order-last order-first'>
                <Image width={616} height={501} src={'https://res.cloudinary.com/djnlyzsmv/image/upload/v1710044560/resdium-assets/value%20home%20remodeling%20website%20assests/why-choose-us_jykykm.webp'} alt='why-choose-us' />
            </div>
        </div>
    )
}

export default WhychooseUs