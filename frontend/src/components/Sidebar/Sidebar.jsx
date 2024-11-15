import React, { useState } from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";

const Sidebar = () => {

  const [extended, setExtended] = useState(false)

  return (
    <div className={`sidebar ${extended ? "" : "collapsed"}`}>
      <div className="top">
        <img onClick={() => setExtended(prev => !prev)} className="menu" src={assets.menu_icon} alt="" />

        <div className="new_chat">
          <img src={assets.plus_icon} alt="" />
          {extended ? <p>New Chat</p> : null}
        </div>

        <div className="search">
          <img src={assets.search_icon} alt="" />
          {extended ? <p>Search</p> : null}
        </div>

        {extended ?
          <div className="recent">
            <p className="recent_title">Recent</p>
            <div className="recent_entry">
              <img src={assets.message_icon} alt="" />
              <p>What is react...</p>
              <div className="icons">
                <img src={assets.delete_icon} alt="Delete" />
              </div>
            </div>

            <div className="recent_entry">
              <img src={assets.message_icon} alt="" />
              <p>Hom nay an gi</p>
              <div className="icons">
                <img src={assets.delete_icon} alt="Delete" />
              </div>
            </div>

            <div className="recent_entry">
              <img src={assets.message_icon} alt="" />
              <p>Mai diem danh cho tao voi nhe</p>
              <div className="icons">
                <img src={assets.delete_icon} alt="Delete" />
              </div>
            </div>
          </div> : null}
      </div>

      <dip className="bottom">
        <div className="bottem_item recent_entry">
          <img src={assets.question_icon} alt="" />
          {extended ? <p>Help</p> : null}
        </div>

        <div className="bottem_item recent_entry">
          <img src={assets.setting_icon} alt="" />
          {extended ? <p>Setting</p> : null}
        </div>
      </dip>
    </div>
  );
};

export default Sidebar;
