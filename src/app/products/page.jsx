import { redirect } from "next/navigation";
import React from "react";

const ProductsPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/items`, {
    cache: "force-cache",
  });

  const data = await res.json();

  // eta optional kore silam  data er length jodi 3 tar besi hoy tahole amk home page a niye jabe
  // if(data.length > 3){
  //   redirect("/")
  // }

  return (
    <div>
      <h1 className="text-center text-3xl font-bold mt-6">Product Name</h1>
      <div className="place-items-center mt-4">
        {data?.map((singleData) => {
          return <li key={singleData?._id}>{singleData?.productName}</li>;
        })}
      </div>
    </div>
  );
};

export default ProductsPage;
