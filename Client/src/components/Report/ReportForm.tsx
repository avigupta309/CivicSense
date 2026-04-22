import { useEffect, useState } from "react";
import { X, MapPin } from "lucide-react";
import { Province, FormReport } from "../../types";
import {
  ISSUE_CATEGORIES,
  Provinces,
  districtsByProvince,
} from "../../mockData";
import { HandlePhotosUpload } from "./HandlePhotosUpload";
import { useForm } from "react-hook-form";
import { useMyLocation } from "./myLocation";
import axios from "axios";
interface ReportFormProps {
  setIssueForm: (data: boolean) => void;
  issueForm: boolean;
}

export default function ReportForm({
  issueForm,
  setIssueForm,
}: ReportFormProps) {
  const { handleSubmit, register, setValue } = useForm<FormReport>();
  const { location: currentLocation, getLocation } = useMyLocation();

  const [province, setProvince] = useState<Province>("Bagmati");
  const [photos, setPhotos] = useState<File[]>([]);

  const onSubmit = async (data: FormReport) => {
    const formData = new FormData();
    const id = "69e65501af366403dc72ed03";
    formData.append("category", data.category);
    formData.append("province", data.province);
    formData.append("district", data.district);
    formData.append("address", data.address);
    formData.append("description", data.description);
    formData.append("id", id);
    if (data.location) {
      formData.append("location", JSON.stringify(data.location));
    }

    photos.forEach((photo) => {
      formData.append("images", photo);
    });

    try {
      await axios.post("http://localhost:3000/api/report", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    } catch (error) {
      console.log("Cannot Submit the report ");
    }

    // const id = "69e65501af366403dc72ed03";
    // const formData = new FormData();
    // formData.append("category", data.category);
    // formData.append("province", data.province);
    // formData.append("district", data.district);
    // formData.append("address", data.address);
    // formData.append("description", data.description);
    // formData.append("id", id);

    // if (data.location) {
    //   formData.append("location", JSON.stringify(data.location));
    // }
    // photos.forEach((photo) => {
    //   formData.append("images", photo);
    // });
    // try {
    //   const response = await axios.post(
    //     "http://localhost:3000/api/report",
    //     formData,
    //     {
    //       headers: {
    //         "Content-Type": "multipart/form-data",
    //       },
    //     },
    //   );
    //   console.log(response);
    // } catch (error) {
    //   console.log("Cannot Submit the report ");
    // }
  };

  useEffect(() => {
    if (currentLocation) {
      setValue("location", {
        lat: currentLocation.lat,
        lng: currentLocation.lng,
      });
    }
  }, [currentLocation]);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col">
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-bold text-green-800">
            Report Environmental Issue
          </h2>
          <button
            onClick={() => {
              setIssueForm(!issueForm);
            }}
            className="p-2 hover:bg-stone-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-stone-600" />
          </button>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-6 space-y-6 overflow-y-auto"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">
                Issue Category
              </label>
              <select
                {...register("category")}
                className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                required
              >
                <option value="">Select a category</option>
                {ISSUE_CATEGORIES.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">
                Province
              </label>
              <select
                {...register("province")}
                value={province}
                onChange={(e) => {
                  setProvince(e.target.value as Province);
                }}
                className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                required
              >
                <option value="">Select a Province</option>
                {Provinces.map((prov) => (
                  <option key={prov} value={prov}>
                    {prov}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">
                District
              </label>
              <select
                {...register("district")}
                className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                required
              >
                <option value="">Select District</option>
                {districtsByProvince[province].map((dist) => (
                  <option key={dist} value={dist}>
                    {dist}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">
                Exact Address
              </label>
              <input
                {...register("address")}
                type="text"
                className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                placeholder="Street name, landmark, etc."
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-stone-700 mb-2">
              Description
            </label>
            <textarea
              {...register("description")}
              rows={4}
              className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none resize-none"
              placeholder="Provide detailed information about the environmental issue..."
              required
            />
          </div>

          <HandlePhotosUpload photos={photos} setPhotos={setPhotos} />
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-2">
              Location
            </label>
            <div className="flex items-center gap-3">
              <div className="flex-1 justify-between px-4 py-3 bg-stone-50 border border-stone-300 rounded-lg text-sm text-stone-600">
                <div className="flex items-center gap-2 mb-1">
                  <MapPin className="w-4 h-4" />

                  <div className="flex gap-6">
                    {currentLocation ? (
                      <>
                        <p>Latitude: {currentLocation.lat.toFixed(4)}</p>
                        <p>Longitude: {currentLocation.lng.toFixed(4)}</p>
                      </>
                    ) : (
                      <p>Click "Use My Location"</p>
                    )}
                  </div>
                </div>
              </div>
              <button
                type="button"
                onClick={getLocation}
                className="px-4 py-3 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors font-medium whitespace-nowrap"
              >
                Use My Location
              </button>
            </div>
          </div>

          <div className="flex justify-end space-x-3 pt-4 border-t border-stone-200">
            <button
              type="button"
              onClick={() => {
                setIssueForm(!issueForm);
              }}
              className="px-6 py-3 border border-stone-300 text-stone-700 rounded-lg hover:bg-stone-50 transition-colors font-medium"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
            >
              Submit Report
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
