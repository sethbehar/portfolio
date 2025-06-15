// src/components/BackButton.tsx
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function BackButton() {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(-1)}
      className="
        fixed top-3 left-3
        z-1
        bg-white bg-opacity-90
        p-2
        rounded-full
        shadow-md
        hover:shadow-2xl
        hover:shadow-black
        transition
        duration-300
        cursor-pointer
      "
    >
      <ArrowLeft className="w-5 h-5 text-gray-700" />
    </button>
  );
}
