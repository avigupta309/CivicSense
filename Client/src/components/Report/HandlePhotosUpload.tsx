import { Upload, X } from "lucide-react";
import { useEffect, useState } from "react";

interface photosUploadProps {
  photos: File[];
  setPhotos: React.Dispatch<React.SetStateAction<File[]>>;
}

export const HandlePhotosUpload = ({
  photos,
  setPhotos,
}: photosUploadProps) => {
  const [preview, setPreview] = useState<string[]>([]);
  const submitPhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && photos.length < 3) {
      const fileArray = Array.from(files).slice(0, 3 - photos.length);
      setPhotos((prev) => [...prev, ...fileArray]);
      const previews = fileArray.map((file) => URL.createObjectURL(file));
      setPreview((prev) => [...prev, ...previews]);
    }
  };

  function removePhoto(index: number) {
    URL.revokeObjectURL(preview[index]);
    setPhotos(photos.filter((_, i) => i !== index));
    setPreview(preview.filter((_, i) => i !== index));
  }
  useEffect(() => {
    return () => {
      preview.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [preview]);

  return (
    <div>
      <label className="block text-sm font-medium text-stone-700 mb-2">
        Photos (up to 3)
      </label>
      <div className="space-y-3">
        {photos.length < 3 && (
          <label className="flex items-center justify-center w-full h-32 border-2 border-dashed border-stone-300 rounded-lg cursor-pointer hover:border-green-500 transition-colors">
            <div className="text-center">
              <Upload className="w-8 h-8 text-stone-400 mx-auto mb-2" />
              <p className="text-sm text-stone-600">
                Click to upload or drag and drop
              </p>
              <p className="text-xs text-stone-400 mt-1">
                {3 - photos.length} slots remaining (PNG, JPG up to 10MB)
              </p>
            </div>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={submitPhoto}
              className="hidden"
            />
          </label>
        )}

        {photos.length > 0 && (
          <div className="grid grid-cols-3 gap-3">
            {preview.map((photo, index) => (
              <div key={index} className="relative group">
                <img
                  src={photo}
                  alt={`Upload ${index + 1}`}
                  className="w-full h-32 object-cover rounded-lg"
                />
                <button
                  type="button"
                  onClick={() => removePhoto(index)}
                  className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
