import { createContext } from "react";
import { TLocalizationContext } from "types";

export default createContext<TLocalizationContext>({
  language: "ru",
  toggleLanguage: () => null,
});
