'use client'
import React, { useState } from 'react'
import './index.css'
import Link from 'next/link'
import { CiSearch } from "react-icons/ci";
import { CiMenuBurger } from "react-icons/ci";
import { IoNotificationsOutline } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { RiHome3Line } from "react-icons/ri";

const Nav = () => {

let mockupNoti = [1,2,3,4,5,6,7,8,9];
let [isOpenedSideBar,setIsOpenedSideBar] = useState<boolean>(false);
let [isOpenedSrhInput,setIsOpenedSrhInput] = useState<boolean>(false);

  return (
    <>
    <div className='nv bg-main shadow-md'>
       <div className="nv-f-ctn">
        <CiMenuBurger onClick={()=>{setIsOpenedSideBar(true)}} className='nv-icn bcu'/>
       <div className="nv-logo logo-f fontcl2">Superior</div>
        <input type="text" placeholder='Search' className="inp nv-srh fontcl sec-f" />
       </div>
         <div className="nv-info-ctn">
         <CiSearch onClick={()=> setIsOpenedSrhInput(true)} className='nv-icn bcu nv-srh-icn-mb-act'/>
<div className="nv-noti-ctn">
<IoNotificationsOutline className='nv-icn bcu'/>
{
  mockupNoti.length !== 0 &&
   <div className="nv-noti-int-ctn bg-sec">
  <p className="nv-noti-int fontclD">{mockupNoti.length}</p>
</div>
}
</div>
            <Link href='/profile' >
                <img src="https://i.pinimg.com/736x/b5/52/3d/b5523de3da643ade0e3f1a85b500738f.jpg" alt="" className="nv-pfp pic mega-trans" />
            </Link>
        </div>
    </div>
    <div className={`${isOpenedSrhInput ? "nv-srh-mb" : "nv-srh-mb-closed"} bg-main mega-trans`} >
    <input type="text" placeholder='Search' className="inp nv-srh-inp-mb fontcl sec-f" />
    <CiSearch className='fontclH trans bcu nv-srh-icn-mb'/>
    <RxCross1 onClick={()=>setIsOpenedSrhInput(false)} className='nv-icn'/>
    </div>
    <div onClick={()=>setIsOpenedSideBar(false)} className={isOpenedSideBar ? 'nv-sidebar-layer' : ''}>
    <div className={`${isOpenedSideBar ? 'nv-sidebar' : 'nv-sidebar-closed'} bg-main trans`}>
    <div className="nv-sidebar-title-ctn">
        <RxCross1 onClick={()=>{setIsOpenedSideBar(false)}} className='nv-icn bcu'/>
        <div className="nv-logo logo-f fontcl2">Superior</div>
    </div>
    <div className="nv-sidebar-info-ctn">
        <Link className="nv-sidebar-info main-f trans fontclH" href='/'>
        <RiHome3Line  className='nv-icn '/>
        <p className="nv-sb-info ">Home</p>
        </Link>
    </div>
    </div>
    </div>
    </>
  )
}

export default Nav