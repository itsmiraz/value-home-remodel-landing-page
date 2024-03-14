import React, { useState } from 'react'
import { SecondaryButton } from './Button'
import Image from 'next/image'
import Link from 'next/link'
import Menu from '../../assets/icons/menu'
import Close from '../../assets/icons/close'
import Modal from './modal'

const Header = () => {
    const [Open, setOpen] = useState(false);



    return (
        <>
            <nav className='flex sticky top-0 bg-white z-50 px-2 md:px-20 py-4 justify-between items-center'>
                <div className='relative z-50'>
                    <Image width={150} height={53} className='md:w-[150px] w-[100px]' src={'https://res.cloudinary.com/djnlyzsmv/image/upload/v1709729602/resdium-assets/value%20home%20remodeling%20website%20assests/image_44_mfk4cc.webp'} alt='value-home-remodel-logo' />
                </div>
                <ul className={`md:static bg-white flex md:space-y-0 space-y-2 left-0 pb-4 pt-4 transition-all ease-in-out duration-300 md:flex-row flex-col justify-center items-center md:w-fit w-full z-40 absolute ${Open ? 'top-14' : '-top-[300px]'} md:flex  gap-x-8 font-medium text-sm`}>
                    <li><Link href='#home'><p onClick={() => setOpen(!Open)}>HOME</p></Link></li>
                    <li><Link href='#about'><p onClick={() => setOpen(!Open)}>ABOUT</p></Link></li>
                    <li><Link href='#service'> <p onClick={() => setOpen(!Open)}>SERVICES</p></Link></li>
                    <li><Link href='#testimonial'><p onClick={() => setOpen(!Open)}>TESTIMONIAL</p></Link></li>

                </ul>
                <div className='flex relative z-50 items-center gap-x-4'>
                    <div>
                        <Link href='#cta'>

                            <SecondaryButton > GET A FREE QUOTE</SecondaryButton>
                        </Link>
                    </div>
                    <div className='md:hidden size-6 block'>
                        <button className='size-6' onClick={() => setOpen(!Open)}>
                            {
                                Open ?
                                    <Close />
                                    :
                                    <Menu />
                            }
                        </button>
                    </div>
                </div>

            </nav>

        </>
    )
}

export default Header