import React, { useState, useEffect } from 'react';
import './BackgroundSlideshow.css';

const BackgroundSlideshow = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    'https://png.pngtree.com/thumb_back/fh260/background/20190428/pngtree-bokeh-light-in-pastel-color-gradient-background-image_104145.jpg',
    'https://wallpaperset.com/w/full/b/5/e/545593.jpg',
    'https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77700360892.jpg',
    'https://st.depositphotos.com/1275255/2256/i/450/depositphotos_22565791-stock-photo-glossy-purple-flag-art-abstract.jpg',
    'https://img.freepik.com/free-photo/blue-bokeh-textured-plain-product-background_53876-102475.jpg',
    'https://static.vecteezy.com/system/resources/thumbnails/008/058/793/small/abstract-blur-with-bokeh-light-for-background-usage-vector.jpg',
    'https://img.freepik.com/free-vector/blurred-bokeh-pattern-wallpaper-soft-touch-your-walls_1017-43483.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEuKem0gQtqhkkM2SLf-SZUmmY6gfJE8QNrfjWIZLEjMYsqkHtDNYQx-aVQuoi3y4ca_E&usqp=CAU',
    'https://png.pngtree.com/thumb_back/fh260/background/20220127/pngtree-abstract-green-bokeh-light-background-image_983979.jpg',
    'https://images.rawpixel.com/image_social_landscape/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3B4MTU5NDg4NC1pbWFnZS1rd3Z4cnkzaC5qcGc.jpg',        

    ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change slide every 5 seconds (5000 milliseconds)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="background-slideshow">
      {images.map((image, index) => (
        <div
          key={index}
          className={
            index === currentImageIndex
              ? 'background-slideshow__image active'
              : 'background-slideshow__image'
          }
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}
    </div>
  );
};

export default BackgroundSlideshow;