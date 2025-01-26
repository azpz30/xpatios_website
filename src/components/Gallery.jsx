import { useState, useRef, useEffect } from "react";
import { useSwipeable } from "react-swipeable";

export default function GridGallery({ images }) {
  const [currentIndex, setCurrentIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {images.map((imageUrl, index) => (
          <div
            key={index}
            className="relative group cursor-pointer"
            onClick={() => openModal(index)}
          >
            <img
              src={imageUrl}
              alt={`Image ${index + 1}`}
              className="w-full h-auto object-cover rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        ))}
      </div>

      {isModalOpen && (
        <Modal
          currentImage={images[currentIndex]}
          onClose={closeModal}
          onPrevious={goToPrevious}
          onNext={goToNext}
        />
      )}
    </>
  );
}

function Modal({ currentImage, onClose, onPrevious, onNext }) {
  const handlers = useSwipeable({
    onSwipedLeft: onNext,
    onSwipedRight: onPrevious,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <div
      {...handlers}
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white text-3xl"
      >
        ✕
      </button>
      <button
        onClick={onPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl"
      >
        ◀
      </button>
      <img
        src={currentImage}
        alt="Current View"
        className="max-w-full max-h-screen object-contain rounded-lg shadow-lg"
      />
      <button
        onClick={onNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl"
      >
        ▶
      </button>
    </div>
  );
}
