import sharp from "sharp";
import { FetchCatImagesQueries } from "api.types";
import { fetchCatImages } from "./api";

export const compositeImage = async (
  greeting: string,
  who: string,
  imageParameters: FetchCatImagesQueries
) => {
  try {
    const imagesPromise = Promise.all([
      await fetchCatImages(greeting, imageParameters),
      await fetchCatImages(who, imageParameters),
    ]);
    const [image1, image2] = await imagesPromise;
    await sharp(image1.data)
      .composite([
        {
          input: image2.data,
          top: 0,
          left: imageParameters.width,
        },
      ])
      .resize({
        height: imageParameters.height,
        width: imageParameters.width * 2,
        fit: sharp.fit.contain,
        position: "left",
      })
      .toFile("cat.png");
    console.info("Image saved");
  } catch (error) {
    console.log(error);
  }
};
