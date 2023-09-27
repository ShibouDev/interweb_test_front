export type TStatus = {
  status: number;
};

export type TImage = {
  id: number;
  label: string;
  filename?: string;
  createdAt?: string;
  updatedAt?: string;
};


export interface IGetImages {
  createdAt: string;
  images: TImage[];
}
