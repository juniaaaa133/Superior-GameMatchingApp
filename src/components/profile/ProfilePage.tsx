import React from 'react'
import './index.css'

const ProfilePage = () => {
  return (
    <div className='profile-main '>
        <div className="pro-info-ctn bg-org">
            <div className="pro-pfp-sec">
            <img src="https://i.pinimg.com/564x/e5/35/e0/e535e09075ca596f228b2a9e88620f95.jpg" alt="" className="pic pro-cv-img" />
            <img src="https://i.pinimg.com/564x/94/87/80/9487808908108c84b2db28fd54f3e013.jpg" alt="" className="pic pro-pfp" />
            </div>
            <div className="pro-info-sec">
                <h2 className="pro-name fontcl sec-f text-[20px] font-[600]">Rein Ogga Myo</h2>
                <p className="pro-headline fontcl3 sec-f text-[14px]">Roamer of Mobile Legends Bang Bang</p>
                <p className="pro-locate fontcl6 sec-f text-[13px]">South Okkalapa Township ,Yangon , Myanmar</p>
            </div>
        </div>
        <div className="pro-ach-ctn"></div>
        
    </div>
  )
}

export default ProfilePage