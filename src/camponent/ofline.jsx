import React, { useEffect, useState } from "react";

const OfflinePage = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => {
      console.log("✅ Online");
      setIsOnline(true);
    };

    const handleOffline = () => {
      console.log("❌ Offline");
      setIsOnline(false);
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // Cleanup
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        backgroundColor: isOnline ? "#e8fff1" : "#fff0f0",
        color: isOnline ? "#006400" : "#b30000",
        transition: "all 0.3s ease-in-out",
      }}
    >
      {isOnline ? (
        <>
          <h1>✅ You’re Online</h1>
          <p>Internet connection is active.</p>
        </>
      ) : (
        <>
          <h1>🔌 You’re Offline</h1>
          <p>Please check your internet connection.</p>
        </>
      )}
    </div>
  );
};

export default OfflinePage;
