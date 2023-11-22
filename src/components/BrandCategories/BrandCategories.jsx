import { useEffect, useState } from "react";
import ShowallCategories from "../ShowallCategories/ShowallCategories";

const BrandCategories = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/categoryitem")
      .then((res) => res.json())
      .then((categories) => {
        setCategory(categories);
      });
  }, []);
  return (
    <div>
      <h2 className="text-center font-bold text-3xl mt-5 mx-2 mb-5">
        Brand new categories Are here...
      </h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
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
