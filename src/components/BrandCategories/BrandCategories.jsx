import { useEffect, useState } from "react";
import ShowallCategories from "../ShowallCategories/ShowallCategories";

const BrandCategories = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    fetch("https://car-gladge-server-iowomn0wy-omar-faruks-projects.vercel.app/brandproducts/categoryitem")
      .then(res => res.json())
      .then(categories => {
        setCategory(categories);
      });
  }, []);
  return (
    <div className="md:mt-32 lg:mt-5  dark:text-white">
      <h2 className="text-center font-bold text-3xl p-10 mx-2 md:py-20">
        Brand new categories Are here...
      </h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {category.map((category) => (
        <div key={category._id}>
          <ShowallCategories category={category}></ShowallCategories>
        </div>
      ))}
        </div>
    </div>
  );
};

export default BrandCategories;