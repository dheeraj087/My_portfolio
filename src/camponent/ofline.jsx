import React, { useEffect, useState } from "react";

const OfflinePage = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  if (!isOnline) {

   
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fff0f0",
          color: "#b30000",
          textAlign: "center",
        }}
      >
        <h1>🔌 You’re Offline</h1>
        <p>Please check your internet connection.</p>
      </div>
    );
  }

  // 👇 ye part sirf online hone par dikhega
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#e8fff1",
        color: "#006400",
        textAlign: "center",
      }}
    >
      <h1>✅ You’re Online</h1>
      <p>Everything is working fine.</p>
    </div>
  );
};

export default OfflinePage;
