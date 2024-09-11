import React, { useState } from 'react';
import './Sidebar.css';
import menuIcon from "../../assets/menu.png";
// import menuIcon from '../../assets/menu-icon.png';  // Add an icon for the menu
import home from '../../assets/home.png';
import game_icon from '../../assets/game_icon.png';
import automobiles from '../../assets/automobiles.png';
import sports from '../../assets/sports.png';
import entertainment from '../../assets/entertainment.png';
import tech from '../../assets/tech.png';
import music from '../../assets/music.png';
import blogs from '../../assets/blogs.png';
import news from '../../assets/news.png';
import richie from '../../assets/richie.jpg';
import badmus from '../../assets/badmus.jpg';
import ife from '../../assets/ife.jpg';
import sanwo from '../../assets/sanwo.jpg';
import sile from '../../assets/sile.jpg';

const Sidebar = ({ sidebar, category, setCategory }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="menu-icon" onClick={toggleSidebar}>
        <img src={menuIcon} alt="menu" />
      </div>
      <div className={`sidebar ${isOpen ? 'open' : ''} ${sidebar ? '' : 'small-sidebar'}`}>
        <div className="shortcut-links">
          <div className={`side-link ${category === 0 ? 'active' : ''}`} onClick={() => setCategory(0)}>
            <img src={home} alt="Home" /> <p>Home</p>
          </div>
          <div className={`side-link ${category === 20 ? 'active' : ''}`} onClick={() => setCategory(20)}>
            <img src={game_icon} alt="Gaming" /> <p>Gaming</p>
          </div>
          <div className={`side-link ${category === 2 ? 'active' : ''}`} onClick={() => setCategory(2)}>
            <img src={automobiles} alt="Automobiles" /> <p>Automobiles</p>
          </div>
          <div className={`side-link ${category === 17 ? 'active' : ''}`} onClick={() => setCategory(17)}>
            <img src={sports} alt="Sports" /> <p>Sports</p>
          </div>
          <div className={`side-link ${category === 24 ? 'active' : ''}`} onClick={() => setCategory(24)}>
            <img src={entertainment} alt="Entertainment" /> <p>Entertainment</p>
          </div>
          <div className={`side-link ${category === 28 ? 'active' : ''}`} onClick={() => setCategory(28)}>
            <img src={tech} alt="Technology" /> <p>Technology</p>
          </div>
          <div className={`side-link ${category === 10 ? 'active' : ''}`} onClick={() => setCategory(10)}>
            <img src={music} alt="Music" /> <p>Music</p>
          </div>
          <div className={`side-link ${category === 22 ? 'active' : ''}`} onClick={() => setCategory(22)}>
            <img src={blogs} alt="Blogs" /> <p>Blogs</p>
          </div>
          <div className={`side-link ${category === 25 ? 'active' : ''}`} onClick={() => setCategory(25)}>
            <img src={news} alt="News" /> <p>News</p>
          </div>
          <hr />
        </div>
        <div className="subscribed-list">
          <h3>Subscribed</h3>
          <div className="side-link" onClick={() => setCategory(0)}>
            <img src={richie} alt="SunnyRichie" /> <p>SunnyRichie</p>
          </div>
          <div className="side-link" onClick={() => setCategory(0)}>
            <img src={badmus} alt="Bhadmus" /> <p>Bhadmus</p>
          </div>
          <div className="side-link" onClick={() => setCategory(0)}>
            <img src={ife} alt="Ifeoluwa" /> <p>Ifeoluwa</p>
          </div>
          <div className="side-link" onClick={() => setCategory(0)}>
            <img src={sanwo} alt="Sanwo-Olu" /> <p>Sanwo-Olu</p>
          </div>
          <div className="side-link" onClick={() => setCategory(0)}>
            <img src={sile} alt="Sileola" /> <p>Sileola</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
