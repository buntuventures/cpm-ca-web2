// src/hooks/useLanguageRedirect.js
import { useEffect } from "react";
import { useRouter } from "next/router";

const useLanguageRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    const userLanguage = navigator.language || navigator.userLanguage;

    if (userLanguage.startsWith("fr")) {
      router.replace("/");
    } else {
      router.replace("/en");
    }
  }, [router]);
};

export default useLanguageRedirect;
