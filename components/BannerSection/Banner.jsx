import Image from 'next/image'
import React from 'react'
import img2 from '../../assets/pngwing.com.png'
import Noob from '../../assets/noob.png'
import Bubble from '../../assets/bubble.png'
import animeboy from '../../assets/animeboy.png'

const Banner = () => {
    return (
        <div className='text-white w-full h-[80vh] p-2 '>
            <div className='absolute w-full h-40 top-0 left-0 -z-20 opacity-10 '>
                <Image src={img2} width={1000} height={1000} className='animate-pulse' />
            </div>

            <div className='flex mx-12 items-center justify-between relative '>
                <div className='w-1/2 p-10 '>
                    <h1 className='text-2xl '> <span className='text-8xl bg-gradient-to-r from-pink-400 via-green-300 to-red-200  text-transparent bg-clip-text font-bold'>NOOB</span></h1>
                    <h2 className='text-6xl   '>The <span className='text-indigo-400 font-bold font-mono'>Website Desinger</span> and <span className=' text-blue-300 font-bold font-mono'>Passionate Coder</span></h2>

                </div>
                <div className='  '>
                    <div className='absolute -top-28 -right-10 opacity-25 -z-40'>
                        <Image src={Noob} width={500} height={500} />
                    </div>
                    <div className='absolute -bottom-64 -right-10 opacity-30 -z-30 '>
                        <Image src={Bubble} width={500} height={500} className='' />
                    </div>

                    <Image className=' ' src={animeboy} width={400} height={400} />
                </div>
            </div>
        </div>
    )
}

export default Banner