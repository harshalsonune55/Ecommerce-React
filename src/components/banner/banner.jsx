import "./banner.css"
import { useState,useEffect } from 'react';
export default function Banner() {

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };
  useEffect(() => {
    const interval = setInterval(nextSlide, 2000);
    return () => clearInterval(interval); 
  }, []);

  const images = ["https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg" ,
    "https://www.befunky.com/images/wp/wp-2018-08-product-photography-18.jpg?auto=avif,webp&format=jpg&width=944" ,
    "https://cdn.shopify.com/s/files/1/2303/2711/files/2_e822dae0-14df-4cb8-b145-ea4dc0966b34.jpg?v=1617059123" ];
  return (
    <>
    <div className="slider-container">
      <button className="nav-button left" onClick={prevSlide}>&#10094;</button>

      <div className="slider-track" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((img, index) => (
          <img key={index} src={img} alt={`Slide ${index}`} className="slide" />
        ))}
      </div>

      <button className="nav-button right" onClick={nextSlide}>&#10095;</button>
    </div>
    </>);
}