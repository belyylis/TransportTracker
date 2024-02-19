import { TDriver } from "types";

export const getDrivers = async (): Promise<TDriver[]> => {
  return (await fetch("http://192.168.1.213:3000/drivers")).json();
};

export default { getDrivers };
