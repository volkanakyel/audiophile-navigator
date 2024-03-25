import data from "../data/data";
import { ProductDetails } from "../interfaces/audioProduct";
export const getAudioProduct = ():Promise<ProductDetails[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    });
  })
}