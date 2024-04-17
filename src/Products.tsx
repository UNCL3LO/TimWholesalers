import './App.css'
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Products() {
    const images = [
        '/Goods/glucose carton.jpg',
        '/Goods/Jogoo.jpg',
        '/Goods/pishori.jpg',
        '/Goods/glucose carton.jpg',
        '/Goods/Jogoo.jpg',
        '/Goods/pishori.jpg',
        '/Goods/glucose carton.jpg',
        '/Goods/Jogoo.jpg',
        '/Goods/pishori.jpg',
        '/Goods/glucose carton.jpg',
        '/Goods/Jogoo.jpg',
        '/Goods/pishori.jpg',
        // Add more image URLs as needed
    ];

    // Configure settings for the slideshow
    const settings = {
        dots: true, // Show dots navigation
        infinite: true, // Enable infinite looping
        Speed: 500, // Autoplay speed (in milliseconds)
        slidesToShow:3, // Number of slides to show at a time
      
        swipeToSlide: true,
        autoplay: true, // Start automatically
    autoplaySpeed: 1000,
    };

    return (
        <>
        <div className='Products'>
        
        <h1>Special Offers Today</h1>
      <div className='Slider'>
        <Slider {...settings}>
            {images.map((imageUrl, index) => (
                <>
             <div className='Goodimg'>
                    <img src={imageUrl} alt={`Image ${index +1}`} />
                    
                    </div>
                </>
            ))}
        </Slider>
        </div>
    </div>
    <div className='Products'>
        
    <h1>Special Offers Today</h1>
      <div className='Slider'>
        <Slider {...settings}>
            {images.map((imageUrl, index) => (
                <>
             <div className='Goodimg'>
                    <img src={imageUrl} alt={`Image ${index +1}`} />
                    
                    </div>
                </>
            ))}
        </Slider>
        </div>
        </div>
        <div className='Products'>
        
        <h1>Special Offers Today</h1>
          <div className='Slider'>
            <Slider {...settings}>
                {images.map((imageUrl, index) => (
                    <>
                 <div className='Goodimg'>
                        <img src={imageUrl} alt={`Image ${index +1}`} />
                        
                        </div>
                    </>
                ))}
            </Slider>
            </div>
            </div>
    </>
);
}
export default Products;