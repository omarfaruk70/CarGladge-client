import { useLoaderData, useParams } from "react-router-dom";

const CarDetails = () => {
  const allData = useLoaderData();
  const { id } = useParams();
  const singleData = allData.find((data) => data._id === id);
  const { name, brand_name, img, price, ratings, } = singleData;
  console.log(name, brand_name, img, price, ratings);

  return (
    <div className="max-w-2xl mx-auto m-10">
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure>
          <img className="w-full" src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title"> Name:  {name}</h2>
          <h2 className="card-title">Brand:  {brand_name}</h2>
          <h2 className="card-title">Price:  {price} $</h2>
          <p>
            A cheerful luxury car is not just a mode of transportation; it is a
            delightful journey wrapped in opulence. These cars combine the
            thrill of driving with a joyous ambiance, featuring plush interiors
            adorned with vibrant colors, ergonomic designs, and the latest
            entertainment systems.{" "}
          </p>
            <button className="btn h-5 w-1/2 mx-auto btn-primary">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
