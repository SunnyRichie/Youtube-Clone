import React, { useState } from "react";
import "./Navbar.css";
import menu_icon from "../../assets/menu.png";
import logo from "../../assets/ylogo.png";
import search_icon from "../../assets/search.png";
import upload_icon from '../../assets/upload.png';
import more_icon from '../../assets/more.png';
import notification_icon from '../../assets/notification.png';
import profile_icon from '../../assets/richie.jpg';
import voice_search from '../../assets/voice-search.png';
import { Link } from "react-router-dom";

const Navbar = ({ setSidebar, onSearch }) => {
  const [searchInput, setSearchInput] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearch(searchInput);
  };

  return (
    <nav className="flex-div">
      <div className="nav-left flex-div">
        <img className="menu-icon" onClick={() => setSidebar(prev => !prev)} src={menu_icon} alt="" />
        <Link to='/'><img className="logo" src={logo} alt="" /></Link>
      </div>

      <div className="nav-middle flex-div">
        <div className="search-box flex-div">
          <form onSubmit={handleSearchSubmit} className="flex-div">
            <input 
              type="text" 
              placeholder="search" 
              value={searchInput} 
              onChange={(e) => setSearchInput(e.target.value)} 
            />
            <button type="submit" className="search-button">
              <img src={search_icon} alt="" />
            </button>
          </form>
        </div>
        <div className="voice">
          <img className="voice-search" src={voice_search} alt="" />
        </div>
      </div>

      <div className="nav-right flex-div">
        <img src={upload_icon} alt="" />
        <img src={more_icon} alt="" />
        <img src={notification_icon} alt="" />
        <img src={profile_icon} className="user-icon" alt="" />
      </div>
    </nav>
  );
};

export default Navbar;
