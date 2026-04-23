import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
// import { mockReports } from "../mockData";
import { categoryIcons, categoryColors, Report } from "../types";
import L from "leaflet";
import { renderToString } from "react-dom/server";
import { AlertCircle } from "lucide-react";

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import { useEffect, useState } from "react";
import axios from "axios";

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const createCategoryIcon = (category: string) => {
  const Icon = categoryIcons[category] || AlertCircle;
  const color = categoryColors[category] || "bg-stone-500";
  return L.divIcon({
    className: "custom-marker",
    html: renderToString(
      <div
        className={`w-10 h-10 ${color} rounded-full flex items-center justify-center shadow-lg border-2 border-white`}
      >
        <Icon className="w-5 h-5 text-white" />
      </div>,
    ),
    iconSize: [40, 40],
    iconAnchor: [20, 20],
  });
};

export const MapComponent: React.FC = () => {
  const [reports, setReports] = useState<Report[]>([]);
  useEffect(() => {
    async function extractReport() {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/report/viewAllReport",
        );
        setReports(response.data.data);
      } catch (error) {
        console.log("cannot extraxt the report");
      }
    }
    extractReport();
  }, []);

  return (
    <div className="fixed inset-0 z-0 h-full w-full pt-14">
      <MapContainer
        center={[27.025, 84.886]}
        zoom={7.3}
        scrollWheelZoom={false}
        style={{ height: "100vh", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />

        {reports.length > 0 &&
          reports.map((report,i) => (
            <Marker
              key={i}
              position={[report.location.lat, report.location.lng]}
              icon={createCategoryIcon(report.category)}
            >
              <Popup>
                <div className="space-y-1">
                  <h3 className="font-semibold">{report.category}</h3>
                  <p className="text-sm">{report.address}</p>
                  <p className="text-xs text-gray-500">
                    {report.district}, {report.province}
                  </p>
                </div>
              </Popup>
            </Marker>
          ))}
      </MapContainer>
    </div>
  );
};
