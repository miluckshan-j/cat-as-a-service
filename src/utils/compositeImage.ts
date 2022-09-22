import sharp from "sharp";
import { FetchCatImagesQueries } from "api.types";
import { fetchCatImages } from "./api";

/**
 * @param {string} greeting Greeting text
 * @param {string} who Whom text
 * @param {FetchCatImagesQueries} imageParameters Parameters for generating image
 * @return {void} Outputs cat image in current directory
 */
export const compositeImage = async (
  greeting: string,
  who: string,
  imageParameters: FetchCatImagesQueries
) => {
  try {
    // Call 2 API calls asynchoronously
    const imagesPromise = Promise.all([
      fetchCatImages(greeting, imageParameters),
      fetchCatImages(who, imageParameters),
    ]);
    // Destructure promise array if successful
    const [image1, image2] = await imagesPromise;
    await sharp(image1.data)
      .composite([
        {
          input: image2.data,
          top: 0,
          // Move second image to the end of first image
          left: imageParameters.width,
        },
      ])
      .resize({
        height: imageParameters.height,
        // Resize image width to twice of original width to display both images
        width: imageParameters.width * 2,
        fit: "contain",
        // Overwrite default center alignment to left
        position: "left",
      })
      .toFile("cat.png");
    console.info("Image saved!");
  } catch (error) {
    console.log(error);
  }
};
