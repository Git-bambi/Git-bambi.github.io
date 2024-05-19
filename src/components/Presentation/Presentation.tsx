import { useEffect, useState } from "react";
import Slide from "./Slide";

const NUMBER_OF_SLIDES = 5;

const Presentation = () => {
  const [slideNumber, setSlideNumber] = useState(1);

  const selectPrevImage = () => {
    setSlideNumber((prev) => prev === 1 ? NUMBER_OF_SLIDES : prev - 1);
  }

  const selectNextImage = () => {
    setSlideNumber((prev) => prev === NUMBER_OF_SLIDES ? 1 : prev + 1);
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
      height: "90vh",
    }}>
      <div style={{
        display: "flex",
        justifyContent: "center",
      }}>
        <button className="arrow-button left" onClick={() => selectPrevImage()}>
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6z" />
          </svg>
        </button>
        {slideNumber}
        <button className="arrow-button right" onClick={() => selectNextImage()}>
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
          </svg>
        </button>
      </div>
      <div style={{
        display: "flex",
        justifyContent: "center",
        background: "#fc466b",
        height: "100%",
      }}>
        <Slide slideNumber={slideNumber}/>
      </div>
    </div>
  )
}

export default Presentation;