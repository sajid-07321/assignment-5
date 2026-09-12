import React, { use } from "react";

interface ItoolType {
  id: number;
  name: string;
  category: string;
  description: string;
  icon?: string;
  rating: number;
  badge: string;
  level: string
}

interface ToolProps {
  toolsPromise: Promise<ItoolType[]>;
}

const ProductCard = ({ toolsPromise }: ToolProps) => {
  const tools = use(toolsPromise);

  return (
    <section className="container mx-auto py-5">
      {/* Heading */}
      <div>
        <h2 className="text-3xl font-bold">
          Explore the
          <span className="bg-[linear-gradient(90deg,#EC4899_0%,#8B5CF6_100%)] bg-clip-text text-transparent">
            Technologies
          </span>
        </h2>

        <p className="text-[#64748B] py-3">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      {/* Card + Stack */}

      <div className="grid grid-cols-4 gap-4 mt-6">
        {/* Technology Card */}

      <div className="col-span-3 grid grid-cols-3 gap-4">
   
      {tools.map((tool) => {
  return (
    <div
      key={tool.id}
      className="card bg-base-100 border border-gray-200 shadow-sm h-full"
    >

      <div className="card-body flex flex-col">

        {/* Icon + Badge */}
        <div className="flex items-center justify-between">

          <img
            src={tool.icon}
            alt={tool.name}
            className="w-10 h-10 object-contain"
          />

          <span className="text-xs px-3 py-1 rounded-full bg-green-50 text-green-600">
            {tool.badge}
          </span>

        </div>

        {/* Name */}
        <h2 className="card-title text-lg font-semibold">
          {tool.name}
        </h2>

        {/* Description */}
        <p className="text-sm text-[#64748B]">
          {tool.description}
        </p>

        {/* Category + Level + Rating */}
        <div className="flex items-center justify-between text-xs mt-4">

          <span className="bg-gray-100 px-2 py-1 rounded">
            {tool.category}
          </span>

          <span className="text-[#64748B]">
            {tool.level}
          </span>

          <span>
            ⭐ {tool.rating}
          </span>

        </div>

        {/* Button */}
        <button className="w-full bg-[#0F172A] text-white py-2 rounded-lg text-sm mt-auto">
          Add to Stack
        </button>

      </div>

    </div>
  );
})}

</div>

        {/* Stack */}

        <div className="col-span-1 bg-amber-400"></div>
      </div>
    </section>
  );
};

export default ProductCard;
