import { useState, useEffect } from "react";
import GridGallery from "../components/Gallery";
import { Section } from "./ui";

// Bucket name
const BUCKET_NAME = 'xpatios-website-assets';
// Folder name
const FOLDER_NAME = 'gallery-images';
const API_KEY = import.meta.env.VITE_API_KEY;
// Google Cloud API key

const PortfolioGallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        // Query Google Cloud Storage API to list files from the specified folder
        const response = await fetch(
  `https://storage.googleapis.com/storage/v1/b/${BUCKET_NAME}/o?prefix=${FOLDER_NAME}&key=${API_KEY}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch images from Google Cloud Storage.");
        }

        const data = await response.json();
        // Filter out non-image entries
        const imageUrls = data.items
          .filter((item) => item.name.match(/\.(jpg|jpeg|png|gif)$/i)) // Only keep image files
          .map((item) => `https://storage.googleapis.com/${BUCKET_NAME}/${item.name}`);

        setImages(imageUrls);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  return (
    <Section as="section" id="gallery" width="wide" spacing="tight">
      {images.length === 0 ? (
        // Photos stream in client-side after the GCS fetch resolves, so
        // the prerendered page still needs real, visible text here rather
        // than an empty grid.
        <p className="text-body">Loading our latest projects&hellip;</p>
      ) : (
        <GridGallery images={images} />
      )}
    </Section>
  );
};

export default PortfolioGallery;
