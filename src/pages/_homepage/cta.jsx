import { PrimaryButton } from '@/components/ui/Button'
import React from 'react'

const CTA = () => {
    return (
        <div>

            <div className='max-w-[1100px] bg-[#bae0ff] rounded-lg flex md:flex-row flex-col gap-10 md:items-center justify-start items-start  md:justify-between p-10 mx-auto'>

                <div className=''>
                    <h2 className='h2-title text-white'>  Get Free Estimates!</h2>
                    <p className='pt-4 text-gray-700 text-sm'>
                        When you install a roof with Weather Shield Structures,  you’ll receive a <br /> LIFETIME WARRANTY on your roofing materials backed by one of the largest <br /> roofing material manufacturers in the world.
                    </p>
                </div>
                <div>
                    <PrimaryButton>GET MY FREE ESTIMATES</PrimaryButton>
                </div>
            </div>


        </div>
    )
}

export default CTA