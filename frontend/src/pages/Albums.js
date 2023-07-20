import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Albums() {
  const [albums, setAlbums] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const albumsPerPage = 9;

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/albums')
      .then(response => {
        setAlbums(response.data);
      })
      .catch(error => {
        console.error('Error fetching albums:', error);
      });
  }, []);

  const handleSearch = e => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const filteredAlbums = albums.filter(album =>
    album.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastAlbum = currentPage * albumsPerPage;
  const indexOfFirstAlbum = indexOfLastAlbum - albumsPerPage;
  const currentAlbums = filteredAlbums.slice(indexOfFirstAlbum, indexOfLastAlbum);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <>
      <div
        className="bg-cover bg-center h-screen"
        style={{
          backgroundImage: 'url("https://www.atlastcreative.com/wp-content/uploads/2015/11/at_last_creative_olivia_norman_photograph_organiser_photo_albums_2-1175x783.jpg")',
          height: '400px',
        }}
      >
        <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Albums</h1>
          </div>
        </div>
      </div>

      <div>
        <div className="flex justify-center m-4">
          <input
            type="text"
            placeholder="Search by album title"
            value={searchTerm}
            onChange={handleSearch}
            className="w-96 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-10 p-10">
          {currentAlbums.map(album => (
            <Link key={album.id} to={`/Photos/${album.id}`} className="block">
              <div className="p-10 bg-white rounded-lg shadow-md hover:shadow-lg flex items-center justify-center transition-shadow duration-300" style={{ height: '250px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.5)' }}>
                <h3 className="text-xl font-bold">{album.title}</h3>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex justify-center mt-4 m-10">
          <nav className="flex items-center">
            <ul className="flex">
            {Array.from({ length: Math.ceil(filteredAlbums.length / albumsPerPage) }).map((_, index) => (
                <li key={index} className="px-2">
                  <button
                    onClick={() => paginate(index + 1)}
                    className={`${currentPage === index + 1
                        ? 'text-blue-500 bg-blue-100 font-medium hover:text-blue-700'
                        : 'text-gray-500 hover:text-blue-500'
                      } px-3 py-2 rounded-md focus:outline-none`}
                  >
                    {index + 1}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Albums;