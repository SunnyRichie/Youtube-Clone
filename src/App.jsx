import React, { useState } from 'react';
import Navbar from './Components/NavBar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Video from './pages/video/Video';

const App = () => {
  const [sidebar, setSidebar] = useState(true);
  const [searchTerm, setSearchTerm] = useState(''); 

  // Function to handle search input from the Navbar
  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div>
      {/* Navbar component receives functions to toggle sidebar and handle search */}
      <Navbar setSidebar={setSidebar} onSearch={handleSearch} /> 

      <Routes>
        {/* Pass relevant states as props to components */}
        <Route path='/' element={<Home sidebar={sidebar} searchTerm={searchTerm} />} />
        <Route path='/video/:categoryId/:videoId' element={<Video />} />
      </Routes>
    </div>
  );
};

export default App;
