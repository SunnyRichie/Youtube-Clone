import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './feed.css';
import { API_KEY, value_converter } from '../../data';
import moment from 'moment/moment';

const Feed = ({ category, searchTerm }) => {
  const [data, setData] = useState([]);

  // Fetch data and update the state
  const fetchData = async () => {
    let videoList_url;

    if (searchTerm) {
      // Search videos based on the search term
      videoList_url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${searchTerm}&key=${API_KEY}`;
    } else {
      // Fetch most popular videos based on category
      videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;
    }

    try {
      const response = await fetch(videoList_url);
      const result = await response.json();

      if (searchTerm) {
        setData(result.items.map(item => item.id.videoId ? item : { ...item, id: { videoId: item.id.videoId } }));
      } else {
        setData(result.items); // Set the state with the fetched data
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [category, searchTerm]);

  return (
    <div className="feed">
      {data.map((item, index) => (
        <Link to={`video/${item.snippet.categoryId || category}/${item.id.videoId || item.id}`} className='card' key={index}>
          <img src={item.snippet.thumbnails.medium.url} alt="" />
          <h2>{item.snippet.title}</h2>
          <h3>{item.snippet.channelTitle}</h3>
          <p>{value_converter(item.statistics?.viewCount || 0)} views &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
        </Link>
      ))}
    </div>
  );
};

export default Feed;
