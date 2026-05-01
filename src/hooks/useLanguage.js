import { useEffect, useState } from "react";

const storageKey = "adzi-portfolio-language";
const defaultLanguage = "en";

function getStoredLanguage() {
  if (typeof window === "undefined") {
    return defaultLanguage;
  }

  return window.localStorage.getItem(storageKey) || defaultLanguage;
}

export function useLanguage() {
  const [language, setLanguage] = useState(getStoredLanguage);

  useEffect(() => {
    document.documentElement.lang = language;
    window.localStorage.setItem(storageKey, language);
  }, [language]);

  function toggleLanguage() {
    setLanguage((currentLanguage) => (currentLanguage === "en" ? "id" : "en"));
  }

  return {
    language,
    toggleLanguage,
  };
}
