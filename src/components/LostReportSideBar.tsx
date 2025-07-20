import { useState } from "react";
import Button from "./Button";

const MapComponent = () => {
  return (
    <iframe
      title="map"
      width="100%"
      height="200"
      frameBorder="0"
      className="rounded-md"
      src="https://maps.google.com/maps?q=Central%20Park,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
      allowFullScreen
    ></iframe>
  );
};

const InfoRow = ({ label, value }) => (
  <div className="flex justify-between">
    <span>{label}:</span>
    <span className="text-right min-w-[140px]">{value}</span>
  </div>
);

const LostReport = ({ onClose }) => {
  const [images, setImages] = useState([]);

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    if (images.length + files.length > 5) {
      alert("You can only upload up to 5 images.");
      return;
    }
    const newImages = files.map((file) => URL.createObjectURL(file));
    setImages((prev) => [...prev, ...newImages]);
  };

  const triggerFileInput = () => {
    document.getElementById("imageInput").click();
  };

  return (
    <div className="p-5 w-full max-w-[420px] mx-auto bg-white rounded-[12px] shadow-md">
      <div className="flex justify-between items-center mb-3">
        <h4 className="text-[16px] font-semibold">Lost Dog Report #48239</h4>
        <button
          onClick={onClose}
          className="text-gray-400 text-[28px] font-bold cursor-pointer"
        >
          &times;
        </button>
      </div>

      <div className="mb-4">
        <h5 className="text-[14px] font-bold text-gray-500 mb-2">
          Pet Information
        </h5>
        <div className="flex flex-col gap-2 text-sm font-medium">
          <InfoRow label="Name" value="Max" />
          <InfoRow label="Breed" value="Golden Retriever" />
          <InfoRow label="Color" value="Light Brown" />
          <InfoRow label="Gender" value="Male" />
          <InfoRow label="Unique Marks" value="Red collar, Short tail" />
        </div>
      </div>

      <div className="mb-4">
        <h5 className="text-[14px] font-bold text-gray-500 mb-2">
          Report Details
        </h5>
        <div className="flex flex-col gap-2 text-sm font-medium">
          <div className="flex justify-between items-center">
            <span>Status:</span>
            <span className="bg-red-100 text-red-600 px-3 py-0.5 rounded-full text-xs font-semibold">
              Lost
            </span>
          </div>
          <InfoRow label="Submitted by" value="Esther H." />
          <InfoRow label="Report Time" value="Jul 13, 2025, 4:45 PM" />
          <InfoRow label="Location" value="Central Park, NYC" />
        </div>
      </div>

      <div className="mb-4">
        <h5 className="text-[14px] font-bold text-gray-500 mb-2">
          Pin Location:
        </h5>
        <MapComponent />
      </div>

      <div className="mb-4">
        <h5 className="text-[14px] font-bold text-gray-500 mb-2">
          Pet Images:
        </h5>
        <div className="flex gap-3 flex-wrap">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Pet ${index + 1}`}
              className="w-[70px] h-[70px] object-cover rounded-md"
            />
          ))}

          {images.length < 5 && (
            <button
              onClick={triggerFileInput}
              className="w-[70px] h-[70px] flex items-center justify-center bg-gray-100 rounded-md border border-dashed hover:border-gray-400"
            >
              <span className="text-2xl font-bold text-gray-400">+</span>
            </button>
          )}
        </div>

        <input
          type="file"
          id="imageInput"
          className="hidden"
          multiple
          accept="image/*"
          onChange={handleImageUpload}
        />
      </div>

      <div className="flex justify-between gap-2 mt-3">
        <div className="w-full">
          <Button text="Approve Report" rounDed="rounded-[50px]" minWidth="w-full" />
        </div>
        <div className="w-full">
          <Button
            text="Mark as Reunited"
            rounDed="rounded-[50px]"
            bgColor="bg-white"
            border="border-[#D5D7DA]"
            textColor="text-[#252525]"
            minWidth="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default LostReport;
