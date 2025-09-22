import categories from "./CategoriesData.js";

import {
  FaTv,
  FaTshirt,
  FaBook,
  FaHome,
  FaFootballBall,
  FaCar,
  FaGamepad,
  FaRegGem,
  FaPencilRuler,
  FaCat,
  FaBabyCarriage,
  FaGuitar,
  FaPaintBrush,
  FaWrench,
  FaCouch,
  FaPeopleCarry,
} from "react-icons/fa";

const CategorySelection = () => {
  return (
    <>
      <div className="mb-8 hidden md:block">
        <h3 className="font-semibold mb-4">Browse Categories</h3>
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory px-2">
          {categories.map((c, i) => (
            <div
              key={i}
              onClick={() => handleCategoryClick(c.name)}
              className={`flex-shrink-0 w-24 border rounded flex flex-col items-center justify-center p-4 cursor-pointer transition hover:bg-gray-100 snap-start
                ${
                  selectedCategory === c.name ? "bg-sky-100 border-sky-400" : ""
                }`}
            >
              {c.icon}

              <span className="text-sm text-center">{c.name}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CategorySelection;
