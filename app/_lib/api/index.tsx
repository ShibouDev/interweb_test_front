import axios, { AxiosResponse } from "axios";
import { IGetImages, TImage } from "./types";

const responseBody = (response: AxiosResponse) => response.data;

export const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_HOST,
  timeout: 5000,
});

const imageRequests = {
  get: (url: string) => instance.get<IGetImages[]>(url).then(responseBody),
  postUpload: (url: string, body: FormData) =>
    instance.post<TImage>(url, body).then(responseBody),
  post: (url: string, body: TImage) =>
    instance.post<TImage>(url, body).then(responseBody),
  delete: (url: string) => instance.delete<TImage>(url).then(responseBody),
};

export const Images = {
  getImages: (): Promise<IGetImages[]> => imageRequests.get("/image/getAll"),
  uploadImages: (images: FormData): Promise<TImage[]> =>
    imageRequests.postUpload("/image/upload", images),
  editLabel: (image: TImage): Promise<TImage> =>
    imageRequests.post("/image/changeLabel", image),
  deleteImage: (id: number): Promise<TImage> =>
    imageRequests.delete(`/image/${id}`),
};
