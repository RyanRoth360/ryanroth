import React from "react";
import Carousel from "./Carousel";
import "../styles/Project.css";

interface ImageProps {
  images: string[] | string; // Accepts either a single string or an array of strings
  url: string;
}

const ImageComponent: React.FC<ImageProps> = ({ images, url }) => {
  const isMultipleImages = Array.isArray(images) && images.length > 1;

  if (isMultipleImages) {
    return (
      <div>
        <Carousel images={images as string[]} />
      </div>
    );
  } else {
    const singleImage = Array.isArray(images) ? images[0] : images;
    return (
      <>
        {url !== "" ? (
          <a href={url} target="_blank" rel="noopener noreferrer">
            <div className="single-img-container">
              <img
                className="single-img"
                src={singleImage}
                alt="Single Image"
              />
              <div className="img-overlay">
                <p>Show Project</p>
              </div>
            </div>
          </a>
        ) : (
          <div className="single-img-container">
            <img className="single-img" src={singleImage} alt="Single Image" />
            {/* <div className="img-overlay">
              <p>Show Project</p>
            </div> */}
          </div>
        )}
      </>
    );
  }
};

export default ImageComponent;
