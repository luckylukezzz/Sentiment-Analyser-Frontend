// import React, { useState } from "react";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
//   ReferenceLine,
//   Cell,
// } from "recharts";
// import { useStateContext } from "../../contexts/ContextProvider";

// const LIMEExplanationGraph = () => {
//   const { currentMode } = useStateContext(); // Access currentMode from context

//   const [selectedReview, setSelectedReview] = useState("review1");
//   const [selectedAspect, setSelectedAspect] = useState("camera");

//   const reviews = {
//     review1: {
//       text: "This phone has an amazing camera. The quality is outstanding, but the price is too high.",
//       aspects: ["camera", "quality", "price", "overall"],
//     },
//     review2: {
//       text: "Fast shipping, average battery life. The screen is just okay.",
//       aspects: ["shipping", "battery", "screen", "overall"],
//     },
//   };

//   const explanations = {
//     review1: {
//       camera: {
//         sentiment: "positive",
//         features: [
//           { feature: "amazing", weight: 0.35 },
//           { feature: "phone", weight: 0.1 },
//           { feature: "camera", weight: 0.3 },
//           { feature: "this", weight: -0.05 },
//           { feature: "has", weight: 0.02 },
//         ],
//       },
//       quality: {
//         sentiment: "positive",
//         features: [
//           { feature: "quality", weight: 0.4 },
//           { feature: "outstanding", weight: 0.35 },
//           { feature: "is", weight: -0.05 },
//           { feature: "the", weight: -0.02 },
//         ],
//       },
//       price: {
//         sentiment: "negative",
//         features: [
//           { feature: "price", weight: -0.2 },
//           { feature: "high", weight: -0.3 },
//           { feature: "too", weight: -0.25 },
//           { feature: "is", weight: -0.05 },
//         ],
//       },
//       overall: {
//         sentiment: "neutral",
//         features: [
//           { feature: "amazing", weight: 0.3 },
//           { feature: "camera", weight: 0.25 },
//           { feature: "quality", weight: 0.2 },
//           { feature: "outstanding", weight: 0.15 },
//           { feature: "price", weight: -0.2 },
//           { feature: "high", weight: -0.15 },
//         ],
//       },
//     },
//     review2: {
//       shipping: {
//         sentiment: "positive",
//         features: [
//           { feature: "fast", weight: 0.45 },
//           { feature: "shipping", weight: 0.4 },
//         ],
//       },
//       battery: {
//         sentiment: "neutral",
//         features: [
//           { feature: "average", weight: 0.05 },
//           { feature: "life", weight: 0.02 },
//           { feature: "battery", weight: 0.01 },
//         ],
//       },
//       screen: {
//         sentiment: "neutral",
//         features: [
//           { feature: "okay", weight: 0.1 },
//           { feature: "just", weight: -0.05 },
//           { feature: "screen", weight: 0.02 },
//           { feature: "is", weight: 0.01 },
//         ],
//       },
//       overall: {
//         sentiment: "neutral",
//         features: [
//           { feature: "fast", weight: 0.25 },
//           { feature: "shipping", weight: 0.2 },
//           { feature: "average", weight: 0.05 },
//           { feature: "battery", weight: 0.02 },
//           { feature: "okay", weight: 0.1 },
//           { feature: "screen", weight: 0.02 },
//         ],
//       },
//     },
//   };

//   const data = explanations[selectedReview][selectedAspect].features.sort(
//     (a, b) => Math.abs(b.weight) - Math.abs(a.weight)
//   );
//   const sentiment = explanations[selectedReview][selectedAspect].sentiment;

//   const maxAbsWeight = Math.max(...data.map((item) => Math.abs(item.weight)));

//   const getSentimentColor = (sentiment) => {
//     switch (sentiment) {
//       case "positive":
//         return "#4CAF50";
//       case "negative":
//         return "#F44336";
//       case "neutral":
//         return "#FFA726";
//       default:
//         return "#9E9E9E";
//     }
//   };

