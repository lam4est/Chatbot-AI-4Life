import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'

const Main = () => {
  return (
    <div className='main'>
        <div className="nav">
            <p> Chat Kid</p>
            <img src={assets.user_icon} alt="" />
        </div>

        <div className="main_container">
            <div className="greet">
                <p><span>How are you ban co khoe khong</span></p>
            </div>
        </div>

        <div className="main_bottom">
            <div className="search_box">
                <input type="text" placeholder='May muon hoi cai gi?' />
                <div>
                    <img src={assets.gallery_icon} alt="" />
                    <img src={assets.mic_icon} alt="" />
                    <img src={assets.send_icon} alt="" />
                </div>
            </div>

            <p className="bottom_info">
                Cai web nay tao ra de phat hien chung tram cam o cac em nho ^^
            </p>
        </div>
    </div>
  )
}

export default Main