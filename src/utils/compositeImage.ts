import sharp from "sharp";
import { FetchCatImagesQueries } from "api.types";
import { fetchCatImages } from "./api";

export const compositeImage = async (
  greeting: string,
  who: string,
  imageParameters: FetchCatImagesQueries
) => {
  const image1 = await fetchCatImages(greeting, imageParameters);
  const image2 = await fetchCatImages(who, imageParameters);
  try {
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
