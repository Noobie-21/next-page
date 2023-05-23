import Image from 'next/image'
import React from 'react'
import Insta from '../../assets/insta.png'
import Twitter from '../../assets/twiter.png'
import Git from '../../assets/git.png'
import Cutie from '../../assets/cutie.png'
import Anime from '../../assets/anime.png'



const SocialSection = () => {
    return (
        <div className=' w-full h-screen relative ' >
            <div className='absolute  bottom-0 right-0 -z-20 opacity-60'>
                <Image src={Anime} width={300} height={300} />    
            </div>
            <div className='   '>
                <h1 className='social bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400  text-transparent bg-clip-text text-center text-[10rem]  font-fancy2 uppercase'>Social <span className=' '>Media</span> </h1>
                <div className='cutiepie absolute opacity-70 bottom-0 -left-[4.5rem]  overflow-hidden rounded-full  '>
                    <Image src={Cutie} width={250} height={250} />
                </div>
            </div>

            <div className=' flex justify-between p-20  items-center '>

                <div>
                    <div className='cursor-pointer   border border-gray-600  p-3 rounded-full cutiepie'>
                        <Image className='hover:-translate-y-2 transition-all duration-100' src={Insta} width={200} height={200} />
                    </div>
                </div>
                <div>
                    <div className='cursor-pointer  border border-gray-600  p-3 rounded-full cutiepie'>
                        <Image className=' hover:-translate-y-2 transition-all duration-100' src={Twitter} width={200} height={200} />
                    </div>
                </div>
                <div>
                    <div className=' cursor-pointer  border border-gray-600 p-3 rounded-full cutiepie'>
                        <Image className=' invert hover:-translate-y-2 transition-all duration-100' src={Git} width={200} height={200} />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SocialSection