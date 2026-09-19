import { useState, useRef, useEffect, useCallback } from "react";
import { useSwipeable } from "react-swipeable";
import { Figure } from "./ui";

// Broken/masonry rhythm: 2 of every 6 tiles get a different aspect ratio
// (and one spans two columns) so the grid doesn't read as a uniform
// square wall. Figure applies loading="lazy" + the shared photo-grade
// treatment, which also fixes the old bug of loading every image eagerly.
const PATTERN = [
  { ratio: "4/5" },
  { ratio: "4/5" },
  { ratio: "3/2", span: "sm:col-span-2" },
  { ratio: "4/5" },
  { ratio: "1/1" },
  { ratio: "4/5" },
];

export default function GridGallery({ images }) {
  const [currentIndex, setCurrentIndex] = useState(null);
  const triggerRef = useRef(null);

  const openModal = (index, triggerEl) => {
    triggerRef.current = triggerEl;
    setCurrentIndex(index);
  };

  const closeModal = useCallback(() => {
    setCurrentIndex(null);
    // Return focus to the thumbnail that opened the lightbox.
    triggerRef.current?.focus();
  }, []);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  }, [images.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
        {images.map((imageUrl, index) => {
          const config = PATTERN[index % PATTERN.length];
          return (
            <button
              key={imageUrl}
              type="button"
              onClick={(e) => openModal(index, e.currentTarget)}
              className={`block w-full text-left ${config.span ?? ""}`}
            >
              <Figure
                src={imageUrl}
                alt={`Xpatios project photo ${index + 1} of ${images.length}`}
                ratio={config.ratio}
              />
            </button>
          );
        })}
      </div>

      {currentIndex !== null && (
        <Lightbox
          images={images}
          currentIndex={currentIndex}
          onClose={closeModal}
          onPrevious={goToPrevious}
          onNext={goToNext}
        />
      )}
    </>
  );
}

function Lightbox({ images, currentIndex, onClose, onPrevious, onNext }) {
  const dialogRef = useRef(null);
  const currentImage = images[currentIndex];

  // Lock body scroll while the lightbox is open.
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  // Move focus into the dialog on open.
  useEffect(() => {
    dialogRef.current?.focus();
  }, []);

  // Escape closes, arrow keys navigate, Tab is trapped inside the dialog.
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key === "ArrowLeft") {
        onPrevious();
        return;
      }
      if (e.key === "ArrowRight") {
        onNext();
        return;
      }
      if (e.key === "Tab") {
        const node = dialogRef.current;
        if (!node) return;
        const focusable = node.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose, onPrevious, onNext]);

  const handlers = useSwipeable({
    onSwipedLeft: onNext,
    onSwipedRight: onPrevious,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <div
      {...handlers}
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={`Photo ${currentIndex + 1} of ${images.length}`}
      tabIndex={-1}
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/95 p-4 outline-none"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute right-2 top-2 flex min-h-11 min-w-11 items-center justify-center text-paper transition-opacity hover:opacity-70 sm:right-4 sm:top-4"
      >
        <span aria-hidden="true" className="text-2xl leading-none">
          &times;
        </span>
      </button>

      <button
        type="button"
        onClick={onPrevious}
        aria-label="Previous photo"
        className="absolute left-2 top-1/2 flex min-h-11 min-w-11 -translate-y-1/2 items-center justify-center text-paper transition-opacity hover:opacity-70 sm:left-4"
      >
        <span aria-hidden="true" className="text-2xl leading-none">
          &larr;
        </span>
      </button>

      <img
        src={currentImage}
        alt={`Xpatios project photo ${currentIndex + 1} of ${images.length}`}
        className="max-h-[85vh] max-w-full object-contain"
      />

      <button
        type="button"
        onClick={onNext}
        aria-label="Next photo"
        className="absolute right-2 top-1/2 flex min-h-11 min-w-11 -translate-y-1/2 items-center justify-center text-paper transition-opacity hover:opacity-70 sm:right-4"
      >
        <span aria-hidden="true" className="text-2xl leading-none">
          &rarr;
        </span>
      </button>
    </div>
  );
}
