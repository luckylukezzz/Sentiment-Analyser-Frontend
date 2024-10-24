import React, { useState } from "react";
import { useStateContext } from "../contexts/ContextProvider";
const darkenColor = (hex, percent) => {
  let num = parseInt(hex.slice(1), 16),
    amt = Math.round(2.55 * percent),
    R = (num >> 16) + amt,
    G = ((num >> 8) & 0x00FF) + amt,
    B = (num & 0x0000FF) + amt;
  return `#${(0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 
    + (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 
    + (B < 255 ? B < 1 ? 0 : B : 255))
    .toString(16).slice(1).toUpperCase()}`;
};


const AsinAnalytics = () => {
  const [asin, setAsin] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const { currentColor } = useStateContext();
  console.log(currentColor);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const response = await fetch("http://localhost:5000/run_task", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ asin }),
      });

      if (response.status === 202) {
        setSuccess(true);
      } else {
        throw new Error(`Error: ${response.status}`);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Product Analytics</h2>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Input Field */}
        <div>
          <input
            type="text"
            placeholder="Enter ASIN (e.g., B0CJG4PHDG)"
            value={asin}
            onChange={(e) => setAsin(e.target.value)}
            className={`
              w-full px-4 py-2 
              border rounded-md
              focus:outline-none focus:ring-2 focus:ring-blue-500
              disabled:bg-gray-100 disabled:cursor-not-allowed
              ${error ? "border-red-500" : "border-gray-300"}
            `}
            disabled={loading}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={!asin || loading}
          style={{
            backgroundColor: !asin || loading ? "gray" : currentColor,
            cursor: !asin || loading ? "not-allowed" : "pointer",
          }}
          className={`
              w-full px-4 py-2 rounded-md
              font-medium text-white
              transition-colors duration-200
            `}
          onMouseEnter={(e) => {
            if (!asin && !loading) return;
            e.target.style.backgroundColor = darkenColor(currentColor, 0.1); // Darkens color on hover
          }}
          onMouseLeave={(e) => {
            if (!asin && !loading) return;
            e.target.style.backgroundColor = currentColor;
          }}
        >
          <div className="flex items-center justify-center">
            {loading && <LoadingSpinner />}
            <span>{loading ? "Processing..." : "Get Analytics"}</span>
          </div>
        </button>

        {/* Error Message */}
        {error && (
          <div className="p-4 rounded-md bg-red-50 border border-red-200">
            <p className="text-sm text-red-600">{error}</p>
          </div>
        )}

        {/* Success Message */}
        {success && (
          <div className="p-4 rounded-md bg-green-50 border border-green-200">
            <p className="text-sm text-green-600">
              Request sent! the Product info will be analysed soon.
              please check back later.
            </p>
          </div>
        )}
      </form>
    </div>
  );
};

// Loading Spinner Component
const LoadingSpinner = () => (
  <svg
    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    />
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    />
  </svg>
);

export default AsinAnalytics;
