import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

function Photos() {
    const { albumId } = useParams();
    const [photos, setPhotos] = useState([]);


    // Get all the photos in specific album 
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`).then(response => {
            setPhotos(response.data);
        }).catch(error => {
            console.error('Error fetching photos:', error);
        });
    }, [albumId]);



    return (
        <>

            <div
                className="bg-cover bg-center h-screen"
                style={{
                    backgroundImage:
                        'url("https://whatson.melbourne.vic.gov.au/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaEpJaWs0Wmpjd1ptUmlaaTAyWWpNd0xUUTJaR010WVdWaFpTMWlOMkZrTmpGallqRXlaREVHT2daRlZBPT0iLCJleHAiOm51bGwsInB1ciI6ImJsb2JfaWQifX0=--414523cc78b09e1ca438274d4988bc6366b10598/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RkhKbGMybDZaVjkwYjE5c2FXMXBkRnNIYVFMb0Eya0NXQUk9IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--5c7b32c6a74ee88f2f4469ce3a4ae709d1994efe/NGV-20International-202.jpg")',
                    height: "400px",
                }}>

                <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-white mb-4">Photos</h1>

                    </div>
                </div>
            </div>





            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  m-10">
                    {photos.map(photo => (
                        <div key={photo.id} className="bg-white rounded-lg shadow-md p-4 transition-transform hover:scale-105">
                            <img src={photo.url} alt={photo.title} className="w-full h-auto rounded-md" />
                            <p className="text-lg font-bold mt-2">{photo.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>

    );
}

export default Photos;
