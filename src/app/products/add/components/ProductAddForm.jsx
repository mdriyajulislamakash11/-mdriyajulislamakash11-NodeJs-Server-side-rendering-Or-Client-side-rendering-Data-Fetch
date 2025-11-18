"use client";

import { useRouter } from "next/navigation";



const ProductAddForm = () => {
    const route = useRouter();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const productName = form.productName.value;
    const payload = { productName };

    console.log(payload);

    const res = await fetch(`http://localhost:3000/api/items`, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
            "Content-type": "application/json"
        }
    })
    const result = await res.json();
    console.log(result);
    form.reset()
    route.push("/products")

  };

  return (
    <div className="max-w-md mx-auto mt-10 shadow-lg p-6 rounded-xl border">
      <h2 className="text-2xl font-semibold mb-5 text-center">
        Add New Product
      </h2>

      <form onSubmit={handleFormSubmit} className="space-y-4">
        
        <label className="block">
          <span className="text-sm font-medium">Product Name</span>
          <input
            type="text"
            placeholder="Enter Product Name"
            name="productName"
            className="border p-2 w-full mt-1 rounded focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />
        </label>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default ProductAddForm;
