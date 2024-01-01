import { features } from '../constants';
import styles, { layout } from '../style';
import GridGallery from "../components/Gallery";

// Get the current file path
const currentFilePath = import.meta.url;

// Determine the relative path to the images directory
const imagePath = currentFilePath.substring(0, currentFilePath.lastIndexOf('/')) + '/../assets/xpGallery';

const imageFiles = [
  'xp_gallery10.jpg', 'xp_gallery22.jpg', 'xp_gallery33.jpg', 'xp_gallery44.jpg',
  'xp_gallery12.jpg', 'xp_gallery23.jpg', 'xp_gallery34.jpg', 'xp_gallery45.jpg',
  'xp_gallery13.jpg', 'xp_gallery24.jpg', 'xp_gallery35.jpg', 'xp_gallery46.jpg',
  'xp_gallery14.jpg', 'xp_gallery25.jpg', 'xp_gallery36.jpg', 'xp_gallery47.jpg',
  'xp_gallery15.jpg', 'xp_gallery26.jpg', 'xp_gallery37.jpg', 'xp_gallery48.jpg',
  'xp_gallery16.jpg', 'xp_gallery27.jpg', 'xp_gallery38.jpg', 'xp_gallery49.jpg',
  'xp_gallery17.jpg', 'xp_gallery28.jpg', 'xp_gallery39.jpg', 'xp_gallery50.jpg',
  'xp_gallery18.jpg', 'xp_gallery29.jpg', 'xp_gallery40.jpg', 'xp_gallery51.jpg',
  'xp_gallery19.jpg', 'xp_gallery30.jpg', 'xp_gallery41.jpg', 'xp_gallery52.jpg',
  'xp_gallery20.jpg', 'xp_gallery31.jpg', 'xp_gallery42.jpg', 'xp_gallery9.jpg',
  'xp_gallery21.jpg', 'xp_gallery32.jpg', 'xp_gallery43.jpg',
];

// Dynamically import the images using import.meta.glob
const imageModules = import.meta.globEager('../assets/xpGallery/*.jpg');
const images = imageFiles.map((imageName) => imageModules[`../assets/xpGallery/${imageName}`]?.default);

const PortfolioGallery = () => {
  return (
    <section id="gallery" className={layout.section}>
      <GridGallery images={images} />
    </section>
  );
};

export default PortfolioGallery;
