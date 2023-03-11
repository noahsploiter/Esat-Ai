import Link from 'next/link'
import React from 'react'
import fire_1f525 from '../public/fire_1f525.gif'


function Header() {
    return (
        <div>

            <div className='flex flex-col items-center justify-center mt-6'>
                <img src="/fire_1f525.gif" width={200} height={200} />
                <p className='text-2xl text-red-600 mt-6 mb-6'>እሳትAI</p>
            </div>
            <header className='group p-5 bg-transparent flex items-center justify-center flex-col '>
                <div >

                    <Link className='px-2 py-2 bg-white text-red-500 rounded-lg hover:border hover:border-red-600 border border-red-200 hover:shadow-lg transition duration-200 ease-in-out'
                        href="/gpt"> ChatGPT
                    </Link>
                </div>
                <p className='p-2 group-hover:opacity-100 group-focus:opacity-100 opacity-0 group-active:opacity-100'> AI chatbot that answers any questions</p>

            </header>
            <header className='group bg-transparent flex items-center justify-center flex-col '>
                <div  >
                    <Link className='mx-4 px-2 py-2 bg-white text-red-500 rounded-lg hover:border hover:border-red-600 border border-red-200 hover:shadow-lg transition duration-200 ease-in-out'
                        href="/dalle">DALL·E
                    </Link>
                </div>
                <p className='p-2 group-hover:opacity-100 group-focus:opacity-100 opacity-0 group-active:opacity-100'>AI image generator based on textual inputs</p>
            </header>
        </div>
    )
}

export default Header
