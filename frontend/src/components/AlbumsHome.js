import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function AlbumsHome() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/albums')
      .then(response => {
        setAlbums(response.data.slice(0, 6));
      })
      .catch(error => {
        console.error('Error fetching albums:', error);
      });
  }, []);

  return (
    <div className='mt-10'>
      <h2 className="text-4xl font-bold mb-4 mt-10">Albums</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-10 p-10">
        {albums.map(album => (
          <Link key={album.id} to={`/Photos/${album.id}`} className="block">
            <div className="p-10 bg-white rounded-lg shadow-md hover:shadow-lg flex items-center justify-center" style={{ height: '300px', boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
              <h3 className="text-xl font-bold">{album.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default AlbumsHome;
