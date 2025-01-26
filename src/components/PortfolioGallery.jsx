import { useState, useEffect } from "react";
import GridGallery from "../components/Gallery";

// Bucket name
const BUCKET_NAME = 'xpatios-website-assets';
// Folder name
const FOLDER_NAME = 'gallery-images';
// Google Cloud API key
const API_KEY = process.env.REACT_APP_API_KEY;

const PortfolioGallery = () => {
  console.log("key debug: ", API_KEY)
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        console.log("key debug: ", API_KEY)
        // Query Google Cloud Storage API to list files from the specified folder
        const response = await fetch(
          `https://storage.googleapis.com/storage/v1/b/${BUCKET_NAME}/o?prefix=${FOLDER_NAME}&key=${API_KEY}`
        );

        if (!response.ok) {
          console.log("key debug: ", API_KEY)
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
    <section id="gallery">
      {console.log("Image array: ", images)}
      <GridGallery images={images} />
    </section>
  );
};

export default PortfolioGallery;
