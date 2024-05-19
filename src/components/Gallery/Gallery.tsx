import { useEffect, useState } from "react";

const NUMBER_OF_PICTURES = 11;

const Gallery = () => {
  const [pictureNumber, setPictureNumber] = useState(1);

  const imageSrc = `src/assets/gallery/imagefish${pictureNumber}.jpg`;

  const selectPrevImage = () => {
    setPictureNumber((prev) => prev === 1 ? NUMBER_OF_PICTURES : prev - 1);
  }

  const selectNextImage = () => {
    setPictureNumber((prev) => prev === NUMBER_OF_PICTURES ? 1 : prev + 1);
  }

  useEffect(() => {
    const handleKeyDown = (event: any) => {
      switch (event.key) {
        case 'ArrowLeft':
          selectPrevImage();
          break;
        case 'ArrowRight':
          selectNextImage();
          break;
        default:
          break;
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    let touchStartX = 0;
    let touchEndX = 0;

    const handleTouchStart = (event: any) => {
      touchStartX = event.changedTouches[0].screenX;
    };

    const handleTouchEnd = (event: any) => {
      touchEndX = event.changedTouches[0].screenX;
      handleSwipeGesture();
    };

    const handleSwipeGesture = () => {
      if (touchStartX - touchEndX > 50) {
        selectNextImage();
      } else if (touchEndX - touchStartX > 50) {
        selectPrevImage();
      }
    };

    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  return (
    <div style={{
      height: "92.8vh",
    }}>
      {pictureNumber}
      <div style={{
        display: "flex",
        justifyContent: "center",
        background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)",
        height: "100%",
      }}>
        <img src={imageSrc} alt="Obrazek w galerii" />
      </div>
    </div>
  )
}

export default Gallery;