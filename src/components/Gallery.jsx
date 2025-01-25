import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import VisibilitySensor from "react-visibility-sensor";

export default function GridGallery({ images }) {
  // Tracks the currently selected image index
  const [currentIndex, setCurrentIndex] = useState(null);
  // Controls the modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imagesShownArray, setImagesShownArray] = useState(
    Array(images.length).fill(false)
  );

  const imageVisibleChange = (index, isVisible) => {
    if (isVisible) {
      setImagesShownArray((currentImagesShownArray) => {
        currentImagesShownArray[index] = true;
        return [...currentImagesShownArray];
      });
    }
  };

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
      <div className="grid grid-cols-3 gap-1">
        {images &&
          images.map((imageUrl, index) => (
            <VisibilitySensor
              key={index}
              partialVisibility={true}
              offset={{ bottom: 80 }}
              onChange={(isVisible) => imageVisibleChange(index, isVisible)}
            >
              <div onClick={() => openModal(index)}>
                <GridGalleryCard
                  imageUrl={imageUrl}
                  show={imagesShownArray[index]}
                />
              </div>
            </VisibilitySensor>
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

function GridGalleryCard({ imageUrl, show }) {
  return (
    <div
      className={`relative transition ease-in duration-300 transform ${
        show ? "" : "translate-y-16 opacity-0"
      }`}
    >
      <img src={imageUrl} alt="" className="w-full h-auto cursor-pointer" />
    </div>
  );
}

function Modal({ currentImage, onClose, onPrevious, onNext }) {
  // Add swipe functionality
  const handlers = useSwipeable({
    onSwipedLeft: onNext,
    onSwipedRight: onPrevious,
    preventScrollOnSwipe: true,
    trackMouse: true, // Enables swipe using mouse drag
  });

  return (
    <div
      {...handlers} // Attach swipe handlers to the container
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
        alt=""
        className="max-w-full max-h-screen object-contain"
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
