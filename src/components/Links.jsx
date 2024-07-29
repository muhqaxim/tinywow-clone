import React from 'react'


export default function Links() {
  return (
    <div className='w-full  grid grid-cols-3  p-5 mt-4'>
        <div className=''>
            <div className="upper w-full h-12 "><img src="https://tinywow.com/v2/img/box_logo.svg" alt="" srcset="" /></div>
            <div className="lower w-full h-56 " style={{color:'#828586', fontSize:'14px'}}>TinyWow provides free online conversion, pdf, and <br /> other handy tools to help you solve problems of all <br /> types. All files both processed and unprocessed are <br /> deleted after 1 hour</div>
        </div>
        <div className='grid gap-4 lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-1 col-span-2'>
                <div className='ml-6'>
                    <p className='font-bold text-lg' style={{color:'#525658'}}>Navigate</p>
                    <ul className='pt-2'>
                        <li><a href="/"> Home </a></li>
                        <li><a href="/"> Privacy <br /> Policy </a></li>
                        <li><a href="/"> TOS  </a></li>
                        <li><a href="/"> Contact </a></li>
                    </ul>
                </div>
                <div className='ml-6'>
                <p className='font-bold text-xl' style={{color:'#525658'}}>Tools</p>
                    <ul className='pt-2'>
                        <li><a href="/"> Easy Writer </a></li>
                        <li><a href="/"> Content Improver </a></li>
                        <li><a href="/"> Paragraph Writer  </a></li>
                        <li><a href="/"> AI Image Generator </a></li>
                    </ul>
                </div>
                <div className=' ml-6'>
                <p className='font-bold text-xl'></p>
                    <ul className='pt-9'>
                        <li><a href="/"> Remove Background From Image </a></li>
                        <li><a href="/"> Merge PDF </a></li>
                        <li><a href="/"> Edit PDF  </a></li>
                        <li><a href="/"> PDF to JPG </a></li>
                    </ul>
                </div>
                <div className='ml-6'>
                <ul className='pt-9'>
                        <li><a href="/"> JPG to PDF </a></li>
                        <li><a href="/"> Compress PDF </a></li>
                        <li><a href="/"> Paragraph Completer  </a></li>
                        <li><a href="/"> UpScale Image </a></li>
                </ul>
                </div>
                <div className='ml-6'>
                <ul className='pt-9'>
                        <li><a href="/"> Change Background of Photo </a></li>
                        <li><a href="/"> Image to Text  </a></li>
                        <li><a href="/"> Split PDF  </a></li>
                        <li><a href="/"> Others </a></li>
                </ul>
                </div>
        </div>
        
      
    </div>
  )
}
