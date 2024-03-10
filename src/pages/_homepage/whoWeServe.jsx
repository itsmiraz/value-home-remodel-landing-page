import Image from 'next/image'
import React from 'react'

const WhoWeServe = () => {
    const RESIDENTIALRemodelingService = [
        'Emergency Remodeling',
        'Home Remodeling',
        'Bathroom Remodeling',
        'Kitchen Remodeling',
        'Storm Damage',
        'Electricity',
        'Flooring',
        'Painting',
        'Granites',
        'Carpentry',
        'Glass'
    ]


    const COMMERCIALRemodelingService = [
        'Office Remodeling',
        'Industrial Remodeling',
        'Agency Remodeling',
        'Remodeling Coatings',
        'Low-Slope Remodeling',
        'Roll Remodeling',
        'Refine Remodeling',
        'Flat Remodeling'
    ]

    return (
        <div id='whoweServe' className='px-4 md:px-20 py-32'>
            <h2 className="h2-title">Who We Serve</h2>
            <div className='py-4 grid grid-cols-2 gap-10'>
                <div className='bg-[#00284E] rounded-md p-10'>
                    <div className='flex  gap-x-4 items-center'>
                        <Image width={80} height={80} src={'https://res.cloudinary.com/djnlyzsmv/image/upload/v1710044560/resdium-assets/value%20home%20remodeling%20website%20assests/RESIDENTIAL_k2ewgu.webp'} alt='' />
                        <h3 className='text-[28px] text-white uppercase font-semibold'>
                            RESIDENTIAL Remodeling
                        </h3>
                    </div>
                    <div className='flex justify-between px-8 pt-6'>
                        <ul className='text-white list-disc space-y-2'>
                            {RESIDENTIALRemodelingService.slice(0, 5).map((item, i) => <li key={i}> <p >{item}</p></li>)}
                        </ul>
                        <ul className='text-white  list-disc space-y-2'>
                            {RESIDENTIALRemodelingService.slice(5, 12).map((item, i) => <li key={i}> <p >{item}</p></li>)}
                        </ul>
                    </div>
                </div>
                <div className='bg-[#00284E] rounded-md p-10'>
                    <div className='flex  gap-x-4 items-center'>
                        <Image width={80} height={80} src={'https://res.cloudinary.com/djnlyzsmv/image/upload/v1710044560/resdium-assets/value%20home%20remodeling%20website%20assests/COMMERCIAL_gslcrq.webp'} alt='' />
                        <h3 className='text-[28px] text-white uppercase font-semibold'>
                            COMMERCIAL Remodeling
                        </h3>
                    </div>
                    <div className='flex justify-between px-8 pt-6'>
                        <ul className='text-white list-disc space-y-2'>
                            {COMMERCIALRemodelingService.slice(0, 4).map((item, i) => <li key={i}> <p >{item}</p></li>)}
                        </ul>
                        <ul className='text-white  list-disc space-y-2'>
                            {COMMERCIALRemodelingService.slice(4, 9).map((item, i) => <li key={i}> <p >{item}</p></li>)}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhoWeServe