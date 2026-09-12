"use client";

import { useEffect, useState } from "react";

export default function OfflineBanner() {
  const [isOffline, setIsOffline] = useState(false);
  const [justReconnected, setJustReconnected] = useState(false);

  useEffect(() => {
    setIsOffline(!navigator.onLine);

    const handleOffline = () => {
      setIsOffline(true);
      setJustReconnected(false);
    };

    const handleOnline = () => {
      setIsOffline(false);
      setJustReconnected(true);
      setTimeout(() => setJustReconnected(false), 3000);
    };

    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);
    return () => {
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
    };
  }, []);

  if (!isOffline && !justReconnected) return null;

  return (
    <div
      className={`fixed top-0 left-0 z-[9998] flex w-full items-center justify-center gap-2 px-4 py-2 text-[13px] font-medium text-white transition-colors ${
        isOffline ? "bg-[#DC2626]" : "bg-[#059669]"
      }`}
      role="status"
    >
      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-white/80" />
      {isOffline
        ? "You're offline — check your internet connection. Some features may not work."
        : "Back online."}
    </div>
  );
}
