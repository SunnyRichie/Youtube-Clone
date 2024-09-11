import React, { useState } from 'react';
import './home.css';
import Sidebar from '../../Components/SideBar/Sidebar';
import Feed from '../../Components/Feed/Feed';

const Home = ({ sidebar, searchTerm }) => {
  const [category, setCategory] = useState(0);

  return (
    <>
      <Sidebar sidebar={sidebar} category={category} setCategory={setCategory} />
      <div className={`container ${sidebar ? "" : "large-container"}`}>
        {/* Pass searchTerm down to Feed component */}
        <Feed category={category} searchTerm={searchTerm} />
      </div>
    </>
  );
};

export default Home;
