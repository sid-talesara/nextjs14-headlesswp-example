"use client";
import { useEffect } from "react";

const CookieDeclaration = () => {
  useEffect(() => {
    const cookieDeclarationScript = document.createElement("script");
    cookieDeclarationScript.id = "CookieDeclaration";
    cookieDeclarationScript.src =
      "https://consent.cookiebot.com/your-cookiebot-id/cd.js";
    cookieDeclarationScript.setAttribute("type", "text/javascript");
    cookieDeclarationScript.setAttribute("async", "true");
    document.body.appendChild(cookieDeclarationScript);

    return () => {
      document.body.removeChild(cookieDeclarationScript);
    };
  }, []);

  return null; // The script itself handles rendering the cookie declaration
};

export default CookieDeclaration;
