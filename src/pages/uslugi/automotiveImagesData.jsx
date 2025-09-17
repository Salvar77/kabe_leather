import heroImage from "../../assets/image/services1.webp";
import heroImageLarge from "../../assets/image/services1.jpg";
import furnitureImage from "../../assets/image/services3.webp";
import furnitureImageLarge from "../../assets/image/services3.jpg";
import tintImage from "../../assets/image/tint_640.jpg";
import tintImageLarge from "../../assets/image/tint_1920.jpg";
import cleanImg from "../../assets/image/heroMainWebp640.webp";
import cleanImgLarge from "../../assets/image/heroMainWebpBig.webp";
import paintCorrection from "../../assets/image/paintCorrection.webp";
import paintCorrectionLarge from "../../assets/image/paintCorrection.jpg";
import ppfFoilImage from "../../assets/image/ppf-mobile.webp";
import ppfFoilImageLarge from "../../assets/image/ppf.webp";
import ceramicCoatingImage from "../../assets/image/ceramicCoating-mobile.webp";
import ceramicCoatingImageLarge from "../../assets/image/ceramicCoating.JPEG";
import { headlightPolishing } from "../../../utils";
import { headlightPolishingMobile } from "../../../utils";

export const automotiveImagesData = [
  {
    id: "uslugi/pranie-tapicerki",
    image: { src: cleanImg, width: 640, height: 427 },
    largeImage: { src: cleanImgLarge, width: 1920, height: 1280 },
  },
  {
    id: "uslugi/renowacja-i-czyszczenie-skor",
    image: { src: heroImage, width: 640, height: 427 },
    largeImage: { src: heroImageLarge, width: 1920, height: 1280 },
  },
  {
    id: "uslugi/autokosmetyka",
    image: { src: furnitureImage, width: 640, height: 427 },
    largeImage: { src: furnitureImageLarge, width: 1600, height: 1067 },
  },
  {
    id: "uslugi/przyciemnianie-szyb",
    image: { src: tintImage, width: 640, height: 427 },
    largeImage: { src: tintImageLarge, width: 1920, height: 1280 },
  },
  {
    id: "uslugi/korekta-lakieru",
    image: { src: paintCorrection, width: 640, height: 427 },
    largeImage: { src: paintCorrectionLarge, width: 1920, height: 1280 },
  },
  {
    id: "uslugi/folia-ppf-ochrona-lakieru",
    image: { src: ppfFoilImage, width: 640, height: 427 },
    largeImage: { src: ppfFoilImageLarge, width: 1920, height: 1280 },
  },
  {
    id: "uslugi/powloka-ceramiczna",
    image: { src: ceramicCoatingImage, width: 640, height: 427 },
    largeImage: { src: ceramicCoatingImageLarge, width: 1920, height: 1280 },
  },
  {
    id: "uslugi/polerowanie-reflektorow",
    image: { src: headlightPolishingMobile, width: 640, height: 427 },
    largeImage: { src: headlightPolishing, width: 1920, height: 1280 },
  },
];
