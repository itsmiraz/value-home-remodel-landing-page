/* eslint-disable react/no-unescaped-entities */
import { PrimaryButton } from '@/components/ui/Button'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Balancer from 'react-wrap-balancer'
import { slideAnimation } from '@/lib/motion';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Hero = () => {

    const [sectionRef, inView] = useInView({
        triggerOnce: true, // Trigger animation once when it enters the viewport
        threshold: 0.2, // Adjust this threshold as needed
    });

    // State to control whether animations should play
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        if (inView) {
            setAnimate(true);
        }
    }, [inView]);

    return (
        <div id='home' ref={sectionRef} className='flex justify-between px-4 md:px-20  grid-cols-2 gap-10 pt-32 pb-32'>
            <motion.div
                initial='initial'
                animate={animate ? 'animate' : 'initial'}
                exit='exit'
                variants={slideAnimation('left')}
                className='space-y-6 w-[50%]'>
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
                <div className='flex flex-wrap gap-x-10 pt-10'>
                    <motion.div
                        initial='initial'
                        animate={animate ? 'animate' : 'initial'}
                        exit='exit'
                        variants={slideAnimation('up')}>
                        <Image className=' drop-shadow-xl' src={'https://res.cloudinary.com/djnlyzsmv/image/upload/v1709731261/resdium-assets/value%20home%20remodeling%20website%20assests/image_45_lgt6wl.webp'} alt='facebook-review' width={200} height={60} />
                    </motion.div>
                    <motion.div
                        initial='initial'
                        animate={animate ? 'animate' : 'initial'}
                        exit='exit'
                        variants={slideAnimation('up')}>
                        <Image className='drop-shadow-xl' src={'https://res.cloudinary.com/djnlyzsmv/image/upload/v1709731261/resdium-assets/value%20home%20remodeling%20website%20assests/image_46_yo1e6j.webp'} alt='facebook-review' width={200} height={60} />
                    </motion.div>
                </div>
            </motion.div>
            <div className='relative'>
                <motion.div
                    initial='initial'
                    animate={animate ? 'animate' : 'initial'}
                    exit='exit'
                    variants={slideAnimation('right')}>
                    <Image src={'https://res.cloudinary.com/djnlyzsmv/image/upload/v1709729623/resdium-assets/value%20home%20remodeling%20website%20assests/hero-img-1_n1dyr6.webp'} width={507} height={428} alt='hero-main-img ' />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 500 }}
                    animate={{ opacity: animate ? 1 : 0, y: 150 }}
                    transition={{ duration: 0.4 }}
                    exit='exit'
                >
                    <Image className='absolute w-full bottom-0 -left-[45%]' src={'https://res.cloudinary.com/djnlyzsmv/image/upload/v1709729603/resdium-assets/value%20home%20remodeling%20website%20assests/hero-img-2_hsrwzp.webp'} width={587} height={338} alt='hero-main-img ' />
                </motion.div>
            </div>

        </div>
    )
}

export default Hero