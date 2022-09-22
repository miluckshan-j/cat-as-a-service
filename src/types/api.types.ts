export interface FetchCatImagesQueries {
  width: number;
  height: number;
  color: string;
  size: number;
}

export interface APIResponse {
  data: Buffer | string;
  status: number;
}
