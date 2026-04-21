import {  useState } from "react";
interface locationProps {
  lat: number;
  lng: number;
}

export const useMyLocation = () => {
  const [location, setLocation] = useState<locationProps|null>(null);
  const getLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation not supported");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (error) => {
        console.log("Location error:", error);

        if (error.code === 1) {
          alert("Permission denied. Please allow location access.");
        } else if (error.code === 2) {
          alert("Location unavailable.");
        } else if (error.code === 3) {
          alert("Location request timed out.");
        } else {
          alert("Unable to retrieve location");
        }
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      },
    );
  };
  return { location, getLocation };
};
