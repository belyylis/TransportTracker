import { TCategory } from "./Category";

export type TDriver = {
  id: number;
  category: TCategory;
  name: string;
  phone: string;
  coordinate: {
    latitude: number;
    longitude: number;
  };
};
