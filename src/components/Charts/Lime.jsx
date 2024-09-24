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
  const [selectedAspect, setSelectedAspect] = useState("quality");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const aspects = [ "quality", "price", "shipping","customer_service","warranty"];
  const explanations = {
    "review1": {
        "text": "perfect",
        "price": {
            "features": [
                {
                    "weight": 0.0034,
                    "feature": "perfect"
                }
            ],
            "sentiment": "positive"
        },
        "quality": {
            "features": [
                {
                    "weight": 0.008,
                    "feature": "perfect"
                }
            ],
            "sentiment": "positive"
        },
        "shipping": {
            "features": [
                {
                    "weight": 0.0159,
                    "feature": "perfect"
                }
            ],
            "sentiment": "positive"
        },
        "warranty": {
            "features": [
                {
                    "weight": 0.0064,
                    "feature": "perfect"
                }
            ],
            "sentiment": "positive"
        },
        "customer_service": {
            "features": [
                {
                    "weight": 0.0159,
                    "feature": "perfect"
                }
            ],
            "sentiment": "positive"
        }
    },
    "review2": {
        "text": "I really loved",
        "price": {
            "features": [
                {
                    "weight": 0.0984,
                    "feature": "loved"
                },
                {
                    "weight": 0.0885,
                    "feature": "really"
                },
                {
                    "weight": -0.0282,
                    "feature": "I"
                }
            ],
            "sentiment": "positive"
        },
        "quality": {
            "features": [
                {
                    "weight": 0.0401,
                    "feature": "loved"
                },
                {
                    "weight": 0.0083,
                    "feature": "really"
                },
                {
                    "weight": 0.0071,
                    "feature": "I"
                }
            ],
            "sentiment": "positive"
        },
        "shipping": {
            "features": [
                {
                    "weight": 0.4235,
                    "feature": "loved"
                },
                {
                    "weight": 0.2124,
                    "feature": "really"
                },
                {
                    "weight": 0.1799,
                    "feature": "I"
                }
            ],
            "sentiment": "positive"
        },
        "warranty": {
            "features": [
                {
                    "weight": 0.2865,
                    "feature": "loved"
                },
                {
                    "weight": 0.1917,
                    "feature": "I"
                },
                {
                    "weight": 0.1421,
                    "feature": "really"
                }
            ],
            "sentiment": "positive"
        },
        "customer_service": {
            "features": [
                {
                    "weight": 0.0863,
                    "feature": "loved"
                },
                {
                    "weight": 0.0628,
                    "feature": "I"
                },
                {
                    "weight": 0.0489,
                    "feature": "really"
                }
            ],
            "sentiment": "positive"
        }
    }
}

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
                setSelectedAspect(aspects[0]);
              }}
              className={`w-full p-2 border rounded dark:bg-[#414752]
                ${
                  currentMode === "Dark"
                    ? "border-gray-600 text-white"
                    : "bg-white border-gray-300 text-black"
                }`}
            >
              {Object.keys(explanations).map((review) => (
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
              {aspects.map((aspect) => (
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
          <strong>Review:</strong> {explanations[selectedReview].text}
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
