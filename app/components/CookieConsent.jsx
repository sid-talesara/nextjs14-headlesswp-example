"use client";

import { useState, useEffect } from "react";
import { hasCookie, setCookie } from "cookies-next";
import Link from "next/link";
export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(true);

  useEffect(() => {
    setShowConsent(hasCookie("localConsent"));
  }, []);

  const acceptCookie = () => {
    setShowConsent(true);
    setCookie("localConsent", "true", {});
  };

  if (showConsent) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-slate-700 bg-opacity-70 z-[5000]">
      <div className=" fixed-bottom-0 left-0 flex items-center justify-between px-4 py-8 bg-orange-400">
        <span className="text-dark text-base mr-16">
          This site uses cookies to improve the UX. By using our site you
          consent to all the TOU in accordance with our{" "}
          <Link href="/privacy">Privacy Policy</Link>
        </span>
        <button
          className="bg-blue-700 py-2 px-10 rounded "
          onClick={() => acceptCookie()}
        >
          Accept
        </button>
      </div>
    </div>
  );
}
