import React from "react";

const ProductsPage = async () => {
  const res = await fetch(`http://localhost:3000/api/items`, {
    cache: "force-cache"
  });
  const data = await res.json();

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
