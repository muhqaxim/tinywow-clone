import React from 'react'

export default function Support() {
  return (
    <>
    <div className='w-full bg-custom-gradient flex flex-col lg:flex-row justify-between' style={{ minHeight: '100vh' }}>
    <div className="left w-full lg:w-1/2 h-full flex items-center justify-center p-4">
        <div className="center w-full lg:w-11/12 h-full lg:h-4/5 flex flex-col items-center lg:items-start justify-center lg:justify-start mr-4">
            <div className="above w-full lg:w-11/12 h-auto lg:h-20 mt-10 lg:mt-28">
                <h1 className='font-bold text-white text-3xl lg:text-5xl leading-tight'>Support TinyWow</h1>
            </div>
            <div className='middle w-full lg:w-11/12 h-auto lg:h-32 mt-4 lg:mt-0'>
                <p className='text-base text-white leading-relaxed'>
                    TinyWow is 100% free to use (even OCR), with no pesky <br className='hidden lg:block' />registration required. For our most loyal supporters, a <br className='hidden lg:block' />$5.99/month plan unlocks an ad and captcha free <br className='hidden lg:block' />experience.
                </p>
            </div>
            <div className='below w-full lg:w-11/12 h-auto lg:h-20 mt-4 lg:mt-0'>
                <button className='mt-3 bg-white rounded-lg font-semibold text-sm lg:text-base' style={{padding:'14px 23px', color:'#1A8FE3'}}>Support Us</button>
            </div>
        </div>
    </div>

    <div className="right w-full lg:w-1/2 h-full flex justify-center items-center p-4">
        <img src="man.webp" alt="" className='w-full h-auto lg:w-auto lg:h-full object-cover' />
    </div>
</div>

    </>
  )
}