//   return (
//     <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl m-3 ">
//       <div className="max-w-4xl mx-auto p-6 border border-gray-300 rounded-lg">
//         <h2 className="text-2xl font-bold mb-6">
//           LIME Explanation for Selected Review and Aspect
//         </h2>
//         <div className="mb-6 space-y-4">
//           <div>
//             <label htmlFor="review-select" className="block mb-2 font-semibold">
//               Select Review:
//             </label>
//             <select
//               id="review-select"
//               value={selectedReview}
//               onChange={(e) => {
//                 setSelectedReview(e.target.value);
//                 setSelectedAspect(reviews[e.target.value].aspects[0]);
//               }}
//               className={`w-full p-2 border rounded dark:bg-[#414752]
//                             ${
//                             currentMode === "Dark"
//                                 ? " border-gray-600 text-white"
//                                 : "bg-white border-gray-300 text-black"
//                             }`}
//             >
//               {Object.keys(reviews).map((review) => (
//                 <option key={review} value={review}>
//                   {review}
//                 </option>
//               ))}
//             </select>
//           </div>
//           <div>
//             <label htmlFor="aspect-select" className="block mb-2 font-semibold">
//               Select Aspect:
//             </label>
//             <select
//               id="aspect-select"
//               value={selectedAspect}
//               onChange={(e) => setSelectedAspect(e.target.value)}
//               className={`w-full p-2 border rounded dark:bg-[#414752]
//                             ${
//                             currentMode === "Dark"
//                                 ? " border-gray-600 text-white"
//                                 : "bg-white border-gray-300 text-black"
//                             }`}
//             >
//               {reviews[selectedReview].aspects.map((aspect) => (
//                 <option key={aspect} value={aspect}>
//                   {aspect}
//                 </option>
//               ))}
//             </select>
//           </div>
//         </div>
//         <p
//           className={`mb-6 p-4 rounded dark:bg-[#414752]
//             ${
//                 currentMode === "Dark" ? " text-white" : "bg-gray-100 text-black"
//             }`}
//         >
//           <strong>Review:</strong> {reviews[selectedReview].text}
//         </p>

//         <p className="mb-4 font-semibold">
//           Sentiment:{" "}
//           <span style={{ color: getSentimentColor(sentiment) }}>
//             {sentiment.charAt(0).toUpperCase() + sentiment.slice(1)}
//           </span>
//         </p>
//         <div className="h-96">
//           <ResponsiveContainer width="100%" height="100%">
//             <BarChart
//               data={data}
//               layout="vertical"
//               margin={{ top: 20, right: 30, left: 100, bottom: 5 }}
//             >
//               <XAxis
//                 type="number"
//                 domain={[-maxAbsWeight, maxAbsWeight]}
//                 stroke={currentMode === "Dark" ? "#ffffff" : "#000000"} // Use currentMode to change axis color
//               />
//               <YAxis
//                 dataKey="feature"
//                 type="category"
//                 width={80}
//                 stroke={currentMode === "Dark" ? "#ffffff" : "#000000"} // Use currentMode to change axis color
//               />
//               <Tooltip
//                 formatter={(value, name, props) => [
//                   `${value.toFixed(4)}`,
//                   "Weight",
//                 ]}
//                 labelFormatter={(label) => `Feature: ${label}`}
//               />
//               <Legend />
//               <ReferenceLine x={0} stroke="#000" />
//               <Bar dataKey="weight" name="Feature Importance">
//                 {data.map((entry, index) => (
//                   <Cell
//                     key={`cell-${index}`}
//                     fill={entry.weight < 0 ? "#F44336" : "#4CAF50"}
//                   />
//                 ))}
//               </Bar>
//             </BarChart>
//           </ResponsiveContainer>
//         </div>
//         <div className="mt-6 text-center">
//           <span className="inline-block w-4 h-4 bg-[#4CAF50] mr-2"></span>
//           <span className="mr-4">Supports Sentiment</span>
//           <span className="inline-block w-4 h-4 bg-[#F44336] mr-2"></span>
//           <span>Opposes Sentiment</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LIMEExplanationGraph;

