import React, { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./styles.css";

const ImageSlider = ({ url, limit = 5, page = 1 }) => {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchImages(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (e) {
      setErrorMsg(e.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url]);

  console.log(images);

  if (loading) {
    return <div>Loading data! Please wait.</div>;
  }
  if (errorMsg) {
    return <div>Error occured! {errorMsg} </div>;
  }

  return (
    <div className="container">
      <BsArrowLeftCircleFill onClick={handlePrevious} className="arrow arrow-left" />

      {images && images.length
        ? images.map((imageItem) => (
            <img
              key={imageItem.id}
              alt={imageItem.download_url}
              src={imageItem.download_url}
              className="currentImage"
            />
          ))
        : null}

      <BsArrowRightCircleFill onClick={handleNext} className="arrow arrow-right" />

      <span className="circleIndicators">
        {images && images.length
          ? images.map((_, index) => (
              <button key={index} className="currentIndicators"></button>
            ))
          : null}
      </span>
    </div>
  );
};

export default ImageSlider;
