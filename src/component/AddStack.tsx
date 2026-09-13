import type { Dispatch, SetStateAction } from "react";
import type { ItoolType } from "../types/ToolType";

type AddStackProps = {
  selectedTools: ItoolType[];
  setSelectedTools: Dispatch<SetStateAction<ItoolType[]>>;
};

const AddStack = ({
  selectedTools,
  setSelectedTools,
}: AddStackProps) => {
  return (
    <div className="border border-gray-200 rounded-xl p-4 shadow-sm bg-white h-fit">

      {/* Header */}

      <h2 className="font-bold text-lg">
        Your Stack
      </h2>

      <p className="text-xs text-[#94A3B8] mt-1">
        {selectedTools.length} Technology Selected
      </p>

      {/* Selected Tools */}

      <div className="mt-4 space-y-3">

        {selectedTools.map((tool) => (
          <div
            key={tool.id}
            className="flex items-center justify-between border border-gray-200 rounded-lg p-2"
          >

            {/* Icon + Name */}

            <div className="flex items-center gap-2">

              <img
                src={tool.icon}
                alt={tool.name}
                className="w-8 h-8 object-contain"
              />

              <div>
                <h3 className="text-sm font-semibold">
                  {tool.name}
                </h3>

                <p className="text-[10px] text-gray-400">
                  {tool.category}
                </p>
              </div>

            </div>

            {/* Remove Button */}

            <button
              className="text-gray-400 hover:text-red-500"
              onClick={() => {
                setSelectedTools((previousTool) =>
                  previousTool.filter((selectedTool) => selectedTool.id !== tool.id)
                );
              }}
            >
              ✕
            </button>

          </div>
        ))}

      </div>

      {/* Remove All */}

      <button
        className="w-full border border-red-200 text-red-500 rounded-lg py-2 mt-6 text-sm"
        onClick={() => setSelectedTools([])}
      >
        Remove All
      </button>

    </div>
  );
};

export default AddStack;