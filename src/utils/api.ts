import { FetchCatImagesQueries } from "api.types";
import axios from "axios";

axios.defaults.baseURL = "https://cataas.com/cat/says/";

export const fetchCatImages = async (
  text: string,
  fetchCatImagesQueries: FetchCatImagesQueries
) => {
  const path = `${text}?${new URLSearchParams(fetchCatImagesQueries as any)}`;
  try {
    const response = await axios.get(path, { responseType: "arraybuffer" });
    return { data: Buffer.from(response.data), status: response.status };
  } catch (error) {
    console.error("There was an issue fetching");
  }
};
