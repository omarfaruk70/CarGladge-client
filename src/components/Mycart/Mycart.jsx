import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
const Mycart = () => {
  const loadedData = useLoaderData();
  const [mycart, setMycart] = useState(loadedData);
  const handleDeletefromMycart = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://car-gladge-server-rn147lnd5-omar-faruks-projects.vercel.app/mycart/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const remaining = mycart.filter((cart) => cart._id !== id);
              setMycart(remaining);
            }
          });
      }
    });
  };
  return (
    <div className="mx-5 my-10">
      <Helmet>
        <title>CarGladge | My Cart</title>
      </Helmet>
      {mycart?.length > 0 ? (
        <div className=" grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 mx-8">
          {mycart.map((data) => (
            <div key={data._id}>
              <div className="card lg:w-96 glass">
                <figure>
                  <img className="w-full" src={data.img} alt="car!" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Name: {data.name}</h2>
                  <h2 className="card-title">Brand Name: {data.brand_name}</h2>
                  <p>How to park your car at your garage?</p>
                  <p>Price: {data.price} $</p>
                  <p>Ratings: {data.ratings}</p>
                  <div className="card-actions justify-center">
                    <button
                      onClick={() => handleDeletefromMycart(data._id)}
                      className="btn bg-red-500 hover:bg-red-600 text-white"
                    >
                      Delete <AiFillDelete className="font-bold text-xl" />{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <h2 className="text-center text-3xl font-bold p-20 text-blue-500">
            There is no cart item here
          </h2>
        </div>
      )}
    </div>
  );
};

export default Mycart;