import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
  Cell,
} from "recharts";
import { useStateContext } from "../../contexts/ContextProvider";

const LIMEExplanationGraph = () => {
  const { currentMode } = useStateContext();
  const [selectedReview, setSelectedReview] = useState("review1");
  const [selectedAspect, setSelectedAspect] = useState("camera");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const reviews = {
    review1: {
      text: "This phone has an amazing camera. The quality is outstanding, but the price is too high.",
      aspects: ["camera", "quality", "price", "overall"],
    },
    review2: {
      text: "Fast shipping, average battery life. The screen is just okay.",
      aspects: ["shipping", "battery", "screen", "overall"],
    },
  };

  const explanations = {
    review1: {
      camera: {
        sentiment: "positive",
        features: [
          { feature: "amazing", weight: 0.35 },
          { feature: "phone", weight: 0.1 },
          { feature: "camera", weight: 0.3 },
          { feature: "this", weight: -0.05 },
          { feature: "has", weight: 0.02 },
        ],
      },
      quality: {
        sentiment: "positive",
        features: [
          { feature: "quality", weight: 0.4 },
          { feature: "outstanding", weight: 0.35 },
          { feature: "is", weight: -0.05 },
          { feature: "the", weight: -0.02 },
        ],
      },
      price: {
        sentiment: "negative",
        features: [
          { feature: "price", weight: -0.2 },
          { feature: "high", weight: -0.3 },
          { feature: "too", weight: -0.25 },
          { feature: "is", weight: -0.05 },
        ],
      },
      overall: {
        sentiment: "neutral",
        features: [
          { feature: "amazing", weight: 0.3 },
          { feature: "camera", weight: 0.25 },
          { feature: "quality", weight: 0.2 },
          { feature: "outstanding", weight: 0.15 },
          { feature: "price", weight: -0.2 },
          { feature: "high", weight: -0.15 },
        ],
      },
    },
    review2: {
      shipping: {
        sentiment: "positive",
        features: [
          { feature: "fast", weight: 0.45 },
          { feature: "shipping", weight: 0.4 },
        ],
      },
      battery: {
        sentiment: "neutral",
        features: [
          { feature: "average", weight: 0.05 },
          { feature: "life", weight: 0.02 },
          { feature: "battery", weight: 0.01 },
        ],
      },
      screen: {
        sentiment: "neutral",
        features: [
          { feature: "okay", weight: 0.1 },
          { feature: "just", weight: -0.05 },
          { feature: "screen", weight: 0.02 },
          { feature: "is", weight: 0.01 },
        ],
      },
      overall: {
        sentiment: "neutral",
        features: [
          { feature: "fast", weight: 0.25 },
          { feature: "shipping", weight: 0.2 },
          { feature: "average", weight: 0.05 },
          { feature: "battery", weight: 0.02 },
          { feature: "okay", weight: 0.1 },
          { feature: "screen", weight: 0.02 },
        ],
      },
    },
  };

  const data = explanations[selectedReview][selectedAspect].features.sort(
    (a, b) => Math.abs(b.weight) - Math.abs(a.weight)
  );
  const sentiment = explanations[selectedReview][selectedAspect].sentiment;

  const maxAbsWeight = Math.max(...data.map((item) => Math.abs(item.weight)));

  const getSentimentColor = (sentiment) => {
    switch (sentiment) {
      case "positive":
        return "#4CAF50";
      case "negative":
        return "#F44336";
      case "neutral":
        return "#FFA726";
      default:
        return "#9E9E9E";
    }
  };

  return (
    <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-4 md:p-6 rounded-2xl m-2 md:m-3">
      <div className="max-w-4xl mx-auto p-4 md:p-6 border border-gray-300 rounded-lg">
        <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">
          LIME Explanation for Selected Review and Aspect
        </h2>
        <div className="mb-4 md:mb-6 space-y-4">
          <div>
            <label htmlFor="review-select" className="block mb-2 font-semibold">
              Select Review:
            </label>
            <select
              id="review-select"
              value={selectedReview}
              onChange={(e) => {
                setSelectedReview(e.target.value);
                setSelectedAspect(reviews[e.target.value].aspects[0]);
              }}
              className={`w-full p-2 border rounded dark:bg-[#414752]
                ${
                  currentMode === "Dark"
                    ? "border-gray-600 text-white"
                    : "bg-white border-gray-300 text-black"
                }`}
            >
              {Object.keys(reviews).map((review) => (
                <option key={review} value={review}>
                  {review}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="aspect-select" className="block mb-2 font-semibold">
              Select Aspect:
            </label>
            <select
              id="aspect-select"
              value={selectedAspect}
              onChange={(e) => setSelectedAspect(e.target.value)}
              className={`w-full p-2 border rounded dark:bg-[#414752]
                ${
                  currentMode === "Dark"
                    ? "border-gray-600 text-white"
                    : "bg-white border-gray-300 text-black"
                }`}
            >
              {reviews[selectedReview].aspects.map((aspect) => (
                <option key={aspect} value={aspect}>
                  {aspect}
                </option>
              ))}
            </select>
          </div>
        </div>
        <p
          className={`mb-4 md:mb-6 p-3 md:p-4 rounded dark:bg-[#414752]
          ${currentMode === "Dark" ? "text-white" : "bg-gray-100 text-black"}`}
        >
          <strong>Review:</strong> {reviews[selectedReview].text}
        </p>

        <p className="mb-4 font-semibold">
          Sentiment:{" "}
          <span style={{ color: getSentimentColor(sentiment) }}>
            {sentiment.charAt(0).toUpperCase() + sentiment.slice(1)}
          </span>
        </p>
        <div className={`${isMobile ? "h-64" : "h-96"}`}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              layout={isMobile ? "horizontal" : "vertical"}
              margin={
                isMobile
                  ? { top: 5, right: 30, left: 20, bottom: 5 }
                  : { top: 20, right: 30, left: 100, bottom: 5 }
              }
            >
              {isMobile ? (
                <XAxis
                  dataKey="feature"
                  type="category"
                  angle={-45}
                  textAnchor="end"
                  interval={0}
                  height={80}
                  stroke={currentMode === "Dark" ? "#ffffff" : "#000000"}
                />
              ) : (
                <XAxis
                  type="number"
                  domain={[-maxAbsWeight, maxAbsWeight]}
                  stroke={currentMode === "Dark" ? "#ffffff" : "#000000"}
                />
              )}
              {isMobile ? (
                <YAxis
                  type="number"
                  domain={[-maxAbsWeight, maxAbsWeight]}
                  stroke={currentMode === "Dark" ? "#ffffff" : "#000000"}
                />
              ) : (
                <YAxis
                  dataKey="feature"
                  type="category"
                  width={80}
                  stroke={currentMode === "Dark" ? "#ffffff" : "#000000"}
                />
              )}
              <Tooltip
                formatter={(value, name, props) => [
                  `${value.toFixed(4)}`,
                  "Weight",
                ]}
                labelFormatter={(label) => `Feature: ${label}`}
              />
              <Legend />
              <ReferenceLine x={0} stroke="#000" />
              <Bar dataKey="weight" name="Feature Importance">
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={entry.weight < 0 ? "#F44336" : "#4CAF50"}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4 md:mt-6 text-center">
          <span className="inline-block w-4 h-4 bg-[#4CAF50] mr-2"></span>
          <span className="mr-4">Supports Sentiment</span>
          <span className="inline-block w-4 h-4 bg-[#F44336] mr-2"></span>
          <span>Opposes Sentiment</span>
        </div>
      </div>
    </div>
  );
};

export default LIMEExplanationGraph;
