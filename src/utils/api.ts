import { APIResponse, FetchCatImagesQueries } from "api.types";
import axios from "axios";

axios.defaults.baseURL = "https://cataas.com/cat/says/";

/**
 * @param {string} text Text to display
 * @param {FetchCatImagesQueries} fetchCatImagesQueries Parameters for generating image
 * @return {Promise<APIResponse>} Returns HTTP status code and data as Buffer
 */
export const fetchCatImages = async (
  text: string,
  fetchCatImagesQueries: FetchCatImagesQueries
): Promise<APIResponse> => {
  // Concatenate text with formatted query parameters
  const path = `${text}?${new URLSearchParams(fetchCatImagesQueries as any)}`;
  try {
    // Set responseType as arraybuffer as axios defaults to JSON
    const response = await axios.get(path, { responseType: "arraybuffer" });
    // Return data as Buffer since sharp expects Buffer
    return { data: Buffer.from(response.data), status: response.status };
  } catch (error) {
    console.error("There was an issue fetching image");
  }
};
