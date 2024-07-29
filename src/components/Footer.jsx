import React from 'react'

export default function Footer() {
  return (
    <div className="container flex justify-between pt-7 pb-7 " style={{backgroundColor:'#EFF7FD'}}>
  <div className="logo-and-text flex pd h-full md:w-1/2">  <div className="logo w-1/5 pl-5">
      <img src="https://tinywow.com/v2/img/box_logo.svg" alt="TinyWow Logo"/>
    </div>
    <div className="company-info w-4/5 ml-5 text-sm font-medium txt-color pt-1">  TinyWow is a <span className="mybox">Box20</span> Media Company
    </div>
  </div>
  <div className="copyright w-full md:w-1/4 pl-8 text-sm font-medium txt-color">  @ 2024 TinyWow. All rights reserved
  </div>
</div>

  )
}
