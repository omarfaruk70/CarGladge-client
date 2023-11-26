import { Link, useLoaderData, useParams } from "react-router-dom";
import { AiFillEdit, AiFillEye } from "react-icons/ai";
import Sliders from "./Sliders";

const CategoryDetails = () => {
  const loadedData = useLoaderData();
  const { brand_name } = useParams();
  const specificData = loadedData.filter(
    (data) => data.brand_name == brand_name
  );
  return (
    <div className="bg-base-300 py-5">
      <div className="max-w-5xl py-5 mx-auto mb-5">
        <Sliders images={specificData?.map((data) => data.img)} />
      </div>
      <div className="my-10 mx-5 grid gap-5 grid-cols-1 md:grid-cols-2">
        {specificData && specificData.length > 0 ? (
          specificData.map((data) => (
            <div key={data._id}>
              <div>
                <div className="flex flex-col shadow-lg rounded-lg md:flex-col lg:flex-row">
                  <div className="md:w-96 md:h-60">
                  <img className=" h-full w-full  rounded-xl" src={data.img} alt="" />
                  </div>
                  <div className=" flex flex-row gap-x-5  m-5">
                  <div>
                    <p className="font-bold">Name: {data.name}</p>
                    <p className="font-bold">Brand: {data.brand_name}</p>
                    <p className="font-bold">Type: {data.type}</p>
                    <p className="font-bold">Price: {data.price} $</p>
                    <p className="font-bold">Ratings: {data.ratings}</p>
                  </div>
                    <div className="flex flex-col gap-5">
                     <Link to={`/categories/:brand_name/${data._id}`} className="btn bg-blue-500 hover:bg-blue-800 text-white"> <AiFillEye /></Link>
                     <Link to={`/updatedCar/:brand_name/${data._id}`} className="btn bg-green-500 hover:bg-green-800 text-white"> <AiFillEdit /></Link>
                    </div>
                  </div>
                </div>
               </div>
              </div>
          ))
        ) : (
          <p className="flex justify-center items-center">
            We appreciate your interest in our products and your continued
            support. Regrettably, we must inform you that the product you are
            looking for is currently unavailable. Our team is working diligently
            to restock and fulfill the demand for this item. We understand the
            inconvenience this may cause, and we sincerely apologize for any
            disappointment. We assure you that we are actively addressing the
            situation to expedite the replenishment of our inventory. In the
            meantime, we recommend exploring alternative products on our website
            or contacting our customer support team for assistance in finding a
            suitable alternative that meets your requirements. Please accept our
            sincere apologies for any inconvenience this may have caused. We
            value your business and appreciate your understanding as we work to
            resolve this matter promptly. If you have any further questions or
            if there is anything else we can assist you with, please feel free
            to reach out to our customer support team at customer support email
            or phone number. Thank you for your understanding and patience.
          </p>
        )}
      </div>
    </div>
  );
};

export default CategoryDetails;
