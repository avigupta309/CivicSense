import { useEffect, useState } from "react";
import { Wind, Droplets, Eye, Gauge, Search } from "lucide-react";
import axios from "axios";
import { WeatherResponse } from "../../types";
import { toast } from "react-toastify";

export const WeatherForecast = () => {
  const [searchInput, setSearchInput] = useState<string>("birgunj");
  const [weather, setWeather] = useState<WeatherResponse>();
  const [icon, setIcon] = useState<string>("");
  async function handleWeatherForecat() {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&appid=b269285f8d27c66632175782a28f9c37&units=metric`,
      );
      setWeather(response.data);
      toast.success(`Exploring ${searchInput}`);
      console.log(response.data);
      setIcon(response.data.weather[0].icon);
    } catch (error) {
      toast.error("Plz Type Valid Location !!");
    }
  }
  useEffect(() => {
    handleWeatherForecat();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-gray-50 p-4 mt-14">
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-100/30 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-gray-100/40 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-2xl mx-auto relative z-10">
        <div className="text-center mb-10">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-2 tracking-tight">
            Weather <span className="text-green-600">Forecast</span>
          </h1>
          <p className="text-gray-600 text-lg">
            Search for any city to get current weather
          </p>
        </div>

        <div className="flex gap-3 mb-10">
          <div className="flex-1 relative group">
            <input
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Enter city name..."
              className="w-full px-6 py-4 bg-white border-2 border-green-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300 shadow-sm hover:border-green-300"
            />
            <Search className="absolute right-4 top-4 w-5 h-5 text-gray-400" />
          </div>
          <button
            onClick={handleWeatherForecat}
            className="px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold rounded-xl transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95"
          >
            Search
          </button>
        </div>

        {weather && (
          <div className="animate-in fade-in zoom-in-95 duration-500">
            <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-green-100 hover:border-green-200 transition-all duration-300">
              <div className="border-b-2 border-green-100 pb-6 mb-8">
                <h2 className="text-4xl font-bold text-gray-900 mb-2">
                  {weather.name}
                  <span className="text-green-600">_{weather.sys.country}</span>
                </h2>
                <p className="text-gray-600 capitalize text-lg">
                  {weather.weather[0].description}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="flex flex-col items-center justify-center bg-gradient-to-br from-green-50 to-white rounded-2xl p-8 border border-green-100">
                  <img
                    className="w-28 h-28"
                    src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
                    alt="Weather Icon"
                  />
                  <div className="text-center">
                    <div className="text-8xl font-bold text-gray-900 mb-2">
                      {weather.main.temp}°
                    </div>
                    <div className="text-gray-600 text-lg">
                      Feels like
                      <span className="text-green-600 font-semibold">
                        {weather.main.feels_like}°
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-center bg-gray-50 rounded-2xl p-8 border border-gray-200">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4 capitalize">
                    {weather.weather[0].description}
                  </h3>
                  <p className="text-gray-700 text-base leading-relaxed mb-6">
                    {weather.main.temp > 30
                      ? "The weather is warm today."
                      : "The Weather is cool today"}
                  </p>
                  <div className="w-16 h-1 bg-gradient-to-r from-green-500 to-transparent rounded-full"></div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white border-2 border-blue-100 rounded-xl p-5 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 group cursor-pointer">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-gray-600 text-sm font-semibold uppercase tracking-wide">
                      Humidity
                    </span>
                    <Droplets className="w-5 h-5 text-blue-500 group-hover:scale-110 transition-transform" />
                  </div>
                  <p className="text-3xl font-bold text-gray-900">
                    {weather.main.humidity}%
                  </p>
                </div>

                <div className="bg-white border-2 border-cyan-100 rounded-xl p-5 hover:border-cyan-300 hover:bg-cyan-50 transition-all duration-300 group cursor-pointer">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-gray-600 text-sm font-semibold uppercase tracking-wide">
                      Wind Speed
                    </span>
                    <Wind className="w-5 h-5 text-cyan-500 group-hover:scale-110 transition-transform" />
                  </div>
                  <p className="text-3xl font-bold text-gray-900">
                    {weather.wind.speed}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">m/s</p>
                </div>

                <div className="bg-white border-2 border-green-100 rounded-xl p-5 hover:border-green-300 hover:bg-green-50 transition-all duration-300 group cursor-pointer">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-gray-600 text-sm font-semibold uppercase tracking-wide">
                      Visibility
                    </span>
                    <Eye className="w-5 h-5 text-green-500 group-hover:scale-110 transition-transform" />
                  </div>
                  <p className="text-3xl font-bold text-gray-900">
                    {weather.visibility}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">km</p>
                </div>

                <div className="bg-white border-2 border-orange-100 rounded-xl p-5 hover:border-orange-300 hover:bg-orange-50 transition-all duration-300 group cursor-pointer">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-gray-600 text-sm font-semibold uppercase tracking-wide">
                      Pressure
                    </span>
                    <Gauge className="w-5 h-5 text-orange-500 group-hover:scale-110 transition-transform" />
                  </div>
                  <p className="text-3xl font-bold text-gray-900">
                    {weather.main.pressure}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">hPa</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
