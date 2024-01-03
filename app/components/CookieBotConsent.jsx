"use client";

import { useEffect } from "react";

const CookieConsent = () => {
  useEffect(() => {
    const cmpScript = document.createElement("script");
    cmpScript.id = "Cookiebot";
    cmpScript.src = "https://consent.cookiebot.com/uc.js";
    cmpScript.setAttribute("data-cbid", "your-cookiebot-id");
    cmpScript.setAttribute("type", "text/javascript");
    cmpScript.setAttribute("async", "true");
    cmpScript.setAttribute("data-blockingmode", "auto");
    document.head.appendChild(cmpScript);

    return () => {
      document.head.removeChild(cmpScript);
    };
  }, []);

  return null;
};

export default CookieConsent;
