import Image from 'next/image'
import React from 'react'
import AnimeGirl from '../../assets/animegirl.png'

const About = () => {
    return (
        <div className='w-full h-screen flex justify-between items-center relative'>
            <div className='w-1/2 opacity-90 '>
                <Image src={AnimeGirl} width={300} height={300} />
            </div>
           
            <div className='p-12'>
                <h1 className='text-9xl font-fancy2 bg-gradient-to-r from-blue-600 via-orange-300 to-indigo-400  text-transparent bg-clip-text text-center'>About Me </h1>
                <p className='text-3xl text-slate-300  text-center uppercase font-fancy3'>Boy who loves to make website and passionate about desinging <br /> <span className='text-3xl'>hobby - watching Anime
                </span></p>
            </div>

        </div>
    )
}

export default About