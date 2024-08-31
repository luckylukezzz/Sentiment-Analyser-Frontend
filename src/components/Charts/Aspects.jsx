import { aspectList } from "../../data/dummy";
import Button from "../Button";
import { useStateContext } from "../../contexts/ContextProvider";

const Aspects = () => {
  const { currentColor } = useStateContext();
  return (
    <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl m-3 ">
      <div className="flex justify-between items-center gap-2">
        <p className="text-xl font-semibold">Product Aspects</p>
        {/* <DropDown currentMode={currentMode} /> */}
      </div>
      <div className="mt-10 w-72 md:w-400">
        {aspectList.map((item) => (
          <div key={item.title} className="flex justify-between mt-4">
            <div className="flex gap-4">
              <button
                type="button"
                style={{
                  color: item.iconColor,
                  backgroundColor: item.iconBg,
                }}
                className="text-2xl rounded-lg p-4 hover:drop-shadow-xl"
              >
                {item.icon}
              </button>
              <div>
                <p className="text-md font-semibold">{item.title}</p>
                <p
                  className={`text-sm ${
                    item.sentiment === "Positive"
                      ? "text-green-600"
                      : item.sentiment === "Negative"
                      ? "text-red-600"
                      : "text-cyan-600"
                  }`}
                >
                  {item.sentiment}
                </p>
              </div>
            </div>
            <p
              className={`text-sm ${
                item.sentiment === "Positive"
                  ? "text-green-600"
                  : item.sentiment === "Negative"
                  ? "text-red-600"
                  : "text-cyan-600"
              }`}
            >
              {item.score}
            </p>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center mt-5 border-t-1 border-color">
        <div className="mt-3">
          <Button
            color="white"
            bgColor={currentColor}
            text="How these generated?"
            borderRadius="10px"
          />
        </div>
      </div>
    </div>
  );
};

export default Aspects;
