"use client";
import { useEffect } from "react";

const CookieDeclaration = () => {
  useEffect(() => {
    const cookieDeclarationScript = document.createElement("script");
    cookieDeclarationScript.id = "CookieDeclaration";
    cookieDeclarationScript.src =
      "https://consent.cookiebot.com/c9b919cf-8255-49f6-a06c-cb390664faa5/cd.js"; // Use your actual src from Cookiebot
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
