import { TDriver } from "types";

export const getDrivers = async (): Promise<TDriver[]> => {
  return (await fetch("http://localhost:3000/drivers")).json();
};
